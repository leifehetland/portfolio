"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Reveal } from "@/components/Reveal/Reveal";
import { EdgeMarker } from "./EdgeMarker";

type ProjectIntroProps = {
  index: number;
  slug: string;
  title: string;
  year: string;
  kind: string;
  summary: string;
  role: string[];
  context?: string[];
  /** Lead image used as the emerging background, when the project has one. */
  bg?: { src: string; alt: string } | null;
};

/*
  Dark intro page (docs/02 + reference choreography). A dominant techno numeral and
  a giant stacked title on the left edge, with the project's artwork fading in behind
  as the section scrolls through the viewport. Text-only projects fall back to a clean
  dark page. Monochrome throughout.
*/
export function ProjectIntro({
  index,
  slug,
  title,
  year,
  kind,
  summary,
  role,
  context,
  bg,
}: ProjectIntroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [0, 0.5, 0.28]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  const order = String(index).padStart(2, "0");
  const lines = title.toUpperCase().split("\n");
  const meta = [kind, ...(context ?? [])];

  return (
    <div ref={ref} className="relative flex flex-1 flex-col overflow-hidden">
      {/* Emerging background artwork (projects with media only). */}
      {bg && (
        <motion.div
          aria-hidden
          className="absolute inset-0"
          style={{
            opacity: reduced ? 0.3 : bgOpacity,
            scale: reduced ? 1 : bgScale,
          }}
        >
          <Image
            src={bg.src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-(--color-ink)/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-(--color-ink) via-(--color-ink)/40 to-transparent" />
        </motion.div>
      )}

      <span className="pointer-events-none absolute top-1/2 right-3 z-10 -translate-y-1/2">
        <EdgeMarker text={`Y . ${year}`} />
      </span>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-16 sm:px-10 lg:px-16">
        {/* Number + selected-work order */}
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span
              className="text-utility text-(--color-fg-muted) uppercase"
              style={{ letterSpacing: "var(--tracking-utility)" }}
            >
              Selected work
            </span>
            <span className="font-numeral text-display-xl leading-none font-semibold text-(--color-fg-on-ink)">
              {order}
            </span>
          </div>
        </Reveal>

        {/* Metadata block */}
        <Reveal delay={0.05}>
          <ul className="text-utility mt-8 space-y-1 text-(--color-fg-muted) uppercase">
            {meta.map((m, i) => (
              <li key={i} style={{ letterSpacing: "var(--tracking-utility)" }}>
                {m}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Giant stacked title on the left */}
        <Reveal delay={0.1}>
          <h2 className="font-display text-display-l mt-6 leading-[0.86] font-extrabold tracking-tight text-(--color-fg-on-ink) uppercase">
            {lines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-body mt-8 max-w-xl text-(--color-fg-on-ink)/75">
            {summary}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link
              href={`/work/${slug}`}
              className="text-label inline-flex items-center gap-1.5 font-bold text-(--color-fg-on-ink) underline-offset-4 hover:underline"
              style={{ letterSpacing: "var(--tracking-label)" }}
            >
              Read the case study
              <span aria-hidden>↓</span>
            </Link>
            <span
              className="text-utility text-(--color-fg-muted) uppercase"
              style={{ letterSpacing: "var(--tracking-utility)" }}
            >
              {role.join(" / ")}
            </span>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
