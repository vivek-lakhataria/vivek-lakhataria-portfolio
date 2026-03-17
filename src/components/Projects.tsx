"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import { Container, Section, SectionHeading } from "./Section";

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
    <Section id="projects">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_50%_at_50%_50%,rgba(34,211,238,0.04),transparent)]" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Work"
          title="Featured Projects"
          subtitle="Real systems, real constraints, production-grade solutions."
        />
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
                <div className="card glow-border group rounded-3xl p-8 transition-all hover:shadow-[0_0_60px_rgba(34,211,238,0.12)]">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="mb-1 flex items-center gap-3">
                        <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-cyan-300 transition-colors">
                          {project.name}
                        </h3>
                        {project.featured && (
                          <motion.span
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-200 border border-cyan-500/25"
                          >
                            Featured
                          </motion.span>
                        )}
                      </div>
                      <p className="text-sm text-cyan-400/90">{project.tagline}</p>
                    </div>
                    <span className="rounded-xl border border-zinc-700/70 bg-zinc-950/30 px-3 py-1 text-xs font-semibold text-zinc-400">
                      {project.role}
                    </span>
                  </div>
                  <p className="mb-4 text-zinc-300/90 leading-relaxed">{project.description}</p>
                  {project.impact && (
                    <p className="mb-5 text-sm font-semibold text-cyan-200/90">
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
                        className="skill-tag rounded-xl bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-200 border border-cyan-500/20"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                  <p className="mb-5 text-sm text-zinc-400/80">
                    {project.duration} · Team of {project.teamSize}
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-300/80">
                    {project.highlights.map((h, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.03 * j }}
                        className="flex gap-2"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-300" />
                        {h}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
