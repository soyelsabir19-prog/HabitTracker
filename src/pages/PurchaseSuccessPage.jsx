import { useSearchParams } from "react-router-dom";
import "./PurchaseSuccessPage.css";

export default function PurchaseSuccessPage() {
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");
  const downloadProduct = () => {
    window.open(
      `http://localhost:5000/download-product?token=${token}`,
      "_blank"
    );

     // Optional: wait a short moment to ensure download starts
  setTimeout(() => {
    // Redirect to home page after starting download
    window.location.href = "/";
  }, 1000); // 1 second delay
  };


  return (
    <div className="success-page">
      <div className="success-card">
        <div className="success-icon">✓</div>
        <h2>Payment Successful!</h2>
        <p>
          Thank you for your purchase. Your product and receipt are ready.
        </p>

        <div className="button-group">
          <button onClick={downloadProduct}>
            Download Product PDF
          </button>

        </div>
      </div>
    </div>
  );
}
