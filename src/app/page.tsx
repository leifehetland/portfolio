import { projects } from "@/lib/projects";
import { Pager } from "@/components/Pager/Pager";
import { PageSection } from "@/components/PageSection/PageSection";
import { Hero } from "@/components/Hero/Hero";
import { ProjectIntro } from "@/components/Project/ProjectIntro";
import { ProjectDetail } from "@/components/Project/ProjectDetail";
import { Capabilities } from "@/components/Capabilities/Capabilities";
import { Colophon } from "@/components/Colophon/Colophon";
import { SkipLink } from "@/components/SkipLink/SkipLink";

/*
  Home route. The hero, then each selected-work project as a dark intro page
  followed by a white detail page, all inside the snapping vertical pager.
  Projects are data (src/content), so the sequence is driven by the registry.
*/
export default function Home() {
  return (
    <>
      <SkipLink />
      <main id="main">
        <Pager>
          <PageSection tone="ink" label="Introduction">
            <Hero />
          </PageSection>

          {projects.flatMap((project) => {
            const name = project.title.replace(/\n/g, " ");
            return [
              <PageSection
                key={`${project.slug}-intro`}
                tone="ink"
                label={`${name}, overview`}
              >
                <ProjectIntro project={project} />
              </PageSection>,
              <PageSection
                key={`${project.slug}-detail`}
                tone="paper"
                label={`${name}, case study`}
              >
                <ProjectDetail project={project} />
              </PageSection>,
            ];
          })}

          <PageSection tone="ink" label="Capabilities and contact">
            <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-20 sm:px-10 lg:px-16">
              <Capabilities />
              <Colophon />
            </div>
          </PageSection>
        </Pager>
      </main>
    </>
  );
}
