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
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold text-zinc-100"
        >
          Experience
        </motion.h2>
        <div className="space-y-8">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="glass-strong rounded-xl p-6"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-100">{job.role}</h3>
                  <p className="text-cyan-400">{job.company} · {job.location}</p>
                </div>
                <span className="rounded-md bg-cyan-500/20 px-3 py-1 text-sm text-cyan-400">
                  {job.period}
                </span>
              </div>
              <ul className="space-y-2 text-zinc-400">
                {job.highlights.map((h, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="shrink-0 text-cyan-400">•</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
