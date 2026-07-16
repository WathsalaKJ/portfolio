export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__watermark" aria-hidden="true">
        {"SANDUNI".split("").map((letter, i) => (
          <span key={i} style={{ "--i": i } as React.CSSProperties}>
            {letter}
          </span>
        ))}
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/profile-cutout.png" alt="Sanduni Wathsala" />
        </div>
      </div>

      <div className="hero__name-badge">SANDUNI</div>
    </section>
  );
}
