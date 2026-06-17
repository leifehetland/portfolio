import { capabilities } from "@/content/site";
import { Reveal } from "@/components/Reveal/Reveal";
import { MetaList } from "@/components/Project/MetaList";

/*
  The reference's "Expertise" list, reframed as real capabilities (docs/04). Driven
  by src/content/site.ts. Rendered on the closing ink page above the Colophon.
*/
export function Capabilities() {
  return (
    <div>
      <Reveal>
        <p
          className="text-utility text-(--color-fg-muted) uppercase"
          style={{ letterSpacing: "var(--tracking-utility)" }}
        >
          Capabilities
        </p>
      </Reveal>

      <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((group, i) => (
          <Reveal key={group.label} delay={0.05 * (i + 1)}>
            <MetaList label={group.label} items={group.items} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
