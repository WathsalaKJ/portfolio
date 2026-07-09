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
        <a
          href="https://www.linkedin.com/in/sanduniwathsala"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/WathsalaKJ"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          GitHub
        </a>
      </div>

      <p className="footer__copyright">
        © {new Date().getFullYear()} Sanduni Wathsala · Design. Code. Create.
      </p>
    </footer>
  );
}
