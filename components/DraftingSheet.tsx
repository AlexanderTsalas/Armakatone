"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useState, MouseEvent } from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

interface DraftingSheetProps {
  index: string;
  title: string;
  description: string;
  link: string;
  rotation: number;
  delay: number;
  className?: string; // Used for organic absolute positioning
}

export default function DraftingSheet({ index, title, description, link, rotation, delay, className }: DraftingSheetProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Custom 3D Tilt Hook Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smoother springs for a heavy "blueprint stack" feel
  const rotateX = useSpring(useMotionTemplate`${mouseY}deg`, { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useMotionTemplate`${mouseX}deg`, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center (-1 to 1) and map to angles (-10 to 10 deg)
    const normalizedX = (e.clientX - centerX) / (rect.width / 2);
    const normalizedY = (e.clientY - centerY) / (rect.height / 2);

    mouseX.set(normalizedX * 10);
    mouseY.set(normalizedY * -10); // Invert Y for proper tilt illusion
  };

  const handleMouseEnter = () => setIsHovered(true);
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset to base flat rotation smoothly
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotateZ: rotation + 10 }}
      animate={{ opacity: 1, y: 0, rotateZ: rotation }}
      transition={{ 
        type: "spring", 
        stiffness: 70, 
        damping: 12, 
        delay: delay,
        opacity: { duration: 0.8, delay } 
      }}
      className={clsx("absolute w-[360px] md:w-[420px] lg:w-[480px] shadow-2xl", className)}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
        perspective: 1200
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05, zIndex: 50, transition: { duration: 0.3 } }}
    >
      <Link href={link} className="block w-full h-full relative cursor-none group">
        
        {/* Core Sheet Body */}
        <div className="relative w-full overflow-hidden bg-zinc-900/90 backdrop-blur-md border border-white/20 p-8 pt-12 pb-14 transition-colors duration-500 group-hover:bg-zinc-800/90 group-hover:border-zinc-500/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)]">
          
          {/* Faint Blueprint Texture */}
          <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:24px_24px] transition-opacity duration-300 group-hover:opacity-20" />

          {/* Large Ghosted Index Number (e.g. 01) behind the text */}
          <div className="absolute -top-6 -right-4 text-[180px] font-bold text-white/[0.03] select-none tracking-tighter leading-none pointer-events-none group-hover:text-white/[0.06] transition-colors duration-500 translate-z-[20px]">
            {index}
          </div>

          <div className="relative z-10 translate-z-[40px]">
            {/* Header / Title */}
            <h3 className="text-2xl md:text-3xl font-outfit font-light tracking-wide text-white uppercase border-b border-white/10 pb-4 mb-4" style={{ letterSpacing: "0.15em" }}>
              {title}
            </h3>

            {/* Description (Fades in slightly on hover or stays visible but dim) */}
            <p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base line-clamp-4 group-hover:text-zinc-200 transition-colors duration-300">
              {description}
            </p>
          </div>

          {/* Animated Fold / Corner (Visual flair) */}
          <div className="absolute bottom-0 right-0 w-12 h-12 bg-zinc-950 translate-x-6 translate-y-6 rotate-45 border-l border-white/20 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:rotate-45" />

          {/* Interactive Arrow */}
          <div className="absolute bottom-6 right-8 flex items-center space-x-2 opacity-50 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <span className="text-xs uppercase tracking-widest text-white/70">Explore</span>
            <MoveRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Custom cursor follower purely CSS tied to hover */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-white/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 pointer-events-none mix-blend-exclusion" />
      </Link>
    </motion.div>
  );
}
