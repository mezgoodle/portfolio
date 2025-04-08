"use client";

import React, { useEffect } from "react";
import ImageSlider from "./ImageSlider";

interface CustomImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  gameName: string;
}

const CustomImageModal: React.FC<CustomImageModalProps> = ({
  isOpen,
  onClose,
  images,
  gameName,
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="backdropStyle"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="imageModalTitle"
    >
      <div
        className="modalStyle bg-light rounded p-3"
        onClick={(e) => e.stopPropagation()}
      >
        <h5 id="imageModalTitle" className="visually-hidden">
          {gameName} Image Gallery
        </h5>

        <button
          type="button"
          className="btn-close position-absolute top-0 end-0 m-2 p-2 bg-white rounded-circle"
          aria-label="Close"
          onClick={onClose}
          style={{ zIndex: 10 }}
        ></button>

        <ImageSlider images={images} altTextPrefix={gameName} />
      </div>
    </div>
  );
};

export default CustomImageModal;
