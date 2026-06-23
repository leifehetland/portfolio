import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/*
  Shared renderer for dynamic Open Graph images (docs/03 SEO). 1200x630, the site's
  ink palette, the display serif for the title and the sans for labels. Fonts are
  static OG-only instances (satori does not take variable woff2), vendored under
  src/app/fonts/og. Used by the home and per-project opengraph-image routes.
*/

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const INK = "#0A0A0A";
const PAPER = "rgba(255,255,255,0.94)";
const MUTED = "#8A8A8A";
const RULE = "#FFFFFF";

async function ogFonts() {
  const dir = join(process.cwd(), "src/app/fonts/og");
  const [archivo, mono] = await Promise.all([
    readFile(join(dir, "Archivo-800.ttf")),
    readFile(join(dir, "JetBrainsMono-500.ttf")),
  ]);
  return [
    {
      name: "Archivo",
      data: archivo,
      weight: 800 as const,
      style: "normal" as const,
    },
    {
      name: "Mono",
      data: mono,
      weight: 500 as const,
      style: "normal" as const,
    },
  ];
}

export async function renderOgImage({
  eyebrow,
  title,
  footer,
}: {
  eyebrow: string;
  title: string;
  footer: string;
}) {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: INK,
        padding: "80px",
        fontFamily: "Mono",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 26,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: MUTED,
        }}
      >
        {eyebrow}
      </div>
      <div
        style={{
          display: "flex",
          fontFamily: "Archivo",
          fontWeight: 800,
          textTransform: "uppercase",
          fontSize: title.length > 18 ? 92 : 120,
          lineHeight: 0.98,
          letterSpacing: -2,
          color: PAPER,
          maxWidth: "1040px",
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{ width: 48, height: 6, background: RULE, borderRadius: 3 }}
        />
        <div style={{ display: "flex", fontSize: 30, color: PAPER }}>
          {footer}
        </div>
      </div>
    </div>,
    { ...OG_SIZE, fonts: await ogFonts() },
  );
}
