import { FolderGit2, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import { Project } from "@/data/portfolio";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-16 border-t border-zinc-800/80">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs uppercase tracking-wider">
          <FolderGit2 className="h-4 w-4" />
          <span>Work Showcase</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Featured Projects
        </h2>
        <p className="text-zinc-400 max-w-xl">
          Independent and coursework projects demonstrating full-stack architecture, cross-platform mobile UI, and backend services.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800/90 bg-zinc-900/50 p-6 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900/80 hover:shadow-lg hover:shadow-black/40"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                {project.badge && (
                  <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-0.5 text-[11px] font-medium text-indigo-300">
                    {project.badge}
                  </span>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="rounded-lg p-1.5 text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                )}
              </div>

              <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-zinc-800/80 bg-zinc-800/60 px-2.5 py-1 text-xs font-medium text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 transition hover:text-indigo-400 pt-3 border-t border-zinc-800/80"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>View Repository</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
