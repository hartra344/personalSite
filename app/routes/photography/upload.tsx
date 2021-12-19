import numericQuantity from "numeric-quantity";
import { ActionFunction } from "remix";
import { cloudinary } from "~/utils/cloudinary.server";
import { db } from "~/utils/db.server";
import queryString from 'query-string';
import { unauthorized, badRequest } from "remix-utils";
import { appInsights } from '../../services/insights.server';
import { setTimeout } from "timers/promises";

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
    appInsights.defaultClient.trackEvent({ name: "cloudinary notification", properties: body });

    if (body.notification_type === 'upload') {
        await uploadImage(body);
    } else if (body.notification_type === 'delete') {
        await deleteImage(body);
    } else if (body.notification_type === 'rename') {
        await renameImage(body);
    }

    return new Response(JSON.stringify({}), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
};


const deleteImage = async (body: any) => {
    appInsights.defaultClient.trackEvent({ name: "photo upload", properties: body });

    const resources = body.resources;
    for (const resource of resources) {
        await db.photo.deleteMany({
            where: {
                name: resource.public_id,
            },
        });
    }


}


const renameImage = async (body: any) => {
    appInsights.defaultClient.trackEvent({ name: "photo upload", properties: body });

    const oldName = body.from_public_id;
    const newName = body.to_public_id

    await db.photo.updateMany({
        where: {
            name: oldName,
        },
        data: {
            name: newName
        }
    });

}

const uploadImage = async (body: any) => {

    appInsights.defaultClient.trackEvent({ name: "photo upload", properties: body });

    const name = body.public_id;

    if (!name) {
        appInsights.defaultClient.trackEvent({ name: 'upload failed', properties: { message: "name not specified" } })
        return;
    }
    const ex = await db.photo.findFirst({
        where: {
            name,
        },
    });

    if (ex) {
        appInsights.defaultClient.trackEvent({ name: 'upload failed', properties: { message: "name already exists" } })
        return;
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
    } catch (err: any) {
        appInsights.defaultClient.trackEvent({ name: 'upload failed', properties: { message: "name not in cloudinary" } });
        appInsights.defaultClient.trackException({ exception: err });
    }

}