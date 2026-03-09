"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { MapPinned, HardHat, Wrench, Key, ArrowRight } from "lucide-react";

const timelineEvents = [
  { title: "Site Preparation", duration: "Weeks 1-2", status: "completed", icon: MapPinned },
  { title: "Structural Framing", duration: "Weeks 3-6", status: "active", icon: HardHat },
  { title: "MEP Rough-in", duration: "Weeks 7-10", status: "pending", icon: Wrench },
  { title: "Finishes & Handover", duration: "Weeks 11-14", status: "pending", icon: Key },
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

          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <Link
              href="/services?service=04"
              className="group inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium transition-all duration-300 hover:bg-zinc-200"
            >
              <span>Explore Project Management</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/projects?serviceFilter=All"
              className="group inline-flex items-center justify-center gap-3 bg-transparent text-white border border-white/20 px-8 py-4 text-sm font-medium transition-all duration-300 hover:bg-white/5 hover:border-white/40"
            >
              <span>View Management Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-zinc-400 group-hover:text-white" />
            </Link>
          </div>
        </div>

        {/* Visual: Interactive / Animated Timeline UI */}
        <div className="relative w-full max-w-[500px] h-[600px] md:h-[750px] mx-auto flex items-center justify-center">

          {/* Background SVG Path */}
          <svg viewBox="0 0 500 800" preserveAspectRatio="none" className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
            {/* Base faint path */}
            <path
              d="M 40 40 L 460 40 L 460 220 L 40 220 L 40 400 L 460 400 L 460 580 L 40 580 L 40 760 L 460 760"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="2"
              strokeLinejoin="miter"
              vectorEffect="non-scaling-stroke"
            />

            {/* Animated drawing path */}
            <motion.path
              d="M 40 40 L 460 40 L 460 220 L 40 220 L 40 400 L 460 400 L 460 580 L 40 580 L 40 760 L 460 760"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="2"
              strokeLinejoin="miter"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 4, ease: "linear" }}
              className="drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            />

            {/* Traveling Pulse Highlight */}
            <motion.circle
              r="4"
              fill="#ffffff"
              className="drop-shadow-[0_0_12px_rgba(255,255,255,1)]"
              initial={{ offsetDistance: "0%" }}
              whileInView={{ offsetDistance: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 4, ease: "linear" }}
              style={{
                offsetPath: `path('M 40 40 L 460 40 L 460 220 L 40 220 L 40 400 L 460 400 L 460 580 L 40 580 L 40 760 L 460 760')`,
              }}
            />
          </svg>

          {/* Timeline Nodes & Content overlays mapping to the 500x800 coordinate space roughly */}
          <div className="absolute inset-0 w-full h-full">

            {timelineEvents.map((event, i) => {
              // Calculate specific delays based on path length tracking
              const delays = [0.75, 1.6, 2.5, 3.35];
              const delay = delays[i];

              const isRightPath = i % 2 === 0;

              // Top positioning based on 800px viewBox coordinate percentages
              // Box slices start at 5% (40px) and span 22.5% (180px) each.
              const topBox = `${5 + i * 22.5}%`;
              const xPosNode = isRightPath ? '92%' : '8%';

              return (
                <div key={i} className="absolute w-full" style={{ top: topBox, height: '22.5%' }}>

                  {/* The Icon Node */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0, borderColor: "rgba(255,255,255,0.1)", color: "#52525b" }}
                    whileInView={{ opacity: 1, scale: 1, borderColor: "rgba(255,255,255,0.6)", color: "#ffffff" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: delay }}
                    className="absolute w-12 h-12 md:w-14 md:h-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#050505] border-[2px] flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)] z-20"
                    style={{ left: xPosNode, top: '50%' }}
                  >
                    <event.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </motion.div>

                  {/* The Content Text (Fading in from the open side) */}
                  <motion.div
                    initial={{ opacity: 0, x: isRightPath ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: delay + 0.2 }}
                    className={`absolute top-1/2 -translate-y-1/2 w-[84%] px-4 md:px-8 flex flex-col justify-center ${isRightPath ? 'left-[8%] items-start text-left' : 'right-[8%] items-end text-right'
                      }`}
                  >
                    <h3 className="text-xl md:text-2xl font-outfit font-semibold text-white drop-shadow-md">
                      {event.title}
                    </h3>
                    <p className="text-sm md:text-base text-zinc-300 font-mono tracking-wider mt-1 mb-2">
                      {event.duration}
                    </p>
                    <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-[95%]">
                      {/* Contextual description matched to exactly each phase */}
                      {i === 0 && "Clearing, excavation, and fundamental grid layout marking."}
                      {i === 1 && "Erection of concrete pillars, shear walls, and foundational slabs."}
                      {i === 2 && "Mechanical, electrical, and plumbing infrastructure routing."}
                      {i === 3 && "Surface finishing, final inspections, and turnkey delivery."}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
