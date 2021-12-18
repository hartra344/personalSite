import {
  ActionFunction,
  Form,
  Link,
  LoaderFunction,
  MetaFunction,
  redirect,
  useActionData,
  useCatch,
} from "remix";
import { db } from "../../utils/db.server";
import { cloudinary } from "../../utils/cloudinary.server";
import numericQuantity from "numeric-quantity";
import { authenticator } from "~/services/auth.server";
type ActionData = {
  fieldErrors?: {
    name: string | undefined;
  };
};

export let meta: MetaFunction = () => {
  return {
    title: "Travis Harris - Add Photo",
  };
};

export let loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  return {};
};

export const action: ActionFunction = async ({
  request,
}): Promise<Response | ActionData> => {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  const form = await request.formData();

  const name = form.get("name") as string;
  if (!name) {
    return {
      fieldErrors: {
        name: "Name is required",
      },
    };
  }
  const ex = await db.photo.findFirst({
    where: {
      name,
    },
  });

  if (ex) {
    return {
      fieldErrors: {
        name: `${name} already exists`,
      },
    };
  }

  try {
    const rs = await cloudinary.api.resource(name, { exif: true });
    await db.photo.create({
      data: {
        name: name,
        caption: "",
        width: rs?.width ?? 0,
        height: rs?.height ?? 0,
        artist: rs?.exif?.Artist ?? "",
        shutterSpeed: rs?.exif?.ExposureTime ?? "0",
        focalLength: rs?.exif?.FocalLengthIn35mmFilm ?? "0",
        fstop: numericQuantity(rs?.exif?.FNumber ?? "0"),
        lens: rs?.exif?.LensModel ?? "",
        cameraMake: rs?.exif?.Make ?? "",
        cameraModel: rs?.exif?.Model ?? "",
        iso: +rs?.exif?.PhotographicSensitivity ?? 0,
      },
    });
  } catch (err) {
    return {
      fieldErrors: {
        name: `${name} isn't in cloudinary`,
      },
    };
  }

  return redirect(`/photography`);
};

export default function AddPhotoRoute() {
  const actionData = useActionData<ActionData>();
  return (
    <Form method="post">
      <h1>Add Photo</h1>
      <div>
        <label>
          Name:{" "}
          <input
            type="text"
            defaultValue={actionData?.fieldErrors?.name}
            name="name"
            aria-invalid={Boolean(actionData?.fieldErrors?.name) || undefined}
            aria-describedby={
              actionData?.fieldErrors?.name ? "name-error" : undefined
            }
          />
        </label>
        {actionData?.fieldErrors?.name ? (
          <p className="form-validation-error" role="alert" id="name-error">
            {actionData.fieldErrors.name}
          </p>
        ) : null}
      </div>
      <div>
        <button type="submit" className="button">
          Add
        </button>
      </div>
    </Form>
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
