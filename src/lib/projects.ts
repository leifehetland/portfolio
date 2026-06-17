import type { ComponentType } from "react";

/*
  Content model (docs/03). A project is one MDX file: typed metadata exported as
  `meta`, and the narrative as the MDX body (default export). Components read this
  data, nothing about a project is hardcoded in JSX. Adding or reordering projects
  is a content edit, not a code change.
*/

export type MediaItem =
  | { type: "image"; src: string; alt: string; w: number; h: number }
  | { type: "video"; src: string; poster: string }
  | { type: "embed"; provider: "youtube" | "vimeo"; id: string };

export type ProjectLink = { label: string; href: string };

export type ProjectMeta = {
  slug: string; // url segment, e.g. "videodrome"
  index: number; // position in the selected-work sequence
  title: string; // may contain "\n" for the stacked display title
  year: string; // shown in the rotated edge marker
  kind: string; // "Web app", "Platform", "Consulting", "Open source"
  summary: string; // one or two sentences, dark intro page
  role: string[]; // metadata column
  stack: string[]; // tech
  media: MediaItem[]; // carousel sources
  links?: ProjectLink[]; // live, repo, write-up
  outcomes?: string[]; // reference "Recognitions" slot, reframed as outcomes/metrics
  context?: string[]; // reference "The Team" slot, reframed as collaborators/context
  status?: string; // optional note, e.g. "In development"
};

export type Project = ProjectMeta & {
  Body: ComponentType;
};

// Project modules. Each .mdx exports typed `meta` and a default Body component.
// The selected-work order is driven by each project's `index` (sorted below).
import VideodromeBody, {
  meta as videodromeMeta,
} from "@/content/projects/videodrome.mdx";
import BonHouseBody, {
  meta as bonHouseMeta,
} from "@/content/projects/bon-house.mdx";
import GeorgiaTechBody, {
  meta as georgiaTechMeta,
} from "@/content/projects/georgia-tech.mdx";
import HortonGroupBody, {
  meta as hortonGroupMeta,
} from "@/content/projects/horton-group.mdx";
import PunchyFoxBody, {
  meta as punchyFoxMeta,
} from "@/content/projects/punchy-fox.mdx";

const modules: { meta: ProjectMeta; Body: ComponentType }[] = [
  { meta: videodromeMeta, Body: VideodromeBody },
  { meta: bonHouseMeta, Body: BonHouseBody },
  { meta: georgiaTechMeta, Body: GeorgiaTechBody },
  { meta: hortonGroupMeta, Body: HortonGroupBody },
  { meta: punchyFoxMeta, Body: PunchyFoxBody },
];

export const projects: Project[] = modules
  .map(({ meta, Body }) => ({ ...meta, Body }))
  .sort((a, b) => a.index - b.index);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
