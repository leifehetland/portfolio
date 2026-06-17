"use client";

import { motion, useReducedMotion } from "motion/react";
import { REVEAL_OFFSET, REVEAL_STAGGER, revealTransition } from "@/lib/motion";

type KineticHeadlineProps = {
  /** Fragments revealed in sequence to assemble the headline. */
  segments: string[];
};

/*
  The assembling-sentence effect (docs/04). Each fragment fades up in a timed
  sequence via staggerChildren. Under reduced motion, every fragment is visible
  at once with no stagger or transform. The full sentence is exposed to assistive
  tech as one accessible label so it is never read as disjointed fragments.
*/
export function KineticHeadline({ segments }: KineticHeadlineProps) {
  const reduced = useReducedMotion() ?? false;
  const sentence = segments.join(" ");

  const container = {
    hidden: {},
    shown: {
      transition: { staggerChildren: reduced ? 0 : REVEAL_STAGGER },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : REVEAL_OFFSET },
    shown: { opacity: 1, y: 0 },
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="shown"
      aria-label={sentence}
      className="text-display-l font-display max-w-[16ch] font-light tracking-tight text-balance text-(--color-fg-on-ink)"
    >
      {segments.map((segment, i) => (
        <motion.span
          key={i}
          variants={item}
          transition={revealTransition}
          aria-hidden
          className="inline-block"
        >
          {segment}
          {i < segments.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.h1>
  );
}
