"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

/*
  The "scroll" prompt at the bottom of the hero with a vertical hairline (docs/04).
  Fades out after the first scroll. Under reduced motion it is static (no bounce),
  and it is decorative, so it is hidden from assistive tech.
*/
export function ScrollCue() {
  const reduced = useReducedMotion() ?? false;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 8) setScrolled(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none flex flex-col items-center gap-3 transition-opacity duration-500"
      style={{ opacity: scrolled ? 0 : 1 }}
    >
      <span
        className="text-utility text-(--color-fg-muted) uppercase"
        style={{ letterSpacing: "var(--tracking-utility)" }}
      >
        Scroll
      </span>
      <span className="relative block h-12 w-px overflow-hidden bg-white/15">
        <motion.span
          className="absolute inset-x-0 top-0 block h-4 bg-white/70"
          initial={{ y: -16 }}
          animate={reduced ? { y: 0 } : { y: 48 }}
          transition={
            reduced
              ? { duration: 0 }
              : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
          }
        />
      </span>
    </div>
  );
}
