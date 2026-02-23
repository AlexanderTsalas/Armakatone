"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-outfit font-bold text-white mb-6">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">Integrity.</span>
            </h1>
            <p className="text-xl text-zinc-400 font-light leading-relaxed">
              Armakat is a collective of visionary engineers, architects, and builders. We don&apos;t just construct spaces; we engineer the backdrop of modern life with an obsessive attention to structural integrity and design.
            </p>
          </motion.div>
        </div>

        {/* Narrative / Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] rounded-2xl bg-zinc-900 border border-white/10 overflow-hidden relative"
          >
            {/* Mock Image via CSS Gradient & Texture */}
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-950" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-30 mix-blend-overlay" />
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-[#050505]/60 backdrop-blur-md border border-white/10">
              <p className="text-white font-medium">Athens Headquarters</p>
              <p className="text-zinc-400 text-sm">Est. 2005</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-outfit font-bold text-white mb-4">Our Philosophy</h3>
              <p className="text-zinc-400 leading-relaxed font-light">
                We believe that the built environment dictates the quality of human experience. Every structural calculation and material selection is made with the end-user in mind. We build to last, but more importantly, we build to inspire.
              </p>
            </div>
            
            <div className="h-[1px] w-full bg-white/10" />

            <div>
              <h3 className="text-2xl font-outfit font-bold text-white mb-4">Uncompromising Standards</h3>
              <p className="text-zinc-400 leading-relaxed font-light">
                From luxury residential villas to heavy commercial infrastructure, our standards remain static—absolute perfection. Our team leverages BIM technology and modern materials to eliminate errors and predict lifecycle performance.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
              <div>
                <p className="text-4xl font-outfit font-bold text-white">20+</p>
                <p className="text-zinc-500 text-sm mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-outfit font-bold text-white">150+</p>
                <p className="text-zinc-500 text-sm mt-1">Projects Delivered</p>
              </div>
              <div>
                <p className="text-4xl font-outfit font-bold text-white">40+</p>
                <p className="text-zinc-500 text-sm mt-1">Engineering Experts</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
