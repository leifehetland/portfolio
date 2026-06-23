import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getProjectSlugs } from "@/lib/projects";
import { ProjectDetail } from "@/components/Project/ProjectDetail";
import { SkipLink } from "@/components/SkipLink/SkipLink";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const name = project.title.replace(/\n/g, " ");
  const title = `${name}, ${project.kind}`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      title,
      description: project.summary,
      url: `/work/${project.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.summary,
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <SkipLink />
      <div className="min-h-svh bg-(--color-paper) text-(--color-fg-on-paper)">
        <header className="px-6 py-6 sm:px-10 lg:px-16">
          <Link
            href="/"
            className="text-label inline-flex items-center gap-1.5 font-bold text-(--color-fg-on-paper)"
            style={{ letterSpacing: "var(--tracking-label)" }}
          >
            <span aria-hidden>←</span>
            Leif Hetland
          </Link>
        </header>
        <main id="main">
          <ProjectDetail project={project} titleAs="h1" />
        </main>
      </div>
    </>
  );
}
