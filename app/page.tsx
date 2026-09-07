import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ArrowLink, SectionLabel, Pill } from "@/components/ui-bits";
import { ProjectCard } from "@/components/project-card";
import { experience, profile, projects, socials } from "@/lib/data";

export default function HomePage() {
  const featured = projects.slice(0, 3);
  const recentRoles = experience.slice(0, 2);

  return (
    <>
      <SiteNav />
      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 pt-34 lg:grid-cols-[1fr_410px] lg:px-8 lg:pb-32 lg:pt-34">
          <div>
            {/* <p className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Full-stack developer · Nepal
            </p> */}
            <h1 className="max-w-4xl text-balance font-serif text-6xl leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-[7.7rem]">
              Building systems
              <br />
              <em className="text-accent">with purpose.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              {profile.summary}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <ArrowLink href="/work">Explore my work</ArrowLink>
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                GitHub profile <MoveUpRight className="ml-1 inline size-3" />
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[410px]">
            <div className="absolute -inset-3 rounded-[2rem] border border-accent/20" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-card">
              <Image
                src="/meeeeees.png"
                alt="Portrait of Sushil Bishowkarma"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 410px"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-xl border border-border bg-background/90 p-4 backdrop-blur">
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                Currently
              </p>
              <p className="mt-1 text-sm">{profile.currently.role}</p>
              <p className="text-xs text-muted-foreground">
                @ {profile.currently.company} · {profile.currently.location}
              </p>
            </div>
          </div>
        </section>

        {/* About teaser */}
        <section className="border-y border-border bg-secondary/35">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:px-8 lg:py-28">
            <div>
              <SectionLabel>01 / About</SectionLabel>
              <ArrowLink href="/about">Full bio, skills &amp; credentials</ArrowLink>
            </div>
            <div>
              <p className="max-w-3xl text-3xl leading-tight tracking-tight sm:text-5xl">
                Software Engineer focused on the best possible result in every
                endeavor.
              </p>
              <p className="mt-8 max-w-2xl leading-7 text-muted-foreground">
                {profile.bio}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                {profile.highlights.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience teaser */}
        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <SectionLabel>02 / Experience</SectionLabel>
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="font-serif text-5xl leading-none tracking-[-0.04em] sm:text-6xl">
                A practice built
                <br />
                through <em className="text-accent">range.</em>
              </h2>
              <div className="mt-8">
                <ArrowLink href="/experience">See full timeline</ArrowLink>
              </div>
            </div>
            <div>
              {recentRoles.map((item) => (
                <article
                  key={`${item.company}-${item.role}`}
                  className="border-t border-border py-7"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl">{item.role}</h3>
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
          </div>
        </section>

        {/* Featured work */}
        <section className="border-y border-border bg-secondary/30">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <SectionLabel>03 / Featured work</SectionLabel>
                <h2 className="font-serif text-5xl tracking-[-0.04em] sm:text-6xl">
                  Made with intent.
                </h2>
              </div>
              <ArrowLink href="/work">See all projects</ArrowLink>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Collection teaser */}
        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="flex flex-col justify-between gap-10 rounded-2xl border border-border bg-card p-10 lg:flex-row lg:items-end lg:p-14">
            <div>
              <SectionLabel>04 / The archive</SectionLabel>
              <h2 className="max-w-xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
                Coins, rare things, and a decade of small experiments.
              </h2>
            </div>
            <ArrowLink href="/collection">Browse the collection</ArrowLink>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="border-t border-border">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <SectionLabel>05 / Contact</SectionLabel>
            <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
              <h2 className="max-w-3xl text-balance font-serif text-6xl leading-[0.9] tracking-[-0.05em] sm:text-8xl">
                Have a good idea?
                <br />
                <em className="text-accent">Let&apos;s talk.</em>
              </h2>
              <div className="max-w-xs">
                <p className="mb-6 leading-7 text-muted-foreground">
                  For collaborations, conversations, or just saying hello.
                </p>
                <ArrowLink href="/contact">Go to contact page</ArrowLink>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
