"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MousePointer2 } from "lucide-react";

export default function ServiceRenovation() {
  const containerRef = useRef<HTMLElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const isDragging = useRef(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const handleMove = (clientX: number, rectLeft: number, rectWidth: number) => {
    const x = Math.max(0, Math.min(clientX - rectLeft, rectWidth));
    const percent = Math.max(0, Math.min((x / rectWidth) * 100, 100));
    setSliderPosition(percent);
  };

  return (
    <section
      ref={containerRef}
      id="construction"
      className="relative min-h-screen py-32 bg-[#0A0A0A] overflow-hidden flex flex-col lg:flex-row-reverse items-center"
    >
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Text Content */}
        <motion.div
          style={{ y }}
          className="relative z-10 lg:pl-12"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 mb-6 bg-[#050505]">
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">02</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
            <span className="text-xs font-medium text-white uppercase tracking-widest">Construction & Renovation</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold tracking-tight text-white mb-6">
            From Frame to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">
              Finish
            </span>
          </h2>

          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-8">
            Turnkey execution for residential and commercial projects. We handle every structural phase and interior detail with uncompromised material quality and craftsmanship.
          </p>

          <p className="text-sm text-zinc-500 flex items-center mb-8">
            <MousePointer2 className="w-4 h-4 mr-2" />
            Drag the slider to see the transformation
          </p>
        </motion.div>

        {/* Visual: Before / After Slider */}
        <div className="relative h-[500px] md:h-[600px] w-full rounded-2xl overflow-hidden group select-none touch-none">

          <div
            className="absolute inset-0 cursor-ew-resize"
            onPointerDown={(e) => {
              isDragging.current = true;
              const rect = e.currentTarget.getBoundingClientRect();
              handleMove(e.clientX, rect.left, rect.width);
            }}
            onPointerMove={(e) => {
              if (isDragging.current) {
                const rect = e.currentTarget.getBoundingClientRect();
                handleMove(e.clientX, rect.left, rect.width);
              }
            }}
            onPointerUp={() => (isDragging.current = false)}
            onPointerLeave={() => (isDragging.current = false)}
          >
            {/* After (Finished) Image */}
            <div className="absolute inset-0">
              <img src="/photoreal_villa.png" alt="Finished Villa" className="w-full h-full object-cover pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <p className="absolute bottom-4 right-4 text-white/80 font-outfit font-medium text-2xl drop-shadow-md">AFTER</p>
            </div>

            {/* Before (Raw Construction) Image Mask */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <img src="/blueprint_wireframe.png" alt="Blueprint Wireframe" className="w-full h-full object-cover grayscale opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-[#00D4FF]/10 mix-blend-overlay pointer-events-none" />
              <p className="absolute bottom-4 left-4 text-white/80 font-outfit font-medium text-2xl drop-shadow-md">BEFORE</p>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
              style={{ left: `calc(${sliderPosition}% - 2px)` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-transform group-hover:scale-110">
                <div className="flex space-x-1">
                  <div className="w-0.5 h-3 bg-black rounded-full" />
                  <div className="w-0.5 h-3 bg-black rounded-full" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
