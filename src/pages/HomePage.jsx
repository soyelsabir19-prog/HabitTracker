import { useState } from "react";
import ProfileBadge from "../components/specific/ProfileBadge";
import ThumbnailSection from "../components/specific/ThumbnailSection";
import ScreenshotsSection from "../components/specific/ScreenshotsSection";
import WhatYouGetSection from "../components/specific/WhatYouGetSection";
import WhoItsForSection from "../components/specific/WhoItsForSection";
import PurchaseCard from "../components/specific/PurchaseCard";
import BuyModal from "../components/specific/BuyModal";
import Footer from "../components/specific/Footer";
import "./HomePage.css";

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ProfileBadge />

      <main className="homepage-container container my-5">
        <div className="card shadow-lg rounded-4 p-4 border-0">
          <div className="row g-4">

            {/* Left Content */}
            <div className="col-lg-8 left-column pe-lg-4">
              <div className="overflow-auto py-2">
                <ThumbnailSection />
                <WhatYouGetSection />
                <ScreenshotsSection/>
                <WhoItsForSection />
                <Footer />
              </div>
            </div>

            {/* Right Purchase Card */}
            <div className="col-lg-4 d-flex justify-content-center">
              <div
                className="position-sticky top-0"
                style={{ top: "20px", width: "100%" }}
              >
                <PurchaseCard onBuyClick={() => setOpen(true)} />
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Modal */}
      {open && <BuyModal onClose={() => setOpen(false)} />}
    </>
  );
}
