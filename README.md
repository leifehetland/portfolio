# leifhetland-portfolio

Planning and spec repo for Leif Hetland's portfolio site. Drop these files into the project
root, open a Cowork / Claude Code session, and start at Milestone 0 in the build plan.

## Read order

Start with `HANDOFF.md`, the kickoff document for the Code/Cowork session. It points into
the rest:

1. `CLAUDE.md`: what we are building, the stack, conventions, quality floor
2. `AGENTS.md`: rules of engagement for the agent session
3. `docs/01-architecture.md`: why Next.js + Vercel (the ADR)
4. `docs/02-design-system.md`: the design DNA extracted from the reference, as tokens
5. `docs/03-information-architecture.md`: routes, content model, the hero fork
6. `docs/04-components.md`: the component build inventory
7. `docs/05-build-plan.md`: phased milestones, each a stop-and-review point
8. `docs/06-content-inventory.md`: your real work, tiered into featured case studies vs credits
9. `docs/07-asset-manifest.md`: per-card imagery plan, what you source, rights notes (no genAI)
10. `docs/08-needs-from-leif.md`: everything still owed by Leif, mapped to when it blocks work

## Decisions still owed by Leif

The featured lineup and order are decided (see the IA doc). Domain is decided: leifehetland.com
(with an "e"), canonical host to confirm at launch (www vs apex). Accent color has a working
default: #4273B1, the blue already used as Leif's resume brand color, so the personal brand
stays coherent across resume and site (veto anytime before Milestone 3).

What remains, consolidated with timing in `docs/08-needs-from-leif.md`:

- Hero direction (kinetic type only for MVP is the default; WebGL is phase 2). See IA doc.
- The monogram mark ("LH" is the working default; confirm or replace).
- Assets, clearances, and fact confirmations per card (the full checklist lives in
  `docs/08-needs-from-leif.md`, with when each item is actually needed).

## Note on the reference

The visual and interaction system is adapted from a portfolio found via the Wayback Machine.
We are rebuilding the system with Leif's own assets and content. None of the reference's media,
fonts, brand, or client work is reproduced here.
