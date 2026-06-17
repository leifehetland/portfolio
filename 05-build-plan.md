# Build plan

Phased plan for the Cowork session. Each milestone is a natural stop-and-review point. Do not
run ahead into the next milestone without a check-in. The MVP target is a faithful, Leif-ified
replica of the reference's structure and feel, with real content for at least two projects.

## Milestone 0: scaffold and rails

- Scaffold Next.js App Router + TypeScript strict + Tailwind. Confirm current stable versions.
- Add `motion`, MDX pipeline, `next/font`. Set up eslint, prettier, the `package.json` scripts
  in `CLAUDE.md`.
- Establish the token layer (color, type scale, spacing, motion) from `docs/02-design-system.md`
  as the single source. No magic numbers downstream.
- Add `prefers-reduced-motion` plumbing and a global focus-ring style.
- Set up Vercel project and a preview deploy. Wire the domain later.

**Done when:** `pnpm dev`, `typecheck`, `lint` all run clean and an empty themed page renders
with tokens applied at 360 / 768 / 1280.

## Milestone 1: the pager and one project, end to end

- Build `Pager`, `PageSection`, `Reveal`.
- Build `Hero` with `KineticHeadline` (MVP option B, kinetic type only) and `ScrollCue`,
  `Monogram`.
- Build `ProjectIntro` and `ProjectDetail` plus their pieces (`DisplayNumber`, `DisplayTitle`,
  `MetaList`, `EdgeMarker`, `MediaFrame`, `MediaCarousel`, `LinkRow`).
- Wire one real project through the MDX content model, with real media.
- Build the `/work/[slug]` route reusing `ProjectDetail`.

**Done when:** the home route shows hero plus one full project as a snapping vertical pager,
the project also lives at its own URL, and the whole thing is keyboard navigable with reduced
motion respected. This is the proof the system works; review before scaling content.

## Milestone 2: content and the full sequence

- Add the remaining selected-work projects (Leif's confirmed lineup and order) as MDX.
- Build the closing page: `Capabilities` and `Colophon`.
- First copy pass in Leif's voice across hero, project summaries, and capabilities. Mark any
  placeholder copy clearly.

**Done when:** the full selected-work sequence and closing page are in place with real content,
no lorem ipsum, and the pager reads as one coherent scroll.

## Milestone 3: SEO, performance, and polish

- Per-route metadata, canonical URLs, JSON-LD `Person` schema on home.
- Dynamic OG image per project. `sitemap.xml`, `robots.txt`.
- Image and media optimization pass: correct `next/image` sizing, lazy media, no CLS.
- Lighthouse pass against budgets (Performance/SEO >= 95, Accessibility = 100 on home).
- Tune type scale, spacing, and motion timing against the design system. Remove one accessory:
  cut any decoration that does not serve the page.

**Done when:** budgets are met, share previews render a designed OG image, and the site holds
the quality floor in `AGENTS.md`.

## Milestone 4: launch

- Point the domain at Vercel via DNS, verify HTTPS and the canonical host (www vs apex).
- Final cross-device check. Record resolved dependency versions in `CLAUDE.md`.
- Tag a release.

**Done when:** the live domain serves the production build and previews are clean.

## Phase 2 (after MVP, not in this session unless asked)

- Hero option A: ambient WebGL background reusing the existing ThreeJS experiment, behind the
  kinetic type, with a static fallback and a strict main-thread budget.
- `/about` and `/resume` routes.
- A lightweight writeups section (MDX) if Leif wants to publish.
- Contact form via a Next route handler if he wants inbound without exposing his email.

## Out of scope for MVP

- A CMS. MDX in-repo is enough until project count or a non-developer editor demands otherwise.
- Analytics beyond Vercel's built-in, unless requested.
- Any reproduction of the reference site's assets, fonts, brand, or client work.
