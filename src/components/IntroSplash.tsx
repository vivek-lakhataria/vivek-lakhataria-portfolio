"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const LOG_LINES = [
  "resolving tenant context...",
  "routing workspace domain...",
  "federating identity session...",
  "connecting real-time services...",
  "validating access scopes...",
  "status: ready",
];
const SESSION_KEY = "vivek-portfolio-intro-seen";
const NODES = [{ id: "gateway", cx: 200, cy: 42 }, { id: "auth", cx: 80, cy: 132 }, { id: "realtime", cx: 320, cy: 132 }, { id: "tenant-a", cx: 42, cy: 232 }, { id: "tenant-b", cx: 200, cy: 252 }, { id: "tenant-c", cx: 358, cy: 232 }];
const EDGES: [string, string][] = [["gateway", "auth"], ["gateway", "realtime"], ["auth", "tenant-a"], ["auth", "tenant-b"], ["realtime", "tenant-b"], ["realtime", "tenant-c"]];

export default function IntroSplash() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [lineCount, setLineCount] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const activeTimers = timers.current;
    setMounted(true);
    if (window.sessionStorage.getItem(SESSION_KEY) === "1") return;
    setVisible(true);
    if (reduced) {
      activeTimers.push(setTimeout(finish, 180));
      return () => activeTimers.forEach(clearTimeout);
    }
    LOG_LINES.forEach((_, index) => activeTimers.push(setTimeout(() => setLineCount(index + 1), 240 + index * 190)));
    activeTimers.push(setTimeout(finish, 2050));
    return () => activeTimers.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function finish() {
    timers.current.forEach(clearTimeout);
    window.sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(false);
  }

  if (!mounted) return null;
  return <AnimatePresence>{visible && <motion.div key="intro" className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[#080d16]" initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.42 } }}>
    <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(#00d9c0 1px, transparent 1px), linear-gradient(90deg, #00d9c0 1px, transparent 1px)", backgroundSize: "42px 42px" }} />
    <button onClick={finish} className="focus-ring absolute right-6 top-6 rounded-md px-2 py-1 font-mono text-xs tracking-widest text-slate-400 transition-colors hover:text-white" aria-label="Skip intro">SKIP</button>
    <div className="flex w-full max-w-xl flex-col items-center gap-7 px-6">
      <svg viewBox="0 0 400 280" className="h-36 w-full max-w-xs sm:h-40" fill="none" aria-hidden="true">{EDGES.map(([from, to], index) => { const a = NODES.find((node) => node.id === from)!; const b = NODES.find((node) => node.id === to)!; return <motion.line key={`${from}-${to}`} x1={a.cx} y1={a.cy} x2={b.cx} y2={b.cy} stroke="#00d9c0" strokeWidth={1.25} strokeOpacity={0.5} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.35, delay: index * 0.06 }} />; })}{NODES.map((node, index) => <motion.circle key={node.id} cx={node.cx} cy={node.cy} r={index === 0 ? 7 : 5} fill={index === 0 ? "#fbbf24" : "#080d16"} stroke={index === 0 ? "#fbbf24" : "#00d9c0"} strokeWidth={1.5} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: index * 0.06 }} />)}</svg>
      <div className="text-center"><motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="font-mono text-lg tracking-[0.2em] text-slate-100">VIVEK LAKHATARIA</motion.p><p className="mt-2 font-mono text-[10px] tracking-[0.22em] text-cyan-300/70">PLATFORM SYSTEMS PORTFOLIO</p></div>
      <div className="h-[118px] w-full max-w-md font-mono text-xs leading-6 text-slate-500">{LOG_LINES.slice(0, lineCount).map((line, index) => <motion.div key={line} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.18 }} className="flex gap-2"><span className="text-cyan-300">$</span><span className={index === LOG_LINES.length - 1 ? "text-amber-300" : ""}>{line}</span></motion.div>)}</div>
    </div>
  </motion.div>}</AnimatePresence>;
}
