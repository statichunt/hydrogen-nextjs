import { useState } from "react";
import { Gallery as ImageGallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

// get all images from gallery folder
function importAll(r) {
  return r.keys().map(r);
}

const getImagesFromFolder = () => {
  const images = importAll(
    require.context("/public/images/gallery", false, /\.(png|jpe?g|svg)$/)
  );
  return images;
};

function Gallery() {
  //local state
  const [index, setIndex] = useState(-1);

  //Gallery images
  const images = [...new Set(getImagesFromFolder())].map((module) => {
    const paths = module.default.src.split("/");
    const filename = paths[paths.length - 1].replace(/\.([^\.]+)\./, ".");
    return { src: `/images/gallery/${filename}` };
  });

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div className="gallery">
      <ImageGallery
        enableImageSelection={false}
        images={images}
        rowHeight={294}
        onClick={handleClick}
      />
      {!!currentImage && (
        /* @ts-ignore */
        <Lightbox
          mainSrc={currentImage.src}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.src}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.src}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  );
}

export default Gallery;
