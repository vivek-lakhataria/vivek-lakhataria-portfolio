"use client";

/**
 * Reveal / RevealGroup — scroll-triggered entrance animation primitives.
 *
 * Reveal: wraps a single block (a heading, a paragraph, a card) and
 * fades/slides it in once when it scrolls into view.
 *
 * RevealGroup: wraps a list of siblings (skill tags, project cards,
 * timeline items) and staggers each child's entrance instead of
 * animating them all at once.
 *
 * Both respect prefers-reduced-motion (content just appears, no motion),
 * and both animate only once (viewport once: true).
 */

import { Children, ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: ReactNode;
  /** Delay in seconds before this element starts animating in. */
  delay?: number;
  /** Vertical offset (px) it animates in from. */
  y?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, y = 28, className }: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  /** Seconds between each child's entrance. */
  stagger?: number;
  /** Vertical offset (px) each child animates in from. */
  y?: number;
  className?: string;
};

export function RevealGroup({
  children,
  stagger = 0.08,
  y = 20,
  className,
}: RevealGroupProps) {
  const reduced = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduced ? 0 : stagger },
    },
  };

  const item: Variants = {
    hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: EASE },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
    >
      {Children.map(children, (child, i) => (
        <motion.div key={i} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
