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
  title: "Vivek Lakhataria | Senior Full-Stack Engineer & Platform Architect",
  description:
    "Senior full-stack engineer and hands-on platform architect building secure multi-tenant SaaS, real-time collaboration, and Azure-native systems.",
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
