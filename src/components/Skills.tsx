"use client";

import { motion, useReducedMotion } from "framer-motion";
import { RevealGroup } from "./Reveal";
import { Container, Section, SectionHeading } from "./Section";

const skillCategories = [
  { title: "Backend systems", key: "backend" },
  { title: "Product engineering", key: "frontend" },
  { title: "Architecture", key: "architecture" },
  { title: "Cloud & delivery", key: "cloud" },
  { title: "Real-time & observability", key: "messaging" },
  { title: "Quality & security", key: "quality" },
  { title: "Data", key: "database" },
  { title: "Identity & access", key: "security" },
  { title: "AI services", key: "ai" },
] as const;

export default function Skills({ skills }: { skills: Record<string, string[]> }) {
  const reduced = useReducedMotion();
  return (
    <Section id="skills">
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-cyan-500/6 blur-[160px]" />
      <Container className="relative z-10">
        <SectionHeading eyebrow="Capabilities" title="Technical depth across the product lifecycle." subtitle="Tools matter only when they support a durable, secure, and usable system." />
        <RevealGroup className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.article key={category.key} whileHover={reduced ? {} : { y: -7, transition: { type: "spring", stiffness: 340, damping: 22 } }} className="skill-card card group relative min-h-[300px] overflow-hidden rounded-2xl p-6 transition-colors hover:border-cyan-300/35">
              <motion.div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-300/12 blur-3xl" initial={{ opacity: 0.15, scale: 0.7 }} whileHover={reduced ? {} : { opacity: 1, scale: 1.35 }} transition={{ duration: 0.45 }} />
              <div className="relative z-10 mb-5 flex items-center gap-3"><motion.span animate={reduced ? {} : { opacity: [0.55, 1, 0.55] }} transition={{ duration: 2.8, delay: index * 0.13, repeat: Infinity, ease: "easeInOut" }} className="font-mono text-xs text-cyan-400/80">0{index + 1}</motion.span><h3 className="font-semibold text-zinc-100">{category.title}</h3><span className="ml-auto h-px w-8 bg-gradient-to-r from-cyan-300/70 to-transparent transition-all duration-300 group-hover:w-14" /></div>
              <div className="relative z-10 flex flex-wrap gap-2">{(skills[category.key] ?? []).map((skill) => <span key={skill} className="rounded-lg border border-zinc-700/60 bg-zinc-950/35 px-2.5 py-1.5 text-sm text-zinc-300 transition-colors hover:border-cyan-400/40 hover:bg-cyan-400/8 hover:text-cyan-100">{skill}</span>)}</div>
            </motion.article>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
