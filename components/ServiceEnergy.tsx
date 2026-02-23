"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sun, Battery, Zap } from "lucide-react";

export default function ServiceEnergy() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section 
      ref={containerRef}
      id="energy"
      className="relative min-h-screen py-32 bg-[#0A0A0A] overflow-hidden flex flex-col lg:flex-row-reverse items-center border-t border-white/5"
    >
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div 
          style={{ y }}
          className="relative z-10 lg:pl-12"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-amber-500/30 mb-6 bg-amber-500/10">
            <span className="text-xs font-medium text-amber-500/80 uppercase tracking-widest">04</span>
            <span className="w-1 h-1 rounded-full bg-amber-500" />
            <span className="text-xs font-medium text-amber-400 uppercase tracking-widest">Energy Autonomy</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold tracking-tight text-white mb-6">
            Powering the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
              Future
            </span>
          </h2>
          
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-8">
            Complete solar integration (Net Metering/Net Billing), battery storage setup, and EV charging stations designed for absolute energy independence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Solar Arrays", icon: Sun },
              { label: "Battery Storage", icon: Battery },
              { label: "Smart Grids", icon: Zap },
            ].map((feature, i) => (
              <div key={i} className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-lg p-3">
                <feature.icon className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-medium text-white">{feature.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Visual: Glowing Energy Flow Infographic */}
        <div className="relative h-[450px] md:h-[550px] w-full rounded-2xl overflow-hidden group border border-white/10 bg-[#050505]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          {/* Central Battery / House Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40">
            <motion.div 
              animate={{ boxShadow: ["0 0 20px rgba(245,158,11,0.2)", "0 0 60px rgba(245,158,11,0.6)", "0 0 20px rgba(245,158,11,0.2)"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/20 to-black border border-amber-500/50 flex items-center justify-center backdrop-blur-sm z-20"
            >
               <Battery className="w-12 h-12 text-amber-500" />
            </motion.div>
          </div>

          {/* Sun Node */}
          <div className="absolute top-[20%] left-[20%] w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-amber-600 shadow-[0_0_30px_rgba(252,211,77,0.8)] flex items-center justify-center z-10">
             <Sun className="w-6 h-6 text-black" />
          </div>

          {/* Grid Node */}
          <div className="absolute bottom-[20%] right-[20%] w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 shadow-[0_0_30px_rgba(96,165,250,0.6)] flex items-center justify-center z-10">
             <Zap className="w-6 h-6 text-white" />
          </div>

          {/* Animated SVG Flows */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {/* Sun to Hub Line */}
            <path id="sun-to-hub" d="M 20% 20% Q 35% 20% 50% 50%" className="hidden" />
            <motion.path
              d="M 120 120 L 250 250" // Approximate coords for demo
              stroke="url(#gradient-amber)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10 10"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: -100 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="opacity-70"
            />
            {/* Hub to Grid Line */}
            <motion.path
              d="M 300 300 L 450 450" 
              stroke="url(#gradient-blue)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10 10"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: -100 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="opacity-70"
            />
            
            <defs>
              <linearGradient id="gradient-amber" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0" />
                <stop offset="100%" stopColor="#60A5FA" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
