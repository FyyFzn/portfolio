import { GraduationCap } from "lucide-react";
import { Experience as ExperienceType } from "@/data/portfolio";

interface ExperienceProps {
  experiences: ExperienceType[];
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="py-16 border-t border-zinc-800/80">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs uppercase tracking-wider">
          <GraduationCap className="h-4 w-4" />
          <span>Academic Background</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Education & Trajectory
        </h2>
        <p className="text-zinc-400 max-w-xl">
          Formal academic foundation and software engineering trajectory.
        </p>
      </div>

      <div className="mt-8 relative border-l border-zinc-800 pl-6 space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative">
            {/* Timeline dot */}
            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-indigo-500 bg-zinc-950" />
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-lg font-semibold text-zinc-100">
                {exp.role}
              </h3>
              <span className="text-xs font-medium text-zinc-400 sm:text-right">
                {exp.period}
              </span>
            </div>
            <p className="text-sm font-medium text-indigo-400 mt-0.5">
              {exp.organization}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
