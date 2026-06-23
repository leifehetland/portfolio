# Launch checklist (Milestone 4)

What is ready, and what Leif needs to do to ship. The app is production-ready; the
remaining items need accounts, the domain, or a real browser, so they are not things
the build can do on its own.

## Owed by Leif before launch

- **Confirm the domain spelling** (leifhetland vs leifehetland) and set the canonical
  host (apex vs www). Put the chosen origin in `NEXT_PUBLIC_SITE_URL` (see `.env.example`).
- **Real GitHub and LinkedIn URLs.** They are placeholders (`#`) in
  `src/content/site.ts` (`contact`). Email is wired and real.
- **Run Lighthouse** on a production build (`pnpm build && pnpm start`, then audit
  `localhost:3000`). Targets: Performance and SEO >= 95, Accessibility = 100 on home.
- **Content sign-off.** All case-study copy is a first draft; the fonts, the "LH"
  monogram, and the hero lines are draft choices. Confirm or adjust.
- **Asset clearances.** Only Videodrome has media. Confirm the Bon House agreements
  before showing anything, and get collaborator sign-off on any Punchy Fox footage.

## Deploy steps (Vercel)

1. Push the repo to GitHub.
2. Import the project in Vercel (framework auto-detected as Next.js, build `pnpm build`).
3. Set `NEXT_PUBLIC_SITE_URL` in Project Settings > Environment Variables (Production
   and Preview).
4. Add the custom domain in Project Settings > Domains and point DNS at Vercel.
   Verify HTTPS and that the non-canonical host redirects to the canonical one.
5. Confirm the preview deploy looks right, then promote to production.
6. Tag a release (for example `v1.0.0`) once the live domain serves the production build.

## Post-deploy verification

- Share a `/work/<slug>` link in Slack/LinkedIn and confirm the OG card renders.
- Fetch `/{sitemap.xml,robots.txt}` on the live domain and confirm the absolute URLs
  use the real origin.
- Submit the sitemap in Google Search Console.
- Re-run Lighthouse on the live URL.

## Already done (Milestones 0 to 3 + fidelity pass)

- Static-generated home and `/work/[slug]` routes, custom 404.
- Per-route metadata, canonicals, JSON-LD Person, dynamic OG images, sitemap, robots.
- Self-hosted fonts, monochrome techno + monospace system, reference scroll choreography.
- Responsive, keyboard-navigable, reduced-motion respected.
- `pnpm typecheck`, `pnpm lint`, and `pnpm build` all clean.
