"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, Thermometer, ShieldCheck, Gamepad2, ChevronRight } from "lucide-react";

export default function ServiceSmartHome() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const tabs = [
    { icon: Lightbulb, label: "Lighting" },
    { icon: Thermometer, label: "Climate" },
    { icon: ShieldCheck, label: "Security" },
    { icon: Gamepad2, label: "Media" },
  ];

  return (
    <section 
      ref={containerRef}
      id="automation"
      className="relative min-h-screen py-32 bg-[#050505] overflow-hidden flex items-center border-t border-white/5"
    >
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div 
          style={{ y }}
          className="relative z-10"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-indigo-500/30 mb-6 bg-indigo-500/10">
            <span className="text-xs font-medium text-indigo-400 uppercase tracking-widest">05</span>
            <span className="w-1 h-1 rounded-full bg-indigo-500" />
            <span className="text-xs font-medium text-indigo-300 uppercase tracking-widest">Smart Automation</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold tracking-tight text-white mb-6">
            Intelligence in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-600">
              Every Room
            </span>
          </h2>
          
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-8">
            Complete ecosystem integration for residential control. Manage lighting, HVAC, and comprehensive security from your device—flawlessly engineered into the architecture.
          </p>
          
          <div className="flex flex-col space-y-3">
             {tabs.map((tab, idx) => (
               <button 
                key={idx}
                onMouseEnter={() => setActiveTab(idx)}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                  activeTab === idx 
                  ? 'bg-indigo-500/10 border-indigo-500/30 text-white' 
                  : 'bg-transparent border-white/5 text-zinc-500 hover:bg-white/5'
                }`}
               >
                 <div className="flex items-center space-x-4">
                   <tab.icon className={`w-5 h-5 ${activeTab === idx ? 'text-indigo-400' : 'text-zinc-600'}`} />
                   <span className="font-medium">{tab.label} Control</span>
                 </div>
                 <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === idx ? 'text-indigo-400 translate-x-1' : 'text-zinc-600'}`} />
               </button>
             ))}
          </div>
        </motion.div>

        {/* Visual: Simulated App UI Layout */}
        <div className="relative h-[650px] w-full rounded-[2.5rem] border-[8px] border-zinc-900 bg-black overflow-hidden shadow-2xl shadow-indigo-500/20 max-w-sm mx-auto lg:mx-0">
          
          {/* Status Bar */}
          <div className="h-12 w-full flex items-center justify-between px-6 bg-black z-20 relative pt-2">
            <span className="text-xs font-medium text-white">12:30</span>
            <div className="flex space-x-1.5 cursor-default">
              <div className="w-4 h-3 rounded-sm border border-white/80" />
              <div className="w-3 h-3 rounded-full bg-white/80" />
              <div className="w-1.5 h-3 bg-white/80 rounded-sm" />
            </div>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-900 rounded-b-3xl" />
          </div>

          {/* App Content */}
          <div className="p-6 relative z-10">
            <h3 className="text-3xl font-outfit text-white font-medium mb-1">Welcome Home</h3>
            <p className="text-zinc-400 text-sm mb-8">Everything looks good.</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
               <motion.div 
                 animate={{ 
                   backgroundColor: activeTab === 0 ? "rgba(99,102,241,0.2)" : "rgba(255,255,255,0.05)",
                   borderColor: activeTab === 0 ? "rgba(99,102,241,0.5)" : "rgba(255,255,255,0.1)"
                 }}
                 className="p-4 rounded-2xl border flex flex-col justify-between aspect-square"
               >
                 <div className="flex justify-between items-start">
                   <Lightbulb className={`w-6 h-6 ${activeTab === 0 ? 'text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]' : 'text-zinc-500'}`} />
                   <div className="w-8 h-4 rounded-full bg-indigo-500 flex items-center p-0.5"><div className="w-3 h-3 rounded-full bg-white ml-auto" /></div>
                 </div>
                 <div>
                   <p className="text-white font-medium">Living Room</p>
                   <p className="text-indigo-400 text-xs mt-1">75% Brightness</p>
                 </div>
               </motion.div>

               <motion.div 
                 animate={{ 
                   backgroundColor: activeTab === 1 ? "rgba(99,102,241,0.2)" : "rgba(255,255,255,0.05)",
                   borderColor: activeTab === 1 ? "rgba(99,102,241,0.5)" : "rgba(255,255,255,0.1)"
                 }}
                 className="p-4 rounded-2xl border flex flex-col justify-between aspect-square"
               >
                 <div className="flex justify-between items-start">
                   <Thermometer className={`w-6 h-6 ${activeTab === 1 ? 'text-indigo-400 text-white drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]' : 'text-zinc-500'}`} />
                   <div className="w-8 h-4 rounded-full bg-indigo-500 flex items-center p-0.5"><div className="w-3 h-3 rounded-full bg-white ml-auto" /></div>
                 </div>
                 <div>
                   <p className="text-white font-medium">Thermostat</p>
                   <p className="text-zinc-400 text-xs mt-1">22°C Target</p>
                 </div>
               </motion.div>
            </div>

            <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
              <h4 className="text-white font-medium mb-3">Routines</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <span className="text-sm text-zinc-300">Good Morning</span>
                  <span className="text-xs text-indigo-400 uppercase tracking-widest font-medium">Run</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <span className="text-sm text-zinc-300">Leaving Home</span>
                  <span className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Active</span>
                </div>
              </div>
            </div>

          </div>
          
          {/* Ambient Device Glow */}
          <motion.div 
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-[80px] pointer-events-none transition-colors duration-500 bg-indigo-600/50`}
          />
        </div>
      </div>
    </section>
  );
}
