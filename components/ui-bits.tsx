import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-7 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
      <span className="size-2 rounded-full bg-accent" />
      {children}
    </div>
  );
}

export function ArrowLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const className =
    "group inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-medium";
  const icon = (
    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
        {icon}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
      {icon}
    </Link>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground">
      {children}
    </span>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="mb-16">
      <SectionLabel>{eyebrow}</SectionLabel>
      <h1 className="max-w-4xl text-balance font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-7xl">
        {title}
      </h1>
      {description && (
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
