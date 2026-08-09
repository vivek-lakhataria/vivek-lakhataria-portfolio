"use client";

import { RevealGroup } from "./Reveal";
import { Container, Section, SectionHeading } from "./Section";

export default function ProblemsSolved({ problems }: { problems: Array<{ problem: string; solution: string }> }) {
  return (
    <Section id="problems">
      <Container>
        <SectionHeading eyebrow="Delivery evidence" title="Risk reduced. Outcomes improved." subtitle="Examples of the operational problems I have helped teams resolve." />
        <RevealGroup className="grid gap-4 md:grid-cols-2">
          {problems.map((item) => <article key={item.problem} className="card rounded-2xl p-6"><h3 className="text-base font-semibold text-zinc-100">{item.problem}</h3><p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.solution}</p></article>)}
        </RevealGroup>
      </Container>
    </Section>
  );
}
