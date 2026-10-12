"use client";

import { useState } from "react";
import { FolderGit2, ArrowUpRight } from "lucide-react";
import { WibuflixCaseStudy } from "./WibuflixCaseStudy";
import { GithubIcon } from "./Icons";
import { Project } from "@/data/portfolio";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const [showWibuflixCaseStudy, setShowWibuflixCaseStudy] = useState(false);

  return (
    <section id="projects" className="py-16 border-t border-[var(--border)] fade-in">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider">
          <FolderGit2 className="h-4 w-4" />
          <span>Work Showcase</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Featured Projects
        </h2>
        <p className="text-[var(--text-muted)] max-w-xl">
          Personal and academic work across mobile apps, backend services, and web development.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface-raised)] p-6 transition-all duration-200 hover:border-[var(--border-hover)] hover:shadow-lg hover:shadow-white/5 active:scale-[0.99]"
          >
            {project.id === "wibuflix" && (
              <button
                type="button"
                onClick={() => setShowWibuflixCaseStudy(true)}
                aria-label="Open Wibuflix project details"
                aria-haspopup="dialog"
                className="absolute inset-0 z-0 cursor-pointer rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              />
            )}
            <div className={`relative z-10 ${project.id === "wibuflix" ? "pointer-events-none" : ""}`}>
              <div className="flex items-center justify-between gap-2 mb-3">
                {project.badge && (
                  <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold text-white">
                    {project.badge}
                  </span>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="rounded-lg p-1.5 text-zinc-400 transition hover:bg-[var(--surface-interactive)] hover:text-white"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                )}
              </div>

              <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                {project.title}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-muted)]">
                {project.description}
              </p>
            </div>

            <div className={`relative z-10 mt-6 flex flex-col gap-4 ${project.id === "wibuflix" ? "pointer-events-none" : ""}`}>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-[var(--border)] bg-[var(--surface-interactive)] px-2.5 py-1 text-xs font-semibold text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {(project.repositoryLinks?.length || project.githubUrl) && (
                <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--border)] pt-3">
                  {project.repositoryLinks?.map((repository) => (
                    <a
                      key={repository.url}
                      href={repository.url}
                      target="_blank"
                      rel="noreferrer"
                      className="relative z-20 inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 transition hover:text-white pointer-events-auto"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      <span>{repository.label}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ))}
                  {!project.repositoryLinks && project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="relative z-20 inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 transition hover:text-white pointer-events-auto"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      <span>View Repository</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {showWibuflixCaseStudy && (
        <WibuflixCaseStudy onClose={() => setShowWibuflixCaseStudy(false)} />
      )}
    </section>
  );
}
