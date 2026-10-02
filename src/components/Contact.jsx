import { useState } from "react";
import "./Contact.css";
import TechTag from "./TechTag";
const FORMSPREE_ID = "mkjgedwj";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaWhatsapp, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";


const contacts = [
  { icon: MdEmail,      text: "tatilanantenaina@gmail.com", href: "mailto:tatilanantenaina@gmail.com" },
  { icon: FaWhatsapp,   text: "+261 34 83 154 40",          href: "https://wa.me/261348315440" },
  { icon: FaGithub,   text: "github.com/nantenainatatila", href: "https://github.com/nantenainatatila" },
  { icon: FaLinkedin,  text: "linkedin.com/in/devnantenaina",  href: "https://linkedin.com/in/devnantenaina" },
  { icon: MdLocationOn,  text: "Akamasoa, Antananarivo, Madagascar" },
];
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
          Un projet? question ? Écrivez-moi, je réponds rapidement.
        </p>

        <div className="contact__layout">
        <ul className="contact__info">
            {contacts.map(({ icon: Icon, text, href }) => (
              <li key={text} className="contact_Icon_Text">
                <span className="contact__icon" aria-hidden="true">
                  <Icon />
                </span>
                <div className="contact__text">
                  {href ? (
                    <a href={href} target="_blank" rel="noreferrer">
                      {text}
                    </a>
                  ) : (
                    <p>{text}</p>
                  )}
                </div>
              </li>
            ))}
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