import Image from "next/image";

type EducationItem = {
  period: string;
  title: string;
  place: string;
  logo: string;
};

const EDUCATION: EducationItem[] = [
  {
    period: "2024 - Present",
    title: "BSc (Hons) in Information Technology & Management",
    place: "University of Moratuwa",
    logo: "/University_of_Moratuwa_logo.png",
  },
  {
    period: "2013 - 2022",
    title: "G.C.E. Advanced Level (Physical Science Stream)",
    place: "Badulla Central College",
    logo: "/badulla central collage logo.png",
  },
];

export default function Education() {
  return (
    <section className="education" id="education">
      <h2 className="section-title">Education</h2>

      <div className="education__timeline">
        {EDUCATION.map((item) => (
          <div className="education__card" key={item.title}>
            <Image
              className="education__logo"
              src={item.logo}
              alt={`${item.place} logo`}
              width={160}
              height={160}
            />
            <div className="education__details">
              <span className="education__period">{item.period}</span>
              <h3>{item.title}</h3>
              <p>{item.place}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
