"use client";

import { RevealGroup } from "./Reveal";
import { Container, Section, SectionHeading } from "./Section";

type EducationItem = {
  degree: string;
  school: string;
  period: string;
  score: string;
};

export default function Education({ education }: { education: EducationItem[] }) {
  return (
    <Section id="education" className="py-16 sm:py-20">
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-violet-500/6 blur-[140px]" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Background"
          title="Education"
          subtitle="Academic foundation in information technology."
        />
        <RevealGroup className="space-y-6">
          {education.map((item) => (
            <div
              key={item.degree}
              className="card glow-border rounded-3xl p-6 transition-shadow hover:shadow-[0_0_40px_rgba(34,211,238,0.10)]"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-100">{item.degree}</h3>
                  <p className="text-cyan-300/90">{item.school}</p>
                </div>
                <span className="rounded-xl bg-cyan-500/12 px-3 py-1 text-sm font-semibold text-cyan-200 border border-cyan-500/20">
                  {item.period} · {item.score}
                </span>
              </div>
            </div>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
