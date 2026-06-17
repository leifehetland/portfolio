import { KineticHeadline } from "./KineticHeadline";
import { Monogram } from "./Monogram";
import { ScrollCue } from "./ScrollCue";

// DRAFT hero line in Leif's voice (docs/04). Fragments assemble in sequence.
const HEADLINE_SEGMENTS = [
  "Senior full-stack",
  "engineer.",
  "TypeScript, React,",
  "and the systems",
  "behind them.",
];

/*
  The opening page (docs/04). MVP is kinetic type only (IA hero fork, option C).
  Monogram top center, a hairline divider, the assembling headline centered in the
  page, and the scroll cue at the foot. A HeroBackground slot can drop in for the
  phase-2 WebGL signature without changing this composition.
*/
export function Hero() {
  return (
    <div className="flex flex-1 flex-col px-6 py-8 sm:px-10 lg:px-16">
      <header className="flex justify-center">
        <Monogram />
      </header>

      <div
        aria-hidden
        className="mx-auto mt-8 h-px w-full max-w-5xl bg-white/10"
      />

      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center">
        <p
          className="text-utility mb-6 text-(--color-fg-muted) uppercase"
          style={{ letterSpacing: "var(--tracking-utility)" }}
        >
          Portfolio, selected work
        </p>

        <KineticHeadline segments={HEADLINE_SEGMENTS} />

        <p className="text-body mt-8 max-w-xl text-(--color-fg-on-ink)/70">
          Games to product to teaching, now building across web and film in
          Atlanta. Engineering is the spine; the craft is the medium.
        </p>
      </div>

      <footer className="flex justify-center pt-8">
        <ScrollCue />
      </footer>
    </div>
  );
}
