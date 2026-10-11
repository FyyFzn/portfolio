import { Mail, GraduationCap, MessageSquare, ArrowRight } from "lucide-react";
import { GithubIcon } from "./Icons";

interface ContactProps {
  email?: string;
  universityEmail?: string;
  github?: string;
}

export function Contact({ email, universityEmail, github }: ContactProps) {
  return (
    <section id="contact" className="py-16 border-t border-zinc-800/80">
      <div className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/70 via-zinc-900/40 to-zinc-950 p-8 sm:p-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs uppercase tracking-wider">
            <MessageSquare className="h-4 w-4" />
            <span>Connect</span>
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
            Let&apos;s build something great together.
          </h2>
          <p className="mt-3 text-zinc-400">
            Open for project discussions, academic collaborations, or software development opportunities.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {email && (
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
              >
                <Mail className="h-4 w-4" />
                <span>Personal Email</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            )}

            {universityEmail && (
              <a
                href={`mailto:${universityEmail}`}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/80 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:bg-zinc-800 hover:text-white"
              >
                <GraduationCap className="h-4 w-4 text-indigo-400" />
                <span>Tel-U Email</span>
              </a>
            )}

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/80 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:bg-zinc-800 hover:text-white"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub Profile</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
