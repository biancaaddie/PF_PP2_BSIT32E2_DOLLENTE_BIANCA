import { Container, Button } from "react-bootstrap";

function Hero() {
  return (
    <section
      id="home"
      className="bg-light text-center py-5"
      data-aos="fade-up"
    >
      <Container>
        <h1 className="display-4">Hello, I'm Bianca 👋</h1>
        <p className="lead">
          A Computer Science student passionate about Web Development
        </p>
        <Button href="#projects" variant="primary" size="lg">
          View My Projects
        </Button>
      </Container>
    </section>
  );
}

export default Hero;