import "./Projects.css";
import { projects } from "../data/projects";
import { useState } from "react";
import TechTag from "../components/TechTag";

export default function Projects() {
  const [affiche, setAffiche] = useState([]);
  const basculer = (title) => {
    setAffiche((liste) => 
      liste.includes(title)
        ? liste.filter((t) => t !== title)
        : [...liste, title]
    );
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section__title">Projets</h2>
        <p className="section__subtitle">
          Ce que j'ai réalisé.
        </p>

        <div className="projects__grid">
          {projects.map((p) => {
            const estAffiche = affiche.includes(p.title);
            return (
              <article key={p.title} className="project">
              <h3 className="project__title">{p.title}</h3>
              
               <img
                        className="project__photo"
                        src={p.image}
                        alt=""
                        
                />
              <br />
              <ul className="project__tech">
                {p.tech.map((t) => (
                  <li key={t}>
                    <TechTag name={t} />
                  </li>
                ))}
              </ul>
              
              <div className="project__links">
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer">
                    Voir le site
                  </a>
                )}
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer">
                    Code source
                  </a>
                )}
                
                  <button onClick ={() => basculer(p.title)} target="_blank" rel="noreferrer" className="btn btn--outline">
                    {estAffiche? "Voir moins" : "Voir plus"}
                  </button>
              </div>
              {estAffiche? <p className="project__desc">{p.description} </p>: ""}
              
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
