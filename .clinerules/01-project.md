# Portfolio Project Rules

## Goal

Build a premium personal portfolio website that impresses employers and recruiters.

## Core Priorities

- Prioritize strong first impression, clear hierarchy, polished visuals, and smooth UX.
- The site should feel premium, modern, memorable, and intentionally designed.
- Prefer clean, bold, high-quality design over generic templates.
- Every section should support the goal of presenting me as a strong candidate.

## Tech Stack

- Use React with TypeScript.
- Use TypeScript for all new files.
- Use strict typing. Avoid `any` unless absolutely necessary.
- Prefer Next.js for the portfolio unless explicitly told otherwise.
- Use Tailwind CSS for styling by default.
- Use CSS Modules or plain CSS only when Tailwind is clearly not the best fit.
- Do not add Sass/SCSS unless explicitly requested.

## Animation Rules

- Default to Motion for React animations.
- Use animations to improve perceived quality, hierarchy, and delight.
- Prefer subtle, tasteful, smooth motion over flashy or distracting motion.
- Avoid excessive animation noise.
- Use GSAP only if a section truly needs complex timeline choreography or advanced scroll-driven effects that Motion is not ideal for.
- Do not introduce both Motion and GSAP without a clear reason.

## Design Rules

- Aim for premium typography, strong spacing, and clear visual hierarchy.
- Avoid generic AI-looking SaaS design.
- Avoid weak gradients, excessive glassmorphism, and overdecorated UI.
- Prefer a cohesive visual system: spacing scale, type scale, radii, shadows, and consistent interactions.
- Use color with restraint.
- The final result should feel custom, not like a template.

## UX Rules

- Fully responsive across mobile, tablet, and desktop.
- Prioritize readability and scannability.
- Keep navigation simple and clear.
- Include polished hover, focus, and transition states.
- Maintain good accessibility and semantic HTML.

## Performance Rules

- Keep bundle size reasonable.
- Avoid unnecessary dependencies.
- Prefer performant animation patterns.
- Optimize images and assets.
- Preserve good Lighthouse-style performance where practical.

## Code Quality

- Use reusable components when it improves maintainability.
- Keep components focused and not overly large.
- Prefer clear naming and simple composition.
- Do not create unnecessary abstraction.
- Keep folder and component structure tidy.

## Workflow

- For larger tasks, first propose a short plan before coding.
- When building UI, first define the structure and visual direction, then implement.
- When making major UI changes, verify layout, spacing, responsiveness, and animation quality.
- Summarize what changed after implementation.
