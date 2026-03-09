import { Metadata } from "next";
import Header from "@/components/Header";

import ServicesIndex from "@/components/ServicesIndex";

export const metadata: Metadata = {
  title: "Services | ArmakatOne",
  description: "Explore our comprehensive suite of structural engineering, architectural design, and modern construction services.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-[#050505] pt-32">
        {/* Ambient Noise / Grain Layer */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: "url('/noise.png')" }} />

        {/* Core Animated Layout */}
        <ServicesIndex />

      </main>

    </>
  );
}
