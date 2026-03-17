"use client";

import { motion } from "framer-motion";

export default function Experience({
  experience,
}: {
  experience: Array<{
    company: string;
    role: string;
    period: string;
    location: string;
    highlights: string[];
  }>;
}) {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[100px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold"
        >
          <span className="gradient-text">Experience</span>
        </motion.h2>
        <div className="space-y-8">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i, type: "spring", stiffness: 100 }}
              whileHover={{ x: i % 2 === 0 ? 4 : -4 }}
              className="glass-strong glow-border rounded-xl p-6 transition-shadow hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-100">{job.role}</h3>
                  <p className="text-cyan-400">{job.company} · {job.location}</p>
                </div>
                <motion.span
                  className="rounded-md bg-cyan-500/20 px-3 py-1 text-sm text-cyan-400 border border-cyan-500/30"
                  whileHover={{ scale: 1.05 }}
                >
                  {job.period}
                </motion.span>
              </div>
              <ul className="space-y-2 text-zinc-400">
                {job.highlights.map((h, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.02 * j }}
                    className="flex gap-2"
                  >
                    <span className="shrink-0 text-cyan-400">•</span>
                    {h}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
