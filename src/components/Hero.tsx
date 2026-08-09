"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container, Section } from "./Section";

type Metric = { value: string; label: string };
const fingerprint = ["TENANT-AWARE", "EVENT-DRIVEN", "SECURE BY DEFAULT"];

function Orbit({ reduced }: { reduced: boolean | null }) {
  return (
    <div className="hero-orbit" aria-hidden="true">
      <motion.div animate={reduced ? {} : { rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} className="hero-orbit-ring hero-orbit-ring-one"><span className="orbit-node orbit-node-one" /></motion.div>
      <motion.div animate={reduced ? {} : { rotate: -360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="hero-orbit-ring hero-orbit-ring-two"><span className="orbit-node orbit-node-two" /></motion.div>
      <div className="hero-orbit-core"><span>VL</span><small>BUILD</small></div>
      <div className="orbit-label orbit-label-top">SYSTEMS</div><div className="orbit-label orbit-label-bottom">DELIVERY</div>
    </div>
  );
}

export default function Hero({ profile, metrics }: { profile: { name: string; title: string; subtitle: string; location: string }; metrics: Metric[] }) {
  const reduced = useReducedMotion();
  const ambient = reduced ? {} : { x: [0, 24, -12, 0], y: [0, -18, 12, 0], scale: [1, 1.08, 1] };

  return (
    <Section id="hero" className="min-h-screen flex items-center pt-28">
      <div className="absolute inset-0 hero-grid opacity-40" />
      <motion.div animate={ambient} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[8%] top-[16%] h-72 w-72 rounded-full bg-cyan-400/10 blur-[110px]" />
      <motion.div animate={reduced ? {} : { x: [0, -20, 18, 0], y: [0, 22, -12, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[8%] right-[7%] h-96 w-96 rounded-full bg-indigo-500/10 blur-[130px]" />
      <Container className="relative z-10">
        <div className="grid items-end gap-12 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1.5 text-xs font-semibold tracking-[0.16em] text-cyan-200 uppercase"><span className="status-dot" /> Available for senior engineering opportunities</motion.div>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.06 }} className="mb-4 font-mono text-sm text-zinc-500">{profile.location}</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12 }} className="max-w-4xl text-balance text-5xl font-semibold tracking-[-0.045em] text-zinc-100 sm:text-6xl md:text-7xl">Engineering systems that <span className="gradient-text">scale with the business.</span></motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">{profile.name} — {profile.title}. I lead the architecture and delivery of secure, multi-tenant SaaS products from product interface to cloud operations.</motion.p>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.28 }} className="mt-9 flex flex-wrap gap-3"><motion.a href="#architecture" whileHover={reduced ? {} : { y: -3, boxShadow: "0 18px 42px rgba(34,211,238,0.22)" }} whileTap={{ scale: 0.98 }} className="focus-ring rounded-xl border border-cyan-300/25 bg-cyan-300 px-5 py-3 font-semibold text-zinc-950">Explore architecture <span aria-hidden="true">↗</span></motion.a><motion.a href="#contact" whileHover={reduced ? {} : { y: -3 }} whileTap={{ scale: 0.98 }} className="focus-ring rounded-xl border border-zinc-700 bg-zinc-900/70 px-5 py-3 font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-800">Start a conversation</motion.a></motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.48 }} className="mt-10 flex flex-wrap gap-2">{fingerprint.map((item, index) => <motion.span key={item} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + index * 0.08 }} className="rounded-md border border-white/8 bg-white/[0.025] px-2.5 py-1 font-mono text-[11px] tracking-[0.12em] text-zinc-500">{item}</motion.span>)}</motion.div>
          </div>
          <motion.aside initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.3 }} className="architect-panel relative overflow-hidden rounded-2xl p-5 sm:p-6"><Orbit reduced={reduced} /><div className="relative z-10"><div className="mb-5 flex items-center justify-between border-b border-white/8 pb-4"><span className="font-mono text-xs tracking-wider text-zinc-500 uppercase">Platform ownership</span><span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">Production</span></div><div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/7 bg-white/7">{metrics.map((metric) => <div key={metric.label} className="bg-[#0b1019]/85 p-4 sm:p-5"><div className="text-3xl font-semibold tracking-tight text-cyan-200">{metric.value}</div><p className="mt-1.5 text-xs leading-relaxed text-zinc-400">{metric.label}</p></div>)}</div><div className="mt-5 rounded-xl border border-cyan-400/10 bg-cyan-400/5 p-4 font-mono text-xs leading-6 text-cyan-100/80"><span className="text-cyan-300">{"// Current focus"}</span><br />Multi-tenant SaaS · IAM · real-time collaboration · cloud-native delivery</div></div></motion.aside>
        </div>
      </Container>
    </Section>
  );
}
