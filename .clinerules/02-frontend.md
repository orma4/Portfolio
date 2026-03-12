---
paths:
  - "app/**"
  - "src/**"
  - "components/**"
  - "pages/**"
  - "styles/**"
---

# Frontend Implementation Rules

## Components

- Use functional React components only.
- Use TypeScript props interfaces or type aliases.
- Keep components small and focused.
- Extract repeated UI into reusable components.

## Styling

- Use Tailwind CSS first.
- Prefer utility classes over custom CSS when practical.
- Use a consistent spacing rhythm.
- Use responsive classes deliberately, not randomly.
- Avoid long unstructured class strings when a small reusable component would be better.

## Animation

- Prefer Motion for:
  - fade/slide entrances
  - hover/tap interactions
  - layout transitions
  - staggered reveals
  - simple scroll-based reveals
- Keep durations and easing consistent across the project.
- Animations should feel smooth and premium, not bouncy and childish unless explicitly desired.

## Accessibility

- Use semantic HTML.
- Preserve keyboard navigation.
- Keep contrast and readability strong.
- Respect reduced-motion preferences when possible.

## Portfolio-Specific Guidance

- Recruiters should understand who I am and what I build within seconds.
- Hero section must be clear and visually strong.
- Project cards must look polished and easy to scan.
- Contact CTA should be obvious and professional.
- Every section should contribute to credibility.
