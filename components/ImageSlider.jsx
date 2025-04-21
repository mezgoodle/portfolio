import React, { useState } from "react";
import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const ImageSlider = ({ images, altTextPrefix }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!images || images.length === 0) {
    return (
      <div aria-live="polite" role="status">
        No images available.
      </div>
    );
  }

  return (
    <div className="position-relative text-center">
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <Image
          src={images[currentIndex]}
          alt={`${altTextPrefix} - Image ${currentIndex + 1}`}
          className="img-fluid"
          width={800}
          height={600}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "auto",
            maxHeight: "80vh",
          }}
          priority={currentIndex === 0}
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="btn btn-dark position-absolute top-50 start-0 translate-middle-y m-2"
            onClick={goToPrevious}
            style={{ zIndex: 1 }}
            aria-label="Previous image"
          >
            <IoChevronBack size={24} color="white" />
          </button>

          <button
            type="button"
            aria-label="Next image"
            className="btn btn-dark position-absolute top-50 end-0 translate-middle-y m-2"
            onClick={goToNext}
            style={{ zIndex: 1 }}
          >
            <IoChevronForward size={24} color="white" />
          </button>
        </>
      )}

      {images.length > 1 && (
        <div
          className="position-absolute bottom-0 start-50 translate-middle-x mb-2 bg-dark bg-opacity-50 px-2 py-1 rounded"
          aria-live="polite"
          role="status"
        >
          <span className="text-white">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
