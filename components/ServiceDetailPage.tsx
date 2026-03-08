"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MoveUpRight, ArrowLeft } from "lucide-react";

export interface ServiceSection {
  title: string;
  body: string;
}

export interface ServiceDetailData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  accentColor: string; // Tailwind color name e.g. "cyan" | "amber" | "teal"
  accentHex: string;   // e.g. "#22d3ee"
  category: string;
  deliverables: string[];
  process: ServiceSection[];
  benefits: string[];
  Visual: ReactNode;     // Right-pane ambient visual JSX
}

interface Props {
  data: ServiceDetailData;
}

export default function ServiceDetailPage({ data }: Props) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050505] overflow-hidden">

        {/* ── Hero ── */}
        <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden border-b border-white/8">
          {/* Atmospheric ambient visual fills the right 50% */}
          <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-60 pointer-events-none">
            {data.Visual}
          </div>
          {/* Dark gradient fade to the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/30 pointer-events-none" />

          <div className="relative z-10 container mx-auto px-6 md:px-16 pt-40 pb-20">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-10"
            >
              <Link href="/services" className="inline-flex items-center gap-2 text-zinc-600 hover:text-white transition-colors duration-300 text-xs uppercase tracking-widest">
                <ArrowLeft className="w-3 h-3" />
                Services
              </Link>
              <span className="text-zinc-700">/</span>
              <span className="text-xs uppercase tracking-widest text-zinc-400">{data.category}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs tracking-[0.35em] uppercase mb-6"
              style={{ color: data.accentHex + "99" }}
            >
              {data.id} — {data.category}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(44px,8vw,110px)] font-outfit font-light tracking-[-0.04em] leading-[0.88] text-white uppercase mb-8"
            >
              {data.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-lg"
            >
              {data.tagline}
            </motion.p>
          </div>
        </section>

        {/* ── Overview + Deliverables ── */}
        <section className="container mx-auto px-6 md:px-16 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 lg:gap-24 border-b border-white/8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.35em] uppercase text-zinc-600 mb-8">Overview</p>
            <p className="text-2xl md:text-3xl font-outfit font-light leading-[1.35] tracking-[-0.02em] text-zinc-200">
              {data.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-xs tracking-[0.35em] uppercase text-zinc-600 mb-8">Deliverables</p>
            <ul className="space-y-3">
              {data.deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-4 text-zinc-400 font-light text-sm md:text-base">
                  <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full" style={{ backgroundColor: data.accentHex }} />
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* ── Process ── */}
        <section className="container mx-auto px-6 md:px-16 py-24 md:py-32 border-b border-white/8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.35em] uppercase text-zinc-600 mb-16"
          >
            Our Process
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {data.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-white/8 py-10 pr-10 group"
              >
                <div className="flex items-start gap-5">
                  <span className="font-mono text-[10px] text-zinc-700 tracking-widest mt-1 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base md:text-lg font-outfit font-light text-white uppercase tracking-wide mb-3 group-hover:text-zinc-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 font-light text-sm leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Key Benefits ── */}
        <section className="container mx-auto px-6 md:px-16 py-24 md:py-32 border-b border-white/8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.35em] uppercase text-zinc-600 mb-14"
          >
            Why It Matters
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
            {data.benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="flex items-start gap-5 py-5 border-b border-white/5"
              >
                <span
                  className="flex-shrink-0 mt-1 text-lg font-outfit font-light"
                  style={{ color: data.accentHex }}
                >
                  →
                </span>
                <p className="text-zinc-300 font-light text-base md:text-lg leading-relaxed">
                  {b}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="container mx-auto px-6 md:px-16 py-20 md:py-28 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-zinc-600 text-xs uppercase tracking-widest mb-3">Ready to start?</p>
            <h2 className="text-[clamp(24px,3.5vw,48px)] font-outfit font-light tracking-[-0.03em] text-white leading-tight uppercase">
              Let&apos;s discuss<br />your project.
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 bg-white text-black px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium hover:bg-zinc-100 transition-colors duration-300"
            >
              Request a Quote
              <MoveUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/services"
              className="text-zinc-400 text-sm uppercase tracking-[0.2em] hover:text-white transition-colors font-light"
            >
              All Services →
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
