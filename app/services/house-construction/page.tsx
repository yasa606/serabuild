// app/services/house-construction/page.tsx
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle2,
  Building2,
  Layers,
  Ruler,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import Disclaimer from "@/components/shared/disclaimer";

export const metadata = {
  title: "House Construction Addis Ababa | Full-Cycle Structural Specification",
  description:
    "Comprehensive engineering brief modeling residential house construction, C-25 concrete framing, site preparation guidelines, and structural masonry configurations in Addis Ababa.",
};

const technicalConstructionScope = {
  title: "House Construction Services",
  keyword: "house construction Addis Ababa",
  phases: [
    {
      step: "01",
      name: "Substructure Earthworks & Excavation",
      description:
        "Rigorous site surveying, soil grading adjustments, bulk excavation, and laying down optimized mass-reinforced concrete blinding footings.",
    },
    {
      step: "02",
      name: "Reinforced Concrete Frame Casting",
      description:
        "Erecting structural formwork and pouring high-tolerance Class C-25 monolithic concrete column networks, primary beam systems, and floor slabs.",
    },
    {
      step: "03",
      name: "Superstructure Wall & Infill Masonry",
      description:
        "Laying down precision lightweight hollow concrete blocks (HCB) with double-layer plaster coatings to establish secure, weather-tight external walls.",
    },
    {
      step: "04",
      name: "Envelope Utility Sealing & Handover Prep",
      description:
        "Installing structural perimeter wall closures, applying high-performance external plastering, and prepping interior surfaces for turnkey finishing.",
    },
  ],
  logistics: [
    "Full compliance modeling for Addis Ababa municipal residential zoning parameters.",
    "Raw substance procurement tracking aligned with local material cost indexes.",
    "Strict implementation of heavy engineering shoring and standard site safety protocols.",
  ],
};

export default function HouseConstructionDetailedPage() {
  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen pb-24">
      {/* 1. TECHNICAL HEADLINE CONTROLLER HEADER */}
      <section className="relative w-full bg-[#0F172A] pt-12 pb-16 border-b border-[#E2E8F0]/10 overflow-hidden">
        {/* Subtle engineering blueprint grid line accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#64748B] hover:text-[#D4A72C] transition-colors mb-6 group"
          >
            <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />{" "}
            Back to Services Hub
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8">
              <span className="block text-xs font-bold uppercase tracking-widest text-[#64748B] mb-2 font-mono">
                Operational Framework &bull; Matrix 01
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-[0.95]">
                House Construction{" "}
                <span className="text-[#D4A72C]">Addis Ababa.</span>
              </h1>
              <div className="mt-4 flex items-center">
                <span className="text-[10px] font-mono text-[#64748B] bg-[#1E293B] px-2 py-0.5 border border-[#E2E8F0]/10">
                  Target SEO Parameter: {technicalConstructionScope.keyword}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1E293B] border border-[#E2E8F0]/10 text-[#D4A72C] text-xs font-mono">
                <Building2 className="h-3.5 w-3.5" /> Full-Cycle Structural
                Blueprint
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRIGHT HIGH-EXPOSURE SHARP IMAGERY CASE FRAME */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-30">
        <div className="relative w-full h-[320px] sm:h-[450px] lg:h-[520px] border-4 sm:border-8 border-[#D4A72C] shadow-2xl bg-[#1E293B] overflow-hidden">
          <Image
            src="/images/house_construction.png" // Links directly to your public image folder asset
            alt="Residential house construction Addis Ababa reinforced framework site delivery visualization"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* 3. CORE TECHNICAL PROGRESS MATRIX TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN (7 Columns): Systematic Structural Phased Workflow */}
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-white border border-[#E2E8F0] p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg font-black uppercase tracking-tight text-[#0F172A] border-b border-[#E2E8F0] pb-3 mb-6 flex items-center gap-2">
              <Layers className="h-4 w-4 text-[#D4A72C]" /> Structural Staging
              Milestones
            </h2>

            {/* Sequential Steps Mapping */}
            <div className="space-y-6">
              {technicalConstructionScope.phases.map((phase) => (
                <div
                  key={phase.step}
                  className="flex gap-4 p-4 bg-[#F8FAFC] border border-[#E2E8F0] relative group"
                >
                  <div className="text-xl font-black text-[#D4A72C] font-mono leading-none">
                    {phase.step}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-tight text-[#0F172A]">
                      {phase.name}
                    </h3>
                    <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Disclaimer message="Simulation Directive: Construction processes, material compositions, and workflow stages detailed here are structured solely to showcase localized engineering project management capabilities." />
        </div>

        {/* RIGHT COLUMN (5 Columns): Site Controls & Estimation Directives */}
        <div className="lg:col-span-5 space-y-6">
          {/* Engineering Logistics Block */}
          <div className="bg-white border border-[#E2E8F0] p-6 sm:p-8 shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#0F172A] flex items-center gap-2 mb-4 pb-2 border-b border-[#E2E8F0]">
              <Ruler className="h-4 w-4 text-[#D4A72C]" /> Rigorous Site Staging
              Controls
            </h3>
            <ul className="space-y-3">
              {technicalConstructionScope.logistics.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-[#111827] leading-relaxed"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#D4A72C] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Hub Integration Panel */}
          <div className="bg-[#1E293B] border-2 border-[#D4A72C] p-6 sm:p-8 text-white shadow-xl relative">
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 h-3 w-3 border-b border-l border-[#D4A72C]/30 bg-[#0F172A]"
            />

            <h3 className="text-xs font-black uppercase tracking-widest text-[#64748B] flex items-center gap-2 mb-3">
              <ShieldAlert className="h-4 w-4 text-[#D4A72C]" /> Logistical
              Budget Modeling
            </h3>

            <p className="text-sm text-[#E2E8F0] leading-relaxed">
              Every new residential build requires a clear understanding of site
              grading, foundation footprints, and concrete quantities. Use our
              layout tools to analyze your structure's specific requirements.
            </p>

            <div className="mt-4 p-3 bg-[#0F172A] border border-[#E2E8F0]/10">
              <p className="text-[10px] font-mono text-[#64748B] leading-relaxed">
                <strong>Illustrative Parameter:</strong> Core structural quotes
                vary dynamically based on volatile regional cement access, steel
                reinforcement bar supply strings, and local transit parameters.
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/request-quote"
                className="inline-flex h-11 items-center justify-center bg-[#D4A72C] text-white hover:bg-[#b88e21] w-full text-center text-[10px] font-black uppercase tracking-widest transition-all duration-300 gap-2"
              >
                Request Quote Model <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
