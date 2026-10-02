import { techIcons } from "../data/techIcons";
import "./TechTag.css";

// Affiche une technologie : icône (si connue) + nom
export default function TechTag({ name }) {
  const entry = techIcons[name.toLowerCase()];
  const Icon = entry?.icon;

  return (
    <span className="tag tech">
      {Icon && (
        <Icon
          className="tech__icon"
          style={entry.color ? { color: entry.color } : undefined}
          aria-hidden="true"
        />
      )}
      {name}
    </span>
  );
}
