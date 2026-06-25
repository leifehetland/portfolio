import { HeroBackground } from "./HeroBackground";
import { KineticHeadline } from "./KineticHeadline";
import { Monogram } from "./Monogram";
import { ScrollCue } from "./ScrollCue";

// DRAFT opening statement in Leif's voice (docs/04), assembled line by line as a
// centered monospace cold-open echoing the reference hero.
const HEADLINE_SEGMENTS = [
  "Full-stack engineer and instructor",
  "Bringing clarity to complex systems",
  "In code, workflows, and teams",
  "Building AI-native, end to end",
  "Atlanta, Georgia",
];

/*
  The opening page (docs/04). MVP is kinetic type only (IA hero fork, option C):
  a centered monospace statement that assembles in sequence, monochrome, with the
  stacked monogram above and the scroll cue below. A HeroBackground slot can drop in
  for the phase-2 signature without changing this composition.
*/
export function Hero() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 flex flex-1 flex-col items-center px-6 py-8 sm:px-10 lg:px-16">
        <header className="flex justify-center">
          <Monogram />
        </header>

        <div className="flex flex-1 flex-col items-center justify-center">
          <p
            className="text-utility mb-10 text-(--color-fg-muted) uppercase"
            style={{ letterSpacing: "var(--tracking-utility)" }}
          >
            Portfolio
          </p>

          <KineticHeadline segments={HEADLINE_SEGMENTS} />
        </div>

        <footer className="flex justify-center pt-8">
          <ScrollCue />
        </footer>
      </div>
    </div>
  );
}
