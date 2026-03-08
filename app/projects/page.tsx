"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";

import { MoveUpRight } from "lucide-react";

// ─── Project Data ─────────────────────────────────────────────────────────────
const projects = [
  {
    id: "01",
    title: "Villa Kifisia",
    category: "Residential",
    year: "2024",
    location: "Kifisia, Athens",
    area: "820 m²",
    tags: ["Architecture", "Interior", "Landscape"],
    accent: "#c8b8a2",
    visual: (
      <div className="absolute inset-0 overflow-hidden bg-[#0d0b09]">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/60 via-transparent to-black" />
        <div className="absolute top-1/3 left-1/3 w-2/3 h-2/3 bg-stone-700/10 blur-[80px] rounded-full" />
        {/* Isometric outline of a villa */}
        <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full opacity-20" fill="none" stroke="#c8b8a2" strokeWidth="0.6">
          <polygon points="200,40 340,130 340,260 60,260 60,130" />
          <line x1="200" y1="40" x2="200" y2="260" strokeDasharray="4 6" />
          <line x1="60" y1="130" x2="340" y2="130" />
          {[100, 160, 220, 280].map(x => (
            <rect key={x} x={x} y="160" width="40" height="55" strokeWidth="0.5" />
          ))}
          <rect x="155" y="200" width="90" height="60" strokeWidth="1" />
          <path d="M 30 130 L 200 30 L 370 130" strokeWidth="1.2" />
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0d0b09] to-transparent" />
      </div>
    ),
  },
  {
    id: "02",
    title: "Athens Tech Hub",
    category: "Commercial",
    year: "2023",
    location: "Piraeus, Athens",
    area: "4,200 m²",
    tags: ["BIM", "Structural", "LEED"],
    accent: "#7ba7bc",
    visual: (
      <div className="absolute inset-0 overflow-hidden bg-[#050b10]">
        <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full opacity-20" fill="none" stroke="#7ba7bc" strokeWidth="0.5">
          <rect x="60" y="40" width="280" height="220" />
          {[...Array(6)].map((_, i) => <line key={i} x1="60" y1={40 + i * 36} x2="340" y2={40 + i * 36} />)}
          {[...Array(8)].map((_, i) => <line key={i} x1={60 + i * 40} y1="40" x2={60 + i * 40} y2="260" />)}
          <rect x="150" y="160" width="100" height="100" strokeWidth="1.2" />
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050b10] to-transparent" />
      </div>
    ),
  },
  {
    id: "03",
    title: "Glyfada Sea View",
    category: "Renovation",
    year: "2023",
    location: "Glyfada, Attica",
    area: "340 m²",
    tags: ["Renovation", "Interior", "Energy"],
    accent: "#7bc4bc",
    visual: (
      <div className="absolute inset-0 overflow-hidden bg-[#03100e]">
        <div className="absolute w-[400px] h-[400px] bg-teal-500/10 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full opacity-25" fill="none" stroke="#7bc4bc" strokeWidth="0.6">
          <path d="M 0 200 Q 100 160 200 200 Q 300 240 400 200" strokeWidth="1" />
          <path d="M 0 220 Q 100 180 200 220 Q 300 260 400 220" strokeWidth="0.5" />
          <path d="M 0 240 Q 100 200 200 240 Q 300 280 400 240" strokeWidth="0.3" />
          <rect x="80" y="80" width="240" height="120" />
          <rect x="120" y="110" width="60" height="50" />
          <rect x="220" y="110" width="60" height="50" />
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#03100e] to-transparent" />
      </div>
    ),
  },
  {
    id: "04",
    title: "Eco Resort Mykonos",
    category: "Hospitality",
    year: "2022",
    location: "Mykonos Island",
    area: "6,500 m²",
    tags: ["Master Plan", "HVAC", "Solar"],
    accent: "#d4a76a",
    visual: (
      <div className="absolute inset-0 overflow-hidden bg-[#0d0800]">
        <div className="absolute w-[500px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full opacity-20" fill="none" stroke="#d4a76a" strokeWidth="0.5">
          {[0, 60, 120, 220, 290, 340].map((x, i) => (
            <g key={i}>
              <rect x={x + 10} y="150" width="40" height="100" />
              <path d={`M ${x} 150 L ${x + 30} 110 L ${x + 60} 150`} strokeWidth="0.8" />
            </g>
          ))}
          <line x1="0" y1="250" x2="400" y2="250" strokeWidth="1" />
        </svg>
        <div className="absolute w-24 h-24 bg-amber-500/20 rounded-full blur-3xl top-1/4 right-1/4" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0d0800] to-transparent" />
      </div>
    ),
  },
  {
    id: "05",
    title: "Solar Park Arcadia",
    category: "Energy",
    year: "2022",
    location: "Arcadia, Peloponnese",
    area: "120,000 m²",
    tags: ["Infrastructure", "MEP", "Net-Zero"],
    accent: "#f5c842",
    visual: (
      <div className="absolute inset-0 overflow-hidden bg-[#080600]">
        <div className="absolute w-[500px] h-[500px] bg-yellow-500/10 blur-[140px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full opacity-20" fill="none" stroke="#f5c842" strokeWidth="0.5">
          {[...Array(5)].map((_, row) =>
            [...Array(10)].map((_, col) => (
              <rect key={`${row}-${col}`} x={col * 40 + 4} y={row * 40 + 40} width="34" height="28" />
            ))
          )}
          <line x1="0" y1="280" x2="400" y2="280" strokeWidth="1.5" />
          {[40, 80, 120, 160, 200, 240, 280, 320, 360].map(x => (
            <line key={x} x1={x} y1="240" x2={x} y2="280" strokeWidth="0.8" />
          ))}
        </svg>
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 bg-yellow-400/15 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#080600] to-transparent" />
      </div>
    ),
  },
  {
    id: "06",
    title: "The Onyx Penthouse",
    category: "Residential",
    year: "2021",
    location: "Kolonaki, Athens",
    area: "480 m²",
    tags: ["Interior", "Smart Home", "Penthouse"],
    accent: "#a8a8c4",
    visual: (
      <div className="absolute inset-0 overflow-hidden bg-[#060608]">
        <div className="absolute w-[400px] h-[400px] bg-violet-500/10 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full opacity-20" fill="none" stroke="#a8a8c4" strokeWidth="0.6">
          <rect x="40" y="30" width="320" height="240" />
          <line x1="40" y1="150" x2="360" y2="150" />
          <line x1="200" y1="30" x2="200" y2="270" />
          {/* Luxury details: curved arch */}
          <path d="M 100 150 Q 200 80 300 150" />
          <rect x="80" y="170" width="100" height="80" />
          <rect x="220" y="170" width="100" height="80" />
          <rect x="160" y="60" width="80" height="70" />
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#060608] to-transparent" />
      </div>
    ),
  },
];

const categories = ["All", "Residential", "Commercial", "Renovation", "Hospitality", "Energy"];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050505] overflow-hidden">

        {/* ── Hero Header ── */}
        <div className="container mx-auto px-6 md:px-16 pt-40 pb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.35em] uppercase text-zinc-400 mb-6 font-light"
          >
            Portfolio
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(52px,9vw,120px)] font-outfit font-light tracking-[-0.04em] leading-[0.88] text-white uppercase"
            >
              Selected<br />
              <em className="not-italic text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-400 to-zinc-700">
                Works
              </em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-zinc-400 text-base md:text-lg font-light leading-relaxed max-w-xs md:text-right"
            >
              A curated range of our finest executions across disciplines and typologies.
            </motion.p>
          </div>

          {/* Animated Separator */}
          <motion.div
            className="mt-14 h-px bg-white/10"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* ── Filter Bar ── */}
        <div className="container mx-auto px-6 md:px-16 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-2 md:gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.2em] border transition-all duration-300 rounded-none font-light ${activeFilter === cat
                    ? "border-white bg-white text-black"
                    : "border-white/20 text-zinc-400 hover:border-white/40 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* ── Projects List: Full-Width Hover Row ── */}
        <div className="border-t border-white/8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {filtered.map((project, idx) => (
                <motion.div
                  key={project.id}
                  className="group relative border-b border-white/8 cursor-pointer overflow-hidden"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Full-width background visual on hover */}
                  <AnimatePresence>
                    {hoveredId === project.id && (
                      <motion.div
                        className="absolute inset-0 z-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {project.visual}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Row Content */}
                  <div className="relative z-10 container mx-auto px-6 md:px-16 py-8 md:py-10 grid grid-cols-[auto_1fr_auto] md:grid-cols-[80px_1fr_180px_180px_44px] items-center gap-6 md:gap-10">

                    {/* Index */}
                    <span
                      className="font-mono text-xs tabular-nums transition-colors duration-300"
                      style={{ color: hoveredId === project.id ? project.accent : "rgba(255,255,255,0.15)" }}
                    >
                      {project.id}
                    </span>

                    {/* Title */}
                    <h2
                      className="text-[clamp(24px,3.5vw,48px)] font-outfit font-light uppercase tracking-[-0.03em] leading-none transition-colors duration-300"
                      style={{ color: hoveredId === project.id ? "#fff" : "rgba(255,255,255,0.5)" }}
                    >
                      {project.title}
                    </h2>

                    {/* Category + Year (hidden on mobile) */}
                    <p className="hidden md:block text-zinc-600 text-sm font-light uppercase tracking-widest text-right transition-colors duration-300 group-hover:text-zinc-400">
                      {project.category}
                    </p>
                    <p className="hidden md:block text-zinc-700 text-sm font-mono text-right transition-colors duration-300 group-hover:text-zinc-400">
                      {project.year} · {project.location}
                    </p>

                    {/* Arrow */}
                    <motion.div
                      animate={{
                        rotate: hoveredId === project.id ? 0 : -45,
                        opacity: hoveredId === project.id ? 1 : 0.2,
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0"
                    >
                      <MoveUpRight className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>

                  {/* Expanding details strip below the row */}
                  <AnimatePresence>
                    {hoveredId === project.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden relative z-10"
                      >
                        <div className="container mx-auto px-6 md:px-16 pb-8 flex flex-wrap items-center gap-6 md:gap-10">
                          <p className="text-zinc-400 text-xs uppercase tracking-widest">
                            {project.area}
                          </p>
                          <div className="w-px h-4 bg-white/10" />
                          {project.tags.map(tag => (
                            <span
                              key={tag}
                              className="text-xs uppercase tracking-widest font-mono border px-3 py-1"
                              style={{ borderColor: `${project.accent}30`, color: project.accent + "90" }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Footer CTA ── */}
        <div className="border-t border-white/8">
          <div className="container mx-auto px-6 md:px-16 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-[clamp(24px,3vw,40px)] font-outfit font-light tracking-[-0.02em] text-white uppercase leading-tight">
              Ready for your<br className="hidden md:block" /> next project?
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-4 bg-white text-black px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium hover:bg-zinc-100 transition-colors duration-300"
              >
                <span>Request a Quote</span>
                <MoveUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="/services"
                className="text-zinc-400 text-sm uppercase tracking-[0.2em] font-light hover:text-white transition-colors duration-300"
              >
                Our Services →
              </a>
            </div>
          </div>
        </div>

      </main>

    </>
  );
}
