type Project = {
  title: string;
  description: string;
  emoji: string;
  thumbClass: string;
  technologies: string[];
  link: string;
};

const PROJECTS: Project[] = [
  {
    title: "Digital Employee Performance Management System (EPMS)",
    description:
      "A role-based performance management system for a logistics company across 25 countries — KPI evaluation, potential-assessment workflows, and a live bell-curve analytics engine scoped by a six-tier org hierarchy.",
    emoji: "📈",
    thumbClass: "thumb-a",
    technologies: ["Performance Management", "KPI Analytics"],
    link: "https://github.com/madhusiva19/pms/tree/dev-final",
  },
  {
    title: "EcoSync — Home Solar Panel Output Forecaster",
    description:
      "A solar-output forecasting platform with a live weather-data pipeline and a Random Forest model trained on real generation data, cutting prediction error from 38.8% to 14.4% MAPE.",
    emoji: "☀️",
    thumbClass: "thumb-b",
    technologies: ["Random Forest", "Weather Data", "Forecasting"],
    link: "https://github.com/PraneepaTharushini/EcoSync/tree/Development",
  },
  {
    title: "Snapense — AI-Powered Expense Tracker",
    description:
      "A full-stack mobile expense tracker with a vision-LLM pipeline that auto-extracts and categorizes receipts, plus scikit-learn anomaly detection for unusual spending.",
    emoji: "💸",
    thumbClass: "thumb-c",
    technologies: ["Mobile App", "Vision LLM", "scikit-learn"],
    link: "https://github.com/WathsalaKJ/snapense",
  },
  {
    title: "PureGuard — IoT-Based Museum Artifact Protection System",
    description:
      "An IoT and embedded-systems project pairing NodeMCU/Arduino hardware with a real-time Firebase cloud app for environmental monitoring and artifact security.",
    emoji: "🛡️",
    thumbClass: "thumb-d",
    technologies: ["IoT", "NodeMCU", "Firebase"],
    link: "https://pureguard-9c71a.web.app/",
  },
  {
    title: "SoulBalance — Wellness Blog Platform",
    description:
      "A full-stack wellness blog platform with authentication, blog CRUD via REST API, a rich-text editor with image upload, and a dual guest/authenticated rating system.",
    emoji: "🧘",
    thumbClass: "thumb-e",
    technologies: ["REST API", "Rich Text Editor", "Authentication"],
    link: "https://github.com/WathsalaKJ/wellness-blog",
  },
  {
    title: "This Portfolio",
    description:
      "This personal portfolio site, built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4.",
    emoji: "🌐",
    thumbClass: "thumb-f",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/WathsalaKJ/portfolio",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`projects__card projects__card--${index + 1}`}>
      <a
        className={`projects__thumb ${project.thumbClass}`}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title}`}
      >
        <span className="projects__thumb-index">
          PROJECT {String(index + 1).padStart(2, "0")}
        </span>
        <span className="projects__thumb-icon" aria-hidden="true">
          {project.emoji}
        </span>
        <span className="projects__thumb-glow" aria-hidden="true" />
      </a>
      <div className="projects__card-content">
        <div className="projects__card-heading">
          <h3>{project.title}</h3>
          <a
            className="projects__external"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.title}`}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H5v12h12v-6h2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
            </svg>
          </a>
        </div>
        <ul className="projects__technologies" aria-label="Technologies">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <p>{project.description}</p>
      </div>
    </article>
  );
}

export default function Projects() {
  const leftProjects = PROJECTS.filter((_, index) => index % 2 === 1);
  const rightProjects = PROJECTS.filter((_, index) => index % 2 === 0);

  return (
    <section className="projects" id="projects">
      <div className="projects__layout">
        <div className="projects__column projects__column--left">
          <div className="projects__intro">
            <h2>Showcasing some of my creative work.</h2>
            <p>Here are some projects I&apos;ve worked on.</p>
            <a
              href="https://github.com/WathsalaKJ"
              target="_blank"
              rel="noopener noreferrer"
              className="projects__archive"
            >
              View archive <span aria-hidden="true">→</span>
            </a>
          </div>
          {leftProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={PROJECTS.indexOf(project)}
            />
          ))}
        </div>

        <div className="projects__column projects__column--right">
          {rightProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={PROJECTS.indexOf(project)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
