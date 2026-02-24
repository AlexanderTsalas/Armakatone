"use client";

import { useEffect, useRef, useState } from "react";
import { motion, animate, useAnimation, useInView } from "framer-motion";

type Vertex = [number, number, number];

// Define structural dimensions
const width = 1.2;
const depth = 1.8;
const height = 1.0;
const roofHeight = 1.6;

// Generate complex architectural vertices programmatically
const rawVertices: Vertex[] = [];
const edges: [number, number][] = [];

// Helper to add vertex and return index
const addV = (x: number, y: number, z: number) => {
  rawVertices.push([x, y, z]);
  return rawVertices.length - 1;
};

// 1. BASE OUTLINE & FLOOR JOISTS
const baseCorners = [
  addV(-width, -height, -depth),
  addV( width, -height, -depth),
  addV( width, -height,  depth),
  addV(-width, -height,  depth)
];
edges.push([baseCorners[0], baseCorners[1]], [baseCorners[1], baseCorners[2]], [baseCorners[2], baseCorners[3]], [baseCorners[3], baseCorners[0]]);

// Floor Joists (run along width)
const numJoists = 8;
const joistZStep = (depth * 2) / (numJoists + 1);
for (let i = 1; i <= numJoists; i++) {
  const z = -depth + i * joistZStep;
  const j1 = addV(-width, -height, z);
  const j2 = addV(width, -height, z);
  edges.push([j1, j2]);
}

// 2. TOP PLATES & ROOF PEAK
const topCorners = [
  addV(-width, height, -depth),
  addV( width, height, -depth),
  addV( width, height,  depth),
  addV(-width, height,  depth)
];
edges.push([topCorners[0], topCorners[1]], [topCorners[1], topCorners[2]], [topCorners[2], topCorners[3]], [topCorners[3], topCorners[0]]);

const peakFront = addV(0, roofHeight, -depth);
const peakBack = addV(0, roofHeight, depth);
edges.push([peakFront, peakBack]);

// Connect corners
for (let i = 0; i < 4; i++) edges.push([baseCorners[i], topCorners[i]]);

// Gable ends
edges.push([topCorners[0], peakFront], [topCorners[1], peakFront]);
edges.push([topCorners[3], peakBack], [topCorners[2], peakBack]);

// 3. WALL STUDS (Vertical framing)
const numStuds = 6;
const studZStep = (depth * 2) / (numStuds + 1);
for (let i = 1; i <= numStuds; i++) {
  const z = -depth + i * studZStep;
  // Left wall studs
  const stL1 = addV(-width, -height, z);
  const stL2 = addV(-width, height, z);
  edges.push([stL1, stL2]);
  
  // Right wall studs
  const stR1 = addV(width, -height, z);
  const stR2 = addV(width, height, z);
  if (i !== 3 && i !== 4) { // Leave a gap for a door on the right side
    edges.push([stR1, stR2]);
  }
}

// 4. ROOF RAFTERS
const numRafters = 8;
const rafterZStep = (depth * 2) / (numRafters + 1);
for (let i = 1; i <= numRafters; i++) {
  const z = -depth + i * rafterZStep;
  
  const rafPeak = addV(0, roofHeight, z);
  const rafL = addV(-width, height, z);
  const rafR = addV(width, height, z);
  
  edges.push([rafL, rafPeak], [rafR, rafPeak]);
}

// 5. WINDOW AND DOOR FRAMING (Front and Right)
// Front Window
const fx1 = -0.6, fx2 = 0.6, fy1 = -0.2, fy2 = 0.5;
const fw1 = addV(fx1, fy1, -depth);
const fw2 = addV(fx2, fy1, -depth);
const fw3 = addV(fx2, fy2, -depth);
const fw4 = addV(fx1, fy2, -depth);
edges.push([fw1, fw2], [fw2, fw3], [fw3, fw4], [fw4, fw1]);
edges.push([addV((fx1+fx2)/2, fy1, -depth), addV((fx1+fx2)/2, fy2, -depth)]); // Mullion
edges.push([addV(fx1, (fy1+fy2)/2, -depth), addV(fx2, (fy1+fy2)/2, -depth)]); // Transom

// Side Door (Right side)
const dz1 = -0.2, dz2 = 0.6, dy2 = 0.7; // dy1 is floor (-height)
const d1 = addV(width, -height, dz1);
const d2 = addV(width, dy2, dz1);
const d3 = addV(width, dy2, dz2);
const d4 = addV(width, -height, dz2);
edges.push([d1, d2], [d2, d3], [d3, d4]); // No bottom edge for door

const scale = 140; 
const angleX = Math.PI / 6; // Isometric pitch (30 degrees)

function project(v: Vertex, rotY: number) {
  const [x, y, z] = v;
  // Rotate around Y-axis
  const rx = x * Math.cos(rotY) - z * Math.sin(rotY);
  const rz = x * Math.sin(rotY) + z * Math.cos(rotY);
  // Rotate around X-axis for isometric tilt
  const ry = y * Math.cos(angleX) - rz * Math.sin(angleX);
  // Return screen coordinates (Y is inverted in screen space)
  return { x: rx * scale, y: -ry * scale };
}

export default function AnimatedHouseBlueprint() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  
  const [angleY, setAngleY] = useState(-Math.PI / 4);
  const lineControls = useAnimation();
  const pointControls = useAnimation();

  useEffect(() => {
    if (!isInView) return;

    const sequence = async () => {
      // 1. Initial slight delay
      await new Promise(r => setTimeout(r, 400));

      // 2. Vertices appear in 3D space quickly
      await pointControls.start(i => ({
        opacity: [0, 1, 0.4],
        scale: [0, 1.2, 0.8],
        transition: { delay: (i % 10) * 0.05, duration: 0.3, ease: "easeOut" }
      }));

      // 3. Edges draw to connect structural points rapidly
      await lineControls.start(i => ({
        pathLength: 1,
        opacity: [0, 1, 0.8],
        transition: { delay: (i % 20) * 0.08, duration: 0.8, ease: "easeInOut" }
      }));

      // 4. Slight pause fully assembled
      await new Promise(r => setTimeout(r, 500));

      // 5. Cinematic slow rotation easing into final view
      animate(-Math.PI / 4, -Math.PI / 4 - Math.PI * 2, {
        duration: 8,
        ease: [0.25, 1, 0.5, 1], // Cinematic ease out
        onUpdate: (v) => setAngleY(v),
      });
    };

    sequence();
  }, [isInView, lineControls, pointControls]);

  const projected = rawVertices.map(v => project(v, angleY));

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[600px] bg-[#0a0a0a] flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
    >
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Center ambient glow */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* SVG Container structured with a viewBox for responsive absolute positioning */}
      <svg 
        viewBox="-400 -300 800 600" 
        className="absolute inset-0 w-full h-full z-10 overflow-visible"
      >
        <g transform="translate(0, 30)">
          {edges.map(([i, j], idx) => {
            const p1 = projected[i];
            const p2 = projected[j];
            return (
              <motion.path
                key={`edge-${idx}`}
                d={`M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`}
                stroke="#38bdf8" // Brighter electric cyan/blue
                strokeWidth={idx < 12 ? "2" : "0.75"} // Thicker main frame
                custom={idx}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={lineControls}
                className="drop-shadow-[0_0_5px_rgba(56,189,248,0.4)]"
                strokeLinecap="round"
              />
            );
          })}
          
          {projected.map((p, i) => (
            i % 2 === 0 && ( // Draw fewer points to prevent clutter in dense frame
              <motion.circle
                key={`point-${i}`}
                cx={p.x} cy={p.y} r={1.5}
                fill="#e0f2fe"
                custom={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={pointControls}
                className="drop-shadow-[0_0_4px_rgba(224,242,254,0.8)]"
              />
            )
          ))}
        </g>
      </svg>
    </div>
  );
}
