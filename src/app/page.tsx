import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ArchitectureHighlights from "@/components/ArchitectureHighlights";
import KeyDecisions from "@/components/KeyDecisions";
import TechEvaluations from "@/components/TechEvaluations";
import SystemDesign from "@/components/SystemDesign";
import ProblemsSolved from "@/components/ProblemsSolved";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import {
  profile,
  leadershipMetrics,
  about,
  skills,
  experience,
  projects,
  architectureHighlights,
  architectureDecisions,
  techEvaluations,
  systemDesignThinking,
  problemsSolved,
  education,
} from "@/data/content";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero profile={profile} metrics={leadershipMetrics} />
        <About about={about} />
        <Skills skills={skills} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <ArchitectureHighlights highlights={architectureHighlights} />
        <KeyDecisions decisions={architectureDecisions} />
        <TechEvaluations evaluations={techEvaluations} />
        <SystemDesign principles={systemDesignThinking} />
        <ProblemsSolved problems={problemsSolved} />
        <Education education={education} />
        <Contact profile={profile} />
      </main>
      <footer className="relative border-t border-zinc-800/50 py-8 text-center text-sm text-zinc-500">{`© ${new Date().getFullYear()} Vivek Lakhataria · Senior Full-Stack Engineer & Platform Architect`}</footer>
    </>
  );
}
