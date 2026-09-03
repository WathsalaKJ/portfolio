import Image from "next/image";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__watermark" aria-hidden="true">
        WATHSALA
      </div>

      <div className="about__inner">
        <div className="about__photo">
          <Image
            src="/profile.png"
            alt="Sanduni Wathsala"
            width={1254}
            height={1254}
          />
        </div>

        <div className="about__text">
          <p>
            I&apos;Motivated IT and Management undergraduate with hands-on experience in full-stack web development using modern 
                   technologies such as Python, Next.js, React, Node.js, Supabase, and MySQL. Skilled in building scalable applications 
                  with a strong focus on user experience and data management. Proven ability to collaborate in team environments and 
                   contribute to both frontend interfaces and backend logic. Passionate about creating impactful solutions and 
                  continuously learning new tools and frameworks.
          </p>
        
          <a href="/Sanduni_Wathsala_CV.pdf" download className="btn-primary">
            Grab My CV
          </a>
        </div>
      </div>
    </section>
  );
}
