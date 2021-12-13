import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import Photo, { PhotoPropTypes } from "./Photo";
import { computeColumnLayout } from "./layouts/columns";
import { computeRowLayout } from "./layouts/justified";
import { findIdealNodeSearch } from "./utils/findIdealNodeSearch";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Gallery = React.memo(function Gallery({
  photos,
  onClick,
  direction = "row",
  margin = 2,
  limitNodeSearch,
  targetRowHeight = 300,
  columns,
  renderImage,
}: GalleryPropTypes) {
  const [containerWidth, setContainerWidth] = useState(0);
  const galleryEl = useRef(null);

  useEffect(() => {
    let animationFrameID: any = null;
    const observer = new ResizeObserver((entries) => {
      // only do something if width changes
      const newWidth = entries[0].contentRect.width;
      if (containerWidth !== newWidth) {
        // put in an animation frame to stop "benign errors" from
        // ResizObserver https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded
        animationFrameID = window.requestAnimationFrame(() => {
          setContainerWidth(Math.floor(newWidth));
        });
      }
    });
    observer.observe(galleryEl.current as any);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrameID);
    };
  });

  const handleClick = (event: any, { index }: any) => {
    onClick(event, {
      index,
      photo: photos[index],
      previous: photos[index - 1] || null,
      next: photos[index + 1] || null,
    });
  };

  // no containerWidth until after first render with refs, skip calculations and render nothing
  if (!containerWidth) return <div ref={galleryEl}>&nbsp;</div>;
  // subtract 1 pixel because the browser may round up a pixel
  const width = containerWidth - 1;
  let galleryStyle: any, thumbs: any;

  if (direction === "row") {
    // allow user to calculate limitNodeSearch from containerWidth
    if (typeof limitNodeSearch === "function") {
      limitNodeSearch = limitNodeSearch(containerWidth);
    }
    if (typeof targetRowHeight === "function") {
      targetRowHeight = targetRowHeight(containerWidth);
    }
    // set how many neighboring nodes the graph will visit
    if (limitNodeSearch === undefined) {
      limitNodeSearch = 2;
      if (containerWidth >= 450) {
        limitNodeSearch = findIdealNodeSearch({
          containerWidth,
          targetRowHeight,
        });
      }
    }

    galleryStyle = { display: "flex", flexWrap: "wrap", flexDirection: "row" };
    thumbs = computeRowLayout({
      containerWidth: width,
      limitNodeSearch,
      targetRowHeight,
      margin,
      photos,
    });
  }
  if (direction === "column") {
    // allow user to calculate columns from containerWidth
    if (typeof columns === "function") {
      columns = columns(containerWidth);
    }
    // set default breakpoints if user doesn't specify columns prop
    if (columns === undefined) {
      columns = 1;
      if (containerWidth >= 500) columns = 2;
      if (containerWidth >= 900) columns = 3;
      if (containerWidth >= 1500) columns = 4;
    }
    galleryStyle = { position: "relative" };
    thumbs = computeColumnLayout({
      containerWidth: width,
      columns,
      margin,
      photos,
    });
    galleryStyle.height = thumbs[thumbs.length - 1].containerHeight;
  }

  const renderComponent = renderImage || Photo;
  return (
    <div className="react-photo-gallery--gallery">
      <div ref={galleryEl} style={galleryStyle}>
        <LightGallery
          plugins={[lgThumbnail, lgZoom]}
          mode="lg-fade"
          licenseKey="9DFC44F2-0E4543E3-83FD2640-996B2792"
        >
          {thumbs.map((thumb: any, index: any) => {
            const { left, top, containerHeight, ...photo } = thumb;
            return renderComponent({
              left,
              top,
              key: thumb.key || thumb.src,
              containerHeight,
              index,
              margin,
              direction,
              onClick: onClick ? handleClick : null,
              photo,
            });
          })}
        </LightGallery>
      </div>
    </div>
  );
});

export interface GalleryPropTypes {
  photos: PhotoPropTypes[];
  direction?: string;
  onClick?: any;
  columns?: any;
  targetRowHeight?: any;
  limitNodeSearch?: any;
  margin?: number;
  renderImage?: any;
}
// Gallery.propTypes = {
//   photos: PropTypes.arrayOf(photoPropType).isRequired,
//   direction: PropTypes.string,
//   onClick: PropTypes.func,
//   columns: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
//   targetRowHeight: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
//   limitNodeSearch: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
//   margin: PropTypes.number,
//   renderImage: PropTypes.func,
// };

export { Photo };
export default Gallery;
