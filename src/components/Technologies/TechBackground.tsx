"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "motion/react";

/*
  Decorative video backdrop for the Technologies section: a muted, looping
  Amsterdam metro clip under a heavy ink scrim so the stack stays readable.
  The poster carries first paint. The video only mounts on non-reduced-motion,
  wider-than-mobile viewports, so small screens and reduced-motion users never
  download it (keeps the performance and accessibility floor).
*/
export function TechBackground() {
  const reduced = useReducedMotion() ?? false;
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (reduced) {
      setShowVideo(false);
      return;
    }
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setShowVideo(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduced]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <Image
        src="/media/amsterdam-subway-poster.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      {showVideo && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/media/amsterdam-subway-poster.webp"
        >
          <source src="/media/amsterdam-subway.mp4" type="video/mp4" />
        </video>
      )}
      {/* Ink scrim keeps the technology list high-contrast over the footage. */}
      <div className="absolute inset-0 bg-(--color-ink)/80" />
    </div>
  );
}
