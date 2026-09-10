// app/about/page.tsx
import Link from "next/link";
import {
  ShieldCheck,
  HardHat,
  FileCode2,
  BarChart4,
  ArrowRight,
} from "lucide-react";
import Disclaimer from "@/components/shared/disclaimer";

export const metadata = {
  title: "About Our Technical Portfolio Framework | SeraBuild Case Study",
  description:
    "Learn about SeraBuild—a residential construction, home renovation, and waterproofing web architecture case study configured specifically for Addis Ababa, Ethiopia.",
};

const objectives = [
  {
    icon: <HardHat className="h-5 w-5 text-[#D4A72C]" />,
    title: "Structural Modeling",
    desc: "Simulating authentic foundation staging, C-25 framework layouts, and moisture-membrane details matching engineering practices in Ethiopia.",
  },
  {
    icon: <FileCode2 className="h-5 w-5 text-[#D4A72C]" />,
    title: "Modern Tech Stack",
    desc: "Built cleanly on Next.js 15+, Tailwind CSS v4, TypeScript, and modular shadcn structures for flawless technical deployment performance.",
  },
  {
    icon: <BarChart4 className="h-5 w-5 text-[#D4A72C]" />,
    title: "SEO Campaign Growth",
    desc: "Analyzing keyword difficulty metrics across 105 targeted Addis Ababa search phrases to model natural, localized traffic growth patterns.",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen pb-24">
      {/* 1. SECTOR HERO HEADER */}
      <section className="relative w-full bg-[#0F172A] py-16 sm:py-24 border-b border-[#E2E8F0]/10 overflow-hidden">
        {/* Architectural drafting line accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Link
                href="/"
                className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] hover:text-[#D4A72C]"
              >
                Home
              </Link>
              <span className="text-[#64748B] text-xs">/</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4A72C]">
                About
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-[0.95]">
              The Framework Behind <br />
              <span className="text-[#D4A72C]">SeraBuild Project.</span>
            </h1>

            <div className="mt-6 flex items-start gap-4 border-l-2 border-[#D4A72C] pl-4">
              <p className="text-sm text-[#E2E8F0] leading-relaxed max-w-xl">
                A structured residential contractor architecture modeling
                research, web structure development, performance measurement,
                and search optimization metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRANSPARENT VALUE EXPOSITION MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT COLUMN: Narrative Details */}
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-white border border-[#E2E8F0] p-6 sm:p-10 shadow-sm space-y-6">
            <h2 className="text-xl font-black uppercase text-[#0F172A] tracking-tight border-b border-[#E2E8F0] pb-3 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[#D4A72C]" /> Our Operational
              Blueprint
            </h2>

            <p className="text-sm text-[#111827] leading-relaxed">
              SeraBuild functions entirely as a **portfolio case study
              simulation**. It isolates a fictional residential construction and
              spatial renovation engineering company configured specifically for
              the Addis Ababa market.
            </p>

            <p className="text-sm text-[#111827] leading-relaxed">
              Our core objective is to map out and showcase a pristine digital
              lifecycle execution process: moving seamlessly from deep localized
              keyword research through full-site architecture, modern design
              layouts, Next.js build deployment, search engine crawl
              configuration, and performance analytics measurement.
            </p>

            <div className="bg-[#F8FAFC] border-l-4 border-[#0F172A] p-4 text-xs font-mono text-[#64748B] leading-relaxed">
              <strong>Ground Policy Check:</strong> This web project strictly
              displays zero invented client testimonials, zero false project
              metrics, and zero simulated company badges. Every specification is
              clearly isolated to preserve absolute framework transparency.
            </div>
          </div>

          <Disclaimer message="Zoning Rule Context: The data and locations mentioned (such as Bole, Yeka, and Lebu nodes) serve as spatial baseline targets to model structural layout logic." />
        </div>

        {/* RIGHT COLUMN: Sequential Objective Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#1E293B] border border-[#E2E8F0]/10 p-6 sm:p-8 text-white relative shadow-md">
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 h-3 w-3 border-b border-l border-[#E2E8F0]/20 bg-[#0F172A]"
            />
            <h3 className="text-xs font-black uppercase tracking-widest text-[#64748B] mb-4">
              Core Framework Focus
            </h3>

            <div className="space-y-6">
              {objectives.map((obj, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="p-2 bg-[#0F172A] border border-[#D4A72C]/20 shrink-0 h-10 w-10 flex items-center justify-center">
                    {obj.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-white">
                      {obj.title}
                    </h4>
                    <p className="text-[11px] text-[#64748B] mt-1 font-sans leading-relaxed">
                      {obj.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call-to-Action Link Block */}
          <div className="bg-white border-2 border-[#D4A72C] p-6 text-center">
            <h4 className="text-sm font-black uppercase tracking-tight text-[#0F172A]">
              Explore the Pricing Model
            </h4>
            <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
              See how our simulation parameters process structural footprints to
              calculate estimated building costs.
            </p>
            <div className="mt-4">
              <Link
                href="/construction-cost"
                className="inline-flex h-10 items-center justify-center bg-[#0F172A] text-white hover:bg-[#D4A72C] hover:text-[#0F172A] text-[10px] font-bold uppercase tracking-widest px-6 transition-all w-full gap-2"
              >
                View Cost Guide <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
