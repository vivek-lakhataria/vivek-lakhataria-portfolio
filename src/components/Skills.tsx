"use client";

import { motion } from "framer-motion";
import { RevealGroup } from "./Reveal";
import { Container, Section, SectionHeading } from "./Section";

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
    <Section id="skills">
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-cyan-500/6 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-violet-500/6 blur-[140px]" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Tooling"
          title="Skills"
          subtitle="A focused set of technologies for building secure, scalable SaaS."
        />
        <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.key}
              whileHover={{ y: -6 }}
              className="card group relative overflow-hidden rounded-3xl p-6 transition-all hover:shadow-[0_0_60px_rgba(34,211,238,0.10)]"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-lg border border-cyan-500/15">
                    {cat.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-cyan-400">{cat.title}</h3>
                </div>
                <RevealGroup className="flex flex-wrap gap-2">
                  {(skills[cat.key] ?? []).map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-xl border border-zinc-700/60 bg-zinc-950/30 px-3 py-1.5 text-sm font-medium text-zinc-200/90 transition-all duration-200 hover:border-cyan-500/35 hover:bg-cyan-500/10 hover:text-cyan-200 hover:shadow-[0_0_14px_rgba(34,211,238,0.14)]"
                    >
                      {skill}
                    </span>
                  ))}
                </RevealGroup>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
