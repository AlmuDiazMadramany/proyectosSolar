// src/components/Footer.jsx
import '../styles/footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <p className="footer__brand">FreeEngineer</p>
      </div>

      <div className="footer__right">
        <a
          href="https://www.linkedin.com/in/%C3%A1lvaro-sepena-zabala-618a0b158/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__icon"
          aria-label="LinkedIn"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
