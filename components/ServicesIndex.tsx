"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MoveUpRight, ArrowRight } from "lucide-react";

// ─── Visual Components ────────────────────────────────────────────────────────

function VisualStudies() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#020a0c]">
      <div className="absolute w-full h-full opacity-15">
        <svg viewBox="0 0 400 600" className="w-full h-full" fill="none" stroke="#22d3ee" strokeWidth="0.3">
          <pattern id="bp-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" />
          </pattern>
          <rect width="400" height="600" fill="url(#bp-grid)" />
          <line x1="40" y1="0" x2="40" y2="600" strokeDasharray="4 8" opacity="0.5" />
          <line x1="360" y1="0" x2="360" y2="600" strokeDasharray="4 8" opacity="0.5" />
          <line x1="0" y1="80" x2="400" y2="80" strokeDasharray="4 8" opacity="0.5" />
          <line x1="0" y1="520" x2="400" y2="520" strokeDasharray="4 8" opacity="0.5" />
          <rect x="80" y="180" width="240" height="200" strokeWidth="1" />
          <path d="M 40 180 L 200 80 L 360 180" strokeWidth="1.5" />
          <line x1="80" y1="400" x2="80" y2="420" /><line x1="320" y1="400" x2="320" y2="420" />
          <line x1="40" y1="410" x2="360" y2="410" strokeDasharray="none" />
          <line x1="40" y1="180" x2="20" y2="180" /><line x1="40" y1="80" x2="20" y2="80" />
          <line x1="30" y1="80" x2="30" y2="180" />
        </svg>
      </div>
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#020a0c] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#020a0c] to-transparent pointer-events-none z-10" />
      <motion.div
        className="absolute left-0 right-0 h-px z-20"
        style={{ background: "linear-gradient(to right, transparent, rgba(34,211,238,0.6) 30%, rgba(34,211,238,0.9), rgba(34,211,238,0.6) 70%, transparent)", boxShadow: "0 0 12px 2px rgba(34,211,238,0.4)" }}
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute top-6 left-6 text-cyan-500/40 font-mono text-[10px] tracking-wider z-20">PLAN · A-01</div>
      <div className="absolute bottom-6 right-6 text-cyan-500/40 font-mono text-[10px] tracking-wider z-20">SCALE 1:50</div>
    </div>
  );
}

function VisualConstruction() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0a0a08]">
      <div className="absolute w-[500px] h-[500px] bg-zinc-500/8 blur-[150px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute inset-0 flex items-end justify-center gap-6 pb-0 overflow-hidden">
        {[180, 260, 220, 300, 190].map((h, i) => (
          <motion.div
            key={i}
            className="w-14 flex-shrink-0 bg-gradient-to-t from-zinc-700/60 to-zinc-900/20 border-l border-r border-t border-white/8 relative"
            style={{ height: 0 }}
            animate={{ height: h }}
            transition={{ duration: 1.5 + i * 0.3, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-white/20" />
            <div className="absolute inset-2 grid grid-cols-2 gap-1 opacity-20">
              {[...Array(8)].map((_, j) => (
                <div key={j} className="bg-white/30 rounded-sm" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-6 left-6 text-zinc-400/50 font-mono text-[10px] tracking-wider">STRUCTURE · B-02</div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a08] to-transparent pointer-events-none" />
    </div>
  );
}

function VisualEnergy() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#080400]">
      <div className="absolute w-[500px] h-[500px] bg-amber-500/15 blur-[160px] rounded-full" />
      <div className="relative">
        <motion.div
          className="absolute rounded-full border border-amber-400/10"
          style={{ width: 300, height: 300, top: -150, left: -150 }}
          animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div
          className="absolute rounded-full border border-orange-400/10"
          style={{ width: 300, height: 300, top: -150, left: -150 }}
          animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
        />
        <motion.div
          className="absolute rounded-full border border-yellow-400/10"
          style={{ width: 300, height: 300, top: -150, left: -150 }}
          animate={{ scale: [1, 2.2], opacity: [0.2, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1.5 }}
        />
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500 blur-sm opacity-90" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/60 to-transparent blur-xl" />
      </div>
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 600" fill="none">
        {[45, 90, 135, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <motion.line
              key={i}
              x1={200} y1={300}
              x2={200 + Math.cos(rad) * 180} y2={300 + Math.sin(rad) * 250}
              stroke="#fbbf24" strokeWidth="0.5"
              strokeDasharray="4 8"
              animate={{ strokeDashoffset: [0, -24] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
            />
          );
        })}
      </svg>
      <div className="absolute top-6 left-6 text-amber-500/40 font-mono text-[10px] tracking-wider">SOLAR · E-03</div>
    </div>
  );
}

function VisualManagement() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#050508] px-8 py-10">
      <div className="absolute w-[400px] h-[400px] bg-violet-500/10 blur-[140px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-6 left-6 text-violet-400/40 font-mono text-[10px] tracking-wider">GANTT · M-04</div>
      <div className="relative h-full flex flex-col justify-center gap-8 pt-12">
        {[
          { label: "Design", start: 0, dur: 35, color: "bg-violet-500/60" },
          { label: "Foundation", start: 20, dur: 25, color: "bg-indigo-400/60" },
          { label: "Structure", start: 40, dur: 35, color: "bg-violet-400/60" },
          { label: "Finishing", start: 60, dur: 30, color: "bg-indigo-300/60" },
          { label: "Handover", start: 80, dur: 20, color: "bg-white/40" },
        ].map(({ label, start, dur, color }, i) => (
          <div key={i} className="relative h-6 w-full flex items-center">
            <div className="absolute left-0 text-zinc-600 font-mono text-[9px] tracking-wide w-16">{label}</div>
            <div className="absolute right-0 left-16 h-px bg-white/5" />
            <motion.div
              className={`absolute h-full rounded-sm ${color} backdrop-blur-sm`}
              initial={{ width: 0, left: `${start * 0.84 + 16}%` }}
              animate={{ width: `${dur * 0.84}%` }}
              transition={{ duration: 1.2 + i * 0.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualBIM() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#020c08]">
      <div className="absolute w-[450px] h-[450px] bg-emerald-500/10 blur-[150px] rounded-full" />
      <motion.div
        className="relative w-44 h-44 border border-emerald-500/40"
        style={{ transformStyle: "preserve-3d", perspective: 800 }}
        animate={{ rotateX: [10, 370], rotateY: [0, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        {[
          { transform: "translateZ(88px)" },
          { transform: "translateZ(-88px)" },
          { transform: "rotateY(90deg) translateZ(88px)" },
          { transform: "rotateY(90deg) translateZ(-88px)" },
          { transform: "rotateX(90deg) translateZ(88px)" },
          { transform: "rotateX(90deg) translateZ(-88px)" },
        ].map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 border border-emerald-500/25"
            style={s}
          />
        ))}
        <div className="absolute inset-4 border border-emerald-400/30" style={{ transform: "translateZ(44px)" }} />
      </motion.div>
      <svg className="absolute bottom-0 left-0 right-0 opacity-20" viewBox="0 0 400 120" fill="none" stroke="#10b981" strokeWidth="0.4">
        {[...Array(10)].map((_, i) => (
          <line key={`v${i}`} x1={i * 44} y1="0" x2={i * 44 + 20} y2="120" />
        ))}
        {[...Array(5)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 24} x2="400" y2={i * 24} />
        ))}
      </svg>
      <div className="absolute top-6 left-6 text-emerald-500/40 font-mono text-[10px] tracking-wider">BIM · 3D-05</div>
    </div>
  );
}

function VisualSmart() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#080408]">
      <div className="absolute w-[400px] h-[400px] bg-rose-500/10 blur-[140px] rounded-full" />
      <div className="relative w-32 h-56 rounded-2xl border border-white/20 bg-zinc-900/80 overflow-hidden shadow-2xl flex flex-col">
        <div className="h-6 bg-black/40 flex items-center justify-between px-3">
          <div className="w-8 h-1 bg-white/30 rounded-full" />
          <div className="flex gap-1"><div className="w-1 h-1 bg-white/40 rounded-full" /><div className="w-1 h-1 bg-white/40 rounded-full" /><div className="w-1 h-1 bg-white/40 rounded-full" /></div>
        </div>
        <div className="flex-1 p-3 grid grid-cols-2 gap-2">
          {[
            { label: "LIGHT", active: true, color: "bg-amber-400/70" },
            { label: "TEMP", active: false, color: "bg-blue-400/40" },
            { label: "SEC", active: true, color: "bg-rose-400/70" },
            { label: "NET", active: false, color: "bg-white/30" },
          ].map(({ label, active, color }) => (
            <motion.div
              key={label}
              className={`rounded-lg p-1.5 border ${active ? "border-white/20 bg-zinc-700/60" : "border-white/10 bg-zinc-900/60"}`}
              animate={active ? { opacity: [0.8, 1, 0.8] } : { opacity: 0.4 }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className={`w-2 h-2 rounded-full mb-1 ${color}`} />
              <div className="text-[7px] text-zinc-400 font-mono">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
      {[60, 100, 140].map((r, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-rose-500/10"
          style={{ width: r * 2, height: r * 2 }}
          animate={{ scale: [1, 1.15], opacity: [0.4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6, ease: "easeOut" }}
        />
      ))}
      <div className="absolute top-6 left-6 text-rose-400/40 font-mono text-[10px] tracking-wider">IOT · S-06</div>
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const servicesData = [
  { id: "01", title: "Studies & Design", description: "Comprehensive architectural, structural, and MEP studies. We transform visionary concepts into highly detailed technical schematics, ensuring absolute precision before a single brick is laid.", link: "/services/studies", specialty: "Architecture · Engineering · MEP", Visual: VisualStudies },
  { id: "02", title: "Construction", description: "End-to-end execution of premium residential and commercial spaces. Our meticulous site management guarantees structural integrity, timeline adherence, and flawless finishing.", link: "/services/construction", specialty: "Residential · Commercial · Industrial", Visual: VisualConstruction },
  { id: "03", title: "Energy Autonomy", description: "Designing tomorrow's infrastructure today. We integrate advanced solar, thermal, and passive systems to create self-sustaining buildings with near-zero carbon footprints.", link: "/services/energy", specialty: "Solar · Thermal · Net-Zero", Visual: VisualEnergy },
  { id: "04", title: "Project Management", description: "Total oversight from blueprint to handover. We orchestrate contractors, manage budgets, and enforce rigorous quality control to deliver complex projects smoothly on time.", link: "/services/management", specialty: "Coordination · QA · Risk Management", Visual: VisualManagement },
  { id: "05", title: "BIM Integration", description: "Leveraging 3D Building Information Modeling to map every duct, beam, and wire. We eliminate clashes virtually before they ever happen on site, saving time and capital.", link: "/services/bim", specialty: "3D Modeling · Clash Detection · IFC", Visual: VisualBIM },
  { id: "06", title: "Smart Solutions", description: "Invisible, intelligent automation. We embed centralized control systems into the architecture itself, giving seamless command over lighting, climate, security, and media.", link: "/services/smart", specialty: "Home Automation · IoT · Integration", Visual: VisualSmart },
];

// How many viewport-heights of scroll each service item occupies
const SCROLL_PER_ITEM_VH = 45;

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function ServicesIndex() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const spacerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const stableOffsetsRef = useRef<number[]>([]);

  // Detect desktop viewport
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Measure collapsed row heights on mount → build stable offset table
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const collapsedHeights: number[] = [];
      rowRefs.current.forEach((el, idx) => {
        if (!el) return;
        // Items 1+ are collapsed on mount, measure their real height
        if (idx > 0) collapsedHeights.push(el.offsetHeight);
      });
      const avg = collapsedHeights.length > 0
        ? collapsedHeights.reduce((a, b) => a + b, 0) / collapsedHeights.length
        : 80;

      const offsets: number[] = [];
      let cumulative = 0;
      for (let i = 0; i < servicesData.length; i++) {
        offsets[i] = cumulative;
        cumulative += i === 0 ? avg : (collapsedHeights[i - 1] || avg);
      }
      stableOffsetsRef.current = offsets;
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  // ─── Scroll-Driven Active Index ───
  // Map the scroll position within the spacer to the active item.
  // The spacer gives the section enough height for the sticky element
  // to remain pinned while all items are cycled through.
  useEffect(() => {
    if (!isDesktop) return;

    const onScroll = () => {
      const spacer = spacerRef.current;
      if (!spacer) return;

      const rect = spacer.getBoundingClientRect();
      const vh = window.innerHeight;
      const totalScrollable = rect.height - vh;
      if (totalScrollable <= 0) return;

      // How far through the spacer we've scrolled (0 → 1)
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      // Map progress to item index
      const newIndex = Math.min(
        servicesData.length - 1,
        Math.floor(progress * servicesData.length)
      );

      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, [isDesktop]);

  // Compute list translateY from stable offsets
  const listOffset = (() => {
    if (!isDesktop || activeIndex === 0) return 0;
    const offsets = stableOffsetsRef.current;
    if (offsets.length === 0) return 0;
    return -(offsets[activeIndex] || 0);
  })();

  return (
    <section className="relative">

      {/* ── Page Hero ── */}
      <div className="container mx-auto px-6 md:px-16 pt-12 pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-10"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.35em] uppercase text-zinc-400 mb-6 font-light"
            >
              What We Do
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(48px,8vw,110px)] font-outfit font-light tracking-[-0.04em] leading-[0.9] text-white uppercase"
            >
              Our<br />
              <em className="not-italic text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-400 to-zinc-700">
                Disciplines
              </em>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-zinc-400 text-base md:text-lg font-light leading-relaxed max-w-sm md:text-right"
          >
            A holistic approach rooted in mathematical precision, material intelligence, and aesthetic excellence.
          </motion.p>
        </motion.div>

        {/* Animated Separator */}
        <motion.div
          className="mt-16 h-px bg-white/10"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* ── Scroll Spacer: creates scroll runway for sticky section ── */}
      {/* On desktop: tall spacer lets user scroll through while section stays pinned */}
      {/* On mobile: no spacer, normal flow */}
      <div
        ref={spacerRef}
        className="relative"
        style={isDesktop ? { height: `${SCROLL_PER_ITEM_VH * servicesData.length}vh` } : undefined}
      >
        {/* Invisible snap points for each item to enforce 1-by-1 scrolling */}
        {isDesktop && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ scrollSnapType: "y mandatory", overflowY: "auto", overflowX: "hidden" }}
          >
            {servicesData.map((_, i) => (
              <div
                key={`snap-${i}`}
                style={{ height: `${SCROLL_PER_ITEM_VH}vh`, scrollSnapAlign: "start" }}
              />
            ))}
          </div>
        )}
        {/* Sticky inner: pinned to viewport top while scrolling through spacer */}
        <div
          className="container mx-auto px-6 md:px-16"
          style={isDesktop ? { position: "sticky", top: "12vh" } : undefined}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_500px] gap-8 xl:gap-16 items-start">

            {/* Left: Service List with scroll-driven offset */}
            <div
              className="relative lg:overflow-hidden"
              style={isDesktop ? {
                height: "80vh",
                WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
              } : undefined}
            >
              <motion.div
                className="relative flex flex-col"
                animate={{ y: listOffset }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {servicesData.map((service, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <motion.div
                      key={service.id}
                      ref={(el) => { rowRefs.current[idx] = el; }}
                      className="border-b border-white/8 cursor-pointer group"
                      onClick={() => setActiveIndex(idx)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 + idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {/* Row */}
                      <div className="py-7 md:py-9 flex items-center justify-between gap-6">
                        <div className="flex items-baseline gap-6 md:gap-10 flex-1 min-w-0">
                          <motion.span
                            animate={{ color: isActive ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.12)" }}
                            transition={{ duration: 0.4 }}
                            className="font-mono text-xs md:text-sm flex-shrink-0 tabular-nums"
                          >
                            {service.id}
                          </motion.span>

                          <motion.h2
                            animate={{
                              x: isActive ? 12 : 0,
                              color: isActive ? "#ffffff" : "rgba(255,255,255,0.3)",
                            }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[clamp(28px,4.5vw,60px)] font-outfit font-light tracking-[-0.03em] leading-none uppercase truncate"
                          >
                            {service.title}
                          </motion.h2>
                        </div>

                        <motion.div
                          animate={{ rotate: isActive ? 45 : 0, opacity: isActive ? 1 : 0.2 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center"
                        >
                          <ArrowRight className="w-3.5 h-3.5 text-white" />
                        </motion.div>
                      </div>

                      {/* Expanding content */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pb-8 pt-1 pl-[calc(1.5rem+40px)] md:pl-[calc(2.5rem+64px)] flex flex-col md:flex-row gap-8 items-start">
                              <div className="flex-1">
                                <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed mb-6 max-w-lg">
                                  {service.description}
                                </p>
                                <p className="text-xs tracking-widest uppercase text-zinc-600 mb-6">
                                  {service.specialty}
                                </p>
                                <Link
                                  href={service.link}
                                  className="group/link inline-flex items-center gap-3 text-white text-xs md:text-sm uppercase tracking-[0.2em] hover:text-zinc-300 transition-colors duration-300"
                                >
                                  <span>Explore</span>
                                  <motion.span
                                    className="h-px bg-white"
                                    initial={{ width: 24 }}
                                    whileHover={{ width: 48 }}
                                    transition={{ duration: 0.3 }}
                                  />
                                  <MoveUpRight className="w-3.5 h-3.5" />
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Right: Sticky Visual Pane */}
            <div className="hidden lg:block sticky top-0 h-screen">
              <div className="h-full pt-1">
                <motion.div
                  className="relative w-full h-[80vh] rounded-2xl overflow-hidden border border-white/[0.06]"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none z-20 rounded-2xl" />
                  <div className="absolute bottom-4 left-5 z-30 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={servicesData[activeIndex].id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35 }}
                        className="text-white/30 font-mono text-[10px] tracking-widest uppercase"
                      >
                        {servicesData[activeIndex].title}
                      </motion.span>
                    </AnimatePresence>
                  </div>

                  <AnimatePresence mode="wait">
                    {servicesData.map((s, idx) => {
                      if (activeIndex !== idx) return null;
                      const V = s.Visual;
                      return (
                        <motion.div
                          key={s.id}
                          className="absolute inset-0"
                          initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
                          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                          exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
                          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <V />
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom CTA Bar ── */}
      <div className="border-t border-white/8">
        <div className="container mx-auto px-6 md:px-16 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-zinc-400 text-xs uppercase tracking-widest mb-2">Ready to build?</p>
            <p className="text-white text-xl md:text-2xl font-outfit font-light">
              Let&apos;s bring your project to life.
            </p>
          </div>
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-4 bg-white text-black px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium overflow-hidden hover:bg-zinc-200 transition-colors duration-300"
          >
            <span>Request a Quote</span>
            <MoveUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

    </section>
  );
}
