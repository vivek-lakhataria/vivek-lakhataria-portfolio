import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import IntroSplash from "@/components/IntroSplash";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vivek Lakhataria | Full-Stack Software Engineer",
  description:
    "5+ years building multi-tenant SaaS platforms with .NET Core, React, and scalable cloud architectures. Specialized in CQRS, event-driven systems, and real-time communication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#08080b] text-zinc-100`}
      >
        <IntroSplash />
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
