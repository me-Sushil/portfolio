# Restructure guide

## What changed

**Before:** one giant `components/portfolio-shell.tsx` exporting three page
components, with most content only reachable via `#anchor` scroll links on
the home page.

**After:** every nav item is a real route, content lives in one data file,
and the header/footer/cards are shared components instead of copy-pasted
JSX.

```
app/
  page.tsx            → Home (hero + short teasers, links out to each page)
  about/page.tsx       → Bio, skills, education, certifications
  experience/page.tsx  → Full role timeline
  work/page.tsx         → All projects
  collection/page.tsx   → Same content as before, using shared components
  writing/page.tsx      → Medium posts + volunteering
  contact/page.tsx      → Dedicated contact page with the form
  millionaire/page.tsx  → Same "support" page, using shared components
  layout.tsx             → Root layout, expanded metadata + OpenGraph
  sitemap.ts / robots.ts → New — basic SEO plumbing
components/
  site-nav.tsx     → Header, now route-aware (highlights the active page)
  site-footer.tsx  → Footer, now a sitemap instead of a duplicate contact form
  contact-form.tsx → EmailJS form, used only on /contact
  project-card.tsx → Extracted project card
  ui-bits.tsx      → SectionLabel, ArrowLink, Pill, PageHeader
lib/
  data.ts    → Every array/object that used to live in portfolio-shell.tsx
  utils.ts   → cn() helper, unchanged
```

`components/portfolio-shell.tsx` is no longer used — delete it once you've
copied these files in.

## Why this structure

- **Real URLs.** `/about`, `/work`, `/experience` etc. are shareable,
  bookmarkable, and indexable — anchor links inside a single page aren't.
- **One source of truth.** All copy — job history, project descriptions,
  skills — lives in `lib/data.ts`. Update your resume once, every page that
  references it updates.
- **No duplicated markup.** The header and footer were copy-pasted three
  times in the original file; now they're each one component.
- **SEO basics.** Each route now has its own `<title>`/`<meta description>`,
  and there's a generated `sitemap.xml` + `robots.txt`.

## Setup steps

1. **Copy files in.** Drop this `app/`, `components/`, and `lib/` into your
   existing project, overwriting the old versions. Keep your existing
   `next.config.mjs`, `tsconfig.json`, `postcss.config.mjs`,
   `components.json`, and `pnpm-workspace.yaml` — those weren't changed.
2. **Delete the old shell.** Remove `components/portfolio-shell.tsx`.
3. **Install dependencies** (if you haven't already):
   ```bash
   pnpm install
   ```
4. **Environment variables.** The contact form needs three EmailJS values.
   Create `.env.local` in the project root:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
5. **Update the metadata base URL.** In `app/layout.tsx` and `app/sitemap.ts`,
   swap `https://sushilbishowkarma.com` for your real deployed domain (or
   remove `metadataBase` if you don't have one yet).
6. **Run it:**
   ```bash
   pnpm dev
   ```
   Check every route: `/`, `/about`, `/experience`, `/work`, `/collection`,
   `/writing`, `/contact`, `/millionaire`.
7. **Deploy** as usual (Vercel will pick up `sitemap.ts`/`robots.ts`
   automatically).

## Optional next steps

- Add per-project detail pages (`/work/[slug]`) if you want deep links and
  richer case studies instead of a card grid.
- Add `alt` text variety and `next/image` `priority` only on the hero image
  (already done) — avoid marking below-the-fold images as priority.
- Consider moving `moreRepos`/`collection` fetch to a CMS or your GitHub API
  later if you want it to stay current without manual edits.
