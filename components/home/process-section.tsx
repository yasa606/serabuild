// components/home/process-section.tsx
import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  ShieldCheck,
  HardHat,
  FileCheck,
} from "lucide-react";

const steps = [
  {
    num: "01",
    icon: <ClipboardList className="h-5 w-5 text-[#D4A72C]" />, // Safe: High contrast inside dark navy box
    title: "Technical Research & Vetting",
    description:
      "Analyzing soil profiles, sub-city structural codes, and material availability frameworks before breaking ground.",
  },
  {
    num: "02",
    icon: <FileCheck className="h-5 w-5 text-[#D4A72C]" />, // Safe: High contrast inside dark navy box
    title: "Structural Allocation",
    description:
      "Drafting precision structural blueprints, reinforced frame casting schedules, and itemized material requirements matrix systems.",
  },
  {
    num: "03",
    icon: <HardHat className="h-5 w-5 text-[#D4A72C]" />, // Safe: High contrast inside dark navy box
    title: "Disciplined Staged Build",
    description:
      "Executing foundations, Class C-25 monolithic frame casting, infill masonry blockwork, and multi-tier waterproofing protection.",
  },
  {
    num: "04",
    icon: <ShieldCheck className="h-5 w-5 text-[#D4A72C]" />, // Safe: High contrast inside dark navy box
    title: "Quality QA & Calibration",
    description:
      "Running 24-hour flood isolation testing on drainage routes and checking envelope structural lines to clear compliance markers.",
  },
];

export default function ProcessSection() {
  return (
    <section className="w-full bg-white py-20 border-b border-[#E2E8F0] relative overflow-hidden">
      {/* Structural accent line cutting horizontally behind steps on desktop */}
      <div
        aria-hidden="true"
        className="absolute top-[57%] left-0 right-0 h-0.5 bg-[#E2E8F0] hidden lg:block z-0 max-w-7xl mx-auto px-8"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#916E13]" />{" "}
            {/* Fixed: Accessible dark gold border accent line */}
            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#64748B]">
              Execution Framework
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#0F172A]">
            Our Disciplined Project{" "}
            <span className="text-[#916E13]">Process.</span>{" "}
            {/* Fixed: Accessible dark gold text block */}
          </h2>
          <p className="mt-4 text-sm text-[#64748B] max-w-xl leading-relaxed">
            From initial zoning research to finalized structural handovers, we
            model every building stage using high-tolerance engineering
            controls.
          </p>
        </div>

        {/* Timeline Sequence Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 relative flex flex-col justify-between group hover:border-[#916E13] transition-all duration-300 shadow-sm" // Fixed: Card hover ring uses text-accent-dark
            >
              <div>
                {/* Step Counter Tag */}
                <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4 mb-6">
                  <span className="text-xs font-mono font-black text-[#916E13] tracking-widest">
                    {" "}
                    {/* Fixed: High contrast text parameters */}
                    {step.num}
                  </span>
                  <div className="p-2 bg-[#0F172A] rounded-none border border-[#1E293B]">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-base font-black uppercase tracking-tight text-[#0F172A] group-hover:text-[#916E13] transition-colors">
                  {" "}
                  {/* Fixed: Text transformation interactions */}
                  {step.title}
                </h3>
                <p className="text-xs text-[#64748B] mt-3 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom detail indicator line */}
              <div
                aria-hidden="true"
                className="w-full h-1 bg-transparent group-hover:bg-[#916E13] transition-all mt-6" // Fixed: Accent slider border rules
              />
            </div>
          ))}
        </div>

        {/* Lower Pathway Action Trigger Link */}
        <div className="mt-12 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-[#64748B] font-mono">
            *Every operational phase strictly follows the case study policy
            parameters.
          </p>
          <Link
            href="/request-quote"
            className="inline-flex h-11 items-center justify-center bg-[#0F172A] hover:bg-[#D4A72C] text-white hover:text-[#0F172A] px-6 text-[10px] font-bold uppercase tracking-wider gap-2 transition-all border border-[#0F172A]"
          >
            Advance to Planning Tool <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
