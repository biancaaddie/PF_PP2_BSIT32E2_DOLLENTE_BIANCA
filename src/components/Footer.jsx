import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5 text-center">
      <Container>
        <div className="mb-3">
          <a
            href="https://github.com/biancaaddie"
            className="text-white mx-3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/bianca"
            className="text-white mx-3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://twitter.com/bianca"
            className="text-white mx-3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter size={28} />
          </a>
        </div>
        <small>© {new Date().getFullYear()} Bianca Adrienne. All rights reserved.</small>
      </Container>
    </footer>
  );
}

export default Footer;