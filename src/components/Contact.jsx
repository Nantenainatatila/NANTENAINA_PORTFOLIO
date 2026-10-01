import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section__title">Contact</h2>
        <p className="section__subtitle">
          Un projet, une question ? Écrivez-moi, je réponds rapidement.
        </p>

        <div className="contact__layout">
          <ul className="contact__info">
            <li>
              <span>Email</span>
              <a href="mailto:devnantenaina@gmail.com">devnantenaina@email.com</a>
            </li>
            <li>
              <span>GitHub</span>
              <a href="https://github.com/dashboard">
              https://github.com/dashboard
              </a>
            </li>
            <li>
              <span>LinkedIn</span>
              <a href="https://linkedin.com/in/votre-nom" target="_blank" rel="noreferrer">
                linkedin.com/in/votre-nom
              </a>
            </li>
          </ul>

          {/* Remplacez VOTRE_ID par l'identifiant de votre formulaire sur formspree.io */}
          <form
            className="contact__form"
            action="https://formspree.io/f/VOTRE_ID"
            method="POST"
          >
            <label htmlFor="name">Nom</label>
            <input id="name" name="name" type="text" required autoComplete="name" />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required autoComplete="email" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required />

            <button type="submit" className="contact__submit">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
