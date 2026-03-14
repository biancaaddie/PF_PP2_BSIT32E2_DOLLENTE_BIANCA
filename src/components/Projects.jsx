import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Projects() {
  const projectList = [
    {
      title: "Student Management System",
      description: "Full stack system built with React and Node.js",
      github: "https://github.com/biancaaddie/student-management",
      demo: "https://student-management.example.com",
      image: "/images/student-management.png", // Add your images in public folder
    },
    {
      title: "Todo App",
      description: "Simple productivity application",
      github: "https://github.com/biancaaddie/todo-app",
      demo: null,
      image: "/images/todo-app.png",
    },
  ];

  return (
    <section id="projects" className="py-5" data-aos="fade-up">
      <Container>
        <h2 className="mb-4">My Projects</h2>
        <Row>
          {projectList.map((project, idx) => (
            <Col md={6} lg={4} key={idx} className="mb-4">
              <Card className="h-100 shadow-sm">
                {project.image && (
                  <Card.Img variant="top" src={project.image} alt={project.title} />
                )}
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button
                    href={project.github}
                    target="_blank"
                    variant="primary"
                    className="me-2"
                  >
                    GitHub
                  </Button>
                  {project.demo && (
                    <Button
                      href={project.demo}
                      target="_blank"
                      variant="outline-primary"
                    >
                      Live Demo
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;