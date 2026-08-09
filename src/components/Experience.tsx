"use client";

import { motion } from "framer-motion";
import { RevealGroup } from "./Reveal";
import { Container, Section, SectionHeading } from "./Section";

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
    <Section id="experience">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-cyan-500/6 blur-[130px]" />
      <Container className="relative z-10">
        <SectionHeading eyebrow="Timeline" title="Experience" subtitle="Roles, responsibilities, and outcomes." />
        <RevealGroup className="space-y-8">
          {experience.map((job) => (
            <div
              key={job.company}
              className="card glow-border rounded-3xl p-6 transition-shadow hover:shadow-[0_0_40px_rgba(34,211,238,0.10)]"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-100">{job.role}</h3>
                  <p className="text-cyan-300/90">{job.company} · {job.location}</p>
                </div>
                <motion.span
                  className="rounded-xl bg-cyan-500/12 px-3 py-1 text-sm font-semibold text-cyan-200 border border-cyan-500/20"
                  whileHover={{ scale: 1.05 }}
                >
                  {job.period}
                </motion.span>
              </div>
              <ul className="space-y-2 text-zinc-300/80">
                {job.highlights.map((h, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="shrink-0 text-cyan-300">•</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
