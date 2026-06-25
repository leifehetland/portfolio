import { about } from "@/content/site";
import { Reveal } from "@/components/Reveal/Reveal";

/*
  About Me (docs/03 structure, Y78 style). A punchy AI-native bio in the monospace
  voice, on the ink surface. Content lives in src/content/site.ts.
*/
export function About() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center px-6 py-20 sm:px-10 lg:px-16">
      <Reveal>
        <p
          className="text-utility text-(--color-fg-muted) uppercase"
          style={{ letterSpacing: "var(--tracking-utility)" }}
        >
          About
        </p>
      </Reveal>

      <div className="mt-8 space-y-6">
        {about.map((paragraph, i) => (
          <Reveal key={i} delay={0.05 * (i + 1)}>
            <p className="font-mono text-[clamp(1.05rem,2.4vw,1.5rem)] leading-relaxed text-(--color-fg-on-ink)">
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
