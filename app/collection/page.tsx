import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader, Pill } from "@/components/ui-bits";
import { collection, moreRepos, socials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Collection — Sushil Bishowkarma",
  description: "A living archive of coins, rare things, personal objects, and digital experiments.",
};

export default function CollectionPage() {
  return (
    <>
      <SiteNav />
      <main className="mx-auto max-w-7xl px-5 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-48">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <PageHeader
            eyebrow="Collection / A categorized archive"
            title={
              <>
                Things I&apos;ve
                <br />
                <em className="text-accent">kept close.</em>
              </>
            }
            description="A living archive of coins, old currency, rare things, personal objects, digital experiments, and the stories that make them worth keeping."
          />
          <div className="mb-16 rounded-2xl border border-border bg-card p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
              Archive note
            </p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Every item here is connected to a real project, course, article,
              or repository. Open a card to explore the original work.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {collection.map((item, i) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                <Image
                  src={item.image}
                  alt={`${item.name} collection cover`}
                  fill
                  className="object-cover object-top transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 font-mono text-[10px] uppercase tracking-widest">
                  0{i + 1}
                </span>
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                      {item.tag}
                    </p>
                    <h2 className="mt-3 text-2xl tracking-tight">{item.name}</h2>
                  </div>
                  <a href={item.url} target="_blank" rel="noreferrer" aria-label={`Open ${item.name}`}>
                    <ArrowUpRight className="size-5 text-muted-foreground" />
                  </a>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            More repositories
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {moreRepos.map((repo) => (
              <a key={repo} href={socials.github} target="_blank" rel="noreferrer">
                <Pill>
                  {repo} <MoveUpRight className="ml-1 inline size-3" />
                </Pill>
              </a>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
