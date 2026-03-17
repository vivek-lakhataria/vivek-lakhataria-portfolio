import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ArchitectureHighlights from "@/components/ArchitectureHighlights";
import SystemDesign from "@/components/SystemDesign";
import ProblemsSolved from "@/components/ProblemsSolved";
import Contact from "@/components/Contact";
import {
  profile,
  about,
  skills,
  experience,
  projects,
  architectureHighlights,
  systemDesignThinking,
  problemsSolved,
} from "@/data/content";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero profile={profile} />
        <About about={about} />
        <Skills skills={skills} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <ArchitectureHighlights highlights={architectureHighlights} />
        <SystemDesign principles={systemDesignThinking} />
        <ProblemsSolved problems={problemsSolved} />
        <Contact profile={profile} />
      </main>
      <footer className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Vivek Lakhataria · viveklakhataria.dev
      </footer>
    </>
  );
}
