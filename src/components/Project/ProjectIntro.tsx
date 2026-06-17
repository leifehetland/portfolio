import Link from "next/link";
import type { Project } from "@/lib/projects";
import { Reveal } from "@/components/Reveal/Reveal";
import { DisplayNumber } from "./DisplayNumber";
import { DisplayTitle } from "./DisplayTitle";
import { MetaList } from "./MetaList";
import { EdgeMarker } from "./EdgeMarker";

type ProjectIntroProps = {
  project: Project;
};

/*
  The dark intro page for a project (docs/04). A faint display number, the eyebrow
  stating the selected-work order, the stacked title, a one-line summary, the role
  and stack metadata column, and the rotated year on the right edge. Each block
  reveals in sequence via Reveal.
*/
export function ProjectIntro({ project }: ProjectIntroProps) {
  const order = String(project.index).padStart(2, "0");

  return (
    <div className="relative flex flex-1 flex-col justify-center px-6 py-16 sm:px-10 lg:px-16">
      <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2">
        <EdgeMarker text={project.year} />
      </span>

      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1fr_16rem]">
        <div>
          <Reveal>
            <DisplayNumber n={project.index} />
          </Reveal>

          <Reveal delay={0.05}>
            <p
              className="text-utility mt-4 text-(--color-fg-muted) uppercase"
              style={{ letterSpacing: "var(--tracking-utility)" }}
            >
              Selected work .{order}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <DisplayTitle
              title={project.title}
              className="mt-4 text-(--color-fg-on-ink)"
            />
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-body mt-8 max-w-xl text-(--color-fg-on-ink)/75">
              {project.summary}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <Link
              href={`/work/${project.slug}`}
              className="text-label mt-8 inline-flex items-center gap-1.5 font-bold text-(--color-accent)"
              style={{ letterSpacing: "var(--tracking-label)" }}
            >
              Read the case study
              <span aria-hidden>↓</span>
            </Link>
          </Reveal>
        </div>

        <div className="flex flex-col gap-8 lg:pt-2">
          <Reveal delay={0.15}>
            <MetaList label="Role" items={project.role} />
          </Reveal>
          <Reveal delay={0.2}>
            <MetaList label="Stack" items={project.stack} />
          </Reveal>
          <Reveal delay={0.25}>
            <MetaList label="Type" items={[project.kind]} />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
