import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getProject, getProjectSlugs } from "@/lib/projects";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Case study by Leif Hetland";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  const title = project ? project.title.replace(/\n/g, " ") : "Selected work";
  const eyebrow = project ? `${project.kind}, ${project.year}` : "Project";

  return renderOgImage({ eyebrow, title, footer: "Leif Hetland" });
}
