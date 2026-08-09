"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "./Section";

const navLinks = [
  { href: "#about", label: "Profile" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Work" },
  { href: "#architecture", label: "Architecture" },
  { href: "#key-decisions", label: "Decisions" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);
      const scrollPosition = window.scrollY + 150;
      const active = [...navLinks].reverse().find(({ href }) => {
        const section = document.querySelector(href);
        return section && section.getBoundingClientRect().top + window.scrollY <= scrollPosition;
      });
      setActiveSection(active?.href ?? "#hero");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.45 }} aria-label="Primary navigation" className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-zinc-800/70 bg-zinc-950/85 backdrop-blur-xl" : "border-transparent bg-transparent"}`}>
      <Container className="flex items-center justify-between py-4">
        <a href="#hero" className="focus-ring inline-flex items-center gap-2 rounded-lg py-1 font-semibold text-zinc-100" onClick={() => setMobileOpen(false)}><span className="gradient-text">VL</span><span className="hidden text-xs font-semibold tracking-[0.16em] text-zinc-400 sm:inline">SYSTEMS PORTFOLIO</span></a>
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => <a key={link.href} href={link.href} className={`focus-ring rounded-lg px-3 py-2 text-sm transition-colors ${activeSection === link.href ? "bg-cyan-400/10 text-cyan-200" : "text-zinc-400 hover:text-zinc-100"}`}>{link.label}</a>)}
        </div>
        <button type="button" aria-label="Toggle navigation menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)} className="focus-ring rounded-lg border border-zinc-700/80 px-3 py-2 text-zinc-200 md:hidden">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" /></svg>
        </button>
      </Container>
      {mobileOpen && <div className="border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-xl md:hidden"><Container className="grid grid-cols-2 gap-2 py-4">{navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className={`focus-ring rounded-lg px-3 py-2 text-sm ${activeSection === link.href ? "bg-cyan-400/10 text-cyan-200" : "text-zinc-300"}`}>{link.label}</a>)}</Container></div>}
    </motion.nav>
  );
}
