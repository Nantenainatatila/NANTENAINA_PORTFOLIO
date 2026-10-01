import { useEffect, useRef, useState } from "react";
import "./Reveal.css";

// Enveloppe un contenu : il apparaît en fondu quand il entre dans l'écran
export default function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Anciens navigateurs : on affiche directement
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // une seule fois : pas de ré-animation
        }
      },
      // se déclenche quand le haut de l'élément dépasse de 80px le bas de l'écran
      { threshold: 0, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
