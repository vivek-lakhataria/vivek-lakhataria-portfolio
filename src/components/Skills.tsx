"use client";

import { motion } from "framer-motion";

const skillCategories = [
  { title: "Backend", key: "backend", icon: "⚙️" },
  { title: "Frontend", key: "frontend", icon: "🎨" },
  { title: "Architecture", key: "architecture", icon: "🏗️" },
  { title: "Cloud & DevOps", key: "cloud", icon: "☁️" },
  { title: "Messaging & Real-Time", key: "messaging", icon: "⚡" },
  { title: "Testing & Quality", key: "quality", icon: "✓" },
] as const;

export default function Skills({ skills }: { skills: Record<string, string[]> }) {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-[150px]" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-violet-500/5 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="mb-2 text-3xl font-bold">
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-zinc-500">Technologies & practices I work with daily</p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * catIndex, type: "spring", stiffness: 100 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:bg-zinc-900/80 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-lg">
                    {cat.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-cyan-400">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(skills[cat.key] ?? []).map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.02 * i }}
                      className="inline-flex items-center rounded-lg border border-zinc-700/50 bg-zinc-800/80 px-3 py-1.5 text-sm text-zinc-300 transition-all duration-200 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-[0_0_12px_rgba(34,211,238,0.15)]"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
