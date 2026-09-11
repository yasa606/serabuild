// app/process/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  ClipboardList,
  Ruler,
  FileCheck2,
  HardHat,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Construction Process | SeraBuild Addis Ababa",
  description:
    "See how SeraBuild approaches residential construction, home renovation, waterproofing, and property improvement projects in Addis Ababa.",
};

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Understand Your Project",
    description:
      "We start by understanding what you want to build, renovate, repair, or improve. The first step is defining your goals, priorities, property type, and expected scope.",
    points: [
      "Project goals",
      "Property type",
      "Required service",
      "Initial scope",
    ],
  },
  {
    number: "02",
    icon: Search,
    title: "Assess the Property",
    description:
      "The next stage is to understand the existing conditions. For renovation, waterproofing, and repair work, identifying site conditions early helps define the right approach.",
    points: [
      "Site conditions",
      "Existing construction",
      "Access and constraints",
      "Visible issues",
    ],
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Define the Scope",
    description:
      "The project is translated into a clearer scope of work. This helps separate required work from optional improvements and creates a practical basis for planning.",
    points: [
      "Work categories",
      "Materials and finishes",
      "Project priorities",
      "Scope boundaries",
    ],
  },
  {
    number: "04",
    icon: Ruler,
    title: "Plan the Work",
    description:
      "A structured plan brings together the scope, sequence, materials, resources, and project requirements before physical work begins.",
    points: [
      "Work sequence",
      "Material planning",
      "Resource requirements",
      "Project coordination",
    ],
  },
  {
    number: "05",
    icon: FileCheck2,
    title: "Review & Confirm",
    description:
      "Before execution, the defined scope and project requirements should be reviewed so that expectations are clear and important decisions are addressed early.",
    points: [
      "Scope review",
      "Specification review",
      "Cost discussion",
      "Project confirmation",
    ],
  },
  {
    number: "06",
    icon: HardHat,
    title: "Execute & Monitor",
    description:
      "The planned work moves into execution with attention to workmanship, sequencing, materials, site coordination, and quality throughout the project.",
    points: [
      "Site coordination",
      "Workmanship",
      "Material control",
      "Progress monitoring",
    ],
  },
  {
    number: "07",
    icon: CheckCircle2,
    title: "Review the Result",
    description:
      "The final stage focuses on reviewing completed work against the agreed scope and identifying any remaining items that require attention.",
    points: [
      "Work inspection",
      "Scope review",
      "Outstanding items",
      "Final handover",
    ],
  },
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* HERO */}
      <section className="border-b border-[#E2E8F0] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#D4A72C]">
                How We Work
              </p>

              <h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                A Clear Process From{" "}
                <span className="text-[#D4A72C]">Plan to Completion.</span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-7 text-[#64748B] sm:text-lg">
                Construction and renovation projects become easier to manage
                when the scope, sequence, materials, and expectations are clear
                from the beginning. Our process is structured around
                understanding the project first, then planning and executing the
                work systematically.
              </p>
            </div>

            <div className="hidden lg:col-span-4 lg:block">
              <div className="relative border border-[#E2E8F0] bg-[#F8FAFC] p-8">
                <div className="absolute left-0 top-0 h-1 w-20 bg-[#D4A72C]" />

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#64748B]">
                  The SeraBuild Approach
                </p>

                <div className="mt-6 space-y-4">
                  {["Understand", "Assess", "Plan", "Execute", "Review"].map(
                    (item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 border-b border-[#E2E8F0] pb-3 last:border-0"
                      >
                        <span className="text-xs font-black text-[#D4A72C]">
                          0{index + 1}
                        </span>

                        <span className="text-sm font-semibold">{item}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4A72C]">
            Project Workflow
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            How a Project Moves Forward
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#64748B]">
            The exact activities vary according to the type and complexity of
            the project, but the overall workflow provides a clear framework for
            residential construction, renovation, waterproofing, and property
            improvement work.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group grid grid-cols-1 gap-6 border border-[#E2E8F0] bg-white p-6 transition hover:border-[#D4A72C] sm:p-8 lg:grid-cols-12"
              >
                {/* NUMBER */}
                <div className="lg:col-span-2">
                  <span className="text-5xl font-black tracking-tight text-[#E2E8F0] transition group-hover:text-[#D4A72C]/30">
                    {step.number}
                  </span>
                </div>

                {/* ICON + TITLE */}
                <div className="lg:col-span-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#0F172A]">
                      <Icon className="h-5 w-5 text-[#D4A72C]" />
                    </div>

                    <div>
                      <h3 className="text-xl font-black tracking-tight">
                        {step.title}
                      </h3>

                      <div className="mt-2 h-1 w-10 bg-[#D4A72C]" />
                    </div>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="lg:col-span-4">
                  <p className="text-sm leading-6 text-[#64748B]">
                    {step.description}
                  </p>
                </div>

                {/* POINTS */}
                <div className="lg:col-span-2">
                  <ul className="space-y-2">
                    {step.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-xs font-medium text-[#475569]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#D4A72C]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SERVICE-SPECIFIC PROCESS */}
      <section className="border-y border-[#E2E8F0] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4A72C]">
              Adapted To Your Project
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              One Framework, Different Project Needs
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#64748B]">
              A new house construction project requires a different sequence
              from a bathroom renovation or a waterproofing intervention. The
              framework stays structured while the actual scope adapts to the
              property and service.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            <ProcessCard
              title="House Construction"
              description="From defining the project scope and planning the work through structural construction, finishing, and final review."
              href="/services/house-construction"
            />

            <ProcessCard
              title="Home Renovation"
              description="Assess the existing property, define renovation priorities, coordinate trades, and review the completed improvements."
              href="/services/home-renovation"
            />

            <ProcessCard
              title="Waterproofing"
              description="Identify the moisture problem, understand the affected area, select an appropriate treatment approach, and review the result."
              href="/services/waterproofing"
            />
          </div>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4A72C]">
              Project Clarity
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Good Construction Starts With Clear Expectations.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#64748B]">
              Defining the scope before execution helps reduce misunderstandings
              around materials, workmanship, sequence, responsibilities, and
              project requirements. The goal is not simply to complete work, but
              to make the work understandable from the beginning.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-[#E2E8F0] bg-white p-6 sm:p-8">
              <div className="space-y-5">
                {[
                  "Clear project scope",
                  "Defined work sequence",
                  "Material and finish planning",
                  "Ongoing project coordination",
                  "Final scope review",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-[#E2E8F0] pb-4 last:border-0 last:pb-0"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#D4A72C]" />

                    <span className="text-sm font-semibold text-[#334155]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4A72C]">
                Start Your Project
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Ready to Define the Next Step?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#CBD5E1]">
                Tell us what you are planning and provide the details needed to
                understand your project.
              </p>
            </div>

            <Link
              href="/request-quote"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 bg-[#D4A72C] px-7 text-sm font-bold uppercase tracking-wider text-[#0F172A] transition hover:bg-[#E5BB45]"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* DEMO NOTICE */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="border border-[#E2E8F0] bg-white px-6 py-5">
          <p className="text-xs leading-5 text-[#64748B]">
            <strong className="text-[#0F172A]">Portfolio demonstration:</strong>{" "}
            SeraBuild is a fictional construction and home-improvement website
            created as a portfolio project. The process shown here represents a
            conceptual service workflow and does not describe the operations of
            an existing construction company.
          </p>
        </div>
      </section>
    </main>
  );
}

function ProcessCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group border border-[#E2E8F0] bg-[#F8FAFC] p-6 transition hover:border-[#D4A72C] hover:bg-white"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-black">{title}</h3>

        <ArrowRight className="h-5 w-5 text-[#D4A72C] transition-transform group-hover:translate-x-1" />
      </div>

      <p className="mt-4 text-sm leading-6 text-[#64748B]">{description}</p>

      <span className="mt-5 inline-block text-xs font-bold uppercase tracking-wider text-[#0F172A]">
        Explore Service
      </span>
    </Link>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-[#E2E8F0] pb-8">
      <h2 className="text-xl font-bold tracking-tight text-[#0F172A]">
        {title}
      </h2>

      <div className="mt-4 space-y-4 text-sm leading-7 text-[#475569]">
        {children}
      </div>
    </section>
  );
}
