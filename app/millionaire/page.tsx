import type { Metadata } from "next";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/ui-bits";
import { email } from "@/lib/data";

export const metadata: Metadata = {
  title: "Support — Sushil Bishowkarma",
  description: "A public, playful invitation to support Sushil Bishowkarma's independent work.",
};

export default function MillionairePage() {
  return (
    <>
      <SiteNav />
      <main className="mx-auto max-w-7xl px-5 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-48">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <PageHeader
            eyebrow="Make me millionaire / Personal manifesto"
            title={
              <>
                I&apos;m building a life
                <br />
                with <em className="text-accent">more possibility.</em>
              </>
            }
          />
          <div className="mb-16 max-w-sm">
            <Sparkles className="mb-6 size-7 text-accent" />
            <p className="leading-7 text-muted-foreground">
              A public, playful invitation to support useful ideas, focused
              craft, and the next chapter of an independent builder from Nepal.
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_0.72fr]">
          <div className="rounded-2xl bg-accent p-8 text-accent-foreground sm:p-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em]">
              The manifesto
            </p>
            <h2 className="mt-12 max-w-xl text-4xl font-medium tracking-tight sm:text-6xl">
              Make me millionaire — by helping me make more useful things.
            </h2>
            <p className="mt-6 max-w-md leading-7 opacity-80">
              I want to turn curiosity into products, products into
              independence, and independence into more room to teach, build, and
              contribute. If you believe in that direction, you can be part of
              it.
            </p>
            <a
              href={`mailto:${email}?subject=I%20want%20to%20support%20your%20work`}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent-foreground px-5 py-3 text-sm text-accent transition hover:opacity-90"
            >
              Start a conversation <ArrowUpRight className="size-4" />
            </a>
          </div>
          <div className="flex min-h-[360px] flex-col justify-between rounded-2xl border border-border bg-card p-8 sm:p-10">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                Support directly
              </p>
              <h2 className="mt-5 text-2xl">Back the next chapter</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                I&apos;m keeping payment destinations configurable until the
                preferred account or QR is supplied. For now, email me and
                I&apos;ll share the current method.
              </p>
            </div>
            <div className="border-t border-border pt-5">
              <p className="flex items-center gap-2 text-sm">
                <Check className="size-4 text-accent" />
                Focused time for independent products
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm">
                <Check className="size-4 text-accent" />
                Better tools and learning
              </p>
              <a
                href={`mailto:${email}`}
                className="mt-6 inline-flex items-center gap-2 text-sm underline underline-offset-4"
              >
                {email} <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
