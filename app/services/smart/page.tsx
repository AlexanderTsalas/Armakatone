import { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Smart Solutions | Armakat",
  description: "Invisible, intelligent building automation embedded into the architecture itself — total command over your environment.",
};

const visual = (
  <div className="absolute inset-0 overflow-hidden bg-[#080408]">
    <div className="absolute w-[400px] h-[400px] bg-rose-500/10 blur-[140px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    <svg viewBox="0 0 400 600" className="absolute inset-0 w-full h-full opacity-25" fill="none" stroke="#fb7185" strokeWidth="0.5">
      {/* Circuit topology */}
      <circle cx="200" cy="300" r="40" strokeWidth="1" />
      <line x1="200" y1="260" x2="200" y2="120" />
      <line x1="200" y1="340" x2="200" y2="480" />
      <line x1="160" y1="300" x2="60" y2="200" />
      <line x1="240" y1="300" x2="340" y2="200" />
      <line x1="160" y1="300" x2="60" y2="400" />
      <line x1="240" y1="300" x2="340" y2="400" />
      {/* Node dots */}
      {[
        [200, 120], [200, 480], [60, 200], [340, 200], [60, 400], [340, 400]
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="10" strokeWidth="0.8" />
      ))}
      {/* Signal rings */}
      <circle cx="200" cy="300" r="70" strokeDasharray="4 8" strokeOpacity="0.4" />
      <circle cx="200" cy="300" r="100" strokeDasharray="4 12" strokeOpacity="0.2" />
    </svg>
  </div>
);

export default function SmartPage() {
  return (
    <ServiceDetailPage
      data={{
        id: "06",
        title: "Smart Solutions",
        tagline: "Architecture that thinks. We embed centralized intelligence into every building we deliver — invisible, effortless, total control.",
        description: "Armakat's Smart Solutions discipline integrates building automation, IoT sensor networks, and centralized control platforms directly into the construction specification. Lighting, HVAC, security, access, and AV systems are unified under a single interface — specified correctly during design so they work seamlessly on day one, not after weeks of post-completion configuration battles.",
        accentColor: "rose",
        accentHex: "#fb7185",
        category: "Building Intelligence",
        deliverables: [
          "BMS (Building Management System) Architecture & Specification",
          "Smart Lighting Design & DALI/KNX Protocol Specification",
          "HVAC Automation & Zone Control Strategy",
          "Access Control & Intruder Detection System Design",
          "CCTV & Security System Specification",
          "AV & Multi-Room Audio System Design",
          "Smart Home App Configuration & User Training",
        ],
        process: [
          { title: "Needs Assessment", body: "We establish which systems require integration, the user automation goals, connectivity infrastructure, and cybersecurity requirements." },
          { title: "Protocol Architecture", body: "The control protocol stack (KNX, DALI, Modbus, BACnet, or IP-based) is selected and documented as part of the MEP specification." },
          { title: "Design & CAD", body: "Schematic control diagrams, panel layouts, and wiring schematics are produced and coordinated against the BIM model for coordination." },
          { title: "Contractor Specification", body: "Detailed tender specifications are authored for each sub-system so that every installer prices and installs to the same documented standard." },
          { title: "Programming & Integration", body: "Logic programming for the BMS, scene settings, automation rules, and third-party system APIs are configured during fit-out." },
          { title: "Commissioning & Training", body: "All systems are independently tested and signed off. Client and facilities staff receive structured training before handover." },
        ],
        benefits: [
          "Specifying smart systems at design stage eliminates expensive retrofit cabling that often costs 3–5x the original installation.",
          "Unified BMS results in 15–25% HVAC energy savings through precise demand-controlled operation.",
          "Automated lighting presence detection and daylight harvesting reduce electricity consumption without compromising comfort.",
          "Integrated security systems with remote monitoring provide real-time asset protection from anywhere in the world.",
          "Smart home technology is a growing premium feature that tangibly increases property value at resale.",
          "Our specifications are control-brand agnostic, keeping you free from vendor lock-in during future upgrades.",
        ],
        Visual: visual,
      }}
    />
  );
}
