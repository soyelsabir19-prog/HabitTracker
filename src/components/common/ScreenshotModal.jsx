import { useState } from "react";
import "./ScreenshotModal.css";

export default function ScreenshotModal({ images, startIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const prev = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  const next = () => setCurrentIndex((currentIndex + 1) % images.length);

  return (
    <div
      className="modal-overlay d-flex align-items-center justify-content-center"
      onClick={onClose}
    >
      <div
        className="modal-content bg-white rounded-4 shadow-lg p-3 p-md-4 d-flex flex-column align-items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="btn-close modal-close position-absolute top-0 end-0 m-3"
          onClick={onClose}
        ></button>

        {/* Main Image with arrows */}
        <div className="image-container w-100 d-flex align-items-center justify-content-center position-relative">
          <button className="btn nav-arrow left" onClick={prev}>
            ‹
          </button>

          <img
            src={images[currentIndex]}
            alt={`Screenshot ${currentIndex + 1}`}
            className="modal-image img-fluid rounded mx-3"
          />

          <button className="btn nav-arrow right" onClick={next}>
            ›
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="d-flex justify-content-center mt-3 overflow-auto thumbnail-strip flex-nowrap">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumb ${idx + 1}`}
              className={`thumbnail-img rounded me-2 ${
                idx === currentIndex
                  ? "active-thumb border border-primary"
                  : "border border-light"
              }`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
