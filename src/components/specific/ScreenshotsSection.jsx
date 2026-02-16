import { useState } from "react";
import ScreenshotModal from "../common/ScreenshotModal";
import shot1 from "../../assets/images/img 1.png";
import shot2 from "../../assets/images/img 2.png";
import shot3 from "../../assets/images/img 3.png";
import shot4 from "../../assets/images/img 4.png";
import shot5 from "../../assets/images/img 5.png";

import "./ScreenshotsSection.css";

export default function ScreenshotsSection() {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const images = [shot1, shot2, shot3, shot4, shot5];

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
