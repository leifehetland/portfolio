"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "motion/react";
import type { BeforeAfterPair } from "@/lib/projects";
import { MediaFrame } from "./MediaFrame";

type BeforeAfterProps = BeforeAfterPair & {
  /** Accessible name for the comparison region. */
  label: string;
};

/*
  The redesign comparison (docs/04), the signature of the James Williams study.
  A draggable divider wipes between the before and after captures. The slider is
  a native range input stretched over the frame, so pointer drag, touch, arrow
  keys, and screen readers all work for free; the visible handle tracks its value.
  Full-page-tall captures are top-cropped to the same frame so the divider always
  compares the same region, with "open full size" links for the complete pages.
  Under reduced motion the wipe is replaced by the two captures stacked and labeled.
*/
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-utility rounded-full bg-(--color-ink)/70 px-3 py-1 text-(--color-fg-on-ink) uppercase"
      style={{ letterSpacing: "var(--tracking-utility)" }}
    >
      {children}
    </span>
  );
}

function FullSizeLinks({
  before,
  after,
}: Pick<BeforeAfterPair, "before" | "after">) {
  return (
    <p className="text-utility mt-3 text-(--color-fg-muted)">
      Open full size:{" "}
      <a
        href={before.src}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2"
      >
        before
      </a>
      {", "}
      <a
        href={after.src}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2"
      >
        after
      </a>
    </p>
  );
}

export function BeforeAfter({
  before,
  after,
  caption,
  label,
}: BeforeAfterProps) {
  const reduced = useReducedMotion() ?? false;
  const [position, setPosition] = useState(50);
  const captionId = useId();

  if (reduced) {
    // Stacked, labeled fallback: the comparison reads without the drag interaction.
    return (
      <figure aria-label={label}>
        <div className="flex flex-col gap-6">
          {[
            { item: before, name: "Before" },
            { item: after, name: "After" },
          ].map(({ item, name }) => (
            <div key={name}>
              <p
                className="text-utility mb-2 text-(--color-fg-muted) uppercase"
                style={{ letterSpacing: "var(--tracking-utility)" }}
              >
                {name}
              </p>
              <MediaFrame>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.w}
                  height={item.h}
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="h-auto w-full"
                />
              </MediaFrame>
            </div>
          ))}
        </div>
        <FullSizeLinks before={before} after={after} />
        {caption && (
          <figcaption
            id={captionId}
            className="text-utility mt-2 text-(--color-fg-muted)"
          >
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure aria-label={label}>
      <MediaFrame className="relative">
        <div className="group relative aspect-[16/10] w-full select-none">
          {/* Before: base layer, top-cropped so both sides compare the same region */}
          <Image
            src={before.src}
            alt={before.alt}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover object-top"
          />
          {/* After: overlay clipped to the right of the divider */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ clipPath: `inset(0 0 0 ${position}%)` }}
          >
            <Image
              src={after.src}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover object-top"
            />
          </div>

          {/* The actual control: a full-bleed range input. Invisible but focusable;
             pointer drag, touch, and arrow keys all drive it natively. The visible
             focus ring is delegated to the handle below via peer-focus-visible. */}
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            aria-label={`${label}: slide to compare before and after`}
            aria-describedby={caption ? captionId : undefined}
            className="absolute inset-0 z-10 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
          />

          {/* Divider and handle track the slider value */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-(--color-paper)"
            style={{ left: `${position}%` }}
          >
            <span className="absolute top-1/2 left-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-(--color-frame) bg-(--color-paper) text-sm text-(--color-fg-on-paper) shadow-sm group-has-[:focus-visible]:outline-2 group-has-[:focus-visible]:outline-offset-3 group-has-[:focus-visible]:outline-(--color-accent)" />
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute top-3 left-3"
          >
            <Chip>Before</Chip>
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute top-3 right-3"
          >
            <Chip>After</Chip>
          </div>
        </div>
      </MediaFrame>
      <FullSizeLinks before={before} after={after} />
      {caption && (
        <figcaption
          id={captionId}
          className="text-utility mt-2 text-(--color-fg-muted)"
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
