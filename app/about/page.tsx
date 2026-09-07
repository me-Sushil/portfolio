import type { Metadata } from "next";
import { MapPin, MoveUpRight } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader, Pill, SectionLabel } from "@/components/ui-bits";
import { certifications, education, profile, skillGroups } from "@/lib/data";

export const metadata: Metadata = {
  title: "About - Sushil Bishowkarma",
  description:
    "Bio, education, certifications, and technical toolkit of Sushil Bishowkarma.",
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main className="mx-auto max-w-7xl px-5 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-48">
        <PageHeader
          // eyebrow="About"
          title={
            <>
              Software Engineer focused on
              <br />
              the best possible <em className="text-accent">result.</em>
            </>
          }
        />
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
            {profile.location} · {profile.timezone}
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              {profile.bio}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {profile.highlights.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <section className="mt-24">
          <SectionLabel>Technical toolkit</SectionLabel>
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(skillGroups).map(([group, skills]) => (
              <div key={group}>
                <h3 className="text-lg">{group}</h3>
                <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                  {skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education + Certifications */}
        <section className="mt-24 grid gap-14 lg:grid-cols-2">
          <div>
            <SectionLabel>Education</SectionLabel>
            <div className="flex flex-col gap-7">
              {education.map((item) => (
                <article key={item.institution} className="border-t border-border pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg">{item.institution}</h3>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {item.grade}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-accent">{item.degree}</p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {item.period}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <SectionLabel>Certifications</SectionLabel>
            <div className="flex flex-col gap-5">
              {certifications.map((item) => (
                <article key={item.name} className="border-t border-border pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg">{item.name}</h3>
                      <p className="mt-1 text-sm text-accent">{item.issuer}</p>
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {item.date}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.note}
                  </p>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-xs underline underline-offset-4"
                    >
                      View credential <MoveUpRight className="size-3" />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
