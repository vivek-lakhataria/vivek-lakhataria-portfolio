"use client";

import { motion } from "framer-motion";

export default function ProblemsSolved({
  problems,
}: {
  problems: Array<{ problem: string; solution: string }>;
}) {
  return (
    <section id="problems" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold text-zinc-100"
        >
          Problems I Solved
        </motion.h2>
        <div className="space-y-6">
          {problems.map((item, i) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="glass rounded-xl p-6"
            >
              <h3 className="mb-2 font-medium text-rose-400/90">Problem: {item.problem}</h3>
              <p className="text-zinc-400">
                <span className="text-cyan-400">Solution:</span> {item.solution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
