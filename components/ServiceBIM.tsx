"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Box, Layers, MonitorPlay } from "lucide-react";

export default function ServiceBIM() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [45, 15]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section 
      ref={containerRef}
      id="bim"
      className="relative min-h-screen py-32 bg-[#0A0A0A] overflow-hidden flex flex-col lg:flex-row items-center border-t border-white/5"
    >
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div 
          style={{ y }}
          className="relative z-10"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-teal-500/30 mb-6 bg-teal-500/10">
            <span className="text-xs font-medium text-teal-400 uppercase tracking-widest">06</span>
            <span className="w-1 h-1 rounded-full bg-teal-500" />
            <span className="text-xs font-medium text-teal-300 uppercase tracking-widest">BIM Consulting</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold tracking-tight text-white mb-6">
            Digital Twin <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-600">
              Technology
            </span>
          </h2>
          
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-8">
            Experience your project before it&apos;s built. Our Building Information Modeling (BIM) incorporates 4D/5D planning to visualize complexities, predict costs, and eliminate construction clashes.
          </p>

          <div className="space-y-4">
            {[
              { icon: Box, title: "3D Visualization", text: "Walk through the digital twin of your structure." },
              { icon: Layers, title: "Clash Detection", text: "Identify and resolve structural or MEP interference." },
              { icon: MonitorPlay, title: "4D/5D Planning", text: "Simulate construction schedules and lifecycle costs." },
            ].map((feature, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mt-1">
                  <feature.icon className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium">{feature.title}</h4>
                  <p className="text-sm text-zinc-400 mt-1">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Visual: 3D Wireframe Perspective */}
        <div className="relative h-[500px] w-full mt-12 lg:mt-0 flex items-center justify-center [perspective:1000px]">
          <div className="absolute inset-0 bg-teal-500/5 blur-[120px] rounded-full" />
          
          <motion.div 
            style={{ rotateX, rotateZ }}
            className="relative w-72 h-72 lg:w-96 lg:h-96 transform-style-3d shadow-2xl shadow-teal-500/20"
          >
            {/* Top Floor Wireframe */}
            <div className="absolute inset-0 border border-teal-400/80 bg-teal-900/20 backdrop-blur-sm -translate-z-24 flex items-center justify-center shadow-[inset_0_0_50px_rgba(45,212,191,0.2)]">
               <div className="w-3/4 h-3/4 border border-teal-400/40 bg-teal-500/5 grid grid-cols-3 grid-rows-3">
                 {[...Array(9)].map((_, i) => <div key={i} className="border border-teal-400/20" />)}
               </div>
            </div>

            {/* Middle Floor Wireframe */}
            <div className="absolute inset-0 border border-teal-500/50 bg-teal-900/10 -translate-z-12 flex items-center justify-center mt-12 ml-6">
              <div className="w-3/4 h-3/4 border border-teal-500/30 bg-teal-500/5 grid grid-cols-3 grid-rows-3">
                 {[...Array(9)].map((_, i) => <div key={i} className="border border-teal-500/10" />)}
               </div>
            </div>

            {/* Foundation Wireframe */}
            <div className="absolute inset-0 border border-teal-700/50 bg-transparent translate-z-0 flex items-center justify-center mt-24 ml-12">
               <div className="w-3/4 h-3/4 border border-teal-700/30 grid grid-cols-3 grid-rows-3">
                 {[...Array(9)].map((_, i) => <div key={i} className="border border-teal-700/10" />)}
               </div>
            </div>

            {/* Connecting Vertical Beams */}
            <div className="absolute -left-1 -top-1 w-2 bg-teal-400/50 blur-[1px]" style={{ height: 'calc(100% + 96px)', transform: 'translateZ(-100px) rotateX(15deg)' }} />
            <div className="absolute -right-1 -bottom-1 w-2 bg-teal-600/50 blur-[1px]" style={{ height: 'calc(100% + 96px)', transform: 'translateZ(-100px) rotateX(15deg)' }} />

          </motion.div>
        </div>
      </div>
    </section>
  );
}
