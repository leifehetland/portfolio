import type { Transition, Variants } from "motion/react";

/*
  Shared motion primitives. All entrance animation routes through these so timing
  stays consistent and centralized (docs/04 "Shared concerns"). Values mirror the
  motion tokens in globals.css. Components branch on useReducedMotion (from
  motion/react) to drop the transform and stagger under prefers-reduced-motion.
*/

export const REVEAL_OFFSET = 16; // px, matches --reveal-y
export const REVEAL_STAGGER = 0.09; // s, matches --reveal-stagger

export const revealTransition: Transition = {
  duration: 0.5, // matches --duration-reveal
  ease: [0.22, 1, 0.36, 1], // matches --ease-out-soft
};

// Fade up, or appear immediately when motion is reduced.
export function revealVariants(reduced: boolean): Variants {
  return {
    hidden: { opacity: 0, y: reduced ? 0 : REVEAL_OFFSET },
    shown: { opacity: 1, y: 0 },
  };
}
