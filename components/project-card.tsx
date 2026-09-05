import { ArrowUpRight } from "lucide-react";
import { Pill } from "@/components/ui-bits";
import type { projects } from "@/lib/data";

export function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <article className="group flex min-h-[330px] flex-col justify-between rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent/70">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
            {project.category}
          </p>
          <p className="mt-2 font-mono text-[10px] text-muted-foreground">
            {project.period}
          </p>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.name}`}
        >
          <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
      <div>
        <h3 className="text-2xl tracking-tight">{project.name}</h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Pill key={tech}>{tech}</Pill>
          ))}
        </div>
      </div>
    </article>
  );
}
