import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import "./PurchaseSuccessPage.css";

export default function PurchaseSuccessPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [downloadStarted, setDownloadStarted] = useState(false);

  const downloadProduct = () => {
    setDownloadStarted(true);

    window.open(
      `/api/download-product?token=${token}`,
      "_blank"
    );
  };

  return (
    <div className="success-page">
      <div className="success-card">

        <div className="success-icon">✓</div>

        <h2>Payment Successful!</h2>

        {!downloadStarted ? (
          <>
            <p>
              Your premium product is ready for download.
            </p>

            <button className="primary-btn" onClick={downloadProduct}>
              Download Product
            </button>

            <p className="sub-note">
              Secure download • Instant access
            </p>
          </>
        ) : (
          <>
            <p className="download-confirmation">
              ✅ Your download has started.
              <br />
              Please check your device's Downloads folder.
            </p>

            <div className="button-group">
              <button
                className="secondary-btn"
                onClick={downloadProduct}
              >
                Download Again
              </button>

              <button
                className="primary-btn"
                onClick={() => window.location.href = "/"}
              >
                Go to Home
              </button>
            </div>

            <p className="sub-note">
              If your download didn’t start automatically,
              tap "Download Again".
            </p>
          </>
        )}

      </div>
    </div>
  );
}
