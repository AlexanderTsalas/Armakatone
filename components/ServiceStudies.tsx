"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ServiceStudies() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const dashOffset = useTransform(scrollYProgress, [0, 0.5], [1000, 0]);

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
        <div className="relative h-[600px] w-full rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden flex items-center justify-center">
          {/* Blueprint Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          {/* SVG Line Animation */}
          <svg
            viewBox="0 0 800 600"
            className="absolute inset-0 w-full h-full opacity-60"
            fill="none"
            stroke="white"
            strokeWidth="1"
          >
            <motion.path
              d="M100 500 L100 200 L400 100 L700 200 L700 500 Z M100 200 L700 200 M400 100 L400 500 M100 500 L700 500 M250 200 L250 500 M550 200 L550 500"
              strokeDasharray="1000"
              style={{ strokeDashoffset: dashOffset }}
              strokeOpacity="0.5"
            />
            {/* Overlay detail lines */}
            <motion.path
              d="M200 300 H300 V400 H200 Z M500 300 H600 V400 H500 Z"
              strokeDasharray="500"
              style={{ strokeDashoffset: dashOffset }}
              strokeOpacity="0.2"
              strokeWidth="0.5"
            />
          </svg>
          
          {/* Glitch/Scanline effect overlay (pure CSS via Tailwind) */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-full w-full opacity-30 animate-pulse pointer-events-none" style={{ backgroundSize: "100% 4px" }} />
        </div>
      </div>
    </section>
  );
}
