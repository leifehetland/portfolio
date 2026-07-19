# Content inventory

Organizes Leif's real career and creative material into what becomes a deep case study versus
a credits-list entry, with discipline, media status, and showability per item. This is the
source that `docs/03-information-architecture.md` draws from. Curate hard: not everything is a
case study, and the volume only helps if it is tiered.

## The arc (the spine's narrative)

Games to engineering to education to creative technologist. Leif got into web development
through game development (Punchy Fox and game jams with his collaborator Tyler Aldridge),
trained at Nashville Software School, went deep in agency and product work, then spent six
years teaching and re-engineering a full-stack curriculum, and now works across web and film.
That line is the hero's story and the through-thread for ordering the work.

## Tier 1: Featured case studies (the selected-work spine)

Pick five to seven. Each needs a real story, showable or describable media, and a clear
statement of what Leif did. Recommended set and order below; Leif confirms.

**1. James Williams, LLC** (current, before/after)
Discipline: engineering + design + content strategy. Showable: yes, his own client engagement
(get sign-off). Angle: a full redesign of a Metro Atlanta general contractor's site, told as a
before and after. The before was a bare single-page template: a centered logo, a one-line
tagline, three photos, and social icons. The after is a full editorial marketing site with a
hero and clear CTAs, a credibility band (30-plus years, family-owned, service area), a "what we
build" services grid, a comprehensive services section, a genuinely useful draw-schedule
explainer that speaks to the client's actual business, testimonials, a founder story,
qualifications, a service-area block, a portfolio grid, and a strong closing CTA. Leads the
sequence because before/after is the most legible proof of value to any audience, and the after
demonstrates information architecture, content strategy, a design system, and build in one
artifact. The before/after comparison is this study's signature interaction (see the
`BeforeAfter` component in `docs/04-components.md`).

**2. Videodrome** (current)
Discipline: engineering + design. Showable: yes, it is his own client engagement (get sign-off).
Angle: web presence refresh for a beloved Atlanta video store, with a genuine engineering story
underneath (legacy Clarion database migration toward Postgres, inventory and POS, a design
system). Current, owned, and more than a website.

**3. Bon House** (current)
Discipline: engineering + design. Showable: yes, but check the Bon agreements first (see
confidentiality below). Angle: web presence for an Atlanta DIY residential music venue in Decatur
that is gaining momentum (150-cap room, PBR sponsorship). A distinct, energetic collage
aesthetic (brush display type, torn-paper photo hero, a bands/venue/studio/label grid), which
shows range next to the contractor and video-store studies. Live and growing.

**4. Higher-ed program engineering (Georgia Tech, and the 2U/edX network)** (describe; own diagrams)
Discipline: engineering + education. Showable: describe and credit. Curriculum content is likely
proprietary to 2U/edX/Georgia Tech, so lead with his own diagrams and confirm what is shareable.
Angle: six years teaching the full-stack flex program at Georgia Tech (lead instructor, 15-plus
per cohort), then curriculum engineer on a full overhaul that added AI and LangChain, TypeScript,
CI/CD, TDD tooling, and a Python module. The curriculum ran across the university boot-camp
network delivered through edX and 2U, so the same work reached programs at institutions such as
SMU and UPenn. That multi-institution reach is the scale signal, and it reframes teaching as
building learning systems used at scale. Imagery: see `docs/07-asset-manifest.md`. Lead with his
own curriculum-architecture diagrams; treat the institution names (Georgia Tech, SMU, UPenn, edX,
2U) as a restrained credit line, factual attribution only, since those marks are trademarked and
the curriculum itself is not his to publish.

**5. Me: creative practice (film, games, and score)** (has footage and audio)
Discipline: film + game-dev + sound + writing (with engineering underneath). Showable: yes for
his own work; get a quick ok from collaborators on shared pieces. Angle: the maker throughline,
consolidated into one narrative rather than scattered. This is the differentiator, the thing no
interchangeable React developer has, and framed as a single coherent practice it reads as range
and creative rigor rather than side hobbies. Threads:
- Filmmaking (his own shorts, written, shot, directed, edited, scored): "The Traveller"
  (co-writer, cinematographer, composer, editor) and "Lights Among Us" (co-writer, 1st AD /
  set support, editor).
- On-set craft: 1st AD and set support, PA, boom operator, camera operator, and grip across
  shorts and a feature ("Content," grip, camera and electrical dept., 2019). Atlanta Film
  Society PA Academy trained (2025).
- Game dev: Punchy Fox (with Tyler Aldridge, demo footage and early prototypes) plus jam pieces
  "Is Anyone Out There?" (did well at its jam) and "La Bamba" (a Bomberman-style clone that
  reached a playable prototype).
- Scoring and composition: original score and theme music for the "Holed Up" podcast series
  (50 episodes, 2024 to 2025) plus scores for his own films.
Media: film clips and stills, game footage, and short score audio samples (see the `AudioSample`
component). This case study is the curated front door to the deeper `/lab` archive, which holds
the full body of experimental music, digital art, and additional film work. Source for the
credits is Leif's film resume; some details there are still placeholders (years, the feature
grip title, education specialization), so confirm those before the copy ships.

**6. Client work at scale: agency and freelance** (mixed showability)
Discipline: engineering + design. Angle: the breadth-and-reliability story, consolidated into one
card instead of a logo parade. Threads:
- 40AU agency tenure: the 4Top Hospitality restaurant sites (etc., etch, Amerigo, Char), still
  live and showable; plus described-and-credited-only work under confidentiality (Vanderbilt
  "My Day," NARUS "Compassion," the Fullscreen Direct brand work, bank forms).
- Horton Group: a reusable Angular 4 / KeystoneJS templated application built with their senior
  developer so Horton could re-skin it for future clients, plus a WordPress remediation win
  (Sisters on the Fly). Architecting for reuse and remediation are both senior signals; client
  assets are likely not showable, so represent this with an abstracted diagram.
- Independent freelance builds (designed, built, onboarded, maintained): TNPRCV, Rebuilding
  Together Nashville, Foundation Christian Academy (Squarespace), and Sombra Mexican Kitchen.
This card carries the "I have shipped and maintained a lot of real client work" signal.
Showable imagery is the live public sites he built; everything under NDA or work-for-hire stays
credit-only. See `docs/07-asset-manifest.md`.

**Deferred until refreshed:** the three Nashville Software School capstones. Leif wants these
modernized before they ship. Mark as "in refresh," optionally teased as upcoming.

## Tier 2: Experience and credits (detail behind slot 6, plus remaining credits)

Most of this now feeds featured slot 6 (agency and freelance). Treat this section as the detailed
source for that card: it lists every item with its showability, so the card can pull the showable
ones and credit the rest. A few items not surfaced in slot 6 (for example the Global Mission
Awareness retainer) stay here as standalone credits. Grouped below; state the contribution
precisely, show only cleared assets.

**Agency and product (40AU and partners):**
- 4Top Hospitality, a 40AU client: an employee-owned, multi-concept restaurant group across
  the Southeast. Leif maintained the brand sites for four of its concepts (etc., etch, Amerigo,
  and Char in Nashville), all still live and largely as he set them up. Showable as live links,
  and durable (years in production, unchanged) is itself a quiet signal. The group site credits
  "Built by FortyAU," which corroborates the engagement.
    - etc. https://etc.restaurant/
    - etch https://etchrestaurant.com/
    - Amerigo https://amerigo.net/
    - Char (Nashville) https://nashville.charrestaurant.com/
- Sombra Mexican Kitchen, a separate engagement (not 4Top): https://sombramexicankitchen.com/
- Vanderbilt "My Day" early-diabetes tracking app: managed the home/marketing site. Healthcare,
  internals confidential.
- NARUS "Compassion" nursing dashboard: embedded on a 40AU / NARUS / Health Samurai
  collaboration. Healthcare, confidential.
- Fullscreen Direct brand work: Megadeth Cyber Army rebrand, Eric Church, Kid Rock, Linkin Park.
  Work-for-hire. Credit line only, not case studies, nothing shown without clearance, exact role
  stated.
- Bank web forms and stored procedures. Not showable.

**Independent web builds (designed, built, onboarded, maintained):**
- TNPRCV, Rebuilding Together Nashville, Foundation Christian Academy (Squarespace).

**Long-term retainer:**
- Global Mission Awareness: main site, Leif Hetland Ministries site, and Shopify store. Web lead,
  multi-year retainer.

**Film and creative:** now told as featured case study 5, with the full body of work in `/lab`.
The film resume also lists a GMA 20th Anniversary promo (director, camera operator, editor) and a
GMA Partners promo (editor, 2018), which can sit in `/lab` or fold into the Global Mission
Awareness retainer entry above. Keep the closing credits list from duplicating slot 5: name only
what does not already appear there.

## /lab surface (phase 2): the creative practice

His own short films (directed, camera-operated, acted in, edited, written, composed, scored),
experimental music and scores, digital art and shader experiments, scripts, and editing samples.
This is where the cinematic and audio instincts run free, one click from home, never in the
hire-me path.

**Publications** (from Leif's resume material; belongs on `/about` or the `/lab` writing shelf,
formatted per his citation style):
- Walters, T., Hetland, L., Williams, J., Hudiburg, R., & Bates, L. (April, 2010). Spotlight
  effect and religious fundamentalism. *Journal of Alabama Academy of Science, 81*(2), 56–57.
- Hetland, L. (2012). "My Best Friend the Mutant" (p. 42). *Lights and Shadows, Vol. 56*.
  University of North Alabama, Florence, AL. https://roar.una.edu/lightsandshadows/13

## Showability and confidentiality (read before publishing anything)

- Work-for-hire, agency, and brand work: describe and credit, show only cleared assets, and
  state your specific contribution precisely. Do not present a brand as your own case study.
- Healthcare (Vanderbilt, NARUS Compassion) and bank work: assume confidential. Describe the
  problem and your role in general terms; show nothing internal.
- Bon House and Bon.FM: check the pre-existing-materials disclosure and the written-consent
  clauses in your agreements before showing work from those engagements.
- Films with collaborators: get a quick ok before featuring footage that is not solely yours.

## Discipline taxonomy (for tagging and /lab filtering)

engineering, game-dev, film, sound, digital-art, writing, design, education.

## Confirmations (resolved and open)

Resolved: "Four Tops" is 4Top Hospitality, the employee-owned multi-concept restaurant group (see
Tier 2). The games question is resolved by consolidation: Punchy Fox and the jams live inside the
featured creative-practice study (slot 5), which is the front door to the lab.

Open items now live in one place: `docs/08-needs-from-leif.md`. The ones sourced from this doc
are the NSS capstone list and refresh order, the flagship film pick, the film-resume placeholder
facts, and the per-card clearances in "Showability and confidentiality" above.
