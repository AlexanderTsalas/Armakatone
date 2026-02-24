"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedHouseBlueprint from "./AnimatedHouseBlueprint";

export default function ServiceStudies() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

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

        {/* Visual: Animated Custom Component */}
        <AnimatedHouseBlueprint />
      </div>
    </section>
  );
}
