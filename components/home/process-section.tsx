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
    icon: <ClipboardList className="h-5 w-5 text-[#D4A72C]" />,
    title: "Understand",
    description:
      "Start by understanding your property, the work you need, your priorities, and the outcome you want.",
  },
  {
    num: "02",
    icon: <FileCheck className="h-5 w-5 text-[#D4A72C]" />,
    title: "Assess",
    description:
      "Review the property, existing conditions, dimensions, access, and other factors that may affect the work.",
  },
  {
    num: "03",
    icon: <HardHat className="h-5 w-5 text-[#D4A72C]" />,
    title: "Plan",
    description:
      "Define the work, organize the sequence, consider materials, and establish clear expectations before work begins.",
  },
  {
    num: "04",
    icon: <ShieldCheck className="h-5 w-5 text-[#D4A72C]" />,
    title: "Complete",
    description:
      "Coordinate the work with attention to quality, communication, progress, and the agreed project requirements.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-[#E2E8F0] bg-white py-20 sm:py-24">
      {/* Subtle background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] top-20 hidden h-[420px] w-[420px] rounded-full border border-[#D4A72C]/10 lg:block"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#D4A72C]" />

            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#64748B]">
              Our Approach
            </span>
          </div>

          <h2 className="text-3xl font-black uppercase tracking-tight text-[#0F172A] sm:text-4xl">
            A Clearer Project <span className="text-[#D4A72C]">Process.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#64748B] sm:text-base">
            Good construction starts with a clear understanding of the work. Our
            process is designed to help define the project, identify important
            considerations, and keep expectations clear from the beginning.
          </p>
        </div>

        {/* Timeline / Steps */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group relative flex flex-col justify-between border border-[#E2E8F0] bg-[#F8FAFC] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A72C] hover:bg-white hover:shadow-md"
            >
              {/* Top row */}
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                <span className="font-mono text-xs font-black tracking-widest text-[#916E13]">
                  {step.num}
                </span>

                <div className="border border-[#1E293B] bg-[#0F172A] p-2">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="mt-6 text-base font-black uppercase tracking-tight text-[#0F172A] transition-colors group-hover:text-[#916E13]">
                  {step.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#64748B]">
                  {step.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div
                aria-hidden="true"
                className="mt-6 h-1 w-full bg-transparent transition-all duration-300 group-hover:bg-[#D4A72C]"
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#E2E8F0] pt-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#94A3B8]">
              Start With Your Project
            </p>

            <p className="mt-1 text-xs text-[#64748B]">
              Tell us what you are planning and what your property needs.
            </p>
          </div>

          <Link
            href="/request-quote"
            className="inline-flex h-11 items-center justify-center gap-2 border border-[#0F172A] bg-[#0F172A] px-6 text-[10px] font-bold uppercase tracking-wider text-white transition-all hover:border-[#D4A72C] hover:bg-[#D4A72C] hover:text-[#0F172A]"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
