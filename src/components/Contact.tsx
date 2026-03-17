"use client";

import { motion } from "framer-motion";

export default function Contact({
  profile,
}: {
  profile: {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    cv: {
      viewUrl: string;
      downloadUrl: string;
    };
  };
}) {
  const links = [
    {
      href: `mailto:${profile.email}`,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
      label: profile.email,
    },
    {
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      ),
      label: profile.phone,
    },
    {
      href: profile.cv.downloadUrl,
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 16v-8m0 8l-3-3m3 3l3-3M7 20h10a2 2 0 002-2V7.5a2 2 0 00-.586-1.414l-2.5-2.5A2 2 0 0014.5 3H7a2 2 0 00-2 2v13a2 2 0 002 2z"
        />
      ),
      label: "Download CV",
      external: true,
      download: true,
    },
    {
      href: profile.linkedin,
      icon: "linkedin",
      label: "LinkedIn",
      external: true,
    },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(34,211,238,0.08),transparent)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold"
        >
          <span className="gradient-text">Get in Touch</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong glow-border rounded-2xl p-8 md:p-12"
        >
          <p className="mb-8 text-lg text-zinc-400">
            Open to new opportunities, architecture discussions, or collaboration. Let&apos;s connect.
          </p>
          <div className="flex flex-wrap gap-6">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                download={link.download ? "" : undefined}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex cursor-pointer items-center gap-3 rounded-xl border border-zinc-600 px-6 py-4 text-zinc-300 transition-all hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] active:scale-[0.99]"
              >
                {typeof link.icon === "string" ? (
                <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ) : (
                <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {link.icon}
                </svg>
              )}
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
