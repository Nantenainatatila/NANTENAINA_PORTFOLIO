import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import "./ProjectGallery.css";

// Galerie plein écran : flèches, compteur "n sur N", miniatures, clavier et balayage tactile
export default function ProjectGallery({ title, images, startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex);
  const touchX = useRef(null);
  const thumbsRef = useRef(null);
  const total = images.length;

  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);
  const next = useCallback(() => setIndex((i) => Math.min(i + 1, total - 1)), [total]);

  // Clavier + blocage du défilement de la page
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose, prev, next]);

  // La miniature active reste visible dans la barre
  useEffect(() => {
    const active = thumbsRef.current?.children[index];
    active?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [index]);

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchX.current = null;
  };

  return createPortal(
    <div
      className="gallery"
      role="dialog"
      aria-modal="true"
      aria-label={`Captures du projet ${title}`}
      onClick={onClose}
    >
      <button className="gallery__close" onClick={onClose} aria-label="Fermer">
        <FiX />
      </button>

      <div
        className="gallery__stage"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          className="gallery__arrow gallery__arrow--prev"
          onClick={prev}
          disabled={index === 0}
          aria-label="Image précédente"
        >
          <FiChevronLeft />
        </button>

        <img
          key={index}
          className="gallery__image"
          src={images[index]}
          alt={`${title} - capture ${index + 1}`}
        />

        <button
          className="gallery__arrow gallery__arrow--next"
          onClick={next}
          disabled={index === total - 1}
          aria-label="Image suivante"
        >
          <FiChevronRight />
        </button>
      </div>

      <div className="gallery__footer" onClick={(e) => e.stopPropagation()}>
        <p className="gallery__count">{index + 1} sur {total}</p>
        <div className="gallery__thumbs" ref={thumbsRef}>
          {images.map((src, i) => (
            <button
              key={src}
              className={`gallery__thumb ${i === index ? "is-active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Voir la capture ${i + 1}`}
              aria-current={i === index}
            >
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}
