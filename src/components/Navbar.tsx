"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "./Section";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#architecture", label: "Architecture" },
  { href: "#key-decisions", label: "Decisions" },
  { href: "#tech-evaluations", label: "Evaluations" },
  { href: "#system-design", label: "System Design" },
  { href: "#problems", label: "Problems Solved" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href);
      const scrollPos = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.querySelector(sections[i]);
        if (el && el.getBoundingClientRect().top + window.scrollY <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass backdrop-blur-xl bg-zinc-950/80" : "bg-zinc-950/40 backdrop-blur-sm"
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <motion.a
          href="#hero"
          className="focus-ring inline-flex items-center gap-2 rounded-xl px-2 py-1 text-lg font-bold text-zinc-100"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setMobileOpen(false)}
        >
          <span className="gradient-text">VL</span>
          <span className="hidden text-xs font-semibold tracking-widest text-zinc-400 sm:inline">
            PORTFOLIO
          </span>
        </motion.a>
        {/* Desktop: horizontally scrollable to prevent wrapping/misalignment */}
        <div className="hidden md:block max-w-[72vw]">
          <div className="flex items-center justify-end gap-1 overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring relative group rounded-xl px-3 py-2"
              >
                <span
                  className={`relative z-10 text-sm font-medium transition-colors ${
                    activeSection === link.href ? "text-cyan-400" : "text-zinc-300 hover:text-zinc-100"
                  }`}
                >
                  {link.label}
                </span>
                {activeSection === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-xl bg-cyan-500/10 border border-cyan-500/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-cyan-400 rounded-full group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile: hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="focus-ring md:hidden inline-flex items-center justify-center rounded-xl border border-zinc-700/70 bg-zinc-950/30 px-3 py-2 text-zinc-100"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </Container>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-zinc-800/60 bg-zinc-950/80 backdrop-blur-xl">
          <Container className="py-4">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`focus-ring rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
                    activeSection === link.href
                      ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                      : "text-zinc-200 border border-zinc-800/60 hover:border-cyan-500/20 hover:text-cyan-200"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Container>
        </div>
      )}
    </motion.nav>
  );
}
