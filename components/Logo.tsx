"use client";

import { motion } from "framer-motion";

export default function Logo() {
  return (
    <svg 
      width="48" 
      height="48" 
      viewBox="0 0 512 512" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className="w-10 h-10 md:w-12 md:h-12"
    >
      <defs>
        <linearGradient id="AK_gradient_h" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#a1a1aa" />
        </linearGradient>
        <linearGradient id="AK_accent_h" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5eead4" />
          <stop offset="100%" stopColor="#0d9488" />
        </linearGradient>
      </defs>

      <motion.rect 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        width="512" height="512" rx="128" fill="#050505" 
      />
      
      <g transform="translate(106, 106)">
        <motion.path 
          initial={{ pathLength: 0, fillOpacity: 0 }}
          animate={{ pathLength: 1, fillOpacity: 1 }}
          transition={{ 
            pathLength: { duration: 1.5, ease: "easeInOut" },
            fillOpacity: { duration: 1, delay: 1 } 
          }}
          d="M150 40 L50 260 L90 260 L125 180 L175 180 L210 260 L250 260 Z" 
          fill="url(#AK_gradient_h)" 
          stroke="url(#AK_gradient_h)"
          strokeWidth="4"
        />
        <motion.rect 
           initial={{ scaleX: 0 }}
           animate={{ scaleX: 1 }}
           transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
           x="110" y="200" width="80" height="20" fill="url(#AK_accent_h)" 
           style={{ transformOrigin: "left" }}
        />
        
        <motion.rect 
           initial={{ scaleY: 0 }}
           animate={{ scaleY: 1 }}
           transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
           x="230" y="40" width="30" height="220" fill="url(#AK_gradient_h)" 
           style={{ transformOrigin: "top" }}
        />
        <motion.path 
          initial={{ pathLength: 0, fillOpacity: 0 }}
          animate={{ pathLength: 1, fillOpacity: 1 }}
          transition={{ 
            pathLength: { duration: 1.5, delay: 0.8, ease: "easeInOut" },
            fillOpacity: { duration: 1, delay: 1.5 } 
          }}
          d="M260 140 L330 40 L370 40 L280 160 Z" 
          fill="url(#AK_gradient_h)" 
          stroke="url(#AK_gradient_h)"
          strokeWidth="4"
        />
        <motion.path 
          initial={{ pathLength: 0, fillOpacity: 0 }}
          animate={{ pathLength: 1, fillOpacity: 1 }}
          transition={{ 
            pathLength: { duration: 1.5, delay: 1.2, ease: "easeInOut" },
            fillOpacity: { duration: 1, delay: 2 } 
          }}
          d="M272 150 L370 260 L320 260 L242 170 Z" 
          fill="url(#AK_accent_h)" 
          stroke="url(#AK_accent_h)"
          strokeWidth="4"
        />
      </g>
    </svg>
  );
}
