import profile from "../assets/profile-placeholder.svg";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__watermark" aria-hidden="true">
        WATHSALA
      </div>

      <div className="about__inner">
        <div className="about__photo">
          <img src={profile} alt="Sanduni Wathsala" />
        </div>

        <div className="about__text">
          <p>
            I'm an IT undergraduate with a deep interest in web development,
            software engineering, and UI/UX design. My technical journey spans
            building responsive and scalable web applications, exploring
            frameworks, and working with both relational and NoSQL databases. I
            enjoy bridging design and functionality — crafting interfaces that
            are not only visually appealing but also intuitive and
            performance-driven.
          </p>
          <p>
            Alongside my tech projects, I bring creativity into digital design
            and custom artwork. Driven by innovation, problem-solving, and
            continuous learning, I'm passionate about exploring how technology
            and design can come together to create impactful real-world
            solutions.
          </p>
          <a href="#" className="btn-primary">
            Grab My CV
          </a>
        </div>
      </div>
    </section>
  );
}
