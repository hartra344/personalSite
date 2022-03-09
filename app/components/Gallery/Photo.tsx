import React from "react";
import { RenderImageProps } from "react-photo-gallery";
import { twitterTag } from "../Global/globals";

const cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative" as any,
  left: undefined as any,
  top: undefined as any,
};

export interface PhotoProps {
  alt: string;
  score?: number;
  name: string;
  file: string;
  caption: string;
  createdAt: number;
  width: number;
  height: number;
  artist: string;
  shutterSpeed: string;
  focalLength: string;
  fstop: number;
  lens: string;
  cameraMake: string;
  cameraModel: string;
  iso: number;
}
const Photo: React.ComponentType<RenderImageProps<PhotoProps>> = ({
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
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      key={photo.name}
      data-lg-size={`${photo.width * 2}-${photo.height * 2}`}
      data-slide-name={photo.name}
      data-tweet-text={`${photo.caption} - by ${twitterTag}`}
      data-pinterest-text={`${photo.caption} - by Travis Harris`}
      data-facebook-text={`${photo.caption} - by Travis Harris`}
      className="gallery-item"
      data-src={`photos/${photo.file}`}
      data-sub-html={`<h4 style="color:#eee"> Travis Harris ${
        photo.caption ? `- ${photo.caption}` : ""
      }</h4><p>${photo.cameraMake} ${photo.cameraModel} </p><p> ${
        photo.lens
      }</p><p>${photo.focalLength}mm | ${photo.shutterSpeed}s | f${
        photo.fstop
      } | ${photo.iso} iso</p> `}
      style={{ margin, height: photo.height, width: photo.width, ...cont }}
    >
      <img src={`photos/${photo.file}`} alt={photo.caption} />
    </a>
  );
};

export default Photo;
