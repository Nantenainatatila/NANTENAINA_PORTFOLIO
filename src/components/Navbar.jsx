import { useState } from "react";
import "./Navbar.css";

const links = [
  {href: "#top", label: "Accueil"},
  { href: "#about", label: "À propos" },
  {href: "#competences", label: "Competences"},
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <a href="#top" className="navbar__logo" onClick={close}>
          Nantenaina
        </a>

        <nav
          id="main-menu"
          className={`navbar__menu ${open ? "is-open" : ""}`}
          aria-label="Navigation principale"
        >
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={close}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <button
            className="navbar__btn"
            onClick={onToggleTheme}
            aria-label={
              theme === "dark" ? "Activer le thème clair" : "Activer le thème sombre"
            }
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <button
            className="navbar__btn navbar__burger"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="main-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
