// app/projects/three-bedroom-house/page.tsx
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
  title: "3-Bedroom House Architectural Specification | SeraBuild",
  description:
    "Comprehensive engineering simulation brief for a 240 SqM 3-bedroom residential structure concept configured for architectural zoning in Addis Ababa, Ethiopia.",
};

const conceptSpecs = {
  title: "3-Bedroom Residential Concept",
  slug: "three-bedroom-house",
  location: "Bole Sub-City, Addis Ababa",
  footprint: "240 SqM Total Area",
  foundationType: "Reinforced Concrete Mat / Raft Foundation",
  framingMaterial: "Class C-25 Monolithic Structural Concrete Framework",
  masonryType:
    "Lightweight Hollow Concrete Blocks (HCB) with double-layer plaster",
  waterproofing:
    "Torch-applied SBS Elastomeric Bituminous Membrane (4mm thickness)",
  estimatedTimeFrame: "8 - 12 Months (Project Simulation Metric)",
  illustrativeBaseBudget:
    "ETB 6,800,000 - 8,500,000 (Varies based on volatile local material margins)",
};

const designDeliverables = [
  "Optimized 3-Bedroom Space Distribution",
  "Dedicated Fluid Service Utility Ducting Routes",
  "High Structural Window Clearances",
  "Localized Material Procurement Priority Alignment",
];

export default function ThreeBedroomHouseProject() {
  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen pb-24">
      {/* 1. SECTOR METADATA CONTROLLER HEADER */}
      <section className="relative w-full bg-[#0F172A] pt-12 pb-16 border-b border-[#E2E8F0]/10 overflow-hidden">
        {/* Subtle grid lines background to enforce technical/drafting aesthetic */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button anchor link */}
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
                Concept Spec Brief &bull; Model 01-A
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-[0.95]">
                3-Bedroom{" "}
                <span className="text-[#D4A72C]">Residential Model.</span>
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

      {/* 2. BRIGHT HIGH-EXPOSURE IMAGERY CASE FRAME */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-30">
        <div className="relative w-full h-[320px] sm:h-[450px] lg:h-[550px] border-4 sm:border-8 border-[#D4A72C] shadow-2xl bg-[#1E293B] overflow-hidden">
          <Image
            src="/images/3-Bedroom Residential Concept.png"
            alt="3-Bedroom residential blueprint house construction model mockup visualization"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* 3. TECHNICAL SPEC DATA METRIC SHEET & DETAILS WRAPPER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT SECTOR (7 Columns): Structural Directive Disclosures */}
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-white border border-[#E2E8F0] p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg font-black uppercase tracking-tight text-[#0F172A] border-b border-[#E2E8F0] pb-3 mb-4 flex items-center gap-2">
              <Layers className="h-4 w-4 text-[#D4A72C]" /> Architectural
              Simulation Intent
            </h2>
            <p className="text-sm text-[#111827] leading-relaxed">
              This concept framework serves as a verified case simulation
              mapping out a real-world residential layout for typical suburban
              plot dimensions across regional Addis Ababa nodes. The structural
              model isolates high-performance efficiency goals, analyzing load
              balances, raw substance parameters, and waterproofing details
              necessary to build safely over fluctuating seasonal soil shifts.
            </p>
          </div>

          {/* Full Structural Specifications Sheet */}
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

          <Disclaimer message="Notice: Material parameters outlined here adhere directly to current structural consensus across Ethiopia and are updated periodically for illustrative modeling validation purposes only." />
        </div>

        {/* RIGHT SECTOR (5 Columns): Estimation & Delivery Simulation Metrics */}
        <div className="lg:col-span-5 space-y-6">
          {/* Scheduling Box Card Layout */}
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
              Based on standard regional staging logistics including
              foundational curing times and core framework construction
              milestones.
            </p>
          </div>

          {/* Pricing Model Box Layout */}
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

            {/* Value Highlights Stack */}
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

            {/* Direct primary path action target button */}
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
