import { Container, Row, Col, Button } from "react-bootstrap";

function Contact() {
  return (
    <section id="contact" className="bg-light py-5" data-aos="fade-up">
      <Container>
        <h2 className="text-center mb-4">Contact Me</h2>
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <p>
              Email:{" "}
              <a href="mailto:biancaadrienne24@gmail.com">
                biancaadrienne24@gmail.com
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/biancaaddie"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/biancaaddie
              </a>
            </p>
            <Button href="mailto:biancaadrienne24@gmail.com" variant="primary">
              Send Email
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;