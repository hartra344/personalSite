import numericQuantity from "numeric-quantity";
import { ActionFunction, json, redirect } from "remix";
import { authenticator } from "~/services/auth.server";
import { cloudinary } from "~/utils/cloudinary.server";
import { db } from "~/utils/db.server";
import queryString from 'query-string';
import url from 'url';
import { unauthorized, badRequest } from "remix-utils";

export const action: ActionFunction = async ({
    request,
}): Promise<Response> => {
    const url = new URL(request.url);
    const parsed = queryString.parse(url.search);
    const apiKey = parsed.apiKey;
    if (apiKey !== process.env.API_KEY) {
        throw unauthorized({ message: "invalid apiKey" });
    }


    let body = await request.json();
    if (body.notification_type !== 'upload') {
        return new Response(JSON.stringify({}), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    const name = body.original_filename;

    if (!name) {
        throw badRequest({ message: 'name not specified' })
    }
    const ex = await db.photo.findFirst({
        where: {
            name,
        },
    });

    if (ex) {
        throw badRequest({ message: 'name already exists' })
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
        throw badRequest({ message: 'name isn\'t in cloudinary' })
    }

    return new Response(JSON.stringify({}), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
};