import { useState, useEffect } from "react";
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";

function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.getBoundingClientRect().top;
          if (top <= 80) current = section;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BsNavbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      expanded={expanded}
    >
      <Container>
        <BsNavbar.Brand href="#home">Bianca.dev</BsNavbar.Brand>
        <BsNavbar.Toggle onClick={() => setExpanded(!expanded)} />
        <BsNavbar.Collapse>
          <Nav className="ms-auto">
            {["home", "about", "projects", "contact"].map((section) => (
              <Nav.Link
                key={section}
                href={`#${section}`}
                active={active === section}
                onClick={() => setExpanded(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;