# AGENTS.md

Rules of engagement for any AI agent (Claude Code, Cowork, Cursor) working in this repo.
These are guardrails, not suggestions. When a rule here conflicts with a request in the
moment, surface the conflict before acting.

## Operating principles

1. **Small, reviewable steps.** One concern per change. Prefer a working vertical slice
   (one page or one component end to end) over many half-finished files. Leif reviews as
   you go, so a 200-line diff he can read beats a 2,000-line diff he cannot.

2. **Plan before code on anything non-trivial.** For a new page or system, post a short
   plan (files to touch, approach, open questions) and wait for a go. For a one-line fix,
   just do it.

3. **Do not add dependencies silently.** Before adding any package, state what it is, why
   the platform primitives are not enough, its size, and its maintenance status. The stack
   in `CLAUDE.md` is the approved set. Anything beyond it needs a yes.

4. **Verify current versions.** Do not trust training-data version numbers. Check the
   latest stable release before installing, and record what you resolved to.

5. **Match the spec, flag the drift.** Build to `docs/`. If the spec is wrong or a better
   approach exists, say so and propose the change rather than silently diverging.

## Hard constraints

- **No copyrighted assets.** Never copy the reference site's images, video, fonts, brand
  marks, or client work into this project. Recreate the system; Leif supplies the content.
- **No em dashes.** Anywhere. Code comments, UI copy, docs, commit messages. Use commas,
  colons, or parentheses.
- **Accessibility floor holds.** Every interactive element is keyboard reachable with a
  visible focus state. The pager and all reveals respect `prefers-reduced-motion`.
- **No secrets in the repo.** Env values go in `.env.local` (gitignored) and Vercel project
  settings, never committed.
- **TypeScript strict stays on.** No loosening tsconfig to make an error disappear.

## Definition of done (per task)

A task is done only when all of these pass:

- [ ] `pnpm typecheck` clean
- [ ] `pnpm lint` clean
- [ ] Renders correctly at 360px, 768px, and 1280px widths
- [ ] Keyboard navigable, visible focus, reduced-motion path verified
- [ ] No new dependency added without sign-off
- [ ] Copy is real or explicitly marked draft, no lorem ipsum left behind

## Commit hygiene

- Conventional-style messages: `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`.
- One logical change per commit. No "wip" dumps on the main branch.
- Reference the build-plan milestone in the body when relevant.

## When to stop and check in

Stop and ask before:

- Changing the architecture decision in `docs/01-architecture.md`
- Altering core design tokens (color, type scale, motion timing)
- Anything that affects the content model shape in `docs/03-information-architecture.md`
- Reaching for a heavy animation or 3D dependency
- Spending effort on a feature outside the current milestone

Finishing a milestone in `docs/05-build-plan.md` is a natural checkpoint: summarize what
shipped, what is deferred, and what you recommend next, then wait.
