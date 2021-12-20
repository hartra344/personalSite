import {
  ActionFunction,
  Form,
  Link,
  LoaderFunction,
  MetaFunction,
  redirect,
  useCatch,
  useLoaderData,
  useTransition,
} from "remix";
import "regenerator-runtime/runtime.js";
import { WidgetLoader, Widget } from '@pointblankdev/react-cloudinary-upload';
import { authenticator } from "~/services/auth.server";
import { useState } from "react";
import { cloudinary } from "~/utils/cloudinary.server";
import { db } from "~/utils/db.server";
import ReactLoading from 'react-loading';

export let meta: MetaFunction = () => {
  return {
    title: "Travis Harris - Add Photo",
  };
};

export let loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  const cloudinaryKey = process.env.CLOUDINARY_KEY
  return { cloudinaryKey };
};

export const action: ActionFunction = async ({
  request,
}): Promise<Response> => {
  const formData = await request.formData();

  const imageName = formData.get('imageName');
  const caption = formData.get('caption');
  const alt = formData.get('alt');
  await cloudinary.uploader.add_context(`alt=${alt}`, [imageName as string ?? '']);
  await cloudinary.uploader.add_context(`caption=${caption}`, [imageName as string ?? '']);

  let img: any = null;
  while (!img) {
    await new Promise(resolve => setTimeout(resolve, 9000));
    img = await db.photo.findUnique({
      where: {
        name: imageName as string ?? ''
      }
    });

  };

  return redirect('/photography');
}

export default function AddPhotoRoute() {
  const { cloudinaryKey } = useLoaderData();
  const [imageName, setImageName] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>();
  const transition = useTransition();
  if (transition.submission) {
    return <div style={{ display: 'grid', placeItems: 'center' }}><ReactLoading type="spin" color="blue" height={'30%'} width={'30%'} /></div>
  }
  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '100%' }}>
      {!imageName && (<><WidgetLoader />
        <Widget
          sources={['local']}
          resourceType={'image'} 
          cloudName={'travisdevsite'} 
          onSuccess={(result) => { setImageName(result?.info?.public_id); setImageUrl(result?.info?.secure_url) }} 
          onFailure={() => { }} 
          use_filename={true} 

          generateSignatureUrl={'/photography/generateSignature'} 
          apiKey={+cloudinaryKey} 
          accepts={'application/json'} 
          contentType={'application/json'} 
          withCredentials={true} 
          unique_filename={true} 
          multiple={false}
        /></>)}

      {
        imageName && <Form method="post">
          <img height={300} width={300} src={imageUrl ?? ''} />
          <input type="hidden" id="imageName" name="imageName" value={imageName}></input>
          <p>
            <label>
              Photo Caption: <input type="text" name="caption" />
            </label>
          </p>
          <p>
            <label>
              Post Alt Description: <input type="text" name="alt" />
            </label>
          </p>
          <p>
            <button type="submit">Update Info</button>
          </p>
        </Form>
      }
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 401) {
    return (
      <div className="error-container">
        <p>You must be logged in to create a joke.</p>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <div className="error-container">
      Something unexpected went wrong. Sorry about that.
    </div>
  );
}
