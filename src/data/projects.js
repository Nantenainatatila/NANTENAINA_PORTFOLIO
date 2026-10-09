// src/data/projects.js
export const projects = [
  {
    title: "Gestion des notes",
    description: "Ce projet sert à gérer tous les notes dans l'Université Saint Vincent de Paul AKAMASOA avec calcules des moyennes automatiques, les observations ainsi que la génération automatique des listes pour chaque resultats et un relevé des notes pour chaque étudiant en pdf",
    tech: ["HTML","CSS","React", "Node.js", "PostgreSQL", "Neon db", "Vercel"],
    link: "https://github.com/Nantenainatatila/gestion_ecole",
    image: "image2project1.webp",
    demo: "https://frontend-zeta-two-82.vercel.app",
    images: [1,2,3,4,5,6,7].map((n) => `image${n}project1.webp`)
  },
  {
    title: "Gestion des conges",
    description: "Ce projet sert à gérer tous les congées des employées du MTEFOP, L'employé peut envoyer sa demande et le Resource Humaines peut l'approuver, le refuser",
    tech: ["HTML","CSS", "React", "Node.js", "PostgreSQL" , "neon db" , "Vercel"],
    link: "https://github.com/Nantenainatatila/gestion_conges_FRONTEND",
    image: "image2project2.webp",
    demo: "https://gestion-conges-frontend.vercel.app",
    images: [1,2,3,4].map((n) => `image${n}project2.webp`)
  },
];


