"use client";

import { motion } from "framer-motion";

export default function About({ about }: { about: { summary: string; highlights: string[] } }) {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-violet-500/5 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold"
        >
          <span className="gradient-text">About Me</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="glass-strong glow-border rounded-2xl p-8 md:p-12 transition-shadow hover:shadow-[0_0_40px_rgba(34,211,238,0.06)]"
        >
          <p className="mb-8 text-lg leading-relaxed text-zinc-300">{about.summary}</p>
          <ul className="space-y-3">
            {about.highlights.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, type: "spring" }}
                className="flex items-start gap-3 text-zinc-400 group"
              >
                <motion.span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
                  whileHover={{ scale: 1.5, boxShadow: "0 0 10px rgba(34, 211, 238, 0.5)" }}
                />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
