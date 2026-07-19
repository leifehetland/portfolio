# Information architecture

How the reference's structure maps onto Leif's work, the route plan, and the content model.

## Positioning (decide this, it shapes everything below)

Leif is multidisciplinary: senior full-stack engineer, and also a filmmaker, composer,
digital artist, scriptwriter, and editor. The MVP's primary job is still the senior-engineer
job search, and a hiring manager skimming for ten seconds has to read "deep engineer" without
hunting for it. So the range is an asset only if it is framed right.

The trap is the generalist read. His profile already carries narrative friction for IC roles
(the teaching tenure), and stacking "also a filmmaker and composer" as headline content can
compound it into "jack of all trades" for a skeptical reviewer.

The strong move: **engineering is the spine, the creative practice is the medium.** The
selected-work sequence is engineering case studies with real outcomes, that is the substance a
hiring manager needs. The craft (his own digital art as the hero, his own score as optional
ambient audio, his film-editor's sense of pacing in the motion and sequencing) shows up as how
the site is *made*, not as detour content. That demonstrates taste and range without diluting
the hire-me signal, and it is far more convincing than claiming to be creative.

Keep the overtly creative work (films, music, digital art experiments) on a separate, lighter
surface (`/lab` or `/experiments`), linked but not interleaved with the engineering sequence.
A reviewer who wants the range finds it; one who wants the engineer is not slowed down.

Recommended default, assumed by the specs: engineering-forward home, creative practice as the
site's connective tissue and atmosphere, plus a distinct experiments surface. The alternative
(a true peer-level multidisciplinary portfolio where films and scores are first-class projects
in the main sequence) is viable if the job search is not the priority, but it changes the
hiring read. Confirm which before Milestone 2.

## Route plan

The reference is effectively a single long scroll. We keep that as the home experience but
back each project with a real route so projects are linkable and individually shareable
(better for SEO and for pasting a single case study into a message).

```
/                      Home: hero, then the selected-work sequence, then the closing page
/work/[slug]           Full case study (its own page, deep-linkable, own OG image)
/lab                   Experiments: film, music, digital art (separate from the work sequence)
/about                 Optional: longer bio, the "expertise / clients" content expanded
/resume                Optional: link or embedded PDF of the tailored resume
```

MVP is `/` plus `/work/[slug]`. `/lab`, `/about`, and `/resume` are phase 2, with `/lab`
being the first of the three to add given how much it differentiates him.

## The hero fork (decide this first)

The earlier framing (an engineer borrowing an art director's reel) is wrong. Leif has a real
cross-disciplinary practice: short horror films, camera and AD work, scoring and experimental
music, digital art, scriptwriting, editing. The reference's instincts (cinematic sequencing,
score, kinetic type as an edit) are native to him, so the hero can be genuinely his rather
than a costume. Options, strongest first:

- **A. Original WebGL / digital-art hero.** His own generative or shader piece (the existing
  ThreeJS experiment is a starting point) as a slow, ambient layer behind kinetic type. This
  is real digital art, made by him, and it doubles as proof he can build it. Cheap on the main
  thread, static poster fallback.
- **B. Cinematic film hero.** A short, muted, color-graded loop from his own film work behind
  the type, treated like a cold open. Authentic and atmospheric because the footage is his.
  Risk: keep it abstract and textural, not a literal horror clip that reads as off-topic for a
  hiring skim.
- **C. Kinetic type only.** The assembling sentence on near-black, no media. Fastest and most
  accessible, and a clean MVP that A or B drops into later as a background layer.

Optional cross-cut: an **ambient original score**, his own composition, as an opt-in audio
layer. Off by default, one quiet toggle, never autoplay, respects reduced-motion and the
mute state. The reference had a minimal audio widget; for someone who actually scores, this is
a credible signature rather than a gimmick. Treat as phase 2 and only if it stays unobtrusive.

Recommended default: ship **C** at MVP for speed and accessibility, then layer **A** as the
phase-2 signature (his own digital art is the most on-brand of the three for an engineer who
also makes things). **B** is a strong alternative to A if a particular shot is striking enough.
The build plan assumes C then A. Flag a different call and the specs adjust.

## Selected work: content model

Each project is one MDX file with typed frontmatter. Components read this data; nothing about
a project is hardcoded in JSX. This is the single most important structural decision: it makes
adding or reordering projects a content edit, not a code change.

```ts
type Project = {
  slug: string;           // url segment, e.g. "videodrome"
  index: number;          // position in the selected-work sequence
  title: string;          // can contain line breaks for the stacked display title
  year: string;           // shown in the rotated edge marker
  kind: string;           // "Web app", "Platform", "Consulting", "Open source"
  summary: string;        // one or two sentences, shown on the dark intro page
  role: string[];         // the metadata column: ["Architecture", "Full-stack", "UI"]
  stack: string[];        // ["TypeScript", "Next.js", "PostgreSQL"]
  body: string;           // MDX: the longer narrative on the white detail page
  media: MediaItem[];     // carousel sources (screens, recordings, diagrams)
  beforeAfter?: {         // optional, for redesign studies like James Williams
    before: MediaItem;
    after: MediaItem;
    caption?: string;
  };
  links?: { label: string; href: string }[]; // live, repo, write-up
  recognitions?: string[]; // optional, the reference's awards slot becomes outcomes/metrics
};

type MediaItem =
  | { type: "image"; src: string; alt: string; w: number; h: number }
  | { type: "video"; src: string; poster: string }   // self-hosted mp4/webm, muted loop
  | { type: "embed"; provider: "youtube" | "vimeo"; id: string };
```

Note the reference's "Recognitions / Awards" slot. Leif does not have awwwards trophies, so
repurpose that slot for **outcomes and metrics** (impact, scale, what shipped), which is far
stronger for an engineering audience. The reference's "The Team" credits slot becomes
**collaborators / context** (client, team size, his specific contribution) where relevant.

## Selected work: the lineup

The real material is tiered in `docs/06-content-inventory.md`, which is the source for what
becomes a featured case study versus a credits-list entry, with showability and media status
per item. Recommended featured sequence (Leif confirms order):

1. James Williams, LLC (current, owned, told as a before/after redesign, showable)
2. Videodrome (current, owned, has a real data-migration story, showable)
3. Bon House (current, owned, distinct collage aesthetic, live and growing)
4. Higher-ed program engineering (Georgia Tech, plus the 2U/edX network reaching SMU, UPenn;
   AI/LangChain/TS/CI-CD/TDD curriculum overhaul; learning systems at scale)
5. Me: creative practice, film, games, and score (the maker throughline, consolidated; media-rich;
   front door to the lab)
6. Client work at scale: agency and freelance (40AU including the live 4Top sites, the Horton
   reusable platform, and independent Squarespace builds; breadth and reliability)

The James Williams study leads because a before/after is the most legible proof of value to any
audience, and the after shows information architecture, content strategy, design, and build in a
single artifact. It uses a dedicated before/after comparison (see `BeforeAfter` in
`docs/04-components.md`).

Deferred until refreshed: the three Nashville Software School capstones. The broad agency and
client history (40AU, Fullscreen Direct brand work, NARUS, Squarespace builds, Global Mission
Awareness) lives in the closing credits list, not as case studies, for both curation and
confidentiality reasons.

Ordering principle: lead with current, owned, showable work, not the longest client logo. The
numbering then encodes "selected work, best and most current first," a real signal rather than
decoration.

## Lab / experiments content (phase 2, separate surface)

The creative practice lives here, not in the engineering sequence. Candidate material: the
short horror films and camera/AD work, the experimental music and scores, digital art and
shader experiments, scripts and editing samples. This surface can be looser and more playful
than the work sequence, and it is where the cinematic and audio instincts get to run. Same
content model where it fits (a `Project` with `kind: "Film" | "Music" | "Digital art"`), but
the page treatment can differ. Keep it one click from home, never in the way of the hire-me read.

## Closing page

The reference closes with Expertise, Brand Experience (client logos), Agencies, and contact
links. Leif's version:

- **Capabilities** in place of "Expertise": the real stack and what he does (architecture,
  full-stack delivery, AI-assisted engineering workflows).
- **Selected clients / context** in place of "Brand Experience": where it does not breach
  any agreement.
- **Contact:** email, LinkedIn, GitHub. Drop Behance/Instagram (wrong audience). Keep it short.
- Replace "Made with Readymag" with a small, honest build credit (the stack), which doubles
  as a quiet competence signal for this audience.

## SEO and metadata requirements

- Per-route `metadata`: title, description, canonical.
- Dynamic OG image per project (Next OG image generation) so shared case-study links look
  designed, not bare.
- `sitemap.xml` and `robots.txt` generated at build.
- JSON-LD `Person` schema on the home route. Concrete data (from Leif; confirm before ship):
  - name: Leif E. Hetland
  - jobTitle: Senior Full-Stack Software Engineer (creative technologist framing in copy, not schema)
  - address locality: Atlanta, GA
  - url: https://leifehetland.com
  - email: lehetland1@gmail.com (decide whether to expose in schema or keep to a contact link)
  - sameAs: https://linkedin.com/in/leifehetland, https://www.imdb.com/name/nm10714987/,
    GitHub profile URL (still needed from Leif)
- Canonical host (www vs apex) decided at launch; redirects from the other.
