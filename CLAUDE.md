@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Critical: Next.js version

This project runs **Next.js 16.2.3 + React 19.2.4**. APIs, conventions, and file layout may differ from older Next.js knowledge in your training data. **Before writing or changing Next.js code (routing, layouts, metadata, Suspense/streaming, server vs client components, caching, fonts), read the relevant guide under `node_modules/next/dist/docs/`** — start from `index.md` and drill into `01-app/` or `03-architecture/`. Heed deprecation notices and any `AI agent hint` comments in those docs (e.g. `unstable_instant` for instant navigation).

## Commands

```bash
npm run dev        # next dev — local dev server at http://localhost:3000
npm run build      # next build — production build (run before reporting completion)
npm start          # next start — serve the production build
npx tsc --noEmit   # typecheck only (no script alias; run directly)
```

There is no lint script and no test suite configured.

## Architecture

Single-page marketing site for Zack Hanna. App Router only.

- `app/layout.tsx` — root layout. Loads Google fonts (Fraunces / Inter / JetBrains Mono) as CSS variables, wires global `FluidBackground`, `SmoothScroll`, and `Nav` around all children. Body uses Tailwind utility classes `bg-ink text-pearl grain` — these are custom tokens defined in `app/globals.css`, not default Tailwind colors.
- `app/page.tsx` — composes the landing page as a fixed vertical sequence of section components from `components/sections/` (Hero → WhatIDo → Projects → HowIWork → LookingFor → About → Contact). To reorder or add sections, edit this file.
- `components/` — shared UI (`Nav`, `Reveal`, `SectionLabel`, `FluidBackground`, `SmoothScroll`). `SmoothScroll` wraps the page with Lenis-based smooth scrolling; `FluidBackground` and `Reveal` use `motion` (Framer Motion v12) for animations.
- `components/sections/` — one component per landing-page section. `Projects.tsx` renders data from `lib/projects.ts` via `ProjectCard.tsx`.
- `lib/projects.ts` — static project data (the only "data layer" in the repo).
- Path alias: `@/*` maps to the project root (see `tsconfig.json`), so imports look like `@/components/sections/Hero`.

Styling is **Tailwind CSS v4** via `@tailwindcss/postcss` (see `postcss.config.mjs`). Design tokens (`ink`, `pearl`, `grain`, font variables) live in `app/globals.css` — check there before inventing new color classes.

## Conventions

- All section components are server components by default; add `"use client"` only when a component needs hooks, refs, or browser APIs (SmoothScroll, FluidBackground, Reveal likely fall in this bucket).
- Use the `@/` path alias for cross-directory imports, not relative `../../`.
- Animations: `motion` (v12, imported as `motion/react`) and Lenis for scroll. Don't add a second animation library.
