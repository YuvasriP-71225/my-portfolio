import Reveal from "./Reveal";
function Experience() {
  const workProjects = [
    {
      title: "FIDAS Admin – Fabric Inspection & Defect Analysis System",
      description:
        "Migrated the legacy FIDAS Admin application to a modern full-stack architecture. Developed REST APIs, database models, CRUD operations, and approximately 30 functional forms across Masters, Transactions, and Settings modules.",
      technologies: [
        "Python", "FastAPI", "React.js", "TypeScript", "SQL Server"
      ]
    },
    {
      title: "FIDAS Desktop Application – Master Modules",
      description:
        "Developed desktop master screens for Company, Employee, Machine, Shift, Designation, and Style modules. Integrated PyQt6 screens with FastAPI services for API-based data operations and synchronization.",
      technologies: ["Python", "PyQt6", "FastAPI"]
    },
    {
      title: "PRM – Learning Management System",
      description:
        "Contributed to an internal learning platform featuring video lectures and assessment questions. Implemented frontend enhancements and form validations to improve user workflows.",
      technologies: ["Python", "React.js", "TypeScript"]
    },
    {
      title: "C#/.NET Application Development & Support",
      description:
        "Developed new features and modified existing functionality across legacy enterprise applications. Debugged production issues, implemented fixes, delivered customer-specific customizations, and resolved SQL Server-related issues.",
      technologies: ["C#", "VB.NET", ".NET WinForms", "SQL Server"]
    }
  ];

  return (
    <Reveal>
    <section className="experience" id="experience">
      <h2 className="section-title">
        Professional <span>Experience</span>
      </h2>

      <div className="experience-header">
        <h3>Software Development Engineer</h3>
        <h4>Ventura Automation Services Inc.</h4>
        <p>December 2025 – Present</p>
      </div>

      <div className="experience-container">
        {workProjects.map((project, index) => (
          <div className="experience-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="experience-tech">
              {project.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </Reveal>
  );
}

export default Experience;
