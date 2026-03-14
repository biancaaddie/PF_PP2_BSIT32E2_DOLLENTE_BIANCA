import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Student Information System",
      description:
        "A sample academic project that manages student records, schedules, and profile information in a simple and organized interface.",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal website built to showcase my academic background, skills, and contact details in a modern design.",
    },
    {
      title: "Task Management App",
      description:
        "A simple concept for helping students organize school tasks, deadlines, and daily priorities efficiently.",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2>Projects</h2>
        <p>Here are some sample projects you can showcase in your portfolio.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <span className="project-tag">Project {index + 1}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;