import { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Construction | Armakat",
  description: "End-to-end construction execution for premium residential and commercial spaces across Greece and beyond.",
};

const visual = (
  <div className="absolute inset-0 overflow-hidden bg-[#0a0a08]">
    <div className="absolute w-[500px] h-[500px] bg-zinc-500/8 blur-[150px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    <svg viewBox="0 0 400 600" className="absolute inset-0 w-full h-full opacity-15" fill="none" stroke="white" strokeWidth="0.5">
      {[60, 110, 165, 215, 260, 310].map((x, i) => (
        <rect key={i} x={x} y={600 - (i % 2 === 0 ? 350 : 250)} width="40" height={i % 2 === 0 ? 350 : 250} strokeWidth="0.6" />
      ))}
      <line x1="0" y1="580" x2="400" y2="580" strokeWidth="1.5" />
      {[...Array(10)].map((_, i) => (
        <line key={i} x1={0} y1={580 - i * 55} x2={30} y2={580 - i * 55} strokeWidth="0.3" />
      ))}
    </svg>
  </div>
);

export default function ConstructionPage() {
  return (
    <ServiceDetailPage
      data={{
        id: "02",
        title: "Construction",
        tagline: "Precision execution from groundbreaking to key handover. We build every structure as if our name were cast into the foundation.",
        description: "Armakat's construction teams handle end-to-end build management for premium residential, commercial, and industrial projects. We act as the principal contractor responsible for every subcontractor, every schedule, and every inspection — so you deal with one accountable party, not a matrix of trades pointing fingers.",
        accentColor: "zinc",
        accentHex: "#a1a1aa",
        category: "Construction Management",
        deliverables: [
          "Full Principal Contractor Services",
          "Site Establishment & Safety Management Plan",
          "Subcontractor Procurement & Management",
          "Works Programme with Milestone Tracking",
          "Quality Inspection Records at Every Stage",
          "Statutory Inspections & Compliance Certificates",
          "Final Commissioning & Client Handover Pack",
        ],
        process: [
          { title: "Pre-Construction", body: "We finalize the works programme, procure all subcontractors competitively, and establish the site with full safety and logistics plans." },
          { title: "Substructure", body: "Excavation, foundations, and below-slab services are completed with third-party structural inspections at every pour." },
          { title: "Superstructure", body: "Structural frames, slabs, and load-bearing walls rise under daily site supervision with photographic progress records." },
          { title: "Building Envelope", body: "Roofing, cladding, glazing, and waterproofing systems close the building to weather. Thermal envelope performance is measured before fit-out begins." },
          { title: "Fit-Out & Services", body: "MEP rough-in, partitions, floor finishes, joinery, and cabinetry are installed layer by layer against the approved specification." },
          { title: "Commissioning", body: "All building systems are tested, balanced, and commissioned. Defects are snagged and closed before the formal handover event." },
        ],
        benefits: [
          "Single point of accountability — one contract, one programme, one responsible party.",
          "Our procurement network delivers 10–15% cost efficiency over open-market tendering on materials and labour.",
          "Photographic and documented quality records protect your asset and simplify insurance and re-sale.",
          "ISO-aligned site safety management keeps your project off incident registers.",
          "Integrated design-construction teams mean zero translation errors between the drawings and the build.",
          "Milestone-based reporting keeps you informed without requiring you to be on-site daily.",
        ],
        Visual: visual,
      }}
    />
  );
}
