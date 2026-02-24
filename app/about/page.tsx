"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";

import { MoveUpRight } from "lucide-react";

// ─── Animated Counter ─────────────────────────────────────────────────────────
const stats = [
  { value: "20+", label: "Years of Engineering" },
  { value: "150+", label: "Projects Delivered" },
  { value: "40+", label: "Domain Experts" },
  { value: "4", label: "Countries Active" },
];

// ─── Values / Manifesto Lines ─────────────────────────────────────────────────
const manifestoLines = [
  "We believe the built environment shapes the quality of human experience.",
  "Every calculation, every joint, every surface — deliberate.",
  "Not just built to code. Built to outlast every assumption about limits.",
  "Precision isn't a feature. It's the baseline.",
];

// ─── Pillars ──────────────────────────────────────────────────────────────────
const pillars = [
  {
    index: "I",
    title: "Structural Integrity",
    body: "Our engineers apply first-principles thinking to every load path, ensuring structural systems that withstand time, nature, and the unexpected.",
  },
  {
    index: "II",
    title: "Design Intelligence",
    body: "Architecture that solves problems before they exist. Our design process is iterative, BIM-driven, and informed by decades of site-level feedback.",
  },
  {
    index: "III",
    title: "Sustainable Performance",
    body: "Energy autonomy, passive design, and lifecycle optimization are embedded from day one — not retrofitted at the end.",
  },
  {
    index: "IV",
    title: "Human Precision",
    body: "Technology is a tool. Our real edge is the obsessed engineers, architects, and site leads who refuse to accept 'close enough'.",
  },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <>
      <Header />
      <main className="bg-[#050505] overflow-hidden">

        {/* ── Hero ─────────────────────────────────────── */}
        <section ref={heroRef} className="relative min-h-screen flex flex-col justify-end overflow-hidden">
          {/* Atmospheric gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-[#050505]" />
          <div className="absolute top-0 left-1/3 w-[700px] h-[700px] bg-white/[0.025] blur-[180px] rounded-full pointer-events-none" />

          {/* Parallax headline */}
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10 container mx-auto px-6 md:px-16 pb-24 pt-40"
          >
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-xs tracking-[0.35em] uppercase text-zinc-500 mb-8 font-light"
            >
              About Armakat
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(48px,9vw,120px)] font-outfit font-light tracking-[-0.04em] leading-[0.88] text-white uppercase mb-10"
            >
              Engineering<br />
              <em className="not-italic text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-400 to-zinc-700">
                Integrity.
              </em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-xl"
            >
              Armakat is a collective of engineers, architects, and builders obsessed with the built environment. We raise the ceiling on what a structure can be.
            </motion.p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
          >
            <motion.div
              className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent"
              animate={{ scaleY: [0, 1], originY: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </section>

        {/* ── Stats Bar ─────────────────────────────────── */}
        <section className="border-y border-white/8">
          <div className="container mx-auto px-6 md:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="py-12 px-6 md:px-10 flex flex-col gap-2"
                >
                  <span className="text-[clamp(40px,5vw,64px)] font-outfit font-light tracking-[-0.03em] text-white leading-none">
                    {stat.value}
                  </span>
                  <span className="text-zinc-500 text-xs uppercase tracking-widest">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Manifesto ─────────────────────────────────── */}
        <section className="container mx-auto px-6 md:px-16 py-32 md:py-40">
          <div className="max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.35em] uppercase text-zinc-600 mb-12"
            >
              Our Position
            </motion.p>
            {manifestoLines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`text-[clamp(20px,3vw,38px)] font-outfit font-light leading-[1.3] tracking-[-0.02em] mb-4 ${i === manifestoLines.length - 1
                    ? "text-white"
                    : i === 0
                      ? "text-zinc-300"
                      : "text-zinc-500"
                  }`}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </section>

        {/* ── Visual Break — Architectural Drawing ─────── */}
        <section className="relative h-[40vh] min-h-[320px] overflow-hidden border-y border-white/8 flex items-center justify-center">
          <svg
            viewBox="0 0 1400 320"
            className="absolute inset-0 w-full h-full opacity-10"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          >
            {/* Horizontal / Vertical dimension grid */}
            {[...Array(20)].map((_, i) => (
              <line key={`v${i}`} x1={i * 74} y1="0" x2={i * 74} y2="320" strokeDasharray="4 8" />
            ))}
            {[...Array(7)].map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 53} x2="1400" y2={i * 53} strokeDasharray="4 8" />
            ))}
            {/* Abstract façade cross-section */}
            <rect x="300" y="40" width="800" height="240" strokeWidth="1" />
            <line x1="300" y1="160" x2="1100" y2="160" strokeWidth="0.8" />
            <line x1="550" y1="40" x2="550" y2="280" />
            <line x1="850" y1="40" x2="850" y2="280" />
            {/* Window grids */}
            {[380, 480, 630, 730, 930, 1030].map((x) => (
              <rect key={x} x={x} y="80" width="60" height="60" strokeWidth="0.8" />
            ))}
            {[380, 480, 630, 730, 930, 1030].map((x) => (
              <rect key={`b${x}`} x={x} y="185" width="60" height="60" strokeWidth="0.8" />
            ))}
            {/* Door */}
            <rect x="665" y="200" width="70" height="80" strokeWidth="1.5" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] pointer-events-none" />
          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-zinc-600">
              ARMAKAT · SECTION ELEVATION · SCALE 1:100
            </p>
          </motion.div>
          {/* Scanning line */}
          <motion.div
            className="absolute left-0 right-0 h-px z-20"
            style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.2), rgba(255,255,255,0.12) 70%, transparent)" }}
            initial={{ top: "0%" }}
            animate={{ top: "100%" }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </section>

        {/* ── Four Pillars ──────────────────────────────── */}
        <section className="container mx-auto px-6 md:px-16 py-32 md:py-40">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.35em] uppercase text-zinc-600 mb-16"
          >
            Our Principles
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-white/8 py-10 group"
              >
                <div className="flex gap-6 items-start">
                  <span className="font-mono text-[10px] text-zinc-700 tracking-widest uppercase mt-2 flex-shrink-0">
                    {pillar.index}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-outfit font-light text-white uppercase tracking-[-0.02em] mb-4 leading-none group-hover:text-zinc-300 transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-zinc-500 font-light leading-relaxed text-sm md:text-base">
                      {pillar.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Founding Story ────────────────────────────── */}
        <section className="border-t border-white/8">
          <div className="container mx-auto px-6 md:px-16 py-32 md:py-40 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Architectural Visual: HQ Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/8 bg-zinc-900/50"
            >
              {/* Abstract dark visual with depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-zinc-950" />
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white/5 blur-[80px] rounded-full" />
              {/* SVG Facade illustration */}
              <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full opacity-20" fill="none" stroke="white" strokeWidth="0.5">
                <rect x="60" y="100" width="280" height="350" strokeWidth="1" />
                <line x1="60" y1="220" x2="340" y2="220" />
                <line x1="60" y1="350" x2="340" y2="350" />
                <line x1="200" y1="100" x2="200" y2="450" />
                {[85, 145, 225, 285].map(x => [140, 270].map(y => (
                  <rect key={`${x}-${y}`} x={x} y={y} width="45" height="55" strokeWidth="0.8" />
                )))}
                <rect x="160" y="365" width="80" height="85" strokeWidth="1.5" />
                {/* Roof */}
                <path d="M 40 100 L 200 30 L 360 100" strokeWidth="1.5" />
              </svg>

              {/* Label strip */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-white text-sm font-light tracking-wide">Athens Headquarters</p>
                <p className="text-zinc-600 text-xs font-mono mt-1">37.9838° N · 23.7275° E · Est. 2005</p>
              </div>
            </motion.div>

            {/* Story text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs tracking-[0.35em] uppercase text-zinc-600 mb-8">Origin</p>
              <h2 className="text-[clamp(32px,4vw,52px)] font-outfit font-light tracking-[-0.03em] text-white leading-[1.1] uppercase mb-8">
                Founded on<br />
                <span className="text-zinc-500">First Principles</span>
              </h2>
              <div className="space-y-5 text-zinc-400 font-light leading-relaxed text-base md:text-lg">
                <p>
                  Armakat was founded in Athens in 2005 by a team of structural engineers who believed that the construction industry was fundamentally underestimating what was possible when technology, talent, and design thinking were unified under one roof.
                </p>
                <p>
                  Two decades later, we have delivered over 150 projects spanning luxury residences, commercial complexes, industrial infrastructure, and energy-autonomous buildings across four countries.
                </p>
                <p>
                  Our philosophy has never changed: build things that make the engineers who come after us say, <em className="text-zinc-300 not-italic">&quot;I wish I'd done that.&quot;</em>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Closing CTA ───────────────────────────────── */}
        <section className="border-t border-white/8">
          <div className="container mx-auto px-6 md:px-16 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between gap-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(28px,4vw,52px)] font-outfit font-light tracking-[-0.03em] text-white leading-[1.1] uppercase max-w-xl"
            >
              Let&apos;s build something that lasts.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-4 items-center"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 bg-white text-black px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium hover:bg-zinc-100 transition-colors duration-300"
              >
                <span>Start a Project</span>
                <MoveUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/services"
                className="text-zinc-500 text-sm uppercase tracking-[0.2em] hover:text-white transition-colors duration-300 font-light"
              >
                Our Services →
              </Link>
            </motion.div>
          </div>
        </section>

      </main>

    </>
  );
}
