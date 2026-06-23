import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { person } from "@/content/site";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = `${person.name}, ${person.role}`;

export default function Image() {
  return renderOgImage({
    eyebrow: "Selected work",
    title: person.name,
    footer: person.role,
  });
}
