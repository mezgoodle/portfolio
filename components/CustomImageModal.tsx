"use client";

import React, { useEffect } from "react";
import ImageSlider from "./ImageSlider";
import { IoClose } from "react-icons/io5";

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
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
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
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="imageModalTitle"
      tabIndex={0}
    >
      <div
        className="modalStyle bg-light rounded p-3"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <h5 id="imageModalTitle" className="visually-hidden">
          {gameName} Image Gallery
        </h5>

        <button
          type="button"
          className="btn btn-light bg-white rounded-circle position-absolute top-0 end-0 m-2 p-1 lh-1 border-0 shadow-sm"
          aria-label="Close"
          onClick={onClose}
          style={{ zIndex: 10 }}
        >
          <IoClose size={28} />
        </button>

        <ImageSlider images={images} altTextPrefix={gameName} />
      </div>
    </div>
  );
};

export default CustomImageModal;
