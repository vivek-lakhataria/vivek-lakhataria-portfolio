"use client";

import { motion } from "framer-motion";

type Decision = {
  decision: string;
  context: string;
  choice: string;
  rationale: string;
};

export default function KeyDecisions({ decisions }: { decisions: Decision[] }) {
  return (
    <section id="key-decisions" className="relative py-24 overflow-hidden">
      <div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-violet-500/5 blur-[100px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="mb-2 text-3xl font-bold">
            <span className="gradient-text">Architecture Decisions</span>
          </h2>
          <p className="text-zinc-500">Key decisions I made and the rationale behind them</p>
        </motion.div>
        <div className="space-y-6">
          {decisions.map((item, i) => (
            <motion.div
              key={item.decision}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i, type: "spring" }}
              className="glass-strong rounded-xl border-l-4 border-l-cyan-500/50 p-6 transition-shadow hover:shadow-[0_0_30px_rgba(34,211,238,0.06)]"
            >
              <h3 className="mb-2 font-semibold text-zinc-100">{item.decision}</h3>
              <p className="mb-3 text-sm text-zinc-500">{item.context}</p>
              <div className="mb-2">
                <span className="text-cyan-400 font-medium">Choice: </span>
                <span className="text-zinc-300">{item.choice}</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.rationale}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
