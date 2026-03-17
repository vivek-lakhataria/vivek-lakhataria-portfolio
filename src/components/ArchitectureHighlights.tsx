"use client";

import { motion } from "framer-motion";

export default function ArchitectureHighlights({
  highlights,
}: {
  highlights: Array<{ title: string; description: string }>;
}) {
  return (
    <section id="architecture" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-3xl font-bold text-zinc-100"
        >
          Architecture Highlights
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-zinc-500"
        >
          Patterns and practices that differentiate enterprise-grade systems
        </motion.p>
        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="glass rounded-xl p-6"
            >
              <h3 className="mb-3 text-lg font-semibold text-cyan-400">{item.title}</h3>
              <p className="text-zinc-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 rounded-xl border border-dashed border-cyan-500/30 bg-cyan-500/5 p-8 text-center"
        >
          <p className="text-zinc-400">
            <span className="font-medium text-cyan-400">Architecture diagram</span> — Add a screenshot of your system design here for maximum impact
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            Recommended: Multi-tenant flow, CQRS diagram, or service topology
          </p>
        </motion.div>
      </div>
    </section>
  );
}
