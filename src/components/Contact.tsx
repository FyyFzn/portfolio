import { Mail, GraduationCap, MessageSquare, ArrowRight } from "lucide-react";
import { GithubIcon } from "./Icons";

interface ContactProps {
  email?: string;
  universityEmail?: string;
  github?: string;
}

export function Contact({ email, universityEmail, github }: ContactProps) {
  return (
    <section id="contact" className="py-16 border-t border-[var(--border)]">
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-raised)] p-8 sm:p-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider">
            <MessageSquare className="h-4 w-4" />
            <span>Connect</span>
          </div>
          <h2 className="contact-heading mt-2 text-3xl font-bold tracking-tight text-white">
            Let's build something great together.
          </h2>
          <p className="contact-description mt-3 text-[var(--text-muted)]">
            Open for project discussions, academic collaborations, or software development opportunities.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {email && (
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200 active:scale-95"
              >
                <Mail className="h-4 w-4" />
                <span>Personal Email</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            )}

            {universityEmail && (
              <a
                href={`mailto:${universityEmail}`}
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-interactive)] px-5 py-3 text-sm font-medium text-white transition hover:border-white/50 hover:text-white"
              >
                <GraduationCap className="h-4 w-4 text-white" />
                <span>Tel-U Email</span>
              </a>
            )}

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-interactive)] px-5 py-3 text-sm font-medium text-white transition hover:border-white/50 hover:text-white"
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
