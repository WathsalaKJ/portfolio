"use client";

import { useRef } from "react";

type Project = {
  title: string;
  description: string;
  emoji: string;
  thumbClass: string;
  link?: string;
};

const PROJECTS: Project[] = [
  // TODO: add link
  {
    title: "Report Analysis System",
    description:
      "A comprehensive data analytics platform delivering detailed insights on sales, orders, and customer behaviour for an e-commerce platform.",
    emoji: "📊",
    thumbClass: "thumb-a",
  },
  // TODO: add link
  {
    title: "Healthcare Platform",
    description:
      "A full-stack care platform designed for patients, doctors, and service providers with appointment scheduling and health tracking.",
    emoji: "🩺",
    thumbClass: "thumb-b",
  },
  // TODO: add link
  {
    title: "Cyber Incident Management",
    description:
      "A production-ready, AI-driven cybersecurity incident management platform that simplifies incident reporting and enhances threat analysis.",
    emoji: "🛡️",
    thumbClass: "thumb-c",
  },
  // TODO: add link
  {
    title: "Micro-Controller Hardware Project",
    description:
      "An innovative wearable project designed to promote physical activity and mental engagement in children through interactive play.",
    emoji: "🎵",
    thumbClass: "thumb-d",
  },
  // TODO: add link
  {
    title: "Project Management System",
    description:
      "A full-stack web application enabling users to manage their portfolio content with full CRUD functionalities and role-based access.",
    emoji: "🗂️",
    thumbClass: "thumb-e",
  },
];

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".projects__card");
    const step = card ? card.offsetWidth + 24 : 360;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Recent Projects</h2>
      <p className="section-subtitle">
        Below you can see some examples of my recent work. Have a project you
        would like to discuss?
        <br />
        <strong>Let&apos;s make something great together!</strong>
      </p>

      <div className="projects__carousel">
        <button
          className="projects__nav prev"
          aria-label="Previous projects"
          onClick={() => scrollByCard(-1)}
        >
          &#10094;
        </button>

        <div className="projects__track" ref={trackRef}>
          {PROJECTS.map((project) => (
            <article className="projects__card" key={project.title}>
              <div className={`projects__thumb ${project.thumbClass}`}>
                <span>{project.emoji}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link ?? "#"} className="projects__more">
                See More
              </a>
            </article>
          ))}
        </div>

        <button
          className="projects__nav next"
          aria-label="Next projects"
          onClick={() => scrollByCard(1)}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}
