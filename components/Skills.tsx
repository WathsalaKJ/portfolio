"use client";

import { useState } from "react";

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
      { name: "AWS", icon: `${DEVICON}/amazonwebservices/amazonwebservices-original.svg` },
    ],
  },
];

const total = SKILL_GROUPS.length;
const STEP_DEG = 360 / total;
const RADIUS = 300; // px — how far around the circle neighboring cards sit

// Shortest signed distance from `active` to card `i` around the ring, e.g.
// for 4 cards: the card right after active is +1, right before is -1, the
// one directly opposite is ±2.
function ringOffset(i: number, active: number) {
  let raw = (i - active) % total;
  if (raw > total / 2) raw -= total;
  if (raw < -total / 2) raw += total;
  return raw;
}

export default function Skills() {
  const [active, setActive] = useState(0);

  const goTo = (index: number) => setActive(((index % total) + total) % total);
  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Technical Skills</h2>

      <div className="skills__orbit">
        <button className="skills__nav prev" aria-label="Previous skill category" onClick={prev}>
          &#10094;
        </button>

        <div
          className="skills__viewport"
          tabIndex={0}
          role="group"
          aria-label="Skill categories, use arrow keys to browse"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
          }}
        >
          <div className="skills__stage">
            {SKILL_GROUPS.map((group, i) => {
              const offset = ringOffset(i, active);
              const absOffset = Math.abs(offset);
              const angleRad = (offset * STEP_DEG * Math.PI) / 180;
              const x = Math.sin(angleRad) * RADIUS;
              const z = (Math.cos(angleRad) - 1) * RADIUS; // 0 for the active card, negative for the rest
              const scale = Math.max(0.6, 1 - absOffset * 0.22);
              const opacity = absOffset === 0 ? 1 : Math.max(0.4, 1 - absOffset * 0.28);
              const isActive = offset === 0;

              return (
                <article
                  className={`skills__card${isActive ? " is-active" : ""}`}
                  key={group.category}
                  style={{
                    transform: `translate3d(${x}px, 0, ${z}px) scale(${scale})`,
                    opacity,
                    zIndex: 100 - absOffset,
                  }}
                  onClick={() => !isActive && goTo(i)}
                  aria-hidden={!isActive}
                >
                  <h3 className="skills__category">{group.category}</h3>
                  <div className="skills__icons">
                    {group.skills.map((skill) => (
                      <div
                        className={`skills__badge${["AWS", "Flask", "GitHub", "Vercel"].includes(skill.name) ? " skills__badge--mono-icon" : ""}`}
                        key={skill.name}
                        title={skill.name}
                      >
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
              );
            })}
          </div>
        </div>

        <button className="skills__nav next" aria-label="Next skill category" onClick={next}>
          &#10095;
        </button>
      </div>

      <div className="skills__dots">
        {SKILL_GROUPS.map((group, i) => (
          <button
            key={group.category}
            className={`skills__dot${i === active ? " is-active" : ""}`}
            aria-label={`Show ${group.category}`}
            aria-current={i === active}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}