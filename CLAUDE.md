# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (clears .next cache first)
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

Single-page portfolio built with Next.js App Router. The entire site renders on one page (`app/page.tsx`) composed of four full-width sections in order: `Hero → Projects → AboutSkills → Contact`.

**Component structure:**
- `components/sections/` — full-page sections (Hero, Projects, AboutSkills, Contact)
- `components/layout/` — persistent layout elements (Navbar)
- `components/ui/` — reusable UI primitives (ProjectCard, ThemeToggle, CustomCursor)
- `components/ThemeProvider.tsx` — wraps `next-themes`, applies theme via CSS class, defaults to dark

**Theme system:** CSS custom properties defined in `app/globals.css` — `--background`, `--foreground`, `--surface`, `--muted`, `--accent`, `--border`. Accent color is purple (`#a855f7`). Dark/light variants toggled by `.dark` class. Always reference these tokens via Tailwind (`bg-background`, `text-muted`, etc.), never hardcode colors.

**Fonts:** Geist Sans (`--font-geist-sans`) and Geist Mono (`--font-mono`) loaded via `next/font/google` and exposed as CSS variables consumed by Tailwind's `@theme`.

**Tailwind v4:** Uses the new `@import "tailwindcss"` + `@theme` approach in `globals.css`. Tailwind scans `components/` and `app/` via `@source` directives.

**Animation:** Motion (`motion/react`) is the standard. Import from `"motion/react"`, not `"framer-motion"`. Use `useScroll`, `useTransform`, `motion.*` components for scroll-driven and entrance animations. Keep motion tasteful — subtle entrance/scroll effects, not flashy.

## Design Constraints

- Avoid generic SaaS/template aesthetics — no weak gradients, excessive glassmorphism, or overdecorated UI
- Prefer strong typography, clear spacing, and visual hierarchy over decoration
- Animations should feel premium and restrained; avoid noise or excess
- All layouts must be fully responsive (mobile, tablet, desktop)
- Maintain semantic HTML and accessibility
- Keep dependencies minimal — do not add new packages unless clearly necessary
- For larger UI tasks: plan structure and visual direction first, then implement
