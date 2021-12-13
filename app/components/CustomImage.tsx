import { Photo } from ".prisma/client";
import { Cloudinary } from "@cloudinary/url-gen";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import React from "react";
import { RenderImageProps } from "react-photo-gallery";
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
const imgStyle = {
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s",
};
const cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative" as any,
  left: undefined as any,
  top: undefined as any,
};

export interface CustomImageProps extends Photo {
  lgHeight: number;
  lgWidth: number;
}
const CustomImage: React.ComponentType<RenderImageProps<CustomImageProps>> = ({
  photo,
  margin,
  direction,
  top,
  left,
}) => {
  if (direction === "column") {
    cont.position = "absolute";
    cont.left = left;
    cont.top = top;
  }
  const cld = new Cloudinary({
    cloud: {
      cloudName: "travisdevsite",
    },
  });
  const cameraModel = photo.cameraModel === "ILCE-1" ? "a1" : photo.cameraModel;
  const shutterSpeed = photo.shutterSpeed?.endsWith("/1")
    ? photo.shutterSpeed.split("/")[0]
    : photo.shutterSpeed;
  return (
    <a
      key={photo.id}
      data-lg-size={`${photo.lgWidth}-${photo.lgHeight}`} //"1406-1390"
      className="gallery-item"
      data-src={photo.src}
      data-sub-html={`<h4>${toTitleCase(photo.artist)}</h4><p>${
        photo.cameraMake
      } ${cameraModel} </p><p> ${photo.lens}</p><p>${photo.focalLength}mm | ${
        photo.shutterSpeed
      }s | f${photo.fstop} | ${photo.iso} iso</p> `}
      style={{ margin, height: photo.height, width: photo.width, ...cont }}
    >
      <img
        loading="lazy"
        alt={photo.name}
        src={cld
          .image(photo.name)
          .resize(
            thumbnail()
              .width(Math.floor(photo.width))
              .height(Math.floor(photo.height))
          )
          .quality(100)
          .toURL()}
      />
    </a>
  );
};

export default CustomImage;
