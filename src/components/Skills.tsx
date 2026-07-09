import "./Skills.css";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

type Skill = { name: string; icon: string };
type SkillGroup = { category: string; skills: Skill[] };

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "JavaScript", icon: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Angular", icon: `${DEVICON}/angularjs/angularjs-original.svg` },
      { name: "React", icon: `${DEVICON}/react/react-original.svg` },
      { name: "Bootstrap", icon: `${DEVICON}/bootstrap/bootstrap-original.svg` },
      { name: "Tailwind", icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Express", icon: `${DEVICON}/express/express-original.svg` },
      { name: ".NET Core", icon: `${DEVICON}/dotnetcore/dotnetcore-original.svg` },
      { name: "Firebase", icon: `${DEVICON}/firebase/firebase-original.svg` },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", icon: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "MongoDB", icon: `${DEVICON}/mongodb/mongodb-original.svg` },
    ],
  },
  {
    category: "Design",
    skills: [
      { name: "Figma", icon: `${DEVICON}/figma/figma-original.svg` },
      { name: "Illustrator", icon: `${DEVICON}/illustrator/illustrator-plain.svg` },
      { name: "Photoshop", icon: `${DEVICON}/photoshop/photoshop-original.svg` },
      { name: "GIMP", icon: `${DEVICON}/gimp/gimp-original.svg` },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Postman", icon: `${DEVICON}/postman/postman-original.svg` },
      { name: "Git", icon: `${DEVICON}/git/git-original.svg` },
      { name: "GitHub", icon: `${DEVICON}/github/github-original.svg` },
      { name: "Jira", icon: `${DEVICON}/jira/jira-original.svg` },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__rows">
        {SKILL_GROUPS.map((group) => (
          <div className="skills__row" key={group.category}>
            <h3 className="skills__category">{group.category}</h3>
            <div className="skills__icons">
              {group.skills.map((skill) => (
                <div className="skills__badge" key={skill.name} title={skill.name}>
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
          </div>
        ))}
      </div>
    </section>
  );
}
