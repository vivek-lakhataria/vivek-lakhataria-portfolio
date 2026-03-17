"use client";

import { motion } from "framer-motion";

type Evaluation = {
  title: string;
  outcome: string;
  learnings: string;
};

export default function TechEvaluations({ evaluations }: { evaluations: Evaluation[] }) {
  return (
    <section id="tech-evaluations" className="relative py-24 overflow-hidden">
      <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="mb-2 text-3xl font-bold">
            <span className="gradient-text">Tech Evaluations & POCs</span>
          </h2>
          <p className="text-zinc-500">Evaluations I led before building—choosing the right tools</p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2">
          {evaluations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="glass rounded-xl p-6 transition-all hover:border-cyan-500/30"
            >
              <h3 className="mb-3 font-semibold text-cyan-400">{item.title}</h3>
              <p className="mb-2 text-sm text-zinc-300">{item.outcome}</p>
              <p className="text-sm text-zinc-500">{item.learnings}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
