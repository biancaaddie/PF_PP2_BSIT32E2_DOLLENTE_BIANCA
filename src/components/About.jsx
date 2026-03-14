import { Container, Row, Col, Card } from "react-bootstrap";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="py-5" data-aos="fade-up">
      <Container>
        <h2 className="mb-4 text-center">About Me</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <p>
              Hi! I’m Bianca, a passionate Computer Science student specializing in
              full-stack web development. I love building interactive, performant web
              applications with modern technologies.
            </p>
            <p>Here are a few technologies I enjoy working with:</p>
            <Row className="text-center mt-4">
              <Col xs={4} md={2}>
                <Card className="border-0">
                  <FaReact size={48} color="#61dafb" />
                  <p>React</p>
                </Card>
              </Col>
              <Col xs={4} md={2}>
                <Card className="border-0">
                  <FaNodeJs size={48} color="#3c873a" />
                  <p>Node.js</p>
                </Card>
              </Col>
              <Col xs={4} md={2}>
                <Card className="border-0">
                  <FaGithub size={48} />
                  <p>GitHub</p>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;