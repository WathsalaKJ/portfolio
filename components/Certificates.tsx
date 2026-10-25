type Certificate = {
  title: string;
  issuer: string;
  status: "Earned" | "In progress";
};

const CERTIFICATES: Certificate[] = [
  {
    title: "Python for Beginners",
    issuer: "University of Moratuwa (OpenUoM)",
    status: "Earned",
  },
  {
    title: "Web Design for Beginners",
    issuer: "University of Moratuwa (OpenUoM)",
    status: "Earned",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "In progress",
  },
];

export default function Certificates() {
  return (
    <section className="certificates" id="certificates">
      <h2 className="section-title">Certificates</h2>
      <p className="section-subtitle">
        Certifications and professional learning listed on my CV.
      </p>

      <div className="certificates__grid">
        {CERTIFICATES.map((certificate) => (
          <article className="certificates__card" key={certificate.title}>
            <div className="certificates__top">
              <span className="certificates__mark" aria-hidden="true">
                {certificate.status === "Earned" ? "✓" : "↗"}
              </span>
              <span
                className={`certificates__status${certificate.status === "In progress" ? " is-in-progress" : ""}`}
              >
                {certificate.status}
              </span>
            </div>
            <h3>{certificate.title}</h3>
            <p>{certificate.issuer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
