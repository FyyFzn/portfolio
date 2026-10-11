import { Layers } from "lucide-react";
import { SkillGroup } from "@/data/portfolio";

interface SkillsProps {
  skills: SkillGroup[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-16 border-t border-zinc-800/80">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs uppercase tracking-wider">
          <Layers className="h-4 w-4" />
          <span>Technical Proficiency</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Skills & Technologies
        </h2>
        <p className="text-zinc-400 max-w-xl">
          Core technical proficiencies across frontend architecture, server environments, and engineering tools.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-sm"
          >
            <h3 className="text-base font-semibold text-zinc-100 mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-zinc-800 bg-zinc-950/80 px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors hover:border-indigo-500/50 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
