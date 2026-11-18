import Reveal from "./Reveal";
import { motion } from "framer-motion";
function Projects() {
  
const projects = [
  {
    title: "SkillEnroll – Course Registration System",
    description:
      "Built a full-stack course registration application with student registration, course listing, and enrollment tracking. Implemented duplicate enrollment prevention, student unenrollment, and interactive SweetAlert confirmation modals.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Maven"
    ],
    github:
      "https://github.com/YuvasriP-71225/SkillEnroll-Course-Registration-System"
  },
  {
    title: "Employee Management System",
    description:
      "Developed a web-based employee management system with CRUD operations, employee search by name and department, and server-side forms using Thymeleaf.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "MySQL",
      "Thymeleaf",
      "HTML5",
      "CSS3",
      "Maven"
    ],
    github:
      "https://github.com/YuvasriP-71225/EmployeeManagement_System"
  }
];


  return (
    <Reveal>
    <section className="projects" id="projects">

      <h2 className="section-title">
        My <span>Personal Projects</span>
      </h2>

      <div className="projects-container">

        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
        >

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tech">
              {project.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
<a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="github-link"
>
  View on GitHub →
</a>
          </motion.div>
        ))}

      </div>

    </section>
    </Reveal>
  );
}

export default Projects;
