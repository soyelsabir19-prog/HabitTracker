import ProfileBadge from "../components/specific/ProfileBadge";
import ThumbnailSection from "../components/specific/ThumbnailSection";
import ScreenshotsSection from "../components/specific/ScreenshotsSection";
import WhatYouGetSection from "../components/specific/WhatYouGetSection";
import WhoItsForSection from "../components/specific/WhoItsForSection";
import PurchaseCard from "../components/specific/PurchaseCard";
import Footer from "../components/specific/Footer";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      {/* Top Profile Badge */}
      <ProfileBadge />

      {/* Main landing page container */}
      <main className="homepage-container container my-5">
        {/* Outer card with shadow for premium feel */}
        <div className="card shadow-lg rounded-4 p-4 border-0">
          <div className="row g-4">

            {/* Left scrollable content */}
            <div className="col-lg-8 left-column pe-lg-4">
              <div className="overflow-auto py-2">
                <ThumbnailSection />
                <WhatYouGetSection />
                <WhoItsForSection />
                 {/* Footer */}
      <Footer />
              </div>
            </div>

            {/* Right sticky purchase card */}
            <div className="col-lg-4 d-flex justify-content-center">
              <div className="position-sticky top-0" style={{ top: "20px", width: "100%" }}>
                <PurchaseCard />
              </div>
            </div>

          </div>
        </div>
      </main>

     
    </>
  );
}
