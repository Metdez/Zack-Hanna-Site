# Zack Hanna — Portfolio Site

> A cinematic, editorial single-page portfolio for **Zack Hanna** — sophomore, builder, AI strategist. Dark-mode by default, heavy on typography, layered motion, and ambient video. Built to land a Summer 2026 AI strategy internship at a serious company.

**Live:** [zackhanna.com](https://zackhanna.com) · **Repo:** [Metdez/Zack-Hanna-Site](https://github.com/Metdez/Zack-Hanna-Site)

---

## What this is

A marketing-grade landing page, not a template. Everything on it is hand-authored and tuned:

- **Cinematic hero** with a per-character display-font entrance animation (Fraunces variable font, opsz/SOFT/WONK axes in motion)
- **A scannable "what I'm looking for" spec sheet** in the hero so referrers can match Zack to opportunities in their network in 5 seconds — no scrolling required
- **Two full-bleed ambient video sections** — one between the hero and the narrative, one as the outro. Both autoplay, loop, and are silent. The outro lazy-plays on scroll via `IntersectionObserver` so the bytes don't load until the viewer is actually there.
- **Smooth, physics-based scroll** via [Lenis](https://github.com/studio-freight/lenis)
- **Layered fluid background** — radial gradient mesh + grain overlay + custom `fluid-panel` / `fluid-media-shell` glass surfaces
- **Scroll-triggered reveals** via [`motion`](https://motion.dev/) (Framer Motion v12)
- **Custom design token system** — `ink` / `pearl` / `ash` / `accent` (gold) defined in `app/globals.css`, not stock Tailwind
- **Three distinctive typefaces** — Fraunces (display), Inter (body), JetBrains Mono (utility). No generic system stacks.

## Stack

| Layer | Tech |
| --- | --- |
| Framework | **Next.js 16.2.3** (App Router, Turbopack) |
| Runtime | **React 19.2.4** |
| Language | **TypeScript 5** (strict) |
| Styling | **Tailwind CSS v4** via `@tailwindcss/postcss` |
| Motion | `motion` v12 (Framer Motion) |
| Smooth scroll | `lenis` v1 |
| Fonts | `next/font/google` — Fraunces · Inter · JetBrains Mono |

No test suite. No lint script. No CMS. No backend. Static, end to end.

## Page architecture

The entire site is composed in [`app/page.tsx`](zack-hanna/app/page.tsx) as a single vertical sequence:

```
Hero           →  name, pitch, CTAs, spec sheet, portrait
AmbientLoop    →  full-bleed silent motion study (between hero and narrative)
WhatIDo        →  Licom AI intro
Projects       →  CST Logistics, Private Credit, MGMT 305, Valor Tax, Licom AI
HowIWork       →  process
LookingFor     →  Summer 2026 role narrative
About          →  personal context
Contact        →  ways to reach out
OutroLoop      →  full-bleed silent motion study (page outro, lazy-played)
```

Section components live in [`components/sections/`](zack-hanna/components/sections). Shared pieces (`Nav`, `Reveal`, `SectionLabel`, `FluidBackground`, `SmoothScroll`, `LookingForSpec`) live in [`components/`](zack-hanna/components).

Project data is static and lives in [`lib/projects.ts`](zack-hanna/lib/projects.ts) — the only "data layer" in the repo.

### The design system, at a glance

Tokens in [`app/globals.css`](zack-hanna/app/globals.css):

```css
--ink:    #000000   /* page base */
--void:   #070708   /* depth */
--smoke:  #13131a
--mist:   #1d1d24
--pearl:  #f5f3ef   /* foreground */
--ash:    #8a8a93   /* secondary */
--accent: #c9a961   /* muted gold */
```

Plus `fluid-base` / `fluid-depth` radial mesh variables, `fluid-panel` and `fluid-media-shell` glass utilities, and a grain overlay generated from inline SVG `feTurbulence`.

### Ambient video pattern

The two video sections — [`AmbientLoop.tsx`](zack-hanna/components/sections/AmbientLoop.tsx) and [`OutroLoop.tsx`](zack-hanna/components/sections/OutroLoop.tsx) — use the same full-bleed pattern:

```tsx
<section className="relative w-screen left-1/2 -translate-x-1/2 h-screen overflow-hidden motion-reduce:hidden">
  <video className="absolute inset-0 h-full w-full object-cover"
         src="/ambient-loop.mp4" autoPlay loop muted playsInline
         aria-hidden="true" tabIndex={-1} />
  {/* ink-wash gradients top/bottom to fuse edges into the page */}
</section>
```

Key details:
- `muted` + `playsInline` are **mandatory** — without both, iOS Safari and Chrome block autoplay
- `aria-hidden` + `tabIndex={-1}` because the video is purely decorative
- `motion-reduce:hidden` so users with `prefers-reduced-motion` never see autoplaying video
- The **outro** additionally triple-silences the element (`video.muted = true`, `video.volume = 0`, re-applied on every play event) and uses an `IntersectionObserver` with `threshold: 0.25` to `.play()` / `.pause()` on scroll — the 9 MB file isn't even fetched until the section nears the viewport

## Getting started

```bash
git clone https://github.com/Metdez/Zack-Hanna-Site.git
cd Zack-Hanna-Site
npm install
npm run dev
```

Then open **http://localhost:3000**.

### Scripts

```bash
npm run dev        # next dev — local dev server
npm run build      # next build — production build (run before shipping)
npm start          # next start — serve the production build
npx tsc --noEmit   # typecheck only (no alias)
```

There is intentionally no `lint` script and no test suite — this is a marketing site, not an app.

## Editing the site

| Want to change… | Edit… |
| --- | --- |
| Name, pitch, CTAs, spec sheet | [`components/sections/Hero.tsx`](zack-hanna/components/sections/Hero.tsx) |
| Role / term / compensation / location spec | [`components/LookingForSpec.tsx`](zack-hanna/components/LookingForSpec.tsx) *(shared — updates both the hero and the "What I'm Looking For" section)* |
| Projects shown in the grid | [`lib/projects.ts`](zack-hanna/lib/projects.ts) |
| Section order / add / remove | [`app/page.tsx`](zack-hanna/app/page.tsx) |
| Colors / type tokens / backgrounds | [`app/globals.css`](zack-hanna/app/globals.css) |
| Video loops | Replace `public/ambient-loop.mp4` or `public/outro-loop.mp4` |
| Resume PDF | Replace `public/resume.pdf` |
| Nav links | [`components/Nav.tsx`](zack-hanna/components/Nav.tsx) |

## Conventions

- **Server components by default.** Add `"use client"` only when a component needs hooks, refs, or browser APIs (e.g. `SmoothScroll`, `FluidBackground`, `Reveal`, `AmbientLoop`, `OutroLoop`).
- **Use the `@/` path alias** for cross-directory imports, not relative `../../`.
- **One animation library.** Don't add a second — `motion` + Lenis cover every case on this site.
- **Check [`app/globals.css`](zack-hanna/app/globals.css) before inventing new color classes.** The token set is deliberately small.
- **This is not the Next.js you know.** Next 16 has breaking changes. Before touching routing, metadata, fonts, or caching code, read the relevant guide under `node_modules/next/dist/docs/`.

## Accessibility

- All interactive elements have visible focus rings against the `ink` background
- Decorative video is `aria-hidden` and removed from the tab order
- `prefers-reduced-motion` hides both ambient video sections entirely
- Color contrast: `pearl` on `ink` is ~AAA; `ash` on `ink` is used only for secondary metadata at ≥11px mono-caps
- Semantic HTML — real `<section>`, `<dl>`/`<dt>`/`<dd>` for the spec sheet, real heading hierarchy

## Performance

- Static prerender (`○ (Static)` in `next build` output) — no per-request work
- `next/font` for Fraunces / Inter / JetBrains Mono — zero layout shift, self-hosted
- `next/image` for all raster project screenshots
- Outro video lazy-plays on `IntersectionObserver` — ~9 MB not fetched on initial load
- No third-party trackers, no cookie banner, no client-side data fetching
- Grain overlay disabled on `max-width: 768px` to save mobile paint cost

## License

Personal portfolio — all rights reserved. Source is public so it can be read and learned from, but the copy, design, photography, and project content are Zack's. If you want to fork the *structure* for your own portfolio, go ahead — just don't ship it with his name on it.

---

Built by Zack Hanna · Portfolio · 2026
