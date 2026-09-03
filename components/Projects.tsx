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
  // TODO: add link — no public repo found (built for Dart Global Logistics Inc.)
  {
    title: "Digital Employee Performance Management System (EPMS)",
    description:
      "A role-based performance management system for a logistics company across 25 countries — KPI evaluation, potential-assessment workflows, and a live bell-curve analytics engine scoped by a six-tier org hierarchy.",
    emoji: "📈",
    thumbClass: "thumb-a",
  },
  // TODO: add link — no public repo found
  {
    title: "EcoSync — Home Solar Panel Output Forecaster",
    description:
      "A solar-output forecasting platform with a live weather-data pipeline and a Random Forest model trained on real generation data, cutting prediction error from 38.8% to 14.4% MAPE.",
    emoji: "☀️",
    thumbClass: "thumb-b",
  },
  {
    title: "Snapense — AI-Powered Expense Tracker",
    description:
      "A full-stack mobile expense tracker with a vision-LLM pipeline that auto-extracts and categorizes receipts, plus scikit-learn anomaly detection for unusual spending.",
    emoji: "💸",
    thumbClass: "thumb-c",
    link: "https://github.com/WathsalaKJ/snapense",
  },
  // TODO: add link — live demo URL not available
  {
    title: "PureGuard — IoT-Based Museum Artifact Protection System",
    description:
      "An IoT and embedded-systems project pairing NodeMCU/Arduino hardware with a real-time Firebase cloud app for environmental monitoring and artifact security.",
    emoji: "🛡️",
    thumbClass: "thumb-d",
  },
  {
    title: "SoulBalance — Wellness Blog Platform",
    description:
      "A full-stack wellness blog platform with authentication, blog CRUD via REST API, a rich-text editor with image upload, and a dual guest/authenticated rating system.",
    emoji: "🧘",
    thumbClass: "thumb-e",
    link: "https://github.com/WathsalaKJ/SoulBalance",
  },
  {
    title: "This Portfolio",
    description:
      "This personal portfolio site, built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4.",
    emoji: "🌐",
    thumbClass: "thumb-f",
    link: "https://github.com/WathsalaKJ/portfolio",
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
