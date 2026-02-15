import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1 footer-text">
          © 2026 <strong>Discoutware</strong>. All rights reserved.
        </p>

        <p className="mb-0 footer-text">
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
