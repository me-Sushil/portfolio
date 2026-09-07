import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader, Pill } from "@/components/ui-bits";
import { experience } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience - Sushil Bishowkarma",
  description: "Full professional experience timeline of Sushil Bishowkarma.",
};

export default function ExperiencePage() {
  return (
    <>
      <SiteNav />
      <main className="mx-auto max-w-7xl px-5 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-48">
        <PageHeader
          eyebrow="Experience"
          title={
            <>
              A practice built
              <br />
              through <em className="text-accent">range.</em>
            </>
          }
          description="From technical support to founding a product to shipping blockchain-based humanitarian platforms - the roles that shaped how I build."
        />
        <div className="max-w-4xl">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="border-t border-border py-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl">{item.role}</h3>
                  <p className="mt-1 text-accent">{item.company}</p>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {item.period}
                </p>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
                {item.detail}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <Pill key={skill}>{skill}</Pill>
                ))}
              </div>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
