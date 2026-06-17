"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { MediaItem } from "@/lib/projects";
import { MediaFrame } from "./MediaFrame";

type MediaCarouselProps = {
  items: MediaItem[];
  /** Accessible name for the carousel region. */
  label: string;
};

function Slide({ item, priority }: { item: MediaItem; priority: boolean }) {
  if (item.type === "image") {
    return (
      <Image
        src={item.src}
        alt={item.alt}
        width={item.w}
        height={item.h}
        priority={priority}
        sizes="(max-width: 768px) 100vw, 900px"
        className="h-auto w-full"
      />
    );
  }
  if (item.type === "video") {
    return (
      <video
        src={item.src}
        poster={item.poster}
        muted
        loop
        playsInline
        controls
        className="h-auto w-full"
      />
    );
  }
  // embed: load the third-party iframe only when this slide is shown.
  const src =
    item.provider === "youtube"
      ? `https://www.youtube-nocookie.com/embed/${item.id}`
      : `https://player.vimeo.com/video/${item.id}`;
  return (
    <div className="aspect-video w-full">
      <iframe
        src={src}
        title="Embedded video"
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}

/*
  Horizontal slideshow inside a MediaFrame (docs/04). Counter, prev/next controls,
  keyboard arrows, and touch swipe. Slide transition uses the carousel easing token;
  under reduced motion it cross-fades instead of sliding. Images reserve space via
  width/height to avoid layout shift; embeds load only when their slide is active.
*/
export function MediaCarousel({ items, label }: MediaCarouselProps) {
  const reduced = useReducedMotion() ?? false;
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const total = items.length;

  const paginate = useCallback(
    (dir: number) => {
      setState(([current]) => [(current + dir + total) % total, dir]);
    },
    [total],
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      paginate(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      paginate(-1);
    }
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: reduced ? 0 : dir > 0 ? "100%" : "-100%",
      opacity: reduced ? 0 : 1,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: reduced ? 0 : dir > 0 ? "-100%" : "100%",
      opacity: reduced ? 0 : 1,
      position: "absolute" as const,
      inset: 0,
    }),
  };

  const single = total <= 1;

  return (
    <section
      aria-roledescription="carousel"
      aria-label={label}
      className="group relative"
      onKeyDown={single ? undefined : onKeyDown}
    >
      <MediaFrame className="relative">
        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: reduced ? 0.18 : 0.52,
                ease: [0.4, 0.24, 0.4, 1],
              }}
            >
              <Slide item={items[index]} priority={index === 0} />
            </motion.div>
          </AnimatePresence>
        </div>
      </MediaFrame>

      {!single && (
        <div className="mt-4 flex items-center justify-between">
          <p className="text-utility text-(--color-fg-muted) tabular-nums">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous slide"
              className="flex size-10 items-center justify-center rounded-full border border-(--color-fg-on-paper)/15 text-(--color-fg-on-paper) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
            >
              <span aria-hidden>←</span>
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next slide"
              className="flex size-10 items-center justify-center rounded-full border border-(--color-fg-on-paper)/15 text-(--color-fg-on-paper) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
            >
              <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
