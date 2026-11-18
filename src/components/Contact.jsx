import Reveal from "./Reveal";
function Contact() {
  return (
    <Reveal>
    <section className="contact" id="contact">
      <h2 className="section-title">
        Get In <span>Touch</span>
      </h2>

      <p className="contact-description">
        I'm open to opportunities in Software Engineering
        and Java Backend Development. Feel free to connect with me.
      </p>

      <div className="contact-container">
        <a href="mailto:yuvasrip71225@gmail.com" className="contact-card">
          <h3>Email</h3>
          <p>yuvasrip71225@gmail.com</p>
        </a>
        <a href="tel:+919342422721" className="contact-card">
          <h3>Phone</h3>
          <p>+91 9342422721</p>
        </a>

        <a
          href="https://github.com/YuvasriP-71225"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <h3>GitHub</h3>
          <p>View my repositories</p>
        </a>

        <a
          href="https://www.linkedin.com/in/yuvasri-p-361b87317/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <h3>LinkedIn</h3>
          <p>Connect with me</p>
        </a>
      </div>
    </section>
    </Reveal>
  );
}

export default Contact;
