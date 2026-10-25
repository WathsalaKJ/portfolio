"use client";

import { useRef } from "react";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

type Skill = { name: string; icon: string };
type SkillGroup = { category: string; skills: Skill[] };

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: `${DEVICON}/python/python-original.svg` },
      { name: "Java", icon: `${DEVICON}/java/java-original.svg` },
      { name: "C", icon: `${DEVICON}/c/c-original.svg` },
      { name: "JavaScript", icon: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "TypeScript", icon: `${DEVICON}/typescript/typescript-original.svg` },
      { name: "PHP", icon: `${DEVICON}/php/php-original.svg` },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: `${DEVICON}/react/react-original.svg` },
      { name: "React Native", icon: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", icon: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Node.js", icon: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Flask", icon: `${DEVICON}/flask/flask-original.svg` },
      { name: "FastAPI", icon: `${DEVICON}/fastapi/fastapi-original.svg` },
      { name: "Tailwind CSS", icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      { name: "scikit-learn", icon: `${DEVICON}/scikitlearn/scikitlearn-original.svg` },
    ],
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "MySQL", icon: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "Supabase", icon: `${DEVICON}/supabase/supabase-original.svg` },
      { name: "Firebase", icon: `${DEVICON}/firebase/firebase-original.svg` },
      { name: "Firestore", icon: `${DEVICON}/firebase/firebase-original.svg` },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: `${DEVICON}/git/git-original.svg` },
      { name: "GitHub", icon: `${DEVICON}/github/github-original.svg` },
      { name: "Docker", icon: `${DEVICON}/docker/docker-original.svg` },
      { name: "Vercel", icon: `${DEVICON}/vercel/vercel-original.svg` },
      { name: "Postman", icon: `${DEVICON}/postman/postman-original.svg` },
      { name: "AWS", icon: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
    ],
  },
];

export default function Skills() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".skills__card");
    const step = card ? card.offsetWidth + 24 : 360;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__carousel">
        <button
          className="skills__nav prev"
          aria-label="Previous skill categories"
          onClick={() => scrollByCard(-1)}
        >
          &#10094;
        </button>

        <div className="skills__track" ref={trackRef}>
          {SKILL_GROUPS.map((group) => (
            <article className="skills__card" key={group.category}>
              <h3 className="skills__category">{group.category}</h3>
              <div className="skills__icons">
                {group.skills.map((skill) => (
                  <div className="skills__badge" key={skill.name} title={skill.name}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      loading="lazy"
                      onError={(e) => {
                        const img = e.currentTarget;
                        img.style.display = "none";
                        img.parentElement!.setAttribute("data-fallback", skill.name);
                      }}
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <button
          className="skills__nav next"
          aria-label="Next skill categories"
          onClick={() => scrollByCard(1)}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}