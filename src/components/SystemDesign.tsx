"use client";

import { motion } from "framer-motion";

export default function SystemDesign({ principles }: { principles: string[] }) {
  return (
    <section id="system-design" className="relative py-24 overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold"
        >
          <span className="gradient-text">System Design Thinking</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong glow-border rounded-2xl p-8"
        >
          <ul className="space-y-4">
            {principles.map((p, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, type: "spring" }}
                className="flex items-start gap-4 group"
              >
                <motion.span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {i + 1}
                </motion.span>
                <span className="text-zinc-300 group-hover:text-zinc-100 transition-colors">{p}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
