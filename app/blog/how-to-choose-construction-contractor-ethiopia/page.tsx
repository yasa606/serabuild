// app/blog/how-to-choose-construction-contractor-ethiopia/page.tsx
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Clock,
  User,
  Bookmark,
  FileText,
  CheckCircle2,
} from "lucide-react";
import Disclaimer from "@/components/shared/disclaimer";

export const metadata = {
  title:
    "How to Choose a Construction Contractor in Ethiopia | Structural Guide",
  description:
    "Expert framework detailing regulatory vetting mechanisms, professional GC licensing criteria, and compliance validation checks for Ethiopian residential builds.",
};

const guideSections = [
  {
    title: "1. Verify Professional GC Licensing Grade",
    text: "Before committing resources, verify the contractor's formal grade allocation registered with the Ethiopian Ministry of Innovation and Technology or Ministry of Urban Development and Infrastructure. Ensure their corporate tier limits align properly with your specific residential footprint scale parameters.",
  },
  {
    title: "2. Audit Local Equipment Logistics & Staffing",
    text: "Review the contractor's internal machine capabilities. Ensure they possess dedicated access to high-tolerance concrete mixers, structural scaffolding networks, and moisture-testing equipment necessary to process your foundation phases safely without logistical delay loops.",
  },
  {
    title: "3. Evaluate Material Sourcing Protocols",
    text: "Given volatile supply lines across Addis Ababa nodes, evaluate their cement procurement channels and steel rebar relationships. Authoritative partners will provide clear material submittal frameworks detailing raw origin parameters.",
  },
];

export default function ContractorGuidePage() {
  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen pb-24">
      {/* Article Header Layer */}
      <section className="relative w-full bg-[#0F172A] pt-12 pb-16 border-b border-[#E2E8F0]/10">
        <div className="max-w-4xl mx-auto w-full px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#64748B] hover:text-[#D4A72C] mb-6 group"
          >
            <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />{" "}
            Back to Blog Index
          </Link>

          <span className="block text-xs font-bold uppercase tracking-widest text-[#D4A72C] mb-3 font-mono">
            Regulatory & Procurement Guide
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight leading-tight">
            How to Choose a Construction Contractor in Ethiopia
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#64748B] mt-6 pt-6 border-t border-[#1E293B]">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[#D4A72C]" /> 6 Min Read
            </span>
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" /> Editorial Engineering Board
            </span>
            <span className="flex items-center gap-1.5">
              <Bookmark className="h-4 w-4" /> Target Parameter Profile
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Layout Container */}
      <div className="max-w-4xl mx-auto w-full px-4 mt-12 grid grid-cols-1 gap-10">
        {/* Full Exposure Unshaded Editorial Feature Image Asset */}
        <div className="relative w-full h-70 sm:h-100 border-4 sm:border-8 border-[#D4A72C] shadow-xl bg-[#1E293B] overflow-hidden">
          <Image
            src="/images/How to Choose.png"
            alt="Vetting and contracting professional construction services across Addis Ababa architectural sectors"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Article Body Section */}
        <article className="bg-white border border-[#E2E8F0] p-6 sm:p-10 shadow-sm space-y-8">
          <div className="border-l-4 border-[#D4A72C] pl-4 py-1 bg-[#F8FAFC]">
            <p className="text-sm italic text-[#111827] leading-relaxed">
              Evaluating local building entities requires a disciplined
              checklist. Relying strictly on superficial reviews can introduce
              execution errors. Use this structured guide to minimize risk.
            </p>
          </div>

          <div className="space-y-6 text-sm text-[#111827] leading-relaxed">
            {guideSections.map((sec, idx) => (
              <section key={idx} className="space-y-3">
                <h2 className="text-lg font-black uppercase tracking-tight text-[#0F172A] flex items-center gap-2">
                  <FileText className="h-4 w-4 text-[#D4A72C]" /> {sec.title}
                </h2>
                <p className="text-sm font-normal text-[#111827] pl-6">
                  {sec.text}
                </p>
              </section>
            ))}
          </div>

          {/* Core Summary Callout Table Wrapper */}
          <div className="mt-8 pt-8 border-t border-[#E2E8F0] bg-[#F8FAFC] p-6 border-l-2 border-[#0F172A]">
            <h3 className="text-xs font-black uppercase tracking-wider text-[#0F172A] mb-3">
              Key Vetting Criteria Checklist:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Active Legal Licensing Records",
                "Verifiable Bank Capacity Bounds",
                "Raw Sourcing Contingency Plans",
                "Monolithic Shoring Equipment Ownership",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-xs text-[#64748B] font-mono"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#D4A72C] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-[#E2E8F0]">
            <Disclaimer message="Case Analysis Standard: Information outlined in this guide serves as an illustrative layout exercise matching localized structural building standards." />
          </div>
        </article>

        {/* Lower conversion trigger box */}
        <div className="bg-[#1E293B] border-2 border-[#D4A72C] p-6 sm:p-8 text-white text-center">
          <h3 className="text-xl font-black uppercase tracking-tight">
            Need to Evaluate Your Site Plan Parameters?
          </h3>
          <p className="text-xs text-[#64748B] mt-2 font-mono max-w-xl mx-auto">
            Apply these systematic vetting frameworks directly to your
            residential plot calculation parameters across local zoning nodes.
          </p>
          <div className="mt-6">
            <Link
              href="/request-quote"
              className="inline-flex h-10 items-center justify-center bg-[#D4A72C] text-white font-bold uppercase tracking-widest text-[10px] px-6 hover:bg-[#b88e21] transition-all"
            >
              Open Evaluation Tool
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
