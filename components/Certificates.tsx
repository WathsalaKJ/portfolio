import Image from "next/image";

type Certificate = {
  title: string;
  issuer: string;
  status: "Earned" | "In progress";
  image: string | null;
  issued?: string;
  credentialId?: string;
};

const CERTIFICATES: Certificate[] = [
  {
    title: "Python for Beginners",
    issuer: "University of Moratuwa (OpenUoM)",
    status: "Earned",
    image: null,
  },
  {
    title: "Web Design for Beginners",
    issuer: "University of Moratuwa (OpenUoM)",
    status: "Earned",
    image: null,
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "Earned",
    image: null,
  },
  {
    title: "Introduction to SQL",
    issuer: "Sololearn",
    status: "Earned",
    image: null,
    issued: "Mar 2025",
    credentialId: "CC-SS2IFE6T",
  },
  {
    title: "SQL Intermediate",
    issuer: "Sololearn",
    status: "Earned",
    image: null,
    issued: "Apr 2025",
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
            {certificate.status === "Earned" && (
              <div className="certificates__image">
                {certificate.image ? (
                  <Image
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                ) : (
                  <div
                    className="certificates__image-placeholder"
                    aria-label={`Image placeholder for ${certificate.title}`}
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 48 48"
                      fill="none"
                    >
                      <rect
                        x="9"
                        y="6"
                        width="30"
                        height="36"
                        rx="3"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M16 16h16M16 22h16M16 28h9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="m29 34 3 2 3-2v-7h-6v7Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>Certificate image</span>
                  </div>
                )}
              </div>
            )}
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
            {certificate.issued && (
              <p className="certificates__detail">
                Issued {certificate.issued}
              </p>
            )}
            {certificate.credentialId && (
              <p className="certificates__detail">
                Credential ID: {certificate.credentialId}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
