// app/construction-cost/page.tsx
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  FileSpreadsheet,
  Layers,
  ShieldCheck,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Disclaimer from "@/components/shared/disclaimer";

export const metadata = {
  title: "House Construction Cost Addis Ababa | Pricing Estimation Grid",
  description:
    "Comprehensive cost modeling framework analyzing residential square meter base rates, structural finishing variables, and material cost factor fluctuations across Addis Ababa, Ethiopia.",
};

const costMatrix = [
  {
    service: "Full Structural House Construction",
    rate: "ETB 28,000 - 42,000",
    basis: "Per Square Meter (Built-Up Area)",
    factors: "Excavation, C-25 Frame, Infill Masonry, Base Finishes",
  },
  {
    service: "Premium Residential Renovation",
    rate: "ETB 12,000 - 22,000",
    basis: "Per Square Meter (Modified Footprint)",
    factors: "Partition Alteration, Utility Retrofits, Premium Finishing",
  },
  {
    service: "Multi-Layer Waterproofing Systems",
    rate: "ETB 450 - 850",
    basis: "Per Square Meter (Surface Area)",
    factors: "Primer, 4mm SBS Torched Membrane, Protection Board",
  },
];

const volatileFactors = [
  {
    metric: "Reinforcement Steel (Rebar)",
    index: "Highly Volatile",
    driver: "Import logistics, customs tariffs, global smelting indexes.",
  },
  {
    metric: "Portland Cement (Grade 42.5)",
    index: "Fluctuating",
    driver: "Regional factory output variables, local transport freight costs.",
  },
  {
    metric: "Finishing Fineness (Tiles/Glass)",
    index: "Variable",
    driver:
      "Foreign currency availability, sub-city customs processing queues.",
  },
];

export default function ConstructionCostPage() {
  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen pb-24">
      {/* 1. TECHNICAL HEADLINE BANNER */}
      <section className="relative w-full bg-[#0F172A] py-16 border-b border-[#E2E8F0]/10 overflow-hidden">
        {/* Subtle engineering grid accent lines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
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
                Cost Guide
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-[0.95]">
              House Construction <br />
              <span className="text-[#D4A72C]">Cost Addis Ababa.</span>
            </h1>

            <div className="mt-6 flex items-start gap-4 border-l-2 border-[#D4A72C] pl-4">
              <p className="text-sm text-[#E2E8F0] leading-relaxed max-w-xl">
                A structured analytical blueprint detailing budgetary metrics,
                square meter allocations, and external logistical supply-chain
                factors driving building expenses across Ethiopia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE ESTIMATION MATRIX TABLES CONTAINER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT SECTOR (8 Columns): Main Data Tables */}
        <div className="lg:col-span-8 space-y-8">
          {/* Policy Safeguard Reminder */}
          <Disclaimer message="Simulation Directive: The pricing metrics and calculations compiled below represent illustrative layout models built for portfolio verification. Actual structural expenses vary based on local project factors." />

          {/* Table 1: Base Rates Matrix */}
          <div className="bg-white border border-[#E2E8F0] p-6 sm:p-8 shadow-sm">
            <h2 className="text-base font-black uppercase tracking-tight text-[#0F172A] border-b border-[#E2E8F0] pb-3 mb-6 flex items-center gap-2">
              <FileSpreadsheet className="h-4 w-4 text-[#D4A72C]" /> Base
              Operational Rates Model
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC]">
                    <th className="p-3 text-[10px] font-black uppercase tracking-wider text-[#0F172A]">
                      Core Structural Service
                    </th>
                    <th className="p-3 text-[10px] font-black uppercase tracking-wider text-[#0F172A]">
                      Illustrative Base Rate
                    </th>
                    <th className="p-3 text-[10px] font-black uppercase tracking-wider text-[#0F172A]">
                      Unit Basis
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0] text-xs font-mono">
                  {costMatrix.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-[#F8FAFC]/50 transition-colors"
                    >
                      <td className="p-4 font-sans font-bold text-[#0F172A]">
                        {row.service}
                      </td>
                      <td className="p-4 text-[#D4A72C] font-bold">
                        {row.rate}
                      </td>
                      <td className="p-4 text-[#64748B]">{row.basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Table 2: Material Market Index Fluctuations */}
          <div className="bg-white border border-[#E2E8F0] p-6 sm:p-8 shadow-sm">
            <h2 className="text-base font-black uppercase tracking-tight text-[#0F172A] border-b border-[#E2E8F0] pb-3 mb-6 flex items-center gap-2">
              <Layers className="h-4 w-4 text-[#D4A72C]" /> Supply-Chain
              Vulnerability Indexes
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC]">
                    <th className="p-3 text-[10px] font-black uppercase tracking-wider text-[#0F172A]">
                      Substance Classification
                    </th>
                    <th className="p-3 text-[10px] font-black uppercase tracking-wider text-[#0F172A]">
                      Volatility Status
                    </th>
                    <th className="p-3 text-[10px] font-black uppercase tracking-wider text-[#0F172A]">
                      Primary Price Driver
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0] text-xs font-mono">
                  {volatileFactors.map((factor, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-[#F8FAFC]/50 transition-colors"
                    >
                      <td className="p-4 font-sans font-bold text-[#0F172A]">
                        {factor.metric}
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 bg-[#1E293B] text-white text-[9px] uppercase font-black">
                          {factor.index}
                        </span>
                      </td>
                      <td className="p-4 text-[#64748B] font-sans">
                        {factor.driver}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* RIGHT SECTOR (4 Columns): Calculation & Lead Prompts */}
        <div className="lg:col-span-4 space-y-6">
          {/* Active Callout Block */}
          <div className="bg-[#1E293B] border-2 border-[#D4A72C] p-6 sm:p-8 text-white relative shadow-md">
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 h-3 w-3 border-b border-l border-[#D4A72C]/30 bg-[#0F172A]"
            />

            <h3 className="text-xs font-black uppercase tracking-widest text-[#64748B] flex items-center gap-2 mb-3">
              <Calculator className="h-4 w-4 text-[#D4A72C]" /> Budget
              Customization Tool
            </h3>

            <p className="text-sm text-[#E2E8F0] leading-relaxed">
              Every property plan requires localized sub-city assessment, raw
              metric evaluation, and active foundation parameter choices.
              Initialize our parsing matrix to input your targeted plot
              configurations.
            </p>

            <div className="mt-6">
              <Link
                href="/request-quote"
                className="inline-flex h-11 items-center justify-center bg-[#D4A72C] text-white hover:bg-[#b88e21] w-full text-center text-[10px] font-black uppercase tracking-widest transition-all duration-300 gap-2 shadow-sm"
              >
                Launch Configuration Form <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Core Cost Variables Warning Sheet */}
          <div className="bg-white border border-[#E2E8F0] p-6 shadow-sm">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#0F172A] mb-4 pb-2 border-b border-[#E2E8F0] flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-[#D4A72C]" /> Structural
              Cost Drivers
            </h4>
            <ul className="space-y-4 text-xs">
              <li>
                <strong className="text-[#0F172A] block uppercase text-[10px]">
                  Site Gradient & Excavation:
                </strong>
                <span className="text-[#64748B] leading-relaxed">
                  Sloped plots across Yeka require engineered retaining systems,
                  adjusting base earthwork totals.
                </span>
              </li>
              <li className="border-t border-[#F8FAFC] pt-3">
                <strong className="text-[#0F172A] block uppercase text-[10px]">
                  Subgrade Moisture Profiles:
                </strong>
                <span className="text-[#64748B] leading-relaxed">
                  High water table regions require thick multi-tier membrane
                  installations, scaling defensive system parameters.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
