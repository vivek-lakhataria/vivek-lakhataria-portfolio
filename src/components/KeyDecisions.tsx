"use client";

import { RevealGroup } from "./Reveal";
import { Container, Section, SectionHeading } from "./Section";

type Decision = { decision: string; context: string; choice: string; rationale: string };

export default function KeyDecisions({ decisions }: { decisions: Decision[] }) {
  return (
    <Section id="key-decisions">
      <Container>
        <SectionHeading eyebrow="Engineering judgement" title="Architecture decisions, with trade-offs." subtitle="The important part is not naming a pattern; it is choosing it for the right constraint." />
        <RevealGroup className="grid gap-4 md:grid-cols-2">
          {decisions.map((item, index) => <article key={item.decision} className="card rounded-2xl p-6"><div className="flex items-start gap-3"><span className="font-mono text-xs text-cyan-400/80">0{index + 1}</span><div><h3 className="font-semibold text-zinc-100">{item.decision}</h3><p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.context}</p></div></div><div className="mt-5 border-t border-white/8 pt-4"><p className="text-sm font-medium text-cyan-200">{item.choice}</p><p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.rationale}</p></div></article>)}
        </RevealGroup>
      </Container>
    </Section>
  );
}
