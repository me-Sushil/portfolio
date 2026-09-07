import type { Metadata } from "next";
import { MoveUpRight } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/ui-bits";
import { volunteering, writing } from "@/lib/data";

export const metadata: Metadata = {
  title: "Writing - Sushil Bishowkarma",
  description: "Articles and volunteering by Sushil Bishowkarma.",
};

export default function WritingPage() {
  return (
    <>
      <SiteNav />
      <main className="mx-auto max-w-7xl px-5 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-48">
        <PageHeader
          eyebrow="Writing & volunteering"
          title="Notes from the edge."
          description="Long-form writing on architecture and infrastructure, plus mentoring outside of work."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {writing.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-accent"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                Medium · {item.date}
              </p>
              <h3 className="mt-5 text-xl leading-tight">{item.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground">{item.note}</p>
              <MoveUpRight className="mt-8 size-4 text-muted-foreground" />
            </a>
          ))}
          <article className="rounded-2xl border border-border bg-card p-7">
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
              {volunteering.org} · {volunteering.period}
            </p>
            <h3 className="mt-5 text-xl">{volunteering.role}</h3>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {volunteering.detail}
            </p>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
