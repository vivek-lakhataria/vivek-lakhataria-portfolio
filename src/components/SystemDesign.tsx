"use client";

import { motion } from "framer-motion";
import { Reveal, RevealGroup } from "./Reveal";

export default function SystemDesign({ principles }: { principles: string[] }) {
  return (
    <section id="system-design" className="relative py-24 overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="mb-12 text-3xl font-bold">
            <span className="gradient-text">System Design Thinking</span>
          </h2>
        </Reveal>
        <Reveal className="glass-strong glow-border rounded-2xl p-8">
          <RevealGroup stagger={0.12} className="space-y-4">
            {principles.map((p, i) => (
              <li key={i} className="flex items-start gap-4 group">
                <motion.span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {i + 1}
                </motion.span>
                <span className="text-zinc-300 group-hover:text-zinc-100 transition-colors">{p}</span>
              </li>
            ))}
          </RevealGroup>
        </Reveal>
      </div>
    </section>
  );
}
