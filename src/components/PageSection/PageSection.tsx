import type { ReactNode } from "react";

type Tone = "ink" | "paper";

type PageSectionProps = {
  tone?: Tone;
  /** Snap this section to the top when scrolling. Default true. */
  snap?: boolean;
  /** Optional id for in-page anchors / skip links. */
  id?: string;
  /** Accessible label for the section landmark. */
  label?: string;
  children: ReactNode;
};

/*
  A single full-height page in the vertical pager (docs/04). Sets a minimum height
  of 100svh (svh handles mobile browser chrome), the tone background, and scroll
  snap alignment. Sections taller than the viewport grow past 100svh and snap at
  their start, scrolling internally before advancing.
*/
const toneClasses: Record<Tone, string> = {
  ink: "bg-(--color-ink) text-(--color-fg-on-ink)",
  paper: "bg-(--color-paper) text-(--color-fg-on-paper)",
};

export function PageSection({
  tone = "ink",
  snap = true,
  id,
  label,
  children,
}: PageSectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      data-tone={tone}
      className={`relative flex min-h-svh w-full flex-col ${toneClasses[tone]} ${
        snap ? "snap-start" : ""
      }`}
    >
      {children}
    </section>
  );
}
