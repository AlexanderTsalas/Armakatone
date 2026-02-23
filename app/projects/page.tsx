"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    { title: "Villa Kifisia", category: "Residential", year: "2024", size: "col-span-1 md:col-span-2 row-span-2", height: "h-[600px]" },
    { title: "Athens Tech Hub", category: "Commercial", year: "2023", size: "col-span-1", height: "h-[300px]" },
    { title: "Glyfada Sea View", category: "Renovation", year: "2023", size: "col-span-1", height: "h-[300px]" },
    { title: "Eco Resort Mykonos", category: "Hospitality", year: "2022", size: "col-span-1 md:col-span-2", height: "h-[400px]" },
    { title: "Solar Park Arcadia", category: "Energy", year: "2022", size: "col-span-1 md:col-span-2", height: "h-[400px]" },
    { title: "The Onyx Penthouse", category: "Residential", year: "2021", size: "col-span-1", height: "h-[400px]" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-outfit font-bold text-white mb-6">
              Selected <span className="text-zinc-600">Works</span>
            </h1>
            <p className="text-xl text-zinc-400 font-light max-w-xl">
              A curated selection of our finest architectural and engineering execution.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center space-x-4 pb-2"
          >
            <button className="text-white border-b border-white pb-1 font-medium">All Projects</button>
            <button className="text-zinc-500 hover:text-white transition-colors pb-1 border-b border-transparent hover:border-white/30 font-medium">Residential</button>
            <button className="text-zinc-500 hover:text-white transition-colors pb-1 border-b border-transparent hover:border-white/30 font-medium">Commercial</button>
          </motion.div>
        </div>

        {/* Banto Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 cursor-pointer ${project.size} ${project.height}`}
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-zinc-300 text-sm font-medium mb-2 tracking-wide uppercase">{project.category} · {project.year}</p>
                      <h3 className="text-2xl md:text-3xl font-outfit font-bold text-white">{project.title}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
