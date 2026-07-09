import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        Have a project in mind or just want to say hi? My inbox is always open.
      </p>

      <a href="mailto:hello@example.com" className="btn-primary footer__cta">
        Say Hello
      </a>

      <div className="footer__socials">
        <a href="#" aria-label="LinkedIn">LinkedIn</a>
        <a href="#" aria-label="GitHub">GitHub</a>
        <a href="#" aria-label="Instagram">Instagram</a>
      </div>

      <p className="footer__copyright">
        © {new Date().getFullYear()} Sanduni Wathsala · Design. Code. Create.
      </p>
    </footer>
  );
}
