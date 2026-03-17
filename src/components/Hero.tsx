"use client";

import { motion } from "framer-motion";
import { Container, Section } from "./Section";

export default function Hero({ profile }: { profile: { name: string; title: string; subtitle: string } }) {

  return (
    <Section id="hero" className="min-h-[92vh] flex items-center">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34, 211, 238, 0.4), transparent 50%),
              radial-gradient(ellipse 60% 40% at 100% 50%, rgba(167, 139, 250, 0.2), transparent 50%),
              radial-gradient(ellipse 60% 40% at 0% 80%, rgba(34, 211, 238, 0.15), transparent 50%)
            `,
            backgroundSize: "200% 200%",
            animation: "gradient-shift 15s ease infinite",
          }}
        />
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, -30, 40, 0],
          y: [0, 40, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-violet-500/15 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, 20, -40, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/3 h-48 w-48 rounded-full bg-cyan-400/10 blur-[80px]"
      />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          animation: "grid-pulse 4s ease-in-out infinite",
        }}
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-cyan-400 font-medium tracking-widest uppercase text-sm"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-balance text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-3 text-lg font-medium text-cyan-300 sm:text-2xl"
        >
          {profile.title}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12 text-balance text-zinc-300/90 text-base sm:text-lg"
        >
          {profile.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="#projects"
            className="focus-ring btn-glow relative rounded-2xl bg-cyan-500/15 px-8 py-4 font-semibold text-cyan-200 transition-all hover:bg-cyan-500/22 hover:text-cyan-100 border border-cyan-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="focus-ring glow-border relative rounded-2xl border border-zinc-700/70 bg-zinc-900/30 px-8 py-4 font-semibold text-zinc-200 transition-all hover:border-cyan-500/40 hover:text-cyan-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors group">
          <span className="text-sm font-semibold tracking-wide">Scroll</span>
          <motion.svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </a>
      </motion.div>
    </Section>
  );
}
