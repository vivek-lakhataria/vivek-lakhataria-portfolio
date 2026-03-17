"use client";

import { motion } from "framer-motion";
import { Container, Section, SectionHeading } from "./Section";

export default function About({ about }: { about: { summary: string; highlights: string[] } }) {
  return (
    <Section id="about">
      <div className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-violet-500/6 blur-[140px]" />
      <Container className="relative z-10">
        <SectionHeading eyebrow="Profile" title="About" subtitle="How I think, build, and deliver." />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="card glow-border rounded-3xl p-8 md:p-12 transition-shadow hover:shadow-[0_0_50px_rgba(34,211,238,0.08)]"
        >
          <p className="mb-8 text-lg leading-relaxed text-zinc-200/90">{about.summary}</p>
          <ul className="space-y-3">
            {about.highlights.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, type: "spring" }}
                className="flex items-start gap-3 text-zinc-300/80"
              >
                <motion.span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300"
                  whileHover={{ scale: 1.5, boxShadow: "0 0 10px rgba(34, 211, 238, 0.5)" }}
                />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </Section>
  );
}
