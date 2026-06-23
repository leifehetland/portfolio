"use client";

import { motion, useReducedMotion } from "motion/react";
import { REVEAL_OFFSET, REVEAL_STAGGER, revealTransition } from "@/lib/motion";

type KineticHeadlineProps = {
  /** Lines revealed in sequence to assemble the opening statement. */
  segments: string[];
};

/*
  The assembling opening (docs/04 + reference hero). Each line fades up in a timed
  sequence via staggerChildren, echoing the reference's centered monospace cold-open.
  Under reduced motion every line is visible at once. The full statement is exposed
  to assistive tech as one accessible label.
*/
export function KineticHeadline({ segments }: KineticHeadlineProps) {
  const reduced = useReducedMotion() ?? false;
  const statement = segments.join(". ");

  const container = {
    hidden: {},
    shown: { transition: { staggerChildren: reduced ? 0 : REVEAL_STAGGER } },
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
      aria-label={statement}
      className="text-center font-mono text-[clamp(1.05rem,2.6vw,1.6rem)] leading-[1.7] font-medium tracking-tight text-(--color-fg-on-ink) uppercase"
    >
      {segments.map((segment, i) => (
        <motion.span
          key={i}
          variants={item}
          transition={revealTransition}
          aria-hidden
          className="block"
        >
          {segment}
        </motion.span>
      ))}
    </motion.h1>
  );
}
