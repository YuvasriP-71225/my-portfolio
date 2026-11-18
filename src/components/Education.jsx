import Reveal from "./Reveal";
function Education() {
  const educationDetails = [
    {
      degree: "B.Sc Computer Science",
      institution: "Sri Sankara Arts and Science College",
      location: "Kanchipuram, Tamil Nadu",
      year: "2020 – 2023",
      score: "84.97%"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "S.S.K.V Girls Higher Secondary School",
      location: "Kanchipuram, Tamil Nadu",
      year: "2020",
      score: "70%"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "S.S.K.V Girls Higher Secondary School",
      location: "Kanchipuram, Tamil Nadu",
      year: "2018",
      score: "79.4%"
    }
  ];

  return (
    <Reveal>
    <section className="education" id="education">
      <h2 className="section-title">
        My <span>Education</span>
      </h2>

      <div className="education-container">
        {educationDetails.map((item, index) => (
          <div className="education-card" key={index}>
            <h3>{item.degree}</h3>
            <h4>{item.institution}</h4>
            {item.location && <p>{item.location}</p>}
            <p>{item.year}</p>
            <span>{item.score}</span>
          </div>
        ))}
      </div>
    </section>
    </Reveal>
  );
}

export default Education;
