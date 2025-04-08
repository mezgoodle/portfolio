"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
  altTextPrefix: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, altTextPrefix }) => {
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
    return <div>No images available.</div>;
  }

  return (
    <div className="position-relative text-center">
      <div style={{ width: "100%", height: "60vh", position: "relative" }}>
        <Image
          src={images[currentIndex]}
          alt={`${altTextPrefix} - Image ${currentIndex + 1}`}
          width={500}
          height={300}
          objectFit="contain"
          priority={false}
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            className="btn btn-dark position-absolute top-50 start-0 translate-middle-y m-2"
            onClick={goToPrevious}
            style={{ zIndex: 1 }}
          >
            &lt;
          </button>

          <button
            className="btn btn-dark position-absolute top-50 end-0 translate-middle-y m-2"
            onClick={goToNext}
            style={{ zIndex: 1 }}
          >
            &gt;
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-2 bg-dark bg-opacity-50 px-2 py-1 rounded">
          <span className="text-white">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
