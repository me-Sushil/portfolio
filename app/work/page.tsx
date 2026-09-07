import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/ui-bits";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work - Sushil Bishowkarma",
  description: "Selected projects by Sushil Bishowkarma spanning AI, Web3, and product engineering.",
};

export default function WorkPage() {
  return (
    <>
      <SiteNav />
      <main className="mx-auto max-w-7xl px-5 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-48">
        <PageHeader
          eyebrow="Work"
          title="Made with intent."
          description="A selection of shipped products, experiments, and open-source work - spanning AI, blockchain, and full-stack product engineering."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
