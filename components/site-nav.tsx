"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  BriefcaseBusiness,
  Code2,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { navItems, socials } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 shadow-[0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="relative flex size-11 items-center justify-center overflow-hidden rounded-full border border-accent/40 bg-secondary shadow-[0_0_24px_rgba(0,153,255,0.2)]">
            <Image
              src="/personallogo.png"
              alt="Sushil Bishowkarma personal logo"
              fill
              className="object-contain p-1"
              sizes="44px"
            />
          </span>
          <span className="hidden font-mono text-lg uppercase tracking-[0.22em] text-muted-foreground transition-colors group-hover:text-foreground sm:block">
            Sushil Bishowkarma
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-lg transition-colors hover:text-foreground",
                  active ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/millionaire"
            className="mr-1 inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-lg font-medium text-accent-foreground transition hover:opacity-90"
          >
            <Sparkles className="size-3.5" />
            Support
          </Link>
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
          >
            <Code2 className="size-7" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
          >
            <BriefcaseBusiness className="size-7" />
          </a>
        </div>

        <button
          className="rounded-lg p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-5 py-4 md:hidden">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
          >
            Home
          </Link>
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/millionaire"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-3 text-sm font-medium text-accent-foreground"
          >
            <Sparkles className="size-4" />
            Support
          </Link>
        </nav>
      )}
    </header>
  );
}
