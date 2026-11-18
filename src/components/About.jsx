import { motion } from "framer-motion";
function About() {
  return (
    <motion.section
        className="about"
        id="about"
        initial={{ opacity: 0, y: 100, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
    >

      <h2 className="section-title">
        About <span>Me</span>
      </h2>

      <div className="about-content">

        

        <p>
          I am a Software Developer with professional experience in developing and maintaining full-stack applications using Python, FastAPI, React.js, and TypeScript. I also have hands-on experience with Java, Spring Boot, and MySQL through personal projects. As a Computer Science graduate, I enjoy solving problems, learning new technologies, and building practical software solutions, with a particular interest in Java backend development.
        </p>

       

      </div>

    </motion.section>
  );
}

export default About;
