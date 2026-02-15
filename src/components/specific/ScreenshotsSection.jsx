import { useState } from "react";
import ScreenshotModal from "../common/ScreenshotModal";
import shot1 from "../../assets/images/thumbnail.png";
import "./ScreenshotsSection.css";

export default function ScreenshotsSection() {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const images = [shot1, shot1, shot1, shot1];

  return (
    <section className="screenshots-section">
      <h2>Screenshots</h2>
      <div className="shots">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Screenshot ${idx+1}`}
            onClick={() => { setStartIndex(idx); setOpen(true); }}
          />
        ))}
      </div>

      {open && (
        <ScreenshotModal
          images={images}
          startIndex={startIndex}
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  );
}
