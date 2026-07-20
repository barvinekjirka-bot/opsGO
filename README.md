# OpsGo — Website

Premium, dark-mode, scroll-driven marketing site for OpsGo (boutique supply
chain / operations consulting), built with Next.js 15 App Router, TypeScript,
Tailwind CSS, and Framer Motion.

Bilingual: **Czech (default) + English**, toggled via the CZ/EN switch in the
navbar. All copy lives in `lib/copy.ts`; the active language persists in
`localStorage`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What to plug in before launch

1. **Hero video** — drop a looping operations reel (warehouse floor, conveyor,
   scanning, forklifts) at `public/videos/operations-loop.mp4`, plus a poster
   frame at `public/hero-poster.jpg`. The `<video>` tag in
   `components/Hero.tsx` is already wired for both.
2. **Founders** — `lib/copy.ts` has Jiří Barvínek's full bio (CZ + EN).
   Juraj Komár has a placeholder card with the same structure (summary,
   experience timeline, achievement stats) — drop his CV content in once
   it's ready.
3. **Case studies** — six placeholder tiles in `lib/copy.ts`
   (`caseStudies.cases`). Replace `desc` copy with real, numbers-backed
   write-ups as projects close, and link each tile to a full case page.
4. **Contact form** — `components/Contact.tsx` currently only sets local
   state on submit. Wire `handleSubmit` to your form endpoint / CRM
   (e.g. a Next.js Route Handler, Formspree, HubSpot).
5. **Booking link** — replace the `href="#"` on the booking CTA with your
   real Calendly/Cal.com link (appears in `Navbar.tsx`, `Hero.tsx`, and
   `Contact.tsx`).
6. **Domain-specific links** — LinkedIn URL and the `hello@opsgo.cz`
   email in `lib/copy.ts` (update once the real domain is registered).

## Structure

```
app/
  layout.tsx       — fonts (Space Grotesk / Inter / IBM Plex Mono / Instrument Serif), metadata, LanguageProvider
  page.tsx         — composes all sections
  globals.css      — design tokens, liquid-glass utility, reduced-motion
lib/
  copy.ts          — ALL site copy, Czech + English
  i18n.tsx         — language context, CZ default, localStorage persistence
components/
  Navbar.tsx        — floating glass nav + CZ/EN toggle
  Hero.tsx          — scroll-linked fade/slide hero + ops-readout ticker
  WhyUs.tsx          — what to expect vs. not expect from us
  WhoWeHelpWhatWeDo.tsx — segments + services bento grid
  HowWeWork.tsx      — scroll-reactive 5-step timeline
  Methods.tsx        — Lean / Six Sigma / SCOR / PRINCE2 etc. methodology grid
  BusinessModel.tsx  — pricing tiers
  ImpactMetrics.tsx  — measurable improvement examples
  Founders.tsx       — Who We Are: Jiří Barvínek + Juraj Komár
  CaseStudies.tsx    — case study bento grid
  Contact.tsx        — form + contact channels
  Footer.tsx
```

## Design tokens

- Background: `#030303`
- Signal accent (used sparingly — KPIs, active states, primary CTA):
  `#FF7A1A`
- Glass card: `bg-white/[0.02]` + `border-white/10` + `backdrop-blur-xl`
- Display font: Space Grotesk · Body: Inter · Data/labels: IBM Plex Mono ·
  Luxury accent (italic hero highlight): Instrument Serif
