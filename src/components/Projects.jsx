import "./Projects.css";
import { projects } from "../data/projects";

export default function Projects() {
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
              <p className="project__desc">{p.description}</p>

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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
