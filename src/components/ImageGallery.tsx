import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ImageGalleryProps {
  isOpen: boolean;
  close: () => void;
  images: string[];
}

export default function ImageGallery({
  isOpen,
  close,
  images,
}: ImageGalleryProps) {
  const slides = images.map((src) => ({ src }));

  return <Lightbox open={isOpen} close={close} slides={slides} />;
}
