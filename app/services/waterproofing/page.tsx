// app/services/waterproofing/page.tsx
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle2,
  DropletOff,
  Layers,
  Ruler,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import Disclaimer from "@/components/shared/disclaimer";

export const metadata = {
  title: "Structural Waterproofing Addis Ababa | Moisture Defense Engineering",
  description:
    "Advanced multi-ply protection parameters engineered to insulate sub-grade foundations, concrete retaining elements, and flat roof decks from demanding seasonal climate shifts in Addis Ababa.",
};

const technicalWaterproofingScope = {
  title: "Waterproofing Systems",
  keyword: "waterproofing Addis Ababa",
  phases: [
    {
      step: "01",
      name: "Substrate Assessment & Surface Curing",
      description:
        "Inspecting core concrete matrices for capillary tracking, clearing physical debris, and repairing micro-fissures using advanced high-strength cementitious mortars.",
    },
    {
      step: "02",
      name: "Bituminous Primer & Base Coat Application",
      description:
        "Applying high-penetration cold bituminous primers to seal open concrete pores and maximize adhesion tolerances before installing structural protection membranes.",
    },
    {
      step: "03",
      name: "Torch-Applied SBS Elastomeric Membrane Fusion",
      description:
        "Fusing premium 4mm-thick styrene-butadiene-styrene modified asphalt membranes with precise 10cm side-laps to form a continuous, flexible sub-grade moisture shield.",
    },
    {
      step: "04",
      name: "Drainage Board Placement & Flood Testing",
      description:
        "Installing dimpled polyethylene protection sheets to channel lateral groundwater away, followed by controlled 24-hour flood isolation testing protocols.",
    },
  ],
  logistics: [
    "Formulated to withstand intensive heavy regional seasonal moisture infiltration parameters.",
    "Membrane selections optimized to counter local soil acidity and biochemical degradation factors.",
    "Integrated flashing seals targeted around high-vulnerability utility piping entries and structural expansion junctions.",
  ],
};

export default function WaterproofingDetailedPage() {
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
                Operational Framework &bull; Matrix 03
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-[0.95]">
                Waterproofing{" "}
                <span className="text-[#D4A72C]">Addis Ababa.</span>
              </h1>
              <div className="mt-4 flex items-center">
                <span className="text-[10px] font-mono text-[#64748B] bg-[#1E293B] px-2 py-0.5 border border-[#E2E8F0]/10">
                  Target SEO Parameter: {technicalWaterproofingScope.keyword}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1E293B] border border-[#E2E8F0]/10 text-[#D4A72C] text-xs font-mono">
                <DropletOff className="h-3.5 w-3.5" /> Advanced Moisture
                Isolation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRIGHT HIGH-EXPOSURE SHARP IMAGERY CASE FRAME */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-30">
        <div className="relative w-full h-[320px] sm:h-[450px] lg:h-[520px] border-4 sm:border-8 border-[#D4A72C] shadow-2xl bg-[#1E293B] overflow-hidden">
          <Image
            src="/images/proofing.png" // Links directly to your public image folder asset
            alt="Structural waterproofing Addis Ababa moisture barrier insulation membrane visualization"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* 3. CORE TECHNICAL PROGRESS MATRIX TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN (7 Columns): Systematic Structural Waterproofing Workflow */}
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-white border border-[#E2E8F0] p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg font-black uppercase tracking-tight text-[#0F172A] border-b border-[#E2E8F0] pb-3 mb-6 flex items-center gap-2">
              <Layers className="h-4 w-4 text-[#D4A72C]" /> Engineering Protocol
              Sequence
            </h2>

            {/* Sequential Steps Mapping */}
            <div className="space-y-6">
              {technicalWaterproofingScope.phases.map((phase) => (
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

          <Disclaimer message="Simulation Directive: Protective layers, application steps, and substance properties detailed here are structured solely to exhibit localized structural envelope protection competencies." />
        </div>

        {/* RIGHT COLUMN (5 Columns): Environmental Controls & Estimation Directives */}
        <div className="lg:col-span-5 space-y-6">
          {/* Engineering Logistics Block */}
          <div className="bg-white border border-[#E2E8F0] p-6 sm:p-8 shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#0F172A] flex items-center gap-2 mb-4 pb-2 border-b border-[#E2E8F0]">
              <Ruler className="h-4 w-4 text-[#D4A72C]" /> Capillary Moisture
              Controls
            </h3>
            <ul className="space-y-3">
              {technicalWaterproofingScope.logistics.map((item, idx) => (
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
              <ShieldAlert className="h-4 w-4 text-[#D4A72C]" /> Defensive
              Envelope Calculations
            </h3>

            <p className="text-sm text-[#E2E8F0] leading-relaxed">
              Every moisture isolation scope requires precise assessment of
              total sub-grade retaining areas, surface exposure levels, and
              membrane material tolerances. Activate our tool parameters to map
              your target scope.
            </p>

            <div className="mt-4 p-3 bg-[#0F172A] border border-[#E2E8F0]/10">
              <p className="text-[10px] font-mono text-[#64748B] leading-relaxed">
                <strong>Illustrative Parameter:</strong> Specialized chemical
                insulation and torch-fusion installation estimates vary based on
                structural configuration metrics and material import supply
                paths.
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
