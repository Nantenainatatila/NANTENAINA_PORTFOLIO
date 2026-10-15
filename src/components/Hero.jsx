import { useEffect, useState } from "react";
import "./Hero.css";

// Modifiez cette liste avec votre vraie stack
const STACK = ["React", "JavaScript", "Node.js", "Express", "MongoDB", "MySQL", "HTML/CSS", "Git"];

function useLocalTime() {
  const get = () =>
    new Intl.DateTimeFormat("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Indian/Antananarivo",
    }).format(new Date());
  const [time, setTime] = useState(get);
  useEffect(() => {
    const id = setInterval(() => setTime(get()), 30000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Hero() {
  const time = useLocalTime();

  // Halo lumineux qui suit le curseur (desktop uniquement, sans coût React)
  function handleMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <section id="top" className="hero" onPointerMove={handleMove}>
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__inner container">
        <div className="hero__text">
          <p className="hero__status">
            <span className="hero__dot" aria-hidden="true" />
            Disponible · Antananarivo, {time}
          </p>

          <p className="hero__intro">Bonjour, je suis</p>
          <h1 className="hero__title">
            <span>NANTE</span>
            <span className="hero__title-accent">NAINA</span>
          </h1>
          <p className="hero__role">Développeur Full-Stack junior</p>
          

          <div className="hero__buttons">
            <a href="#projects" className="btn btn--primary">
              Voir mes projets <span aria-hidden="true">→</span>
            </a>
            <a href="CV_Nantenaina.pdf" download="CV_Nante.pdf" className="btn btn--outline">
              Télécharger mon CV
            </a>
            <a href="#contact" className="btn btn--ghost">
              Me contacter
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__frame">
            <img
              className="hero__photo"
              src="profil.webp"
              alt="Portrait de Nantenaina"
              width="320"
              height="400"
            />
          </div>
          <span className="hero__badge hero__badge--a">{"</>"} Full-Stack</span>
        </div>
      </div>

      <div className="hero__marquee" aria-label="Technologies utilisées">
        <div className="hero__track">
          {[...STACK, ...STACK].map((t, i) => (
            <span key={i} aria-hidden={i >= STACK.length}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}