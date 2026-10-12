import { portfolioData } from "@/data/portfolio";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const { personal, projects, skills, experiences } = portfolioData;

  return (
    <div className="app-container min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 antialiased">
      <Navbar name={personal.name} />
      <main className="main-content mx-auto max-w-5xl px-6 pb-20">
        <Hero personal={personal} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Experience experiences={experiences} />
        <Contact
          email={personal.email}
          universityEmail={personal.universityEmail}
          github={personal.github}
        />
      </main>
      <Footer name={personal.name} />
    </div>
  );
}
