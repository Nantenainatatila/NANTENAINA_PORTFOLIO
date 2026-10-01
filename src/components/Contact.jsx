import { useState } from "react";
import "./Contact.css";
const FORMSPREE_ID = "mkjgedwj";

// Remplacez par l'identifiant de votre formulaire Formspree (ex. "xyzabcde")
export default function Contact() {
  // "idle" | "sending" | "success" | "error"
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault(); // empêche le rechargement de la page
    const form = e.target;
    setStatus("sending");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (response.ok) {
        setStatus("success");
        form.reset(); // vide les champs
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error"); // pas de connexion, par exemple
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section__title">Contact</h2>
        <p className="section__subtitle">
          Un projet question ? Écrivez-moi, je réponds rapidement.
        </p>

        <div className="contact__layout">
          <ul className="contact__info">
            <li>
              <span>Email</span>
              <a href="mailto:devnanantenaina@email.com">devnantenaina@gmail.com</a>
            </li>
            <li>
              <span>GitHub</span>
              <a href="https://github.com/Nantenainatatila" target="_blank" rel="noreferrer">
              https://github.com/Nantenainatatila
              </a>
            </li>
            <li>
              <span>LinkedIn</span>
              <a href="https://linkedin.com/in/NANTENAINA Nante" target="_blank" rel="noreferrer">
                NANTENAINA Nante
              </a>
            </li>
          </ul>

          <form className="contact__form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nom</label>
            <input id="name" name="name" type="text" required autoComplete="name" />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required autoComplete="email" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required />

            <button
              type="submit"
              className="contact__submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
            </button>

            {/* aria-live : les lecteurs d'écran annoncent le résultat */}
            <center>

            
            <p className={`contact__status contact__status--${status}`} aria-live="polite">
              {status === "success" && "Merci ! Votre message a bien été envoyé."}
              {status === "error" &&
                "Une erreur est survenue. Réessayez ou écrivez-moi directement par email."}
            </p>
            </center>
          </form>
        </div>
      </div>
    </section>
  );
}