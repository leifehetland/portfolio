import { technologies } from "@/content/site";
import { Reveal } from "@/components/Reveal/Reveal";
import { MetaList } from "@/components/Project/MetaList";

/*
  Technologies (docs/03 structure, Y78 style). The resume stack grouped into a mono
  grid, AI listed first. Content lives in src/content/site.ts.
*/
export function Technologies() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-20 sm:px-10 lg:px-16">
      <Reveal>
        <p
          className="text-utility text-(--color-fg-muted) uppercase"
          style={{ letterSpacing: "var(--tracking-utility)" }}
        >
          Technologies
        </p>
      </Reveal>

      <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((group, i) => (
          <Reveal key={group.label} delay={0.04 * (i + 1)}>
            <MetaList label={group.label} items={group.items} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
