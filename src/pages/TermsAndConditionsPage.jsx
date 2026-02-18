import { useNavigate } from "react-router-dom";
import "../styles/LegalPage.css";

export default function TermsAndConditionsPage() {
  const navigate = useNavigate();

  return (
    <div className="legal-wrapper">
      <div className="legal-card">

        <button className="close-btn" onClick={() => navigate("/")}>
          ✕
        </button>

        <h1>Terms & Conditions</h1>

        <p>
          By accessing and purchasing from Discountware, you agree to these terms.
        </p>

        <h4>Digital Product</h4>
        <p>
          All products sold are digital and delivered electronically.
        </p>

        <h4>Usage Restrictions</h4>
        <p>
          Redistribution, resale, or unauthorized sharing is strictly prohibited.
        </p>

        <h4>Payments</h4>
        <p>
          Payments are securely handled by Razorpay. Access is granted only after successful payment.
        </p>

        <h4>Limitation of Liability</h4>
        <p>
          We are not responsible for indirect damages arising from product usage.
        </p>

        <div className="legal-footer-note">
          Last updated: January 2026
        </div>

      </div>
    </div>
  );
}
