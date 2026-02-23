"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Clock, HardHat } from "lucide-react";

const timelineEvents = [
  { title: "Site Preparation", duration: "Weeks 1-2", status: "completed", icon: CheckCircle2 },
  { title: "Structural Framing", duration: "Weeks 3-6", status: "active", icon: HardHat },
  { title: "MEP Rough-in", duration: "Weeks 7-10", status: "pending", icon: Clock },
  { title: "Finishes & Handover", duration: "Weeks 11-14", status: "pending", icon: Clock },
];

export default function ServiceManagement() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef}
      id="management"
      className="relative min-h-screen py-32 bg-[#050505] overflow-hidden flex items-center"
    >
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 mb-6 bg-white/5">
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">03</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
            <span className="text-xs font-medium text-white uppercase tracking-widest">Management & Supervision</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold tracking-tight text-white mb-6">
            Control Every <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">
              Variable
            </span>
          </h2>
          
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-8">
            Rigorous project management guarantees adherence to schedules and budgets. On-site supervision by senior engineers ensures uncompromised quality control.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mt-12">
            {[
              { stat: "100%", label: "Budget Compliance" },
              { stat: "24/7", label: "Project Monitoring" },
            ].map((item, i) => (
              <div key={i} className="border-l border-white/20 pl-4">
                <p className="text-3xl font-outfit font-bold text-white mb-1">{item.stat}</p>
                <p className="text-sm text-zinc-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual: Interactive / Animated Timeline UI */}
        <div className="relative rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 md:p-12 shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[60px] pointer-events-none" />
          
          <div className="mb-8 flex justify-between items-end border-b border-white/10 pb-4">
            <div>
              <p className="text-zinc-500 text-sm font-medium mb-1">Project Status</p>
              <h3 className="text-xl font-outfit font-semibold text-white">Villa Kifisia</h3>
            </div>
            <div className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium">
              In Progress
            </div>
          </div>

          <div className="relative">
            {/* Animated Vertical Line */}
            <div className="absolute left-[15px] top-2 bottom-6 w-[2px] bg-white/10" />
            <motion.div 
              className="absolute left-[15px] top-2 w-[2px] bg-white"
              style={{ height: lineHeight }}
            />

            {/* Timeline Items */}
            <div className="space-y-8 relative z-10">
              {timelineEvents.map((event, i) => (
                <div key={i} className="flex space-x-6 items-start">
                  <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors duration-500 bg-[#0A0A0A]
                    ${event.status === 'completed' ? 'border-white text-white' : 
                      event.status === 'active' ? 'border-white shadow-[0_0_15px_rgba(255,255,255,0.4)] text-white' : 
                      'border-white/20 text-zinc-600'}
                  `}>
                    <event.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`text-lg font-medium transition-colors duration-500 ${
                      event.status === 'pending' ? 'text-zinc-500' : 'text-white'
                    }`}>
                      {event.title}
                    </h4>
                    <p className="text-sm text-zinc-500 mt-1">{event.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
