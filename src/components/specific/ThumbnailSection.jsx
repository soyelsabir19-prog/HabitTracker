import thumb from "../../assets/images/thumbnail.png";
import "./ThumbnailSection.css";

export default function ThumbnailSection() {
  return (
    <section className="thumbnail-section py-5 text-center">
      <div className="container">
        {/* Title */}
        <h1 className="display-4 fw-bold main-title mb-4">
          Monthly Habit Tracker
        </h1>

        {/* Big thumbnail */}
        <div className="thumbnail-image mb-4 d-flex justify-content-center">
          <img
            src={thumb}
            alt="Habit Tracker Thumbnail"
            className="img-fluid rounded shadow-lg hero-thumb"
          />
        </div>

        {/* Subtitle / description */}
        <p className="lead subtitle mx-auto" style={{ maxWidth: "720px" }}>
          Build better habits. Track real progress.<br />
          A simple Google Sheets tracker + free printable habit tracker.<br />
          No apps. No subscriptions. Just consistency that works.<br />
          Start building better habits today.
        </p>
      </div>
    </section>
  );
}
