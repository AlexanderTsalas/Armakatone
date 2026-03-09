import { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Studies & Design | ArmakatOne",
  description: "Comprehensive architectural, structural, and MEP studies crafted with precision before a single brick is laid.",
};

const visual = (
  <div className="absolute inset-0 overflow-hidden bg-[#020a0c]">
    <div className="absolute w-full h-full opacity-15">
      <svg viewBox="0 0 400 600" className="w-full h-full" fill="none" stroke="#22d3ee" strokeWidth="0.3">
        <pattern id="sdgrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" />
        </pattern>
        <rect width="400" height="600" fill="url(#sdgrid)" />
        <line x1="40" y1="0" x2="40" y2="600" strokeDasharray="4 8" opacity="0.5" />
        <line x1="360" y1="0" x2="360" y2="600" strokeDasharray="4 8" opacity="0.5" />
        <rect x="80" y="180" width="240" height="200" strokeWidth="1" />
        <path d="M 40 180 L 200 80 L 360 180" strokeWidth="1.5" />
        <line x1="80" y1="400" x2="80" y2="420" />
        <line x1="320" y1="400" x2="320" y2="420" />
        <line x1="40" y1="410" x2="360" y2="410" />
        {[110, 165, 215, 270].map(x => (
          <rect key={x} x={x} y="230" width="40" height="50" strokeWidth="0.8" />
        ))}
        <rect x="155" y="330" width="90" height="70" strokeWidth="1.2" />
      </svg>
    </div>
    <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#020a0c] to-transparent" />
  </div>
);

export default function StudiesPage() {
  return (
    <ServiceDetailPage
      data={{
        id: "01",
        title: "Studies & Design",
        tagline: "From first sketch to final schematics — we engineer the complete picture before a single cubic metre of concrete is poured.",
        description: "Our Studies & Design discipline is the intellectual backbone of every ArmakatOne project. We generate comprehensive architectural drawings, structural calculations, MEP schematics, and energy models that serve as the single source of truth for the entire build team. Nothing moves forward without a document that proves it.",
        accentColor: "cyan",
        accentHex: "#22d3ee",
        category: "Architecture & Engineering",
        deliverables: [
          "Architectural Floor Plans, Sections & Elevations",
          "3D Building Information Models (BIM / Revit)",
          "Structural Calculation Reports",
          "MEP (Mechanical, Electrical, Plumbing) Schematics",
          "Energy Efficiency Analysis & LEED Documentation",
          "Topographic Survey Integration",
          "Permit & Regulatory Submission Packages",
        ],
        process: [
          { title: "Site Analysis", body: "We assess orientation, topography, solar exposure, neighbour constraints, and local regulation before a single line is drawn." },
          { title: "Brief Development", body: "Through deep client discovery sessions, we translate vision into a precise architectural brief with measurable performance targets." },
          { title: "Concept Design", body: "Multiple spatial concepts are presented as massing models and hand-drawn sketches, then shortlisted through client workshops." },
          { title: "Schematic Design", body: "The approved concept evolves into detailed floor plans, sections, and elevations across all building systems." },
          { title: "Technical Development", body: "Full structural, MEP, and energy calculations are completed and cross-checked against the architectural set for zero-conflict integration." },
          { title: "Permit Package", body: "We prepare and submit complete permit documentation, managing authority correspondence until approval is granted." },
        ],
        benefits: [
          "Errors caught on paper cost a fraction of errors caught on site — our documentation eliminates both.",
          "Integrated BIM means architects, engineers, and contractors all work from a single live model, removing version conflicts.",
          "Energy modeling at design stage prevents costly retrofits and secures certification credits from day one.",
          "A precise permit package moves through authority review faster, protecting your programme and budget.",
          "Every drawing carries our engineer's stamp — commercially, legally, and contractually sound.",
          "Our documentation sets become your asset's technical passport, supporting insurance, re-sale, and future works.",
        ],
        Visual: visual,
      }}
    />
  );
}
