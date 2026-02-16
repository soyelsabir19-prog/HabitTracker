import { useSearchParams } from "react-router-dom";
import "./PurchaseSuccessPage.css";

export default function PurchaseSuccessPage() {
  const [searchParams] = useSearchParams();

  const downloadProduct = () => {
    window.open(
      "/api/download-product",
      "_blank"
    );
  };

  return (
    <div className="success-page">
      <div className="success-card">
        <div className="success-icon">✓</div>
        <h2>Payment Successful!</h2>
        <p>
          Thank you for your purchase. Your product is ready.
        </p>

        <div className="button-group">
          <button type="button" onClick={downloadProduct}>
            Download Product PDF
          </button>
        </div>
      </div>
    </div>
  );
}
