# CLAUDE.md

Project memory for Claude Code / Cowork. Read this first, then `AGENTS.md`, then the
relevant file under `docs/`. This file is the source of truth for what we are building
and how. Keep it updated as decisions change.

## What this is

Leif Hetland's personal portfolio site. A senior full-stack TypeScript engineer's
showcase, built to read as a designed object rather than a resume dump. The visual
and interaction language is adapted from a reference portfolio (an editorial,
full-screen vertical pager with kinetic typography and big numbered case studies).
We are replicating the *system*, not the reference's assets or content. See
`docs/02-design-system.md` for the extracted DNA and `docs/03-information-architecture.md`
for how it maps onto Leif's work.

Primary goal: support an active senior-engineer job search. That means SEO, fast load,
clean social cards, and accessibility are first-class requirements, not afterthoughts.

## Stack (decided)

See `docs/01-architecture.md` for the full rationale.

- Next.js, App Router, TypeScript (strict)
- Tailwind for styling, with a small token layer (see design system)
- Framer Motion (`motion`) for entrance and scroll-reveal animation
- Native CSS scroll-snap for the full-screen pager; Lenis optional for smooth scroll
- MDX for case-study content so projects are data, not hardcoded JSX
- Deploy to Vercel; domain (leifhetland / leifehetland, confirm exact) via Vercel DNS

Do not pin versions from memory. Before installing, check the current stable release
of Next, Tailwind, and motion and use that. Note the resolved versions back into this
file once installed.

### Resolved versions (Milestone 0, 2026-06-17)

- next 16.2.9 (App Router, Turbopack default, React Compiler available)
- react / react-dom 19.2.4
- tailwindcss 4.3.1 (CSS-first, tokens live in `@theme` in `globals.css`, no JS config)
- motion 12.40.x (import from `motion/react`)
- typescript 5.9.x (strict), eslint 9 + eslint-config-next 16.2.9, prettier 3
- Fonts are self-hosted via `next/font/local`, not `next/font/google`: the OFL variable
  woff2 builds of Fraunces (display) and Hanken Grotesk (body) are vendored under
  `src/app/fonts/` with their license text. This avoids any build-time or runtime
  dependency on a font CDN. Both font faces are a DRAFT choice pending sign-off.
- MDX pipeline is deferred to Milestone 1, where the first real project consumes it.
- Package manager: pnpm. `pnpm-workspace.yaml` allowlists sharp + unrs-resolver builds.

## Commands

These are the intended scripts. Create them in `package.json` during setup, then keep
this list accurate.

```
pnpm dev        # local dev server
pnpm build      # production build
pnpm start      # serve production build locally
pnpm lint       # eslint
pnpm typecheck  # tsc --noEmit
pnpm format     # prettier
```

Run `pnpm typecheck` and `pnpm lint` before declaring any task done.

## Conventions

- TypeScript strict mode on. No `any` without a written reason in a comment.
- Server Components by default. Add `"use client"` only where interaction or motion needs it.
- Co-locate component, styles, and test in a folder per component.
- Content (projects, copy) lives in MDX / typed data files, never inline in components.
- Tokens (color, type scale, spacing, motion timing) come from one source. No magic numbers
  in component CSS.
- Formatting: no em dashes anywhere in code comments, copy, or docs. Use commas, colons,
  or parentheses. This is a hard project rule.

## Quality floor (non-negotiable for every change)

- Responsive down to a 360px viewport.
- Visible keyboard focus on every interactive element.
- `prefers-reduced-motion` respected: the pager and reveals degrade to static.
- Lighthouse targets: Performance and SEO >= 95, Accessibility = 100 on the home route.
- All media uses `next/image` or properly sized, lazy-loaded sources.

## Content and asset rules

- Use Leif's own assets only. Do not reproduce the reference site's images, video, brand,
  or client work. We are copying a layout and interaction system, not media.
- Real copy beats lorem ipsum. If copy is missing, write a tight first draft in Leif's
  voice (direct, no filler) and flag it as draft.

## Working agreement

The detailed rules of engagement for this session are in `AGENTS.md`. Short version:
work in small reviewable steps, do not add dependencies without flagging, stop and check
in at the milestones defined in `docs/05-build-plan.md`.
