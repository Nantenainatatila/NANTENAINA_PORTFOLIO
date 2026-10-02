import {
  FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaGithub,
  FaHtml5, FaCss3Alt, FaJs,
} from "react-icons/fa";
import {
  SiExpress, SiPostgresql, SiMongodb, SiMysql, SiFlask,
  SiVercel, SiVite, SiTailwindcss, SiFigma,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

// color: null => couleur du texte (visible en thème clair ET sombre)
// Les clés sont en minuscules : "React", "react" ou "REACT" fonctionnent.
export const techIcons = {
  "react":               { icon: FaReact,       color: "#61DAFB" },
  "node.js":             { icon: FaNodeJs,      color: "#5FA04E" },
  "express":             { icon: SiExpress,     color: null },
  "express.js":          { icon: SiExpress,     color: null },
  "postgresql":          { icon: SiPostgresql,  color: "#4A90C2" },
  "mongodb":             { icon: SiMongodb,     color: "#47A248" },
  "mysql":               { icon: SiMysql,       color: "#4479A1" },
  "python":              { icon: FaPython,      color: "#3776AB" },
  "flask":               { icon: SiFlask,       color: null },
  "python (flask)":      { icon: SiFlask,       color: null },
  "javascript":          { icon: FaJs,          color: "#F7DF1E" },
  "html":                { icon: FaHtml5,       color: "#E34F26" },
  "css":                 { icon: FaCss3Alt,     color: "#1572B6" },
  "tailwind css":        { icon: SiTailwindcss, color: "#06B6D4" },
  "docker":              { icon: FaDocker,      color: "#2496ED" },
  "git":                 { icon: FaGitAlt,      color: "#F05032" },
  "github":              { icon: FaGithub,      color: null },
  "vercel":              { icon: SiVercel,      color: null },
  "vite":                { icon: SiVite,        color: "#8B5CF6" },
  "figma":               { icon: SiFigma,       color: "#F24E1E" },
  "visual studio code":  { icon: VscCode,       color: "#2F8FDE" },
};
