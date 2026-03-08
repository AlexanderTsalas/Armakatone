"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Lightbulb, Thermometer, ShieldCheck, Gamepad2, ChevronRight,
  Power, Fan, Lock, Video, Play, SkipBack, SkipForward, Volume2, ArrowRight
} from "lucide-react";

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

  const renderPhoneContent = () => {
    switch (activeTab) {
      case 0: // Lighting
        return (
          <motion.div
            key="lighting"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="h-full flex flex-col"
          >
            <h3 className="text-2xl font-outfit text-white font-medium mb-1">Lighting</h3>
            <p className="text-zinc-400 text-sm mb-6">4 active rooms</p>

            <div className="space-y-4">
              {[
                { room: "Living Room", state: "On", bg: "bg-indigo-500", dot: "ml-auto" },
                { room: "Kitchen", state: "On", bg: "bg-indigo-500", dot: "ml-auto" },
                { room: "Bedroom", state: "Off", bg: "bg-zinc-700", dot: "mr-auto" },
              ].map((light, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${light.state === 'On' ? 'bg-indigo-500/20 text-indigo-400' : 'bg-white/5 text-zinc-400'}`}>
                      <Lightbulb className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{light.room}</p>
                      <p className="text-zinc-400 text-xs">{light.state}</p>
                    </div>
                  </div>
                  <div className={`w-10 h-6 pl-1 pr-1 flex items-center rounded-full ${light.bg} transition-colors`}>
                    <div className={`w-4 h-4 rounded-full bg-white shadow-sm ${light.dot}`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-xs text-zinc-400 uppercase tracking-widest font-medium mb-3">Scenes</p>
              <div className="grid grid-cols-2 gap-3">
                <button className="py-3 px-4 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 text-sm font-medium">Relax</button>
                <button className="py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-zinc-400 text-sm font-medium">Focus</button>
              </div>
            </div>
          </motion.div>
        );
      case 1: // Climate
        return (
          <motion.div
            key="climate"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="h-full flex flex-col items-center"
          >
            <div className="w-full text-left mb-8">
              <h3 className="text-2xl font-outfit text-white font-medium mb-1">Climate</h3>
              <p className="text-zinc-400 text-sm">Zone 1: Main Level</p>
            </div>

            {/* Thermostat Dial */}
            <div className="relative w-48 h-48 rounded-full border-[8px] border-zinc-800 flex flex-col items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] mb-8">
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                <circle cx="50%" cy="50%" r="42%" fill="none" stroke="#6366f1" strokeWidth="8" strokeDasharray="300" strokeDashoffset="80" strokeLinecap="round" />
              </svg>
              <span className="text-5xl font-outfit font-light text-white tracking-tighter">22<span className="text-2xl text-zinc-400">°</span></span>
              <span className="text-xs text-indigo-400 font-medium mt-1">COOLING</span>
            </div>

            <div className="grid grid-cols-3 gap-4 w-full">
              <button className="p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-zinc-400 hover:bg-white/10">
                <Power className="w-5 h-5 mb-1" />
                <span className="text-xs">Power</span>
              </button>
              <button className="p-3 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex flex-col items-center justify-center text-indigo-400">
                <Thermometer className="w-5 h-5 mb-1" />
                <span className="text-xs">Cool</span>
              </button>
              <button className="p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-zinc-400 hover:bg-white/10">
                <Fan className="w-5 h-5 mb-1" />
                <span className="text-xs">Fan</span>
              </button>
            </div>
          </motion.div>
        );
      case 2: // Security
        return (
          <motion.div
            key="security"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="h-full flex flex-col"
          >
            <h3 className="text-2xl font-outfit text-white font-medium mb-1">Security</h3>
            <p className="text-emerald-400 text-sm mb-6 flex items-center"><ShieldCheck className="w-4 h-4 mr-1" /> System Armed</p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl flex flex-col items-center justify-center text-center">
                <Lock className="w-6 h-6 text-emerald-400 mb-2" />
                <span className="text-white text-sm font-medium">Front Door</span>
                <span className="text-emerald-500 text-xs">Locked</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col items-center justify-center text-center">
                <Lock className="w-6 h-6 text-zinc-400 mb-2" />
                <span className="text-white text-sm font-medium">Garage</span>
                <span className="text-zinc-400 text-xs">Unlocked</span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 uppercase tracking-widest font-medium mb-3">Live Cameras</p>
            <div className="space-y-3">
              <div className="relative h-24 rounded-xl bg-zinc-900 border border-white/10 overflow-hidden flex items-center justify-center group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity" />
                <div className="absolute top-2 right-2 flex items-center space-x-1"><div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /><span className="text-[10px] font-mono text-white/80">REC</span></div>
                <div className="relative z-10 flex items-center text-white/80 text-sm font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur-md"><Video className="w-4 h-4 mr-2" /> Entryway</div>
              </div>
            </div>
          </motion.div>
        );
      case 3: // Media
        return (
          <motion.div
            key="media"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="h-full flex flex-col"
          >
            <h3 className="text-2xl font-outfit text-white font-medium mb-1">Media</h3>
            <p className="text-zinc-400 text-sm mb-6">Whole House Audio</p>

            {/* Now Playing Widget */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-black border border-white/10 mb-6">
              <div className="flex items-center space-x-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-purple-500 to-indigo-500 shadow-lg shrink-0" />
                <div>
                  <h3 className="text-white font-medium line-clamp-1">Atmospheric Vibes</h3>
                  <p className="text-indigo-300 text-xs">Armakat Radio</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1 bg-white/10 rounded-full mb-5">
                <div className="w-1/3 h-full bg-indigo-500 rounded-full relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-md cursor-pointer" />
                </div>
              </div>

              <div className="flex items-center justify-center space-x-6">
                <SkipBack className="w-5 h-5 text-zinc-400 cursor-pointer hover:text-white transition-colors" />
                <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] cursor-pointer">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                <SkipForward className="w-5 h-5 text-zinc-400 cursor-pointer hover:text-white transition-colors" />
              </div>
            </div>

            <p className="text-xs text-zinc-400 uppercase tracking-widest font-medium mb-3">Volume Zones</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Volume2 className="w-4 h-4 text-zinc-400 shrink-0" />
                <div className="flex-grow">
                  <div className="flex justify-between text-xs mb-1"><span className="text-white">Living Room</span><span className="text-zinc-400">45%</span></div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full"><div className="w-[45%] h-full bg-indigo-400 rounded-full" /></div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

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
              <motion.button
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${activeTab === idx
                  ? 'bg-indigo-500/10 border-indigo-500/30 text-white'
                  : 'bg-transparent border-white/5 text-zinc-400 hover:bg-white/5'
                  }`}
              >
                <div className="flex items-center space-x-4">
                  <tab.icon className={`w-5 h-5 ${activeTab === idx ? 'text-indigo-400' : 'text-zinc-600'}`} />
                  <span className="font-medium">{tab.label} Control</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === idx ? 'text-indigo-400 translate-x-1' : 'text-zinc-600'}`} />
              </motion.button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-4 border-t border-white/10">
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium transition-all duration-300 hover:bg-zinc-200"
            >
              <span>Explore Smart Automation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center gap-3 bg-transparent text-white border border-white/20 px-8 py-4 text-sm font-medium transition-all duration-300 hover:bg-white/5 hover:border-white/40"
            >
              <span>View Residential Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-zinc-400 group-hover:text-white" />
            </Link>
          </div>
        </motion.div>

        {/* Visual: Simulated App UI Layout */}
        <div className="relative h-[650px] w-full rounded-[2.5rem] border-[8px] border-zinc-900 bg-black overflow-hidden shadow-2xl shadow-indigo-500/20 max-w-sm mx-auto lg:mx-auto">

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
          <div className="p-6 relative z-10 h-[calc(100%-3rem)] overflow-hidden">
            <AnimatePresence mode="wait">
              {renderPhoneContent()}
            </AnimatePresence>
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
