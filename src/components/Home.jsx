import { motion } from "framer-motion";
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};
function Home() {
  return (
    <section className="home" id="home">

      <motion.div
  className="home-content"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  }}
>

        <motion.p className="intro" variants={itemVariants}>
            Hello, I'm
        </motion.p>

        <motion.h1 variants={itemVariants}>Yuvasri P</motion.h1>

        <motion.h2 variants={itemVariants}>
            Software Developer | Java Backend Enthusiast
        </motion.h2>

        <motion.p className="description" variants={itemVariants}>
  I develop full-stack applications using Python, FastAPI, React.js, and TypeScript, and build Java backend applications using Spring Boot and MySQL.
</motion.p>
        <motion.p className="description" variants={itemVariants}>
          A Computer Science graduate passionate about problem-solving and developing practical software applications.
        </motion.p>

        <motion.div className="home-buttons" variants={itemVariants}>
          <a
  href="/Yuvasri P - Java Backend Developer.pdf"
  className="btn"
  download
>
  Download Resume
</a>

          <a href="#projects" className="btn btn-outline">
            View My Personal Projects
          </a>
        </motion.div>

      </motion.div>

      

    </section>
  );
}

export default Home;
