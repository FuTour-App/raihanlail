export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  source: { title: string; link: string }[];
  imageUrl?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "FuTour",
    description:
      "An AI travel assistant that helps users to find the best travel destinations on Indonesia.",
    tags: ["Flask", "Firestore", "Python", "Tensorflow", "Scikit-learn", "Android Studio", "Google Cloud Platform"],
    source: [
      { title: "GitHub", link: "https://github.com/FuTour-App/" },
      { title: "Live Site", link: "" },
    ],
    imageUrl: "/futour.png",
  },
  {
    id: 2,
    title: "Eduzillen.id Website",
    description:
      "Eduzillen.id official website with headless CMS, handle contents, registrations, and payments.",
    tags: ["Next.js", "JavaScript", "Laravel", "Filament", "Mailer"],
    source: [
     
      { title: "Live Site", link: "https://eduzillen.id" },
    ],
    imageUrl: "/eduzi.png",
  },
  {
    id: 3,
    title: "Eduzillen.id Admin Panel & CMS",
    description:
      "A headless CMS for EduZillen.id website, handling dynamic contents, registrations data, payment systems, and mailing systems.",
    tags: [ "Laravel", "Filament", "Mailer", "MySQL", "Sanctum"],
    source: [
     
      { title: "Live Site", link: "" },
    ],
    imageUrl: "/cms.png",
  },
  {
    id: 4,
    title: "JKT48 Oshi Selector",
    description:
      "A DSS-based system to picking a JKT48 favourite member based on each user's preference. Made with Simple Additive Weighting (SAW) computing method.",
    tags: ["Next.js", "JavaScript", "DSS", "SAW"],
    source: [
     
      { title: "Live Site", link: "https://oshi-picker.vercel.app/" },
    ],
    imageUrl: "/oshi-picker.png",
  },
  {
    id: 5,
    title: "SIAKAD RA ALIFIA",
    description:
      "An academic information system for RA ALIFIA preschool. Handling 3 roles (admin, teacher, and parents) simultaneously with student registration system, schedule system, and payment system.",
    tags: ["Laravel", "PHP", "Jetstream", "MySQL"],
    source: [
      { title: "GitHub", link: "#" },
      
    ],
    imageUrl: "/siakad.png",
  },
  
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Full Stack Developer ",
    company: "EduZillen.id",
    period: "March 2025 – Present",
    description:
      "Built and maintained scalable web applications using Next.js and Laravel for CMS. Focused on building engaging-company profile website, managing registrations and deployment.",
    tags: ["Next.js", "Laravel", "Redis", "Mailer", "CPanel"],
  },
  {
    id: 2,
    role: "Full Stack Developer Intern",
    company: "Badan Pusat Statistik",
    period: "Aug 2023 – Dec 2023",
    description:
      "Researched and implemented deep learning models for NLP classification tasks. Published results and contributed to the team's knowledge base.",
    tags: ["Python", "Tensorflow", "BERT", "Scikit-learn"],
  },
  {
    id: 3,
    role: "Full Stack Developer (Freelance)",
    company: "Freelance",
    period: "Mar 2023 – Jul 2023",
    description:
      "Designed and developed responsive websites for local businesses. Focused on performance optimization and accessibility standards.",
    tags: ["React", "Tailwind CSS", "Figma", "TypeScript"],
  },
];

export const skills = [
  { name: "React", icon: "SiReact", color: "#61DAFB" },
  { name: "Next.js", icon: "SiNextdotjs", color: "#ffffff" },
  { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
  { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
  { name: "Python", icon: "SiPython", color: "#3776AB" },
  { name: "Golang", icon: "FaGolang", color: "#2496ED" },
  { name: "Docker", icon: "SiDocker", color: "#2496ED" },
  { name: "PostgreSQL", icon: "SiPostgresql", color: "#336791" },
  { name: "Firebase", icon: "SiFirebase", color: "#FFCA28" },
  { name: "Git", icon: "SiGit", color: "#F05032" },
  { name: "Figma", icon: "SiFigma", color: "#F24E1E" },
  { name: "Linux", icon: "SiLinux", color: "#FCC624" },
];
