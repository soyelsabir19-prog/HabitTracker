import { useNavigate } from "react-router-dom";
import "../styles/LegalPage.css";

export default function PrivacyPolicyPage() {
  const navigate = useNavigate();

  return (
    <div className="legal-wrapper">
      <div className="legal-card">

        <button className="close-btn" onClick={() => navigate("/")}>
          ✕
        </button>

        <h1>Privacy Policy</h1>

        <p>
          At Discountware, we value your privacy and are committed to protecting your personal information.
        </p>

        <h4>Information We Collect</h4>
        <p>
          We may collect your name and email address when you make a purchase.
        </p>

        <h4>Payment Security</h4>
        <p>
          All payments are securely processed through Razorpay. We do not store your card or banking information.
        </p>

        <h4>Data Usage</h4>
        <p>
          Your data is used strictly for order processing, product delivery, and customer support.
        </p>

        <h4>Contact</h4>
        <p>
          For privacy concerns, contact us at:
          <br />
          sabirinsight2004@gmail.com
        </p>

        <div className="legal-footer-note">
          Last updated: January 2026
        </div>

      </div>
    </div>
  );
}
