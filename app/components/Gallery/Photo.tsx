const imgWithClick = { cursor: "pointer" };

export interface PhotoPropTypes {
  index: number;
  onClick: any;
  margin: number;
  direction: string;
  top: number;
  left: number;
  key?: string;
  photo: {
    key?: string;
    src: string;
    width: number;
    height: number;
    alt?: string;
    title?: string;
    srcSet?: string;
    sizes?: string;
  };
}

const Photo = ({
  index,
  onClick,
  photo,
  margin,
  direction,
  top,
  left,
  key,
}: PhotoPropTypes) => {
  const imgStyle: any = { margin: margin, display: "block" };
  if (direction === "column") {
    imgStyle.position = "absolute";
    imgStyle.left = left;
    imgStyle.top = top;
  }

  const handleClick = (event: any) => {
    onClick(event, { photo, index });
  };

  return (
    <img
      key={key}
      style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
      {...photo}
      onClick={onClick ? handleClick : undefined}
    />
  );
};

export default Photo;
