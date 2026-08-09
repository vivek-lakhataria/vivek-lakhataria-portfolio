"use client";

import { motion } from "framer-motion";
import { RevealGroup } from "./Reveal";
import { Container, Section, SectionHeading } from "./Section";

type Evaluation = {
  title: string;
  outcome: string;
  learnings: string;
};

export default function TechEvaluations({ evaluations }: { evaluations: Evaluation[] }) {
  return (
    <Section id="tech-evaluations">
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-500/6 blur-[140px]" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="POCs"
          title="Tech Evaluations"
          subtitle="Short loops, measurable criteria, confident choices."
        />
        <RevealGroup className="grid gap-6 md:grid-cols-2">
          {evaluations.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -4 }}
              className="card rounded-3xl p-6 transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.10)]"
            >
              <h3 className="mb-3 font-semibold text-cyan-400">{item.title}</h3>
              <p className="mb-2 text-sm text-zinc-200/90">{item.outcome}</p>
              <p className="text-sm text-zinc-300/70">{item.learnings}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
