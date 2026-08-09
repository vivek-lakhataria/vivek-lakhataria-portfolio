"use client";

/**
 * IntroSplash — a one-time, session-scoped boot sequence that plays before
 * the portfolio reveals itself.
 *
 * Concept: instead of a generic logo fade or spinner, the splash mimics the
 * exact kind of thing Vivek builds — a distributed system coming online.
 * Tenant nodes connect, a Keycloak/SignalR-flavored log stream prints, then
 * the whole overlay "wipes" upward like a terminal closing, revealing the
 * real page underneath.
 *
 * Requires: framer-motion (already in this repo's dependencies)
 */

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const LOG_LINES = [
  "resolving tenant context...",
  "domain → ironfleet.tenant.acs.local",
  "keycloak: federating azure-ad session",
  "signalr: negotiating hub connection",
  "rbac: scopes verified",
  "status: 200 ready",
];

const NODES = [
  { id: "gateway", cx: 200, cy: 40 },
  { id: "auth", cx: 80, cy: 130 },
  { id: "realtime", cx: 320, cy: 130 },
  { id: "tenant-a", cx: 40, cy: 230 },
  { id: "tenant-b", cx: 200, cy: 250 },
  { id: "tenant-c", cx: 360, cy: 230 },
];

const EDGES: [string, string][] = [
  ["gateway", "auth"],
  ["gateway", "realtime"],
  ["auth", "tenant-a"],
  ["auth", "tenant-b"],
  ["realtime", "tenant-b"],
  ["realtime", "tenant-c"],
];

const SESSION_KEY = "intro-splash-shown";

export default function IntroSplash() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [lineCount, setLineCount] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    setMounted(true);
    const alreadyShown =
      typeof window !== "undefined" &&
      window.sessionStorage.getItem(SESSION_KEY) === "1";

    if (alreadyShown) return;
    setVisible(true);

    if (prefersReducedMotion) {
      const t = setTimeout(() => finish(), 250);
      timers.current.push(t);
      return () => timers.current.forEach(clearTimeout);
    }

    LOG_LINES.forEach((_, i) => {
      const t = setTimeout(() => setLineCount((c) => c + 1), 650 + i * 220);
      timers.current.push(t);
    });

    const finalTimer = setTimeout(() => finish(), 650 + LOG_LINES.length * 220 + 500);
    timers.current.push(finalTimer);

    return () => timers.current.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function finish() {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(SESSION_KEY, "1");
    }
    timers.current.forEach(clearTimeout);
    setVisible(false);
  }

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro-splash"
          className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[#0A0F1C]"
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{
            clipPath: "inset(0% 0% 100% 0%)",
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(#00D9C0 1px, transparent 1px), linear-gradient(90deg, #00D9C0 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <button
            onClick={finish}
            className="absolute right-6 top-6 font-mono text-xs tracking-widest text-[#6B7A99] transition-colors hover:text-[#E8ECF4]"
            aria-label="Skip intro"
          >
            SKIP →
          </button>

          <div className="flex w-full max-w-xl flex-col items-center gap-8 px-6">
            <svg viewBox="0 0 400 280" className="h-40 w-full max-w-xs sm:h-48" fill="none">
              {EDGES.map(([from, to], i) => {
                const a = NODES.find((n) => n.id === from)!;
                const b = NODES.find((n) => n.id === to)!;
                return (
                  <motion.line
                    key={`${from}-${to}`}
                    x1={a.cx}
                    y1={a.cy}
                    x2={b.cx}
                    y2={b.cy}
                    stroke="#00D9C0"
                    strokeWidth={1.25}
                    strokeOpacity={0.5}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: "easeOut" }}
                  />
                );
              })}
              {NODES.map((n, i) => (
                <motion.g key={n.id}>
                  <motion.circle
                    cx={n.cx}
                    cy={n.cy}
                    r={i === 0 ? 7 : 5}
                    fill={i === 0 ? "#FFB020" : "#0A0F1C"}
                    stroke={i === 0 ? "#FFB020" : "#00D9C0"}
                    strokeWidth={1.5}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.35, delay: i * 0.08 }}
                  />
                  <motion.circle
                    cx={n.cx}
                    cy={n.cy}
                    r={i === 0 ? 7 : 5}
                    fill="transparent"
                    stroke={i === 0 ? "#FFB020" : "#00D9C0"}
                    strokeWidth={1.5}
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{ scale: 2.4, opacity: 0 }}
                    transition={{
                      duration: 1.4,
                      delay: 0.6 + i * 0.08,
                      repeat: Infinity,
                      repeatDelay: 0.6,
                      ease: "easeOut",
                    }}
                  />
                </motion.g>
              ))}
            </svg>

            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center font-mono text-lg tracking-[0.2em] text-[#E8ECF4] sm:text-xl"
            >
              VIVEK&nbsp;LAKHATARIA
            </motion.h1>

            <div className="h-[140px] w-full font-mono text-[11px] leading-6 text-[#6B7A99] sm:text-xs">
              {LOG_LINES.slice(0, lineCount).map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex gap-2"
                >
                  <span className="text-[#00D9C0]">$</span>
                  <span className={i === LOG_LINES.length - 1 ? "text-[#FFB020]" : ""}>
                    {line}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
