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
          resourceType={'image'} // optionally set with 'auto', 'image', 'video' or 'raw' -> default = 'auto'
          cloudName={'travisdevsite'} // your cloudinary account cloud name. 
          // Located on https://cloudinary.com/console/
          // uploadPreset={'preset1'} // check that an upload preset exists and check mode is signed or unisgned
          cropping={false} // set ability to crop images -> default = true
          onSuccess={(result) => { setImageName(result?.info?.public_id); setImageUrl(result?.info?.secure_url) }} // add success callback -> returns result
          onFailure={() => { }} // add failure callback -> returns 'response.error' + 'response.result'
          use_filename={true} // tell Cloudinary to use the original name of the uploaded 

          generateSignatureUrl={'http://localhost:3000/photography/generateSignature'} // pass the api 
          // endpoint for generating a signature -> check cloudinary docs and SDK's for signing uploads
          apiKey={+cloudinaryKey} // cloudinary API key -> number format
          accepts={'application/json'} // for signed uploads only -> default = 'application/json'
          contentType={'application/json'} // for signed uploads only -> default = 'application/json'
          withCredentials={true} // default = true -> check axios documentation for more information
          unique_filename={true} // setting it to false, you can tell Cloudinary not to attempt to make 
          multiple={false}
        // the Public ID unique, and just use the normalized file name -> default = true
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
