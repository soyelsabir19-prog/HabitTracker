import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer py-4 mt-5">
      <div className="container text-center">

        <p className="mb-2 footer-text">
          © 2026 <strong>Discountware</strong>. All rights reserved.
        </p>

        <div className="footer-links mb-2">
          <Link to="/privacy-policy" className="footer-link">
            Privacy Policy
          </Link>

          <span className="separator">|</span>

          <Link to="/terms-and-conditions" className="footer-link">
            Terms & Conditions
          </Link>

          <span className="separator">|</span>

          <Link to="/refund-policy" className="footer-link">
            Refund Policy
          </Link>
        </div>

        <p className="footer-text">
          Contact:&nbsp;
          <a
            href="mailto:sabirinsight2004@gmail.com"
            className="footer-link"
          >
            sabirinsight2004@gmail.com
          </a>
        </p>

      </div>
    </footer>
  );
}
