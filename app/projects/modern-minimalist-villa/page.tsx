// app/projects/modern-minimalist-villa/page.tsx
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Maximize2,
  Layers,
  CheckCircle2,
  DollarSign,
  Clock,
  HelpCircle,
} from "lucide-react";
import Disclaimer from "@/components/shared/disclaimer";

export const metadata = {
  title: "Modern Minimalist Villa Specification | SeraBuild Blueprint",
  description:
    "Technical design specifications and structural parameters for a premium 380 SqM single-family villa concept modeled for regional soil parameters in Yeka Sub-City, Addis Ababa.",
};

const conceptSpecs = {
  title: "Modern Minimalist Villa Model",
  slug: "modern-minimalist-villa",
  location: "Yeka Sub-City, Addis Ababa",
  footprint: "380 SqM Total Footprint",
  foundationType: "Monolithic Slab-on-Grade with Reinforced Grade Beams",
  framingMaterial: "High-Strength Post-Tensioned Concrete Suspended Slabs",
  masonryType:
    "Precision Insulated Earth Bricks / Fair-faced Structural Concrete blocks",
  waterproofing:
    "Multi-ply Atactic Polypropylene (APP) Modified Bituminous Membranes",
  estimatedTimeFrame: "12 - 16 Months (Project Simulation Metric)",
  illustrativeBaseBudget:
    "ETB 14,500,000 - 18,500,000 (Varies based on volatile local material margins)",
};

const designDeliverables = [
  "Optimized High-Clearance Glazing Spans",
  "Integrated Smart Mechanical Duct Pathways",
  "Thermal Overhang Shading Calibrations",
  "Engineered Retaining Structural Containment Wall Profiles",
];

export default function ModernMinimalistVillaPage() {
  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen pb-24">
      {/* 1. SECTOR METADATA CONTROLLER HEADER */}
      <section className="relative w-full bg-[#0F172A] pt-12 pb-16 border-b border-[#E2E8F0]/10 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link anchor */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#64748B] hover:text-[#D4A72C] transition-colors mb-6 group"
          >
            <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />{" "}
            Back to Projects Hub
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8">
              <span className="block text-xs font-bold uppercase tracking-widest text-[#64748B] mb-2 font-mono">
                Concept Spec Brief &bull; Model 02-B
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-[0.95]">
                Modern Minimalist{" "}
                <span className="text-[#D4A72C]">Villa Concept.</span>
              </h1>
              <p className="mt-4 text-xs font-mono text-[#64748B] flex items-center gap-1.5">
                <Maximize2 className="h-3.5 w-3.5 text-[#D4A72C]" /> Spatial
                Frame footprint: {conceptSpecs.footprint}
              </p>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <span className="inline-block px-3 py-1 bg-[#1E293B] border border-[#E2E8F0]/10 text-[#D4A72C] text-xs font-mono">
                {conceptSpecs.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CRISP HIGH-EXPOSURE IMAGERY CONTROLLER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-30">
        <div className="relative w-full h-[320px] sm:h-[450px] lg:h-[550px] border-4 sm:border-8 border-[#D4A72C] shadow-2xl bg-[#1E293B] overflow-hidden">
          <Image
            src="/images/Modern Minimalist Villa Model.png"
            alt="Modern Minimalist Villa architectural concept layout mapping local materials"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* 3. TECHNICAL SPEC DATA MATRIX SHEET */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Framing Details */}
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-white border border-[#E2E8F0] p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg font-black uppercase tracking-tight text-[#0F172A] border-b border-[#E2E8F0] pb-3 mb-4 flex items-center gap-2">
              <Layers className="h-4 w-4 text-[#D4A72C]" /> Passive Thermal Mass
              Modeling
            </h2>
            <p className="text-sm text-[#111827] leading-relaxed">
              This single-family residential structural layout explores the
              optimization of deep lintel overhangs and architectural thermal
              massing. Engineered specifically for the Yeka Sub-City elevation
              variables, the blueprint system leverages post-tensioned spans to
              create broad, un-interrupted living spaces while prioritizing
              continuous envelope moisture barriers.
            </p>
          </div>

          {/* Detailed Engineering Spec Matrix */}
          <div className="bg-white border border-[#E2E8F0] p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg font-black uppercase tracking-tight text-[#0F172A] border-b border-[#E2E8F0] pb-3 mb-6">
              Core Engineering Matrix
            </h2>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
              <div>
                <dt className="text-[10px] font-black uppercase tracking-wider text-[#64748B]">
                  Foundation Grid Layout
                </dt>
                <dd className="text-xs font-mono font-medium text-[#111827] mt-1">
                  {conceptSpecs.foundationType}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-black uppercase tracking-wider text-[#64748B]">
                  Skeletal Framing Integrity
                </dt>
                <dd className="text-xs font-mono font-medium text-[#111827] mt-1">
                  {conceptSpecs.framingMaterial}
                </dd>
              </div>
              <div className="sm:col-span-2 border-t border-[#E2E8F0] pt-4">
                <dt className="text-[10px] font-black uppercase tracking-wider text-[#64748B]">
                  Infill Blockwork Masonry
                </dt>
                <dd className="text-xs font-mono font-medium text-[#111827] mt-1">
                  {conceptSpecs.masonryType}
                </dd>
              </div>
              <div className="sm:col-span-2 border-t border-[#E2E8F0] pt-4">
                <dt className="text-[10px] font-black uppercase tracking-wider text-[#64748B]">
                  Moisture Isolation Barrier
                </dt>
                <dd className="text-xs font-mono font-medium text-[#111827] mt-1">
                  {conceptSpecs.waterproofing}
                </dd>
              </div>
            </dl>
          </div>

          <Disclaimer message="Notice: This simulation relies entirely on local regulatory zoning compliance modeling parameters for Addis Ababa residential structural infrastructure validation." />
        </div>

        {/* RIGHT COLUMN: Budget and Execution Models */}
        <div className="lg:col-span-5 space-y-6">
          {/* Timeline Tracking Block */}
          <div className="bg-[#1E293B] border border-[#E2E8F0]/10 p-6 sm:p-8 text-white relative">
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 h-3 w-3 border-b border-l border-[#E2E8F0]/20 bg-[#0F172A]"
            />
            <h3 className="text-xs font-black uppercase tracking-widest text-[#64748B] flex items-center gap-2 mb-4">
              <Clock className="h-4 w-4 text-[#D4A72C]" /> Estimated Time Frame
            </h3>
            <p className="text-lg font-bold text-white uppercase tracking-tight font-mono">
              {conceptSpecs.estimatedTimeFrame}
            </p>
            <p className="text-[11px] text-[#64748B] mt-2 font-light leading-normal">
              Accounts for specialized post-tensioned tendon placement
              schedules, complex structural glazing framing assemblies, and
              sub-grade waterproofing layer testing intervals.
            </p>
          </div>

          {/* Budget Specifying Box */}
          <div className="bg-white border-2 border-[#D4A72C] p-6 sm:p-8 shadow-md relative">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#64748B] flex items-center gap-2 mb-3">
              <DollarSign className="h-4 w-4 text-[#D4A72C]" /> Illustrative
              Cost Model
            </h3>
            <p className="text-xl font-black text-[#0F172A] tracking-tight font-mono break-words">
              {conceptSpecs.illustrativeBaseBudget}
            </p>

            <div className="mt-4 pt-4 border-t border-[#E2E8F0] bg-[#F8FAFC] p-3 rounded-none border-l-2 border-[#64748B]">
              <p className="text-[10px] leading-relaxed text-[#64748B] font-mono flex items-start gap-1.5">
                <HelpCircle className="h-3.5 w-3.5 text-[#64748B] shrink-0 mt-0.5" />
                <span>
                  <strong>Illustrative Only:</strong> Market pricing factors
                  fluctuate significantly due to regional cement availability,
                  steel tariff indexes, and shifting supply conditions across
                  Addis Ababa.
                </span>
              </p>
            </div>

            {/* Deliverables Checklist */}
            <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-[#64748B] mb-3">
                Key Design Deliverables
              </h4>
              <ul className="space-y-2">
                {designDeliverables.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-xs text-[#111827] font-mono"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#D4A72C] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <Link
                href="/request-quote"
                className="inline-flex h-11 items-center justify-center bg-[#D4A72C] text-white hover:bg-[#b88e21] w-full text-center text-[10px] font-black uppercase tracking-widest transition-all duration-300 rounded-none shadow-sm"
              >
                Apply Framework to Your Site
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
