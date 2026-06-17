# ADR-001: Hosting and framework for the portfolio

**Status:** Accepted
**Date:** 2026-06-12
**Deciders:** Leif

## Context

The site is a personal portfolio for a senior full-stack engineer running an active job
search. It is presentation-heavy and media-heavy (the reference design leans on video and
image case studies). There is no backend requirement at MVP. Leif owns the domain and can
point DNS anywhere. His strongest stack is TypeScript / React / Next.js.

The open question: build a plain React SPA and host it free on GitHub Pages, or use Next.js.

Forces at play:

- SEO and shareability matter, because recruiters and hiring managers will search his name
  and paste the link into Slack and LinkedIn, where preview cards are generated.
- The design is media-heavy, so image and video delivery drives the load experience.
- Time to ship matters; he is busy with contract work and interview prep.
- He may want to add dynamic pieces later (contact form, MDX writeups, a posts section,
  view counts) without a rewrite.
- Cost should stay near zero for a personal site.

## Decision

Use **Next.js (App Router, TypeScript)** deployed to **Vercel**, with the domain pointed
at Vercel via DNS. Render the portfolio as static content (statically generated routes),
keeping the option to add server features later without migrating.

## Options Considered

### Option A: Next.js + Vercel (chosen)

| Dimension        | Assessment |
|------------------|------------|
| Complexity       | Low to Medium |
| Cost             | Free on Vercel Hobby for a personal site |
| SEO              | Strong: SSG, per-route metadata, dynamic OG images |
| Media delivery   | Strong: `next/image` (AVIF/WebP, responsive, lazy) |
| Team familiarity | Highest: this is Leif's primary stack |
| Extensibility    | High: route handlers, MDX, ISR available when needed |

**Pros:** best SEO and social cards out of the box, real image optimization for a heavy
gallery, fastest path for Leif specifically, clean upgrade path to dynamic features, free.
**Cons:** ties hosting to Vercel for the nicest experience; slightly more framework surface
than a bare SPA.

### Option B: Vite React SPA + GitHub Pages

| Dimension        | Assessment |
|------------------|------------|
| Complexity       | Low |
| Cost             | Free |
| SEO              | Weak: client-rendered, needs manual meta and prerender shims for good cards |
| Media delivery   | Manual: no built-in image pipeline, hand-roll responsive sources |
| Team familiarity | High |
| Extensibility    | Low: any server feature later means adding a backend or migrating |

**Pros:** simplest mental model, fully static, zero third-party platform beyond GitHub.
**Cons:** weakest SEO and link previews (the thing that matters most for a job search),
no image optimization, repathing pain under a project subpath, and a likely rewrite the
moment a dynamic feature is wanted.

### Option C: Next.js static export + GitHub Pages

| Dimension        | Assessment |
|------------------|------------|
| Complexity       | Medium |
| Cost             | Free |
| SEO              | Good (SSG output) |
| Media delivery   | Degraded: `next/image` optimization is disabled under `output: export` |
| Team familiarity | High |
| Extensibility    | Low: no server features, defeats half the reason to use Next |

**Pros:** keeps Next ergonomics while staying on free GitHub hosting.
**Cons:** loses image optimization and all server capability, so it is the worst of both
worlds for a media-heavy portfolio. Only worth it if avoiding Vercel is a hard requirement.

## Trade-off Analysis

The decisive factors are SEO/shareability and media optimization, and both point to A.
For a job-search portfolio, the link preview and the first-paint of a heavy hero are the
moments that count, and Option A wins both without manual effort. Option B's only real
advantage is avoiding a hosting account, but Vercel's free tier removes the cost argument,
and B's SEO weakness works directly against the site's purpose. Option C surrenders the
image pipeline, which is the most valuable single feature for this content.

Team familiarity is a t, but Next is Leif's daily driver, so A is also the fastest to ship.

## Consequences

- Easier: SEO, social cards, image performance, and adding a contact form or writeups later.
- Easier: deploy and preview per branch on Vercel, custom domain in a few clicks.
- Harder: the nicest path couples to Vercel. Mitigation: the app stays portable (standard
  Next), and could move to another Node host or static export if ever needed.
- To revisit: if the site stays purely static forever and Vercel coupling becomes a concern,
  Option C is the fallback, accepting the image-optimization loss.

## Action Items

1. [ ] Scaffold Next.js App Router + TypeScript strict + Tailwind.
2. [ ] Add `motion`, MDX pipeline, `next/font`. Confirm current stable versions first.
3. [ ] Create Vercel project, wire the domain via DNS.
4. [ ] Set Lighthouse budgets in CI (Performance/SEO >= 95, Accessibility = 100).
5. [ ] Record resolved dependency versions back into `CLAUDE.md`.
