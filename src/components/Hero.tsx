import profile from "../assets/profile-placeholder.svg";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__watermark" aria-hidden="true">
        SANDUNI
      </div>

      <div className="hero__content">
        <div className="hero__tagline">
          <span className="hero__tagline-line" />
          <div>
            <p className="hero__tag-1">
              <strong>Software</strong> Enthusiast
            </p>
            <p className="hero__tag-2">Software Developer</p>
            <p className="hero__tag-3">Design. Code. Create.</p>
          </div>
        </div>

        <div className="hero__photo">
          <img src={profile} alt="Sanduni Wathsala" />
        </div>
      </div>

      <div className="hero__name-badge">SANDUNI</div>
    </section>
  );
}
