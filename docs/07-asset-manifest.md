# Asset manifest

Per-card imagery and media plan. What each featured card needs, what is already in hand, what
Leif sources, and the rights note per item. Answers "imagery for each card and who sources it."

## Project rule: no AI-generated images

All imagery is real: Leif's own screenshots, photography, film, game footage, and diagrams, or
properly licensed and cleared sources. No AI-generated images anywhere on the site. This is also
recorded in `CLAUDE.md` and `AGENTS.md` as a hard constraint.

## Legend

- HAVE: already in hand
- CAPTURE: Leif screenshots or photographs his own live work
- CREATE: an original diagram or graphic (SVG), no third-party rights involved
- CREDIT-ONLY: named in text, not shown (confidential, work-for-hire, or trademarked)
- CLEAR: needs a collaborator or client sign-off before use

## Per card

**1. James Williams, LLC**
- HAVE: the before and after home-page screenshots (already uploaded).
- CAPTURE (optional): a few section crops of the after site, and any project photos from the
  build.
- Rights: his own client; a courtesy sign-off before publishing is polite, not strictly required.

**2. Videodrome**
- CAPTURE: screenshots of the refreshed site, plus storefront and interior photos of the shop.
- Rights: his own client; store photos he shoots himself carry no issue.

**3. Bon House**
- CAPTURE: screenshots of the site he built.
- CLEAR: the live-music and venue photos currently on the site belong to Bon House and its
  photographers. Get the ok before reusing any of them; otherwise show the site as-built rather
  than lifting individual photos.

**4. Higher-ed program engineering (Georgia Tech, 2U/edX network)**
- CREATE (primary): original diagrams of the curriculum architecture (the module map, the
  additions he engineered: AI/LangChain, TypeScript, CI/CD, TDD, the Python module). These are
  his to make, carry no rights issue, and are the most on-brand image for an engineer.
- CREDIT-ONLY: the institution and platform names (Georgia Tech, SMU, UPenn, edX, 2U) as a
  restrained text credit line showing reach. These marks are trademarked; a factual "delivered
  at" attribution is defensible, a wall of logos implying endorsement is not. If a small logo
  strip is wanted, source each wordmark from that institution's official brand page, but lead the
  card with his own diagrams.
- Do not publish proprietary curriculum content. Confirm with Leif whether any specific material
  is cleared to show; default to describing and diagramming.

**5. Me: creative practice (film, games, score)**
- HAVE: film stills and clips from his own shorts, game footage (Punchy Fox and the jams), score
  audio (Holed Up and his film scores), and any on-set or behind-the-scenes photos.
- CLEAR: shared pieces need a quick collaborator ok (co-written films, jam teammates).
- Formats: short muted video loops with poster frames; 20 to 40 second audio excerpts for the
  `AudioSample` player.

**6. Client work at scale (agency and freelance)**
- CAPTURE: live-site screenshots of the public work he built: the 4Top concepts (etc., etch,
  Amerigo, Char via the URLs in Tier 2), and the freelance Squarespace builds (TNPRCV, Rebuilding
  Together Nashville, Foundation Christian Academy, Sombra).
- CREATE: an abstracted diagram for the Horton reusable Angular/KeystoneJS template platform,
  since the client assets are not showable. A "one template, many client skins" schematic tells
  the reuse story without exposing client work.
- CREDIT-ONLY: the confidential 40AU work (Vanderbilt "My Day," NARUS "Compassion," the Fullscreen
  Direct brand work, bank forms). Named, described, not shown.
- Rights: a courtesy heads-up to current clients before featuring their live sites is worth doing.

## What I need you to source (checklist)

- Videodrome: site screenshots and a few storefront/interior photos.
- Bon House: confirm which venue and performance photos are cleared, if any.
- Higher-ed card: the curriculum-architecture details so the diagram is accurate, and a yes/no on
  whether any curriculum material is shareable.
- Creative card: pick the hero film clip or two, two or three game snippets, and two or three
  score excerpts; get collaborator ok on shared films.
- Agency and freelance: a courtesy ok from current clients to show their live sites.
- Everything else (the James Williams before/after, your own films, games, and scores) is either
  already in hand or fully yours.

## Capture and format specs (for whoever grabs assets)

- Screenshots: full-page and above-the-fold, captured at 2x for retina, at a consistent viewport
  width, delivered through `next/image` as WebP/AVIF.
- Photos: high resolution, both landscape and portrait where possible.
- Video: short muted loops (mp4 and webm) with a poster frame; keep clips tight.
- Audio: 20 to 40 second excerpts, mp3 or aac.
- Diagrams: SVG, authored in his own tool, themeable to the site tokens.
