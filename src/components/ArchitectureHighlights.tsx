"use client";

import { motion } from "framer-motion";
import { Reveal, RevealGroup } from "./Reveal";

export default function ArchitectureHighlights({
  highlights,
}: {
  highlights: Array<{ title: string; description: string }>;
}) {
  return (
    <section id="architecture" className="relative py-24 overflow-hidden">
      <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-cyan-500/5 blur-[130px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="mb-4 text-3xl font-bold">
            <span className="gradient-text">Architecture & System Design</span>
          </h2>
          <p className="mb-12 text-zinc-500">
            Patterns and practices I apply to build scalable, enterprise-grade systems
          </p>
        </Reveal>
        <RevealGroup className="grid gap-6 md:grid-cols-2">
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -4 }}
              className="glass rounded-xl p-6 transition-shadow hover:shadow-[0_0_25px_rgba(34,211,238,0.08)]"
            >
              <h3 className="mb-3 text-lg font-semibold text-cyan-400">{item.title}</h3>
              <p className="text-zinc-400">{item.description}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
