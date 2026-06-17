"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { REVEAL_OFFSET, revealTransition } from "@/lib/motion";

type RevealTag = "div" | "li" | "span" | "p";

const motionTags = {
  div: motion.div,
  li: motion.li,
  span: motion.span,
  p: motion.p,
} as const;

type RevealProps = {
  children: ReactNode;
  /** Stagger this element by a delay, in seconds. */
  delay?: number;
  /** Element to render. Default "div". */
  as?: RevealTag;
  /** Reveal only once (default) or every time it enters the viewport. */
  once?: boolean;
  className?: string;
};

/*
  Wraps content to fade it up on enter (docs/04). All entrance animation routes
  through this so motion stays consistent and centralized. Under reduced motion
  the transform and transition are dropped and children render immediately.
*/
export function Reveal({
  children,
  delay = 0,
  as = "div",
  once = true,
  className,
}: RevealProps) {
  const reduced = useReducedMotion() ?? false;
  const Tag = motionTags[as];

  return (
    <Tag
      className={className}
      initial={reduced ? false : { opacity: 0, y: REVEAL_OFFSET }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </Tag>
  );
}
