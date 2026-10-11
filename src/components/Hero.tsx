import { ArrowUpRight, Mail, GraduationCap, MapPin } from "lucide-react";
import { GithubIcon } from "./Icons";

interface HeroProps {
  personal: {
    name: string;
    headline: string;
    bio: string;
    location?: string;
    email?: string;
    universityEmail?: string;
    github?: string;
  };
}

export function Hero({ personal }: HeroProps) {
  return (
    <section id="about" className="pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="flex flex-col gap-6">
        <div className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for new opportunities & collaborations
        </div>

        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </h1>
          <p className="mt-3 text-lg font-medium text-zinc-300 sm:text-xl">
            {personal.headline}
          </p>
        </div>

        <p className="max-w-2xl text-base leading-relaxed text-zinc-400">
          {personal.bio}
        </p>

        {personal.location && (
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <MapPin className="h-4 w-4 text-indigo-400" />
            <span>Based in {personal.location}</span>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
          >
            Explore Projects
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
          >
            Contact Me
          </a>

          <div className="flex items-center gap-2 pl-2">
            {personal.github && (
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                title="GitHub Profile"
                aria-label="GitHub Profile"
                className="rounded-lg p-2.5 text-zinc-400 transition hover:bg-zinc-900 hover:text-zinc-100 border border-zinc-800/80 bg-zinc-900/40"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            )}
            {personal.email && (
              <a
                href={`mailto:${personal.email}`}
                title="Personal Email"
                aria-label="Send Personal Email"
                className="rounded-lg p-2.5 text-zinc-400 transition hover:bg-zinc-900 hover:text-zinc-100 border border-zinc-800/80 bg-zinc-900/40"
              >
                <Mail className="h-5 w-5" />
              </a>
            )}
            {personal.universityEmail && (
              <a
                href={`mailto:${personal.universityEmail}`}
                title="Telkom University Email"
                aria-label="Send University Email"
                className="rounded-lg p-2.5 text-zinc-400 transition hover:bg-zinc-900 hover:text-zinc-100 border border-zinc-800/80 bg-zinc-900/40"
              >
                <GraduationCap className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
