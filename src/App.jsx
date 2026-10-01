import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Competences from "./components/Competences";
import Reveal from "./components/Reveal";
import BackToTop from "./components/BackToTop";
import "./index.css";

export default function App () {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark").matches
      ? "dark"
      : "ligth";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

  }, [theme]);

  const toogleTheme = () => setTheme((t) => (t === "dark" ? "ligth" : "dark"));
  return (
    <>
      <Navbar theme={theme} onToggleTheme={toogleTheme} />
      <main>
        <Hero />
        
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Competences />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
        
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Nantenaina</p>
      </footer>
      <BackToTop />
    </>
  );
}