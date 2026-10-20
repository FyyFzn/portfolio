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
    <section id="about" className="pt-12 pb-12 sm:pt-16 sm:pb-16 md:pt-32 md:pb-28 fade-in">
      <div className="flex flex-col gap-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {personal.name}
          </h1>
          <p className="mt-4 text-lg font-medium leading-relaxed text-zinc-300 sm:text-xl">
            {personal.headline}
          </p>
        </div>

        <p className="max-w-2xl text-base leading-relaxed text-[var(--text-muted)]">
          {personal.bio}
        </p>

        {personal.location && (
          <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <MapPin className="h-4 w-4" />
            <span>Based in {personal.location}</span>
          </div>
        )}

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#projects"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200 active:scale-95 sm:w-auto"
            >
              Explore Projects
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface-raised)] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[var(--border-hover)] hover:bg-[var(--surface-interactive)] active:scale-95 sm:w-auto"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-2 pt-1 sm:pl-2 sm:pt-0">
            {personal.github && (
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                title="GitHub Profile"
                aria-label="GitHub Profile"
                className="flex h-11 w-11 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-[var(--surface-interactive)] hover:text-white border border-[var(--border)] bg-[var(--surface-raised)]"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            )}
            {personal.email && (
              <a
                href={`mailto:${personal.email}`}
                title="Personal Email"
                aria-label="Send Personal Email"
                className="flex h-11 w-11 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-[var(--surface-interactive)] hover:text-white border border-[var(--border)] bg-[var(--surface-raised)]"
              >
                <Mail className="h-5 w-5" />
              </a>
            )}
            {personal.universityEmail && (
              <a
                href={`mailto:${personal.universityEmail}`}
                title="Telkom University Email"
                aria-label="Send University Email"
                className="flex h-11 w-11 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-[var(--surface-interactive)] hover:text-white border border-[var(--border)] bg-[var(--surface-raised)]"
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
