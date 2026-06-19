# Spark & Shine Cleaning Services — Website

A luxury, single-page marketing site for **Spark & Shine Cleaning Services**
(owner: Deanna Mazzeo). Built with Next.js 16 (App Router) + Tailwind CSS v4.

## Tech

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** with a custom luxury theme (ivory / navy / champagne gold)
- **next/font** — Playfair Display (headings), Inter (body), Dancing Script (wordmark)
- Zero runtime UI dependencies — animations are pure CSS + a small IntersectionObserver

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm run start    # serve the production build
```

The page is fully static and can be deployed to Vercel, Netlify, or any static host.

## Editing content

**All business info lives in one place:** [`src/lib/site.ts`](src/lib/site.ts).
Edit the `site`, `services`, `reasons`, and `steps` objects there to update phone,
email, owner name, service list, and copy across the entire site.

### Structure

```
src/
  app/
    layout.tsx     # fonts, SEO metadata, viewport
    page.tsx       # section composition + JSON-LD structured data
    globals.css    # theme tokens, components layer, animations
  components/       # Nav, Hero, Services, WhyUs, About, Process, Contact, Footer …
  lib/site.ts      # ← single source of truth for all content
```

## Notes

- The contact section uses direct click-to-call (`tel:`) and email (`mailto:`)
  links, so it works with no backend. To add a form later, drop a new component
  into `Contact.tsx`.
- `metadataBase` in `layout.tsx` is set to a placeholder domain
  (`sparkandshinecleaning.com`); update it once the real domain is live.
- Replace `public/icon.svg` with a real logo/favicon when available.
