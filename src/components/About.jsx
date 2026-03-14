import "./About.css";

function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Responsive Design",
    "UI/UX Basics",
    "Problem Solving",
    "Team Collaboration",
  ];

  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2>About Me</h2>
        <p>Get to know more about my background and skills.</p>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <h3>Who I Am</h3>
          <p>
            I am currently taking up Bachelor of Science in Information
            Technology as a 3rd year student at Lyceum of Alabang. I am
            interested in web development and creating modern, user-friendly
            websites.
          </p>
          <p>
            As a student, I continue improving my knowledge and practical skills
            through academic work, projects, and self-learning. My goal is to
            become a skilled IT professional who can create useful and
            professional digital solutions.
          </p>
        </div>

        <div className="about-skills">
          <h3>Skills</h3>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;