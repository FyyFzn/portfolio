export interface Project {
  id: string;
  title: string;
  badge?: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    headline: string;
    bio: string;
    location?: string;
    email?: string;
    universityEmail?: string;
    github?: string;
  };
  skills: SkillGroup[];
  projects: Project[];
  experiences: Experience[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Rafi Fauzan Hermansah",
    headline: "Information Systems Student @ Telkom University | Web & Mobile Developer",
    bio: "D3 Sistem Informasi student at Telkom University, Bandung. Building responsive full-stack applications and cross-platform mobile experiences with React Native, TypeScript, Node.js, and modern cloud architecture.",
    location: "Bandung, Indonesia",
    email: "rafifauzanhermansah@gmail.com",
    universityEmail: "rafifauzanhermansah@student.telkomuniversity.ac.id",
    github: "https://github.com/FyyFzn",
  },
  skills: [
    {
      category: "Frontend & Mobile",
      skills: ["React", "React Native", "Next.js", "TypeScript", "Tailwind CSS", "Expo Router"],
    },
    {
      category: "Backend & Systems",
      skills: ["Node.js", "Express", "PHP", "RESTful APIs", "Docker", "Azure Blob Storage"],
    },
    {
      category: "Databases & Tools",
      skills: ["MySQL", "Git & GitHub", "Postman", "VS Code"],
    },
  ],
  projects: [
    {
      id: "wibuflix-app",
      title: "Wibuflix App",
      badge: "Mobile App",
      description:
        "Cross-platform mobile streaming application built with React Native and Expo Router. Features catalog navigation, custom UI components, media playback integration, and responsive layout.",
      tags: ["React Native", "Expo", "TypeScript", "Mobile UI"],
      githubUrl: "https://github.com/FyyFzn/wibuflix-app",
      featured: true,
    },
    {
      id: "wibuflix-backend",
      title: "Wibuflix Backend & Media Pipeline",
      badge: "Backend & Cloud",
      description:
        "Scalable streaming backend and ingestion service. Implements REST API endpoints, Docker containerization, video streaming pipeline, and cloud storage integration with Azure Blob Storage.",
      tags: ["Node.js", "Express", "Docker", "Azure", "REST API"],
      githubUrl: "https://github.com/FyyFzn/wibuflix",
      featured: true,
    },
    {
      id: "glow-in",
      title: "Glow-in",
      badge: "Academic Project",
      description:
        "Full-stack database-driven web application developed for university coursework. Implements MVC pattern, relational schema design with MySQL, session-based user authentication, and administrative dashboards.",
      tags: ["PHP", "MySQL", "MVC", "Authentication"],
      githubUrl: "https://github.com/FyyFzn/Glow-in",
      featured: false,
    },
  ],
  experiences: [
    {
      role: "D3 Sistem Informasi (Information Systems)",
      organization: "Telkom University, Bandung",
      period: "Undergraduate / Diploma",
      description:
        "Studying software engineering, database management systems, web applications, and system analysis. Actively developing hands-on independent projects alongside academic coursework.",
    },
  ],
};
