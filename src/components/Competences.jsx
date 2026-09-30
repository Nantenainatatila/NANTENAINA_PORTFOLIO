import "./Competences.css";

const groups = [
  { title: "Front-end", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] },
  { title: "Back-end", items: ["Node.js", "Express", "MongoDB", "API REST"] },
  { title: "Outils", items: ["Git", "GitHub", "Vite", "Vercel", "Figma"] },
];

export default function Competences() {
  return (
    <section id="competences" className="section">
      <div className="container">
        <h2 className="section__title">Compétences</h2>
        <p className="section__subtitle">
          Les technologies que j'utilise au quotidien.
        </p>

        <div className="skills__grid">
          {groups.map((g) => (
            <div key={g.title} className="skills__card">
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((item) => (
                  <li key={item} className="tag">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
