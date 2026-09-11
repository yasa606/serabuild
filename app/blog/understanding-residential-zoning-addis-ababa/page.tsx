// app/blog/understanding-residential-zoning-addis-ababa/page.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, User, FileText, CheckCircle2 } from "lucide-react";
import Disclaimer from "@/components/shared/disclaimer";

export const metadata = {
  title:
    "Understanding Residential Zoning Laws in Addis Ababa | SeraBuild Guide",
  description:
    "A regulatory overview modeling set-backs, plot coverage restrictions, and height allowance parameters for building residential infrastructure under municipal laws.",
};

export default function ZoningLawsPage() {
  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen pb-24">
      <section className="bg-[#0F172A] pt-12 pb-16 text-white border-b border-[#E2E8F0]/10">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#64748B] hover:text-[#D4A72C] mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog Index
          </Link>
          <span className="block text-xs font-mono text-[#D4A72C] uppercase tracking-wider mb-2">
            Zoning & Compliance
          </span>
          <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            Understanding Residential Zoning Laws in Addis Ababa
          </h1>
          <div className="flex gap-4 text-xs font-mono text-[#64748B] mt-4 pt-4 border-t border-[#1E293B]">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-[#D4A72C]" /> 8 Min Read
            </span>
            <span className="flex items-center gap-1">
              <User className="h-4 w-4" /> Regulatory Review Board
            </span>
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 mt-12 space-y-8">
        <div className="relative w-full h-70 sm:h-100 border-4 sm:border-8 border-[#D4A72C] shadow-xl overflow-hidden bg-[#1E293B]">
          <Image
            src="/images/Residential Zoning Laws.png"
            alt="Addis Ababa building municipal plot regulatory guidelines"
            fill
            className="object-cover"
          />
        </div>
        <article className="bg-white border border-[#E2E8F0] p-6 sm:p-10 shadow-sm space-y-6 text-sm text-[#111827] leading-relaxed">
          <h2 className="text-lg font-black uppercase text-[#0F172A] flex items-center gap-2">
            <FileText className="h-4 w-4 text-[#D4A72C]" /> Navigating Local
            Municipal Thresholds
          </h2>
          <p>
            Developing residential units within municipal nodes requires strict
            adherence to localized spatial parameters. Sub-cities enforce
            specific built-up ratios to control neighborhood density metrics
            cleanly.
          </p>
          <h3 className="font-bold text-[#0F172A] uppercase text-xs tracking-wider">
            Key Regulatory Baseline Parameters:
          </h3>
          <ul className="space-y-2 pl-4">
            <li className="flex items-start gap-2">
              <strong>Boundary Setbacks:</strong> Structures must respect
              specific clear distances from access roads and adjacent plots.
            </li>
            <li className="flex items-start gap-2">
              <strong>Floor Area Ratios (FAR):</strong> Total built space
              constraints calculated based on raw plot sizes.
            </li>
          </ul>
          <div className="pt-6 border-t border-[#E2E8F0]">
            <Disclaimer />
          </div>
        </article>
      </div>
    </div>
  );
}
