"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

type Project = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  duration: string;
  teamSize: number;
  role: string;
  impact?: string;
  highlights: string[];
  featured?: boolean;
};

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(34,211,238,0.03),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-3xl font-bold"
        >
          <span className="gradient-text">Featured Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-zinc-500"
        >
          Building systems that scale
        </motion.p>
        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
            >
              <TiltCard>
                <div className="glass-strong glow-border group rounded-2xl p-8 transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.1)]">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="mb-1 flex items-center gap-3">
                        <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-cyan-400 transition-colors">
                          {project.name}
                        </h3>
                        {project.featured && (
                          <motion.span
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-xs font-medium text-cyan-400 border border-cyan-500/30"
                          >
                            Featured
                          </motion.span>
                        )}
                      </div>
                      <p className="text-sm text-cyan-400/90">{project.tagline}</p>
                    </div>
                    <span className="rounded-md border border-zinc-600 px-3 py-1 text-xs text-zinc-500">
                      {project.role}
                    </span>
                  </div>
                  <p className="mb-4 text-zinc-400 leading-relaxed">{project.description}</p>
                  {project.impact && (
                    <p className="mb-4 text-sm font-medium text-cyan-400/90">
                      Impact: {project.impact}
                    </p>
                  )}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((t, j) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.02 * j }}
                        className="skill-tag rounded-md bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-400 border border-cyan-500/20"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                  <p className="mb-4 text-sm text-zinc-500">
                    {project.duration} · Team of {project.teamSize}
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    {project.highlights.map((h, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.03 * j }}
                        className="flex gap-2"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                        {h}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
