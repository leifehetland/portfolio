import type { ElementType } from "react";
import type { Project } from "@/lib/projects";
import { Reveal } from "@/components/Reveal/Reveal";
import { MediaCarousel } from "./MediaCarousel";
import { MetaList } from "./MetaList";
import { LinkRow } from "./LinkRow";

type ProjectDetailProps = {
  project: Project;
  /** Heading element for the title. h1 on the standalone route, h2 in the pager. */
  titleAs?: ElementType;
};

/*
  The white detail page for a project (docs/04). A heading title, the media carousel,
  then a two-column editorial layout: the MDX narrative beside a column of context,
  outcomes, and links. Reused by the home pager and the /work/[slug] route.
*/
export function ProjectDetail({
  project,
  titleAs: Title = "h2",
}: ProjectDetailProps) {
  const { Body } = project;

  return (
    <div className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p
            className="text-utility text-(--color-fg-muted) uppercase"
            style={{ letterSpacing: "var(--tracking-utility)" }}
          >
            {project.kind} , {project.year}
            {project.status ? ` , ${project.status}` : ""}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <Title className="text-heading font-display mt-3 max-w-3xl font-medium tracking-tight text-(--color-fg-on-paper)">
            {project.title.replace(/\n/g, " ")}
          </Title>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-body mt-6 max-w-2xl text-(--color-fg-on-paper)/80">
            {project.summary}
          </p>
        </Reveal>

        {project.media.length > 0 && (
          <Reveal delay={0.1}>
            <div className="mt-12">
              <MediaCarousel
                items={project.media}
                label={`${project.title.replace(/\n/g, " ")} media`}
              />
            </div>
          </Reveal>
        )}

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_18rem]">
          <Reveal className="max-w-prose">
            <div className="font-sans">
              <Body />
            </div>
          </Reveal>

          <aside className="flex flex-col gap-10">
            {project.context && project.context.length > 0 && (
              <Reveal delay={0.05}>
                <MetaList label="Context" items={project.context} />
              </Reveal>
            )}
            {project.outcomes && project.outcomes.length > 0 && (
              <Reveal delay={0.1}>
                <MetaList label="Outcomes" items={project.outcomes} />
              </Reveal>
            )}
            {project.links && project.links.length > 0 && (
              <Reveal delay={0.15}>
                <div>
                  <p
                    className="text-utility mb-3 text-(--color-fg-muted) uppercase"
                    style={{ letterSpacing: "var(--tracking-utility)" }}
                  >
                    Links
                  </p>
                  <LinkRow links={project.links} />
                </div>
              </Reveal>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
