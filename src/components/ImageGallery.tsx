import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/plugins/thumbnails.css";

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

  return (
    <Lightbox
      open={isOpen}
      close={close}
      slides={slides}
      plugins={[Fullscreen, Thumbnails, Zoom]}
      zoom={{ scrollToZoom: true, maxZoomPixelRatio: 2 }}
      thumbnails={{
        border: 0,
        borderColor: "#1f2937",
        borderRadius: 4,
        padding: 8,
        gap: 16,
      }}
    />
  );
}
