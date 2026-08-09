"use client";

import { motion } from "framer-motion";
import { Reveal, RevealGroup } from "./Reveal";
import { Container, Section, SectionHeading } from "./Section";

export default function ArchitectureHighlights({ highlights }: { highlights: Array<{ title: string; description: string }> }) {
  return (
    <Section id="architecture">
      <Container>
        <SectionHeading eyebrow="Architecture practice" title="Designed for ownership, not just launch." subtitle="The patterns I use to keep complex products secure, observable, and ready to evolve." />
        <Reveal className="architecture-map mb-8 overflow-hidden rounded-2xl p-5 sm:p-7">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3"><div><p className="font-mono text-xs uppercase tracking-[0.15em] text-cyan-300">Reference platform topology</p><p className="mt-1 text-sm text-zinc-400">A product-oriented view of the systems I lead.</p></div><span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-zinc-500">tenant-aware</span></div>
          <div className="grid gap-3 md:grid-cols-4">
            {[['Experience', 'React 19 · Angular · realtime UX'], ['Platform', '.NET 10 · CQRS · REST · RBAC'], ['Async services', 'Service Bus · Event Grid · workers'], ['Data & insight', 'PostgreSQL · Redis · telemetry']].map(([title, detail], index) => <div key={title} className="relative rounded-xl border border-white/10 bg-zinc-950/60 p-4"><span className="mb-3 flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400/10 font-mono text-xs text-cyan-300">0{index + 1}</span><h3 className="font-semibold text-zinc-100">{title}</h3><p className="mt-1 text-xs leading-5 text-zinc-400">{detail}</p>{index < 3 && <span className="architecture-arrow hidden md:block" aria-hidden="true">→</span>}</div>)}
          </div>
        </Reveal>
        <RevealGroup className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => <motion.article key={item.title} whileHover={{ y: -4 }} className="card rounded-2xl p-6 transition-colors hover:border-cyan-300/25"><span className="font-mono text-xs text-cyan-400/80">0{index + 1}</span><h3 className="mt-4 text-lg font-semibold text-zinc-100">{item.title}</h3><p className="mt-2 leading-relaxed text-zinc-400">{item.description}</p></motion.article>)}
        </RevealGroup>
      </Container>
    </Section>
  );
}
