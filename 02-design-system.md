# Design system

This is the design DNA reverse-engineered from the reference portfolio (an editorial,
full-screen vertical pager built on Readymag). It captures the layout model, type roles,
color logic, motion, and signature patterns so they can be rebuilt cleanly in code with
Leif's own content. It does not reproduce any of the reference's assets.

## The reference in one paragraph

A vertical, full-screen "magazine" pager. The viewport is a stack of full-height pages
that alternate between near-black intro pages and white detail pages. The opening page is
a kinetic-type hero over a muted, dark-overlaid video loop. Each project gets two pages: a
dark intro (a huge display number, the project title set large and broken across stacked
lines, and a tracked-out metadata column) followed by a white detail page (serif title,
two-column body, a rounded-frame media carousel and embedded video, a credits block, and an
awards block). The site closes on a dark page listing expertise, clients, agencies, and
contact links. Entrances are staggered: elements fade up word by word in a timed sequence.

## Read this before copying it

Two patterns in the reference are also the exact patterns that make AI-generated portfolios
look generic: a near-black page with a single accent, and big numbered markers (01 / 02 / 03).
They work in the reference because the projects genuinely are an ordered, curated sequence
and because the execution is precise. Keep them only if they stay meaningful:

- Numbering should encode something true (recency, or a deliberate "selected work" order),
  not decorate. If the order does not carry information, drop the numbers.
- The single most memorable element ("the signature") should come from Leif's own world. He is
  a maker across media (engineering, film, scoring, digital art), so the kindred-spirit overlap
  with the reference is real, not borrowed. His own digital-art or shader hero, optionally his
  own score as opt-in ambient audio, is the natural signature. Spend boldness there and keep
  everything around it quiet.

Two craft instincts from Leif's film and music work map directly onto this design and should be
used deliberately: pacing (the staggered page-load reveal is an edit, so cut it with an editor's
sense of rhythm rather than a default fade) and atmosphere (color grade and an optional score
set the tone the way they would in a film opening). These are advantages here, not affectations.

The media slots, though, still need an honest answer. The engineering case studies carry app
screens, screen recordings, and architecture sketches, not a showreel. Design the work-sequence
media for what those projects actually produce. The cinematic and musical material belongs on
the separate experiments surface (see `docs/03-information-architecture.md`), where it can be
shown as itself rather than squeezed into a case-study frame.

## Color tokens

Derived from the reference, expressed as a starting token set. Tune during build.

```
--bg-ink        #0A0A0A   /* hero and intro pages, near-black */
--bg-ink-soft   #141414   /* secondary dark panels */
--bg-paper      #FFFFFF   /* detail pages */
--fg-on-ink     rgba(255,255,255,0.92)
--fg-on-paper   #141414
--fg-muted      #6B6B6B   /* captions, secondary metadata */
--frame         #E8E8E8   /* the light rounded media-frame border */
--accent        TBD       /* pick ONE, derived from Leif's mark, used sparingly */
```

The reference is effectively monochrome with white type on black. If Leif wants an accent,
it should be a single deliberate color (from his logo or a code-editor theme he likes),
used only on focus states, links, and one signature moment. No rainbow.

## Type roles

The reference uses four roles. Recreate the roles, choose fonts that are not the obvious
defaults, and pair a characterful display face with a clean body face.

| Role     | Use in reference                         | Treatment |
|----------|-------------------------------------------|-----------|
| Display  | Giant project numbers, project titles     | Serif, very large, tight leading, titles broken across stacked lines |
| Label    | "Selected work", section headers          | Bold sans, heavy negative tracking (around -2 to -3% / -2.8px) |
| Utility  | Metadata: role, client, year, credits     | Small uppercase sans, tracked out, quiet |
| Body     | Project descriptions                      | Serif, readable, two-column on wide screens |

Type scale (starting point, fluid with `clamp`):

```
display-xl   clamp(5rem, 18vw, 18rem)    /* project numbers */
display-l    clamp(2.5rem, 9vw, 9rem)    /* project titles */
heading      clamp(1.75rem, 4vw, 2.8rem) /* detail page titles */
label        0.75rem, tracking -0.02em, weight 700
utility      0.7rem,  tracking 0.08em, uppercase
body         1rem to 1.125rem, leading 1.6
```

Load with `next/font` (self-hosted, no layout shift). Make the display face the personality
of the page, not a neutral delivery vehicle.

## Layout model

- **Pager:** a vertical stack of full-height sections, `scroll-snap-type: y mandatory` on the
  scroll container, `scroll-snap-align: start` on each section. This recreates the "one page
  per scroll" feel natively, no library required. Lenis can be layered on for smooth inertia.
- **Pages taller than the viewport** (detail pages with carousel, credits, awards) scroll
  internally before snapping to the next page. Replicate by letting a section grow past
  100vh and snap at its start.
- **Intro page grid:** display number anchored center/left, eyebrow ("selected work .NN")
  centered top, title stacked left, metadata column on the right, rotated year marker on the
  right edge, a thin vertical hairline as a recurring divider motif, the "Y78" style monogram
  top center (Leif's becomes an "LH" or chosen mark).
- **Detail page grid:** centered title and subtitle, two-column serif body, a large rounded
  media frame, then credits and recognitions in tracked-out columns.

## Signature components

- **Rounded media frame:** media sits inside a generous rounded rectangle (around 20px radius)
  with a thick light-gray inset border that reads like a passe-partout mat. Rebuild with a
  border or ring plus `border-radius` and `overflow: hidden`, not an SVG mask.
- **Kinetic hero text:** words and fragments fade up in a timed sequence to assemble the
  intro sentence. Rebuild with Framer Motion `staggerChildren` plus a small `y` offset.
- **Vertical year / index markers:** small rotated labels on the page edge (the reference uses
  rotate 270deg). A quiet structural device; keep if it encodes real info (year).
- **Hairline dividers:** thin 1px rules used to structure dark pages.

## Motion

- **Entrance:** opacity 0 to 1 plus a small upward translate (around 10 to 20px), staggered
  across child elements, easing in the ease-out family. Sequence the hero word by word.
- **Carousel:** horizontal slide with `cubic-bezier(0.40, 0.24, 0.40, 1)`, around 500 to 550ms.
- **Page transitions:** the reference uses snap, not animated page flips. Keep snap; do not
  over-animate the pager itself, which is where AI-generated sites tend to overreach.
- **Reduced motion:** the original ignores this. We must not. Under `prefers-reduced-motion`,
  drop the stagger and translate, show content immediately, and disable smooth-scroll inertia.

## What to deliberately change from the reference

- Give the hero a code-native signature instead of a film reel.
- Make numbering meaningful or remove it.
- Choose distinctive fonts rather than a generic high-contrast serif.
- Pick at most one accent color tied to Leif's identity.
- Keep the discipline of the reference (lots of negative space, restraint) and spend the one
  risk on the signature moment.
