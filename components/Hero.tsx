"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Squares = dynamic(() => import("./Squares"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Animated Squares Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Squares
          speed={0.12}
          squareSize={40}
          direction='diagonal'
          borderColor='#1d1a23'
          hoverFillColor='#302c2c'
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20 pointer-events-none">
        <div
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 animate-[hero-fade-in_0.8s_both]"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">
            Engineering the Future
          </span>
        </div>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-outfit font-bold tracking-tight text-white max-w-5xl leading-[1.1]"
        >
          Visionary Design.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">
            Flawless Execution.
          </span>
        </h1>

        <p
          className="mt-8 text-lg md:text-xl text-zinc-400 max-w-2xl font-light"
        >
          Armakat is a premier Greek construction and engineering firm, specializing in delivering sophisticated, high-performance residential and commercial spaces.
        </p>

        <div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pointer-events-auto animate-[hero-fade-in_0.8s_0.4s_both]"
        >
          <Link
            href="/contact"
            className="group flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/projects"
            className="group flex items-center justify-center px-8 py-4 bg-transparent text-white border border-white/20 font-medium rounded-full hover:bg-white/5 transition-all w-full sm:w-auto"
          >
            <span>View Portfolio</span>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none animate-[hero-fade-in_1s_1.2s_both]"
      >
        <span className="text-xs text-zinc-400 uppercase tracking-widest mb-2 font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-[50%] bg-white animate-[scroll-indicator_1.5s_linear_infinite]"
          />
        </div>
      </div>
    </section>
  );
}
