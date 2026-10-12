export interface Project {
  id: string;
  title: string;
  badge?: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  repositoryLinks?: { label: string; url: string }[];
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
  period?: string;
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
    headline: "Information Systems Student at Telkom University | Web & Mobile Developer",
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
      id: "wibuflix",
      title: "Wibuflix",
      badge: "Personal project",
      description:
        "A deployed anime streaming project built for personal use, with a React Native app and a separate Node.js/Express server. The app and backend are both functional; access is currently private to me.",
      tags: ["React Native", "Expo", "TypeScript", "Node.js", "Express", "Azure"],
      repositoryLinks: [
        { label: "Server repository", url: "https://github.com/FyyFzn/wibuflix" },
        { label: "App repository", url: "https://github.com/FyyFzn/wibuflix-app" },
      ],
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
      description:
        "Studying software engineering, database management systems, web applications, and system analysis. Actively developing hands-on independent projects alongside academic coursework.",
    },
  ],
};
