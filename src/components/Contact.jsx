import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2>Contact Me</h2>
        <p>Feel free to connect with me through the platforms below.</p>
      </div>

      <div className="contact-grid">
        <a href="mailto:biancaadrienne24@gmail.com" className="contact-card">
          <h3>Email</h3>
          <p>biancaadrienne24@gmail.com</p>
        </a>

        <a
          href="https://github.com/biancaaddie"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <h3>GitHub</h3>
          <p>biancaaddie</p>
        </a>

        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <h3>Facebook</h3>
          <p>Bianca Adrienne</p>
        </a>

        <a
          href="https://x.com/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <h3>Twitter / X</h3>
          <p>biancakes</p>
        </a>
      </div>
    </section>
  );
}

export default Contact;