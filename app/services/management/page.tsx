import { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Project Management | Armakat",
  description: "Total oversight from blueprint to handover. Orchestrating complex construction projects with precision and accountability.",
};

const visual = (
  <div className="absolute inset-0 overflow-hidden bg-[#050508]">
    <div className="absolute w-[400px] h-[400px] bg-violet-500/10 blur-[140px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    <svg viewBox="0 0 400 600" className="absolute inset-0 w-full h-full opacity-20" fill="none" stroke="#818cf8" strokeWidth="0.5">
      {/* Gantt chart abstraction */}
      {[
        { y: 120, x: 40, w: 140 },
        { y: 180, x: 80, w: 100 },
        { y: 240, x: 60, w: 180 },
        { y: 300, x: 120, w: 120 },
        { y: 360, x: 90, w: 200 },
        { y: 420, x: 160, w: 120 },
        { y: 480, x: 130, w: 180 },
      ].map(({ y, x, w }, i) => (
        <g key={i}>
          <line x1="40" y1={y} x2="360" y2={y} strokeOpacity="0.2" />
          <rect x={x} y={y - 14} width={w} height="20" strokeWidth="0.8" />
          <circle cx={x} cy={y} r="3" fill="#818cf8" fillOpacity="0.4" />
          <circle cx={x + w} cy={y} r="3" fill="#818cf8" fillOpacity="0.4" />
        </g>
      ))}
      {/* Vertical time axis */}
      <line x1="40" y1="100" x2="40" y2="500" strokeWidth="1" />
      {[...Array(5)].map((_, i) => (
        <line key={i} x1="35" y1={100 + i * 100} x2="45" y2={100 + i * 100} />
      ))}
    </svg>
  </div>
);

export default function ManagementPage() {
  return (
    <ServiceDetailPage
      data={{
        id: "04",
        title: "Project Management",
        tagline: "Complex projects demand total command. We orchestrate every contractor, budget line, and milestone from inception to handover.",
        description: "Armakat's project management service provides clients with a dedicated construction professional at the helm from day one. We sit client-side, managing principal contractors, design consultants, authorities, and supply chains through a structured programme that protects budget, quality, and time simultaneously.",
        accentColor: "violet",
        accentHex: "#818cf8",
        category: "PM & Oversight",
        deliverables: [
          "Master Works Programme (Gantt & Critical Path)",
          "Risk Register & Mitigation Plan",
          "Weekly Progress Reports with Earned Value Analysis",
          "Budget Tracker with Variation Control",
          "Contractor Procurement & Tender Evaluation",
          "Quality Management Plan & Inspection Register",
          "Change Management Log & Client Decision Register",
        ],
        process: [
          { title: "Project Initiation", body: "We establish the project charter, governance structure, and baseline cost and programme against which all future performance is measured." },
          { title: "Design Coordination", body: "Design team meetings are chaired weekly. We track design deliverables against programme, manage RFI logs, and enforce consultant deliverable dates." },
          { title: "Procurement", body: "Tender packages, contractor prequalification, bid evaluation, and contract execution are managed end-to-end with full audit trails." },
          { title: "Construction Oversight", body: "Site visits, progress valuations, instruction issuance, and quality audits are performed on a structured schedule with formal records." },
          { title: "Variation Control", body: "Every change is assessed for programme and cost impact before client sign-off. Nothing proceeds unilaterally." },
          { title: "Handover & Closeout", body: "Snag lists are issued and tracks closed. O&M manuals, warranties, and as-built documents are compiled into a complete handover package." },
        ],
        benefits: [
          "Independent oversight protects client interests in every contractor negotiation.",
          "Earned value tracking identifies schedule and cost deviations weeks before they become crises.",
          "Structured variation control eliminates the surprise cost overruns that derail most construction projects.",
          "A single professional interface for all project stakeholders removes communication bottlenecks exponentially.",
          "Weekly board-ready reporting keeps decision-makers informed without requiring construction expertise.",
          "Full document control creates an audit-ready record that protects against disputes and defect claims.",
        ],
        Visual: visual,
      }}
    />
  );
}
