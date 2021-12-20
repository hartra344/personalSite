import { LoaderFunction } from "remix";
import { cloudinary } from "~/utils/cloudinary.server";
import queryString from 'query-string';

export const loader: LoaderFunction = async ({
    request,
}): Promise<Response> => {
    const url = new URL(request.url);
    const parsed = queryString.parse(url.search);
    const paramsToParse = JSON.parse(parsed?.params_to_sign as string ?? "")
    const signature = cloudinary.utils.api_sign_request(
        paramsToParse
        , process.env.CLOUDINARY_SECRET ?? '');

    return new Response(signature, {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
};