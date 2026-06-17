# Component specs

The component inventory for the MVP, with behavior, props, and notes. Build these as small,
co-located units. Server Components by default; mark client only where motion or interaction
requires it (noted per component).

## Layout primitives

### `Pager` (client)
The scroll-snap container that holds the full-height sections on the home route.
- Wraps children in a scroll container with `scroll-snap-type: y mandatory`.
- Each direct child is a `PageSection`.
- Optional Lenis smooth scroll, disabled under `prefers-reduced-motion`.
- Exposes the active section index (for the edge index marker), via scroll position.
- Must not trap keyboard users: arrow keys, Page Up/Down, and Tab all work.

### `PageSection` (server)
A single full-height page.
- Props: `tone: "ink" | "paper"`, `snap?: boolean` (default true), `children`.
- Sets min-height 100svh (svh, not vh, to handle mobile browser chrome), background per tone,
  `scroll-snap-align: start`.
- Sections taller than the viewport scroll internally before snapping.

### `Reveal` (client)
Wraps content to fade it up on enter.
- Props: `delay?`, `as?`, `once?` (default true).
- opacity 0 to 1 plus y offset 16px, ease-out, ~500ms.
- Under reduced motion, renders children immediately with no transform.
- Used everywhere instead of bespoke animation, so motion is consistent and centralized.

## Hero

### `Hero` (client)
The opening page. MVP is kinetic type only (see IA hero fork, default B).
- Renders `KineticHeadline` over `tone="ink"`.
- Slots for an optional background layer (`HeroBackground`) added in phase 2 (WebGL option A).
- Includes the monogram (`Monogram`), the scroll prompt (`ScrollCue`), and a hairline.

### `KineticHeadline` (client)
The assembling-sentence effect.
- Props: `segments: string[]` (the words/fragments in reveal order).
- Framer Motion `staggerChildren`; each segment fades up in sequence.
- Reduced motion: all segments visible at once, no stagger.
- Keep the copy short and specific to Leif. Draft: "Senior full-stack engineer. TypeScript,
  React, and the systems behind them. Building in Atlanta." Replace with his real line.

### `Monogram` (server)
Small mark, top center (the reference's "Y78" slot becomes Leif's "LH" or chosen mark).

### `ScrollCue` (client)
The "scroll" prompt at the bottom with a vertical hairline. Fades out after first scroll.
Reduced motion: static, no bounce.

## Selected work

### `ProjectIntro` (server, with `Reveal` children)
The dark intro page for a project.
- Props: `project: Project`.
- Layout: `DisplayNumber`, eyebrow "selected work .NN", stacked `DisplayTitle`, `MetaList`
  on the right, `EdgeMarker` (year) on the right edge, hairline divider.

### `DisplayNumber` (server)
The giant project number in the display serif. Props: `n: number`.

### `DisplayTitle` (server)
Project title set large, broken across stacked lines. Props: `title: string` (honors line
breaks from the content). Tight leading.

### `MetaList` (server)
The tracked-out uppercase metadata column. Props: `label: string`, `items: string[]`. Used
for role, stack, and on the detail page for context/outcomes.

### `EdgeMarker` (server)
Small rotated label on the page edge. Props: `text: string` (e.g. the year). Decorative only,
`aria-hidden`.

### `ProjectDetail` (server)
The white detail page for a project.
- Props: `project: Project`.
- Layout: `heading` title, two-column MDX `body`, `MediaCarousel`, then `MetaList` blocks for
  context and outcomes, and a `LinkRow`.

### `MediaFrame` (server)
The rounded passe-partout frame around any media. Props: `children`.
- Generous radius (~20px), thick light `--frame` inset border, `overflow: hidden`.
- Rebuild with ring/border plus radius, not an SVG mask.

### `MediaCarousel` (client)
Horizontal slideshow inside a `MediaFrame`.
- Props: `items: MediaItem[]`.
- Slide transition `cubic-bezier(0.40,0.24,0.40,1)`, ~520ms.
- Counter "n / total", prev/next controls, keyboard arrows, swipe on touch.
- Images via `next/image` with width/height to reserve space; videos muted, `playsInline`,
  lazy; embeds load on interaction (no autoplay of third-party iframes).
- Reduced motion: cross-fade or instant change instead of slide.

### `LinkRow` (server)
The live / repo / write-up links for a project. External links open in a new tab with
`rel="noopener noreferrer"` and a visible focus state.

## Closing page and chrome

### `Capabilities` (server)
The reference's "Expertise" list, reframed as real capabilities. Props: `groups`.

### `Colophon` (server)
Contact and footer. Email, LinkedIn, GitHub. A short, honest build credit (the stack) in
place of the reference's tool credit. No Behance/Instagram.

### `SkipLink` and focus management (client)
A skip-to-content link, and logic so the pager never strands keyboard or screen-reader users.

## Shared concerns

- All interactive components: visible focus ring using the accent token.
- All animation goes through `Reveal` or the carousel; no scattered one-off transitions.
- All copy is real or marked draft. No lorem ipsum committed.
