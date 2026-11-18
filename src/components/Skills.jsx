import Reveal from "./Reveal";
function Skills() {
  const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript"]
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React.js"]
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "FastAPI", "Node.js", "REST APIs"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "SQL Server"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code"]
  }
];

  return (
    <Reveal>
  <section className="skills" id="skills">

      <h2 className="section-title">
        My <span>Technical Skills</span>
      </h2>
        <p className="skills-description">
  Professional experience with Python, FastAPI, React.js, TypeScript,
  Node.js and SQL Server. Hands-on project experience with Java,
  Spring Boot and MySQL.
</p>
      <div className="skills-container">

        {skillCategories.map((category, index) => (
          <div className="skill-card" key={index}>

            <h3>{category.title}</h3>

            <div className="skill-list">
              {category.skills.map((skill, i) => (
                <span className="skill-item" key={i}>
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
    </Reveal>
  );
}

export default Skills;
