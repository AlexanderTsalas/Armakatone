import { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "BIM Integration | ArmakatOne",
  description: "3D Building Information Modeling to eliminate design clashes, save cost, and deliver a complete digital twin of your asset.",
};

const visual = (
  <div className="absolute inset-0 overflow-hidden bg-[#020c08]">
    <div className="absolute w-[450px] h-[450px] bg-emerald-500/10 blur-[150px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    <svg viewBox="0 0 400 600" className="absolute inset-0 w-full h-full opacity-20" fill="none" stroke="#34d399" strokeWidth="0.5">
      {/* 3D isometric box perspective */}
      <polygon points="200,80 340,160 340,380 200,460 60,380 60,160" strokeWidth="1" />
      {/* Inner horizontal planes */}
      <line x1="60" y1="220" x2="340" y2="220" strokeDasharray="4 6" />
      <line x1="60" y1="300" x2="340" y2="300" strokeDasharray="4 6" />
      {/* Vertical edge lines */}
      <line x1="200" y1="80" x2="200" y2="460" strokeDasharray="3 8" />
      {/* Cross diagonals */}
      <line x1="60" y1="160" x2="340" y2="380" strokeOpacity="0.3" />
      <line x1="340" y1="160" x2="60" y2="380" strokeOpacity="0.3" />
      {/* Dimension marks */}
      <line x1="40" y1="160" x2="40" y2="380" />
      <line x1="35" y1="160" x2="45" y2="160" />
      <line x1="35" y1="380" x2="45" y2="380" />
      <circle cx="200" cy="270" r="6" strokeWidth="1" />
    </svg>
  </div>
);

export default function BIMPage() {
  return (
    <ServiceDetailPage
      data={{
        id: "05",
        title: "BIM Integration",
        tagline: "We model every duct, beam, and fixture in 3D before anything is built — eliminating clashes, waste, and costly site disputes.",
        description: "Building Information Modeling at ArmakatOne is not a visualization tool — it is our primary coordination platform. We build a live, federated 3D model that integrates architectural, structural, and MEP disciplines into a single clash-tested digital twin. Every contractor works from the same model, every change is captured, and the final deliverable is a complete as-built BIM asset for building operations.",
        accentColor: "emerald",
        accentHex: "#34d399",
        category: "Digital Engineering",
        deliverables: [
          "Federated Architectural, Structural & MEP BIM Model (Revit / IFC)",
          "Clash Detection Reports with Resolution Log",
          "4D Construction Sequencing Animation",
          "5D Cost-Loaded Quantity Extraction",
          "BIM Execution Plan (BEP) & EIR Compliance",
          "As-Built BIM Model Post-Construction",
          "COBie Data for Facilities Management Handover",
        ],
        process: [
          { title: "BIM Strategy", body: "We author the BIM Execution Plan, establishing model structure, LOD requirements, file exchange protocol, and coordination meeting cadence." },
          { title: "Model Origination", body: "Base architectural and structural models are built to BIM Level 2 standard with fully parametric elements for quantity extraction." },
          { title: "MEP Coordination", body: "Mechanical, electrical, and plumbing systems are modeled in 3D and spatially coordinated against structure and architecture." },
          { title: "Clash Detection", body: "Automated interference checks run weekly in Navisworks. All clashes are classified, assigned, and resolved before they reach site." },
          { title: "4D & 5D Extension", body: "Model elements are linked to the construction programme for sequencing animations and cost-loaded for real-time quantity take-off." },
          { title: "As-Built & FM Handover", body: "Post-construction, the model is updated to as-built status. COBie data and O&M information are embedded for facilities management." },
        ],
        benefits: [
          "Clash resolution in the model is 100x cheaper than resolution on site — we eliminate the most expensive mistakes before they happen.",
          "4D sequencing allows all trade contractors to visualize their work zone in time, eliminating site congestion conflicts.",
          "Accurate BIM quantity extraction removes estimating uncertainty and reduces contingency allowances.",
          "A federated model means architects, engineers, and contractors share one truth — version conflicts become a thing of the past.",
          "As-built BIM delivers a digital twin for life-cycle management, reducing FM costs across the asset's operational life.",
          "BIM Level 2 compliance is increasingly mandatory for public sector projects in Europe — we keep you ahead of the requirement.",
        ],
        Visual: visual,
      }}
    />
  );
}
