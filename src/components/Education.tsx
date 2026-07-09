import "./Education.css";

type EducationItem = {
  period: string;
  title: string;
  place: string;
};

const EDUCATION: EducationItem[] = [
  {
    period: "2023 — Present",
    title: "BSc (Hons) in Information Technology",
    place: "Replace with your university",
  },
  {
    period: "2019 — 2022",
    title: "G.C.E. Advanced Level",
    place: "Replace with your school",
  },
];

export default function Education() {
  return (
    <section className="education" id="education">
      <h2 className="section-title">Education</h2>

      <div className="education__timeline">
        {EDUCATION.map((item) => (
          <div className="education__card" key={item.title}>
            <span className="education__period">{item.period}</span>
            <h3>{item.title}</h3>
            <p>{item.place}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
