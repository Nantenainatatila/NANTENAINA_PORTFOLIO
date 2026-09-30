import "./About.css";

const facts = [
  { label: "Formation", value: "Licence en informatique" },
  { label: "Localisation", value: "Antananarivo, Madagascar" },
  { label: "Langues", value: "Français, Malgache, Anglais" },
  { label: "Disponibilité", value: "Stage, alternance ou freelance" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about__layout">
        <div className="about__text">
          <h2 className="section__title">À propos</h2>
          <p>
            J'ai découvert la programmation en créant mon premier site web, et
            je n'ai plus arrêté depuis. Aujourd'hui, je conçois des interfaces
            avec React, en portant une attention particulière à la clarté et à
            l'accessibilité.
          </p>
          <p>
            Ce qui me motive : transformer une idée en quelque chose que les
            gens peuvent vraiment utiliser. J'aime apprendre de nouveaux outils
            et travailler en équipe.
          </p>
          <p>
            En dehors du code, j'aime la photo, la musique et les randonnées.
          </p>
        </div>

        <dl className="about__facts">
          {facts.map((f) => (
            <div key={f.label} className="about__fact">
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
