import { useNavigate } from "react-router-dom";
import "../styles/LegalPage.css";

export default function RefundPolicyPage() {
  const navigate = useNavigate();

  return (
    <div className="legal-wrapper">
      <div className="legal-card">

        <button className="close-btn" onClick={() => navigate("/")}>
          ✕
        </button>

        <h1>Refund Policy</h1>

        <p>
          Due to the nature of digital products, all sales are final.
        </p>

        <h4>No Refunds</h4>
        <p>
          Once the product has been downloaded, refunds cannot be issued.
        </p>

        <h4>Duplicate Payments</h4>
        <p>
          In case of duplicate charges, refunds will be processed after verification.
        </p>

        <h4>Support</h4>
        <p>
          For technical issues, contact:
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
