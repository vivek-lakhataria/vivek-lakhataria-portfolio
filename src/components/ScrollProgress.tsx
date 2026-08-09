"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const reduced = useReducedMotion();

  if (reduced) return null;

  return <motion.div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 shadow-[0_0_16px_rgba(34,211,238,0.7)]" style={{ scaleX }} />;
}
