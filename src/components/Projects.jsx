import "./Projects.css";
import { projects } from "../data/projects";
import { useState } from "react";

export default function Projects() {
  const [afficher, setAfficher] = useState(false);
  const Afficher = () => {
    setAfficher(!afficher);
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section__title">Projets</h2>
        <p className="section__subtitle">
          Ce que j'ai réalisé.
        </p>

        <div className="projects__grid">
          {projects.map((p) => (
            <article key={p.title} className="project">
              <h3 className="project__title">{p.title}</h3>
              
               <img
                        className="project__photo"
                        src="project1.png"
                        alt=""
                        
                />
              
              <ul className="project__tech">
                {p.tech.map((t) => (
                  <li key={t} className="tag">{t}</li>
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
                {p.title && (
                  <button onClick ={Afficher} target="_blank" rel="noreferrer" className="btn btn--outline">
                    {afficher? "Masquer la description" : "Voir la description"}
                  </button>
                )}
                
              </div>
              {afficher? <p className="project__desc">{p.description} </p>: ""}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
