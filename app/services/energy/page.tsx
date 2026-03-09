import { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Energy Autonomy | ArmakatOne",
  description: "Designing net-zero, self-sustaining buildings with solar, thermal, and passive energy systems.",
};

const visual = (
  <div className="absolute inset-0 overflow-hidden bg-[#080400]">
    <div className="absolute w-[500px] h-[500px] bg-amber-500/15 blur-[160px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    <svg viewBox="0 0 400 600" className="absolute inset-0 w-full h-full opacity-20" fill="none" stroke="#fbbf24" strokeWidth="0.4">
      {/* Solar panel grid */}
      {[...Array(4)].map((_, row) =>
        [...Array(5)].map((_, col) => (
          <rect key={`${row}-${col}`} x={col * 70 + 25} y={row * 50 + 60} width="58" height="38" strokeWidth="0.5" />
        ))
      )}
      {/* Energy flow lines */}
      {[120, 200, 280].map(x => (
        <line key={x} x1={x} y1="270" x2={200} y2="420" strokeDasharray="4 6" strokeWidth="0.6" />
      ))}
      {/* Central hub */}
      <circle cx="200" cy="440" r="30" strokeWidth="1" />
      {/* Distribution lines */}
      <line x1="200" y1="470" x2="100" y2="560" strokeDasharray="3 5" />
      <line x1="200" y1="470" x2="200" y2="570" strokeDasharray="3 5" />
      <line x1="200" y1="470" x2="300" y2="560" strokeDasharray="3 5" />
    </svg>
  </div>
);

export default function EnergyPage() {
  return (
    <ServiceDetailPage
      data={{
        id: "03",
        title: "Energy Autonomy",
        tagline: "Buildings that generate, store, and manage their own energy. We engineer structures that are as intelligent as they are beautiful.",
        description: "Energy Autonomy is not a feature added at the end — it is an architectural philosophy woven into our design process from day one. ArmakatOne integrates photovoltaic systems, passive design principles, thermal mass calculation, and smart energy management into a unified engineering solution that minimizes grid dependence and maximizes long-term building performance.",
        accentColor: "amber",
        accentHex: "#f59e0b",
        category: "Energy Systems",
        deliverables: [
          "Energy Performance Certificate (EPC) & Compliance Report",
          "Photovoltaic & Battery Storage System Design",
          "Passive Design Strategy (orientation, thermal mass, shading)",
          "HVAC System Specification for Low-Energy Operation",
          "Building Energy Simulation Model",
          "Net-Zero Roadmap with Payback Analysis",
          "Smart Energy Management System Integration",
        ],
        process: [
          { title: "Energy Audit / Baseline", body: "For existing buildings, we establish an energy baseline. For new builds, we run climate, orientation, and occupancy simulations to set targets." },
          { title: "Passive Strategy", body: "Form, glazing ratios, thermal mass, and shading are optimized for the site's climate before any active system is specified." },
          { title: "Active System Design", body: "PV array sizing, battery bank specification, and HVAC selection are calculated to meet the residual energy demand after passive measures." },
          { title: "Grid Interaction Planning", body: "We model grid export, feed-in tariff opportunities, and emergency fallback scenarios for regulatory and financial optimization." },
          { title: "Smart Controls Integration", body: "Energy management controllers, monitoring dashboards, and demand-response algorithms are specified and coordinated with the BMS." },
          { title: "Commissioning & Certification", body: "All installed systems are verified against design targets. We prepare EPC, LEED, or BREEAM documentation as required." },
        ],
        benefits: [
          "Net-zero capable buildings command premium values on sale and rental markets across European markets.",
          "Energy payback analysis typically returns PV investment within 5–8 years under Greek solar irradiance conditions.",
          "Passive design strategies reduce HVAC peak loads by 25–40%, shrinking equipment sizes and capital cost.",
          "Battery storage buffers peak demand charges and provides resilience during grid outages.",
          "Smart energy management systems can be updated remotely, ensuring optimal performance as tariffs evolve.",
          "LEED, BREEAM, and near-zero energy building (nZEB) certification unlocks green financing and grants.",
        ],
        Visual: visual,
      }}
    />
  );
}
