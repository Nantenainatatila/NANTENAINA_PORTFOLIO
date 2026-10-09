import "./Projects.css";
import { projects } from "../data/projects";
import { useState } from "react";
import TechTag from "./TechTag";
import ProjectGallery from "./ProjectGallery";

export default function Projects() {
  const [affiche, setAffiche] = useState([]);
  const [galerie, setGalerie] = useState(null); // projet dont la galerie est ouverte
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
              
              <button
                type="button"
                className="project__photo-btn"
                onClick={() => setGalerie(p)}
                aria-label={`Voir les captures du projet ${p.title}`}
              >
                <img
                  className="project__photo"
                  src={p.image}
                  alt=""
                />
                {p.images?.length > 0 && (
                  <span className="project__photo-count">{p.images.length} captures</span>
                )}
              </button>
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
                    Code source
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer">
                   Demonstration
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
      {galerie && (
        <ProjectGallery
          title={galerie.title}
          images={galerie.images}
          onClose={() => setGalerie(null)}
        />
      )}
    </section>
  );
}
