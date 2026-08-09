"use client";

import { RevealGroup } from "./Reveal";
import { Container, Section, SectionHeading } from "./Section";

type Decision = {
  decision: string;
  context: string;
  choice: string;
  rationale: string;
};

export default function KeyDecisions({ decisions }: { decisions: Decision[] }) {
  return (
    <Section id="key-decisions">
      <div className="pointer-events-none absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-violet-500/6 blur-[120px]" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Architecture"
          title="Decisions"
          subtitle="Clear trade-offs, documented intent, predictable outcomes."
        />
        <RevealGroup className="space-y-6">
          {decisions.map((item) => (
            <div
              key={item.decision}
              className="card rounded-3xl border-l-4 border-l-cyan-500/40 p-6 transition-shadow hover:shadow-[0_0_40px_rgba(34,211,238,0.10)]"
            >
              <h3 className="mb-2 font-semibold text-zinc-100">{item.decision}</h3>
              <p className="mb-3 text-sm text-zinc-400/80">{item.context}</p>
              <div className="mb-2">
                <span className="text-cyan-200 font-semibold">Choice: </span>
                <span className="text-zinc-200/90">{item.choice}</span>
              </div>
              <p className="text-zinc-300/80 text-sm leading-relaxed">{item.rationale}</p>
            </div>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
