"use client";

import { motion } from "framer-motion";

const skillCategories = [
  { title: "Backend", key: "backend", accent: "cyan" },
  { title: "Frontend", key: "frontend", accent: "emerald" },
  { title: "Architecture", key: "architecture", accent: "violet" },
  { title: "Cloud & DevOps", key: "cloud", accent: "amber" },
  { title: "Messaging & Real-Time", key: "messaging", accent: "rose" },
] as const;

export default function Skills({ skills }: { skills: Record<string, string[]> }) {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold text-zinc-100"
        >
          Skills
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * catIndex }}
              className="glass rounded-xl p-6"
            >
              <h3 className="mb-4 text-lg font-semibold text-cyan-400">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {(skills[cat.key] ?? []).map((skill, i) => (
                  <span
                    key={skill}
                    className="rounded-md border border-zinc-600/50 bg-zinc-800/50 px-3 py-1 text-sm text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
