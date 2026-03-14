import "./Hero.css";
import profile from "../assets/bianca.jpg";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-left">
        <span className="hero-badge">Student Portfolio</span>

        <h1>Bianca Dollente</h1>
        <h2>BSIT 3rd Year Student</h2>
        <p className="hero-school">Lyceum of Alabang</p>

        <p className="hero-text">
          I am an Information Technology student who enjoys creating clean,
          modern, and user-friendly websites. I am passionate about learning
          new technologies and improving my skills through projects and
          hands-on practice.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn primary">Contact Me</a>

          <a
            href="https://github.com/biancaaddie"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            View GitHub
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="profile-card">
          <img src={profile} alt="Bianca" />
        </div>
      </div>

    </section>
  );
}

export default Hero;