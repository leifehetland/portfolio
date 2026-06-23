import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";
import { getProjectSlugs } from "@/lib/projects";

/*
  Generated sitemap (docs/03 SEO). Home plus every selected-work route. Regenerates
  at build, so adding a project is reflected automatically.
*/
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...getProjectSlugs().map((slug) => ({
      url: `${SITE_URL}/work/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
