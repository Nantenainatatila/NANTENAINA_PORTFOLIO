import "./Hero.css";
import profil from "../images/profil.png";


export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner container">
        <img
          className="hero__photo"
          src={profil}
          alt=""
          width="320"
          height="320"
        />

        <div className="hero__text">
          <p className="hero__intro">Bonjour, je suis</p>
          <h1 className="hero__title">NANTENAINA</h1>
          <p className="hero__role">Développeur Full-Stack junior</p>
          <p className="hero__desc">
            Je crée des sites et des applications web rapides, accessibles et
            faciles à utiliser.
          </p>

          <div className="hero__buttons">
            <a href="#projects" className="btn btn--primary">
              Voir mes projets
            </a>
            <a href="cv.pdf" download="CV_Nante.pdf" className="btn btn--outline">
              Télécharger mon cv
            </a>
            <a href="#contact" className="btn btn--outline">
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
