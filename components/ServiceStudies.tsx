"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { blueprintPaths } from "./blueprintPaths";

export default function ServiceStudies() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Sequential delays for entrance animation based on logical construction order
  const houseParts = [
    { name: "grid", paths: blueprintPaths.grid, delay: 0 },
    { name: "foundation", paths: blueprintPaths.foundation, delay: 0.5 },
    { name: "pillars", paths: blueprintPaths.pillars, delay: 1.0 },
    { name: "walls", paths: blueprintPaths.walls, delay: 1.5 },
    { name: "windows", paths: blueprintPaths.windows, delay: 2.0 },
    { name: "roof", paths: blueprintPaths.roof, delay: 2.5 },
    { name: "annotations", paths: blueprintPaths.annotations, delay: 3.0 }
  ];
  return (
    <section
      ref={containerRef}
      id="design"
      className="relative min-h-screen py-32 bg-[#050505] overflow-hidden flex items-center border-t border-white/5"
    >
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Text Content */}
        <motion.div
          style={{ y }}
          className="relative z-10"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 mb-6 bg-white/5">
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">01</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
            <span className="text-xs font-medium text-white uppercase tracking-widest">Studies & Design</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold tracking-tight text-white mb-6">
            Blueprint to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">
              Brilliance
            </span>
          </h2>

          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-8">
            Comprehensive architectural, structural, and MEP studies. We transform visionary concepts into highly detailed technical schematics, ensuring absolute precision before a single brick is laid.
          </p>

          <ul className="space-y-4">
            {["Architectural Design", "Structural Engineering", "MEP Installations", "Energy Efficiency Ratings"].map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center space-x-3 text-zinc-300"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Visual: Blueprint Animation */}
        <div className="relative h-[600px] w-full max-w-lg mx-auto lg:max-w-none rounded-2xl border border-[#00D4FF]/20 bg-[#020617] overflow-hidden flex flex-col items-center justify-center">
          {/* Faint Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00D4FF15_1px,transparent_1px),linear-gradient(to_bottom,#00D4FF15_1px,transparent_1px)] bg-[size:40px_40px] z-0" />

          {/* Animated SVG House */}
          <motion.svg
            viewBox="0 0 800 600"
            className="w-full h-full relative z-10 p-4 md:p-8"
            fill="none"
            stroke="#00D4FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Grid layer (fainter) */}
            <g stroke="#00D4FF" strokeWidth="0.5" opacity="0.3">
              {houseParts.find(p => p.name === 'grid')?.paths.map((d: string, i: number) => (
                <motion.path
                  key={`grid-${i}`}
                  d={d}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              ))}
            </g>

            {/* Pulsing drop-shadow wrapper for the house */}
            <motion.g
              animate={{
                filter: [
                  "drop-shadow(0px 0px 4px rgba(0, 212, 255, 0.4))",
                  "drop-shadow(0px 0px 12px rgba(0, 212, 255, 0.9))",
                  "drop-shadow(0px 0px 4px rgba(0, 212, 255, 0.4))"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {houseParts.filter(p => p.name !== 'grid').map((part) => (
                <g key={part.name}>
                  {part.paths.map((d: string, i: number) => (
                    <motion.path
                      key={`${part.name}-${i}`}
                      d={d}
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1.5, delay: part.delay, ease: "easeInOut" }}
                    />
                  ))}
                </g>
              ))}
            </motion.g>
          </motion.svg>

          {/* Overlay detail label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 2.5 }}
            className="absolute bottom-8 left-0 right-0 text-center pointer-events-none z-20"
          >
            <p className="font-mono tracking-[0.2em] md:tracking-[0.3em] text-xs font-semibold drop-shadow-[0px_0px_8px_rgba(0,212,255,0.8)] text-[#00D4FF]">
              STRUCTURAL BLUEPRINT — REV 1
            </p>
          </motion.div>

          {/* Glitch/Scanline effect overlay (pure CSS via Tailwind) */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-full w-full opacity-30 animate-pulse pointer-events-none" style={{ backgroundSize: "100% 4px" }} />
        </div>
      </div>
    </section>
  );
}
