// app/blog/how-to-choose-construction-contractor-ethiopia/page.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import Disclaimer from "@/components/shared/disclaimer";

export const metadata = {
  title: "How to Choose a Construction Contractor in Ethiopia | SeraBuild",
  description:
    "A practical guide to choosing a construction contractor in Ethiopia, including licensing, experience, scope of work, materials, communication, and project planning.",
};

const guideSections = [
  {
    title: "1. Check the Contractor's Credentials",
    text: "Before hiring a contractor, ask for the relevant business and professional documentation required for the type of construction work involved. Make sure the contractor is legally able to undertake the work you are planning and that the information they provide can be verified.",
  },
  {
    title: "2. Look at Relevant Experience",
    text: "Experience matters most when it is relevant to your project. Ask about previous residential construction, renovation, finishing, or waterproofing work similar to what you need. Where possible, review photographs, drawings, completed work, or other verifiable examples rather than relying only on general claims.",
  },
  {
    title: "3. Define the Scope of Work Clearly",
    text: "A vague agreement can create problems later. Before work begins, make sure the scope explains what is included, what is excluded, the expected materials or finishes, responsibilities of each party, and how changes will be handled.",
  },
  {
    title: "4. Understand the Cost and Payment Structure",
    text: "Do not compare contractors only by the lowest total price. Ask what the price includes and whether materials, labor, transportation, equipment, finishing work, and other project costs are included. Payment stages should also be clearly understood before work begins.",
  },
  {
    title: "5. Ask How the Project Will Be Managed",
    text: "Good project communication can prevent many avoidable problems. Ask who will coordinate the work, how progress will be communicated, how site issues will be handled, and how decisions or changes will be documented.",
  },
  {
    title: "6. Review Materials and Work Quality",
    text: "Discuss the materials expected for the project and how their quality will be checked. For important construction elements, the contractor should be able to explain what materials are being proposed and how the work will be inspected during construction.",
  },
];

const checklist = [
  "Relevant legal and professional credentials",
  "Experience with similar residential work",
  "Clearly defined scope of work",
  "Transparent pricing and payment stages",
  "Clear project communication",
  "Material and workmanship expectations",
  "Process for handling changes",
  "Written project documentation",
];

export default function ContractorGuidePage() {
  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen pb-24">
      {/* Header */}
      <section className="relative w-full bg-[#0F172A] pt-12 pb-16 border-b border-[#E2E8F0]/10 overflow-hidden">
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

        <div className="max-w-4xl mx-auto w-full px-4 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#94A3B8] hover:text-[#D4A72C] mb-6 group transition-colors"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <span className="block text-xs font-bold uppercase tracking-widest text-[#D4A72C] mb-3">
            Contractor Guide
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight leading-tight">
            How to Choose a Construction Contractor in Ethiopia
          </h1>

          <p className="mt-5 max-w-2xl text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
            A practical checklist for property owners comparing contractors
            before starting a residential construction or renovation project.
          </p>

          <div className="flex flex-wrap items-center gap-5 text-xs text-[#94A3B8] mt-6 pt-6 border-t border-[#1E293B]">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[#D4A72C]" />6 min read
            </span>

            <span>Sep 10, 2026</span>

            <span>Contractor Guide</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto w-full px-4 mt-12 space-y-10">
        {/* Featured Image */}
        <div className="relative w-full h-72 sm:h-[400px] border-4 sm:border-8 border-[#D4A72C] shadow-xl bg-[#1E293B] overflow-hidden">
          <Image
            src="/images/How to Choose.png"
            alt="Construction contractor selection guide"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover object-center"
          />
        </div>

        {/* Article */}
        <article className="bg-white border border-[#E2E8F0] p-6 sm:p-10 shadow-sm">
          {/* Introduction */}
          <div className="border-l-4 border-[#D4A72C] pl-4 py-1 bg-[#F8FAFC]">
            <p className="text-sm text-[#334155] leading-relaxed">
              Choosing a contractor is an important decision because the
              contractor can influence the quality, cost, schedule, and overall
              experience of a construction project. A structured comparison can
              help you identify important questions before making a commitment.
            </p>
          </div>

          {/* Sections */}
          <div className="mt-10 space-y-10">
            {guideSections.map((section) => (
              <section key={section.title} className="space-y-3">
                <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#0F172A]">
                  {section.title}
                </h2>

                <p className="text-sm text-[#334155] leading-7">
                  {section.text}
                </p>
              </section>
            ))}
          </div>

          {/* Checklist */}
          <div className="mt-12 pt-10 border-t border-[#E2E8F0]">
            <div className="bg-[#F8FAFC] border-l-2 border-[#0F172A] p-6">
              <h2 className="text-sm font-black uppercase tracking-wider text-[#0F172A] mb-5">
                Contractor Selection Checklist
              </h2>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {checklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#475569]"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#D4A72C] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mt-10 space-y-4">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#0F172A]">
              The Goal Is a Clear Agreement
            </h2>

            <p className="text-sm text-[#334155] leading-7">
              The right contractor is not necessarily the contractor with the
              lowest price. Look for a combination of relevant experience, clear
              documentation, realistic scope, transparent communication, and a
              process that gives you a clear understanding of what will happen
              next.
            </p>

            <p className="text-sm text-[#334155] leading-7">
              Before signing an agreement, make sure important project decisions
              are documented and that both sides understand the scope,
              responsibilities, costs, and expected process.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-10 pt-8 border-t border-[#E2E8F0]">
            <Disclaimer message="This article is part of a fictional SeraBuild portfolio project and is provided for general educational purposes. Licensing, permitting, contractual, and technical requirements can vary by project and jurisdiction. Verify current requirements with the relevant Ethiopian authorities and qualified professionals before making project decisions." />
          </div>
        </article>

        {/* CTA */}
        <div className="bg-[#0F172A] p-7 sm:p-9 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-7">
            <div className="max-w-2xl">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4A72C] mb-3">
                Planning a Project?
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                Understand the Work Before It Starts.
              </h2>

              <p className="mt-3 text-sm text-[#CBD5E1] leading-relaxed">
                Explore SeraBuilds residential construction, renovation, and
                waterproofing services to understand the types of work involved.
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
