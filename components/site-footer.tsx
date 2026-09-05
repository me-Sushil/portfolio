import Image from "next/image";
import Link from "next/link";
import { BriefcaseBusiness, Code2, Mail } from "lucide-react";
import { email, navItems, socials } from "@/lib/data";

const sitemap = [
  { label: "Home", href: "/" },
  ...navItems,
  { label: "Support", href: "/millionaire" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
              Start a conversation
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight">
              Have a thoughtful idea?
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              Send a note and it will arrive in Sushil&apos;s personal inbox.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-85"
            >
              Get in touch
            </Link>
          </div>
          <nav className="grid grid-cols-2 gap-6 text-sm sm:justify-items-end">
            <div className="flex flex-col gap-2">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Sitemap
              </p>
              {sitemap.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-border px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <span className="relative flex size-8 items-center justify-center overflow-hidden rounded-full border border-accent/40 bg-secondary">
            <Image
              src="/personallogo.png"
              alt=""
              fill
              className="object-contain p-1"
              sizes="32px"
            />
          </span>
          <span>© 2026 Sushil Bishowkarma · Lalitpur, Nepal</span>
        </div>
        <div className="flex gap-5">
          <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Code2 className="size-4" />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <BriefcaseBusiness className="size-4" />
          </a>
          <a href={`mailto:${email}`} aria-label="Email">
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
