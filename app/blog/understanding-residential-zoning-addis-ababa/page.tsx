// app/blog/understanding-residential-zoning-addis-ababa/page.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import Disclaimer from "@/components/shared/disclaimer";

export const metadata = {
  title: "Understanding Residential Zoning in Addis Ababa | SeraBuild",
  description:
    "A practical introduction to residential zoning and building requirements in Addis Ababa, including land use, setbacks, building height, plot coverage, permits, and site-specific approvals.",
};

const planningFactors = [
  {
    title: "Land Use and Permitted Development",
    text: "Before planning a building, first understand what type of development is permitted on the property. The applicable land-use designation and planning requirements can affect what can be built and how the property may be used.",
  },
  {
    title: "Building Setbacks",
    text: "Buildings may need to maintain required distances from property boundaries, roads, or other site features. The applicable requirement depends on the planning and site conditions rather than one universal distance for every residential property.",
  },
  {
    title: "Building Height and Number of Floors",
    text: "The permitted building height or number of floors can depend on the applicable planning controls and the characteristics of the site. Do not assume that a neighboring building automatically establishes what can be built on your property.",
  },
  {
    title: "Plot Coverage and Building Area",
    text: "Planning controls can affect how much of a plot may be occupied by a building. Site planning should therefore consider the plot size, required open areas, access, circulation, and other applicable requirements before the building footprint is finalized.",
  },
  {
    title: "Access, Parking, and Site Requirements",
    text: "Residential development may also need to consider access, parking, circulation, drainage, utilities, and other site requirements. These should be reviewed as part of the overall planning process rather than treated as separate issues at the end.",
  },
  {
    title: "Building Permit and Approvals",
    text: "A construction project may require formal applications, documents, reviews, and approvals before construction can legally proceed. The exact process and required documents should be confirmed with the relevant authority for the property.",
  },
];

const planningChecklist = [
  "Confirm the property's applicable land use",
  "Check the current planning requirements",
  "Review permitted building use",
  "Confirm applicable setbacks",
  "Check height or floor limitations",
  "Review plot coverage and open-space requirements",
  "Consider access, parking, drainage, and utilities",
  "Confirm the required permit and approval process",
];

export default function ZoningLawsPage() {
  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen pb-24">
      {/* Header */}
      <section className="relative bg-[#0F172A] pt-12 pb-16 text-white border-b border-[#E2E8F0]/10 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              `linear-gradient(#FFFFFF 1px, transparent 1px), ` +
              `linear-gradient(90deg, #FFFFFF 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#94A3B8] hover:text-[#D4A72C] mb-6 group transition-colors"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <span className="block text-xs font-bold text-[#D4A72C] uppercase tracking-widest mb-3">
            Permits & Planning
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight">
            Understanding Residential Zoning in Addis Ababa
          </h1>

          <p className="mt-5 max-w-2xl text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
            A practical introduction to the planning questions property owners
            should investigate before designing or constructing a residential
            building.
          </p>

          <div className="flex flex-wrap items-center gap-5 text-xs text-[#94A3B8] mt-6 pt-6 border-t border-[#1E293B]">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[#D4A72C]" />8 min read
            </span>

            <span>Sep 11, 2026</span>

            <span>Permits & Planning</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 mt-12 space-y-10">
        {/* Featured Image */}
        <div className="relative w-full h-72 sm:h-[400px] border-4 sm:border-8 border-[#D4A72C] shadow-xl overflow-hidden bg-[#1E293B]">
          <Image
            src="/images/Residential Zoning Laws.png"
            alt="Residential planning and zoning in Addis Ababa"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover object-center"
          />
        </div>

        {/* Article */}
        <article className="bg-white border border-[#E2E8F0] p-6 sm:p-10 shadow-sm">
          {/* Important notice */}
          <div className="border-l-4 border-[#D4A72C] pl-4 py-1 bg-[#F8FAFC]">
            <p className="text-sm text-[#334155] leading-relaxed">
              Zoning and permitting requirements are site-specific and can
              change over time. This guide explains the main subjects to
              investigate; it does not provide a definitive approval for any
              particular property.
            </p>
          </div>

          {/* Introduction */}
          <section className="mt-10 space-y-4">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#0F172A]">
              Why Zoning Matters Before You Design
            </h2>

            <p className="text-sm text-[#334155] leading-7">
              One of the most important mistakes a property owner can make is
              designing a building first and checking planning requirements
              afterward.
            </p>

            <p className="text-sm text-[#334155] leading-7">
              Planning requirements can influence the building's use, size,
              position on the plot, height, access, parking, open space, and
              approval process. Understanding these factors early can help
              prevent major changes later.
            </p>
          </section>

          {/* Main factors */}
          <section className="mt-12 space-y-6">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#0F172A]">
              Main Planning Factors to Investigate
            </h2>

            <div className="space-y-7">
              {planningFactors.map((factor) => (
                <div
                  key={factor.title}
                  className="border-l-2 border-[#D4A72C] pl-5"
                >
                  <h3 className="text-sm font-black uppercase tracking-tight text-[#0F172A]">
                    {factor.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#475569] leading-7">
                    {factor.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Site-specific warning */}
          <section className="mt-12 bg-[#F8FAFC] border border-[#E2E8F0] p-6">
            <h2 className="text-sm font-black uppercase tracking-wider text-[#0F172A]">
              Do Not Assume Every Plot Has the Same Requirements
            </h2>

            <p className="mt-3 text-sm text-[#475569] leading-7">
              Two residential properties in Addis Ababa may not have identical
              planning conditions. Location, land-use designation, plot
              characteristics, applicable plans, existing development, and other
              requirements can affect what is permitted.
            </p>

            <p className="mt-3 text-sm text-[#475569] leading-7">
              For this reason, a general number found online should not be
              treated as approval for a specific site.
            </p>
          </section>

          {/* Checklist */}
          <section className="mt-12 pt-10 border-t border-[#E2E8F0]">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#0F172A]">
              Pre-Design Planning Checklist
            </h2>

            <p className="mt-3 text-sm text-[#475569] leading-7">
              Before finalizing a residential building concept, consider
              checking the following:
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {planningChecklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-[#475569]"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#D4A72C] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Practical workflow */}
          <section className="mt-12 pt-10 border-t border-[#E2E8F0] space-y-5">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#0F172A]">
              A Better Order for Starting a Project
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {[
                {
                  number: "01",
                  title: "Understand",
                  text: "Confirm the property and intended use.",
                },
                {
                  number: "02",
                  title: "Check",
                  text: "Review applicable planning requirements.",
                },
                {
                  number: "03",
                  title: "Design",
                  text: "Develop the building concept around those requirements.",
                },
                {
                  number: "04",
                  title: "Apply",
                  text: "Follow the required approval and permit process.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="border border-[#E2E8F0] p-4 bg-white"
                >
                  <span className="text-[10px] font-black text-[#D4A72C]">
                    {step.number}
                  </span>

                  <h3 className="mt-2 text-xs font-black uppercase text-[#0F172A]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs text-[#64748B] leading-relaxed">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="mt-12 pt-10 border-t border-[#E2E8F0] space-y-4">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#0F172A]">
              Start With the Property, Not Just the Building
            </h2>

            <p className="text-sm text-[#334155] leading-7">
              Good residential planning starts with understanding the property
              and the requirements that apply to it. Once those conditions are
              clear, the building concept can be developed with fewer surprises
              during the approval and construction stages.
            </p>

            <p className="text-sm text-[#334155] leading-7">
              Always confirm current requirements with the relevant Addis Ababa
              authority and qualified professionals before relying on planning
              information for an actual project.
            </p>
          </section>

          {/* Disclaimer */}
          <div className="mt-10 pt-8 border-t border-[#E2E8F0]">
            <Disclaimer message="This article is part of a fictional SeraBuild portfolio project and is provided for general educational purposes. It does not constitute legal, planning, architectural, engineering, or permitting advice. Addis Ababa planning and permitting requirements may vary by property and may change over time. Verify current requirements with the relevant authorities and qualified professionals before starting an actual project." />
          </div>
        </article>

        {/* CTA */}
        <div className="bg-[#0F172A] p-7 sm:p-9 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-7">
            <div className="max-w-2xl">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4A72C] mb-3">
                Planning a Residential Project?
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                Understand the Project Before You Build.
              </h2>

              <p className="mt-3 text-sm text-[#CBD5E1] leading-relaxed">
                Explore SeraBuild's residential construction and renovation
                services to understand the next steps for a property project.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 shrink-0 bg-[#D4A72C] text-[#0F172A] px-6 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-[#E0B83F] transition-colors"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
