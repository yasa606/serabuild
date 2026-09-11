// app/blog/managing-moisture-addis-ababa-rainy-season/page.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, User, FileText, CheckCircle2 } from "lucide-react";
import Disclaimer from "@/components/shared/disclaimer";

export const metadata = {
  title:
    "Managing Moisture Risks During the Ethiopian Rainy Season | SeraBuild",
  description:
    "A technical structural overview detailing proactive engineering workflows, sub-grade membranes, and foundation protection measures for heavy rainfall.",
};

export default function MoistureManagementPage() {
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
            Structural Engineering
          </span>
          <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            Managing Moisture Risks During the Ethiopian Rainy Season
          </h1>
          <div className="flex gap-4 text-xs font-mono text-[#64748B] mt-4 pt-4 border-t border-[#1E293B]">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-[#D4A72C]" /> 5 Min Read
            </span>
            <span className="flex items-center gap-1">
              <User className="h-4 w-4" /> Engineering Review Board
            </span>
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 mt-12 space-y-8">
        <div className="relative w-full h-70 sm:h-100 border-4 sm:border-8 border-[#D4A72C] shadow-xl overflow-hidden bg-[#1E293B]">
          <Image
            src="/images/Moisture Risks During the Ethiopian Rainy.png"
            alt="Moisture insulation management and structural waterproofing layers"
            fill
            className="object-cover"
          />
        </div>
        <article className="bg-white border border-[#E2E8F0] p-6 sm:p-10 shadow-sm space-y-6 text-sm text-[#111827] leading-relaxed">
          <h2 className="text-lg font-black uppercase text-[#0F172A] flex items-center gap-2">
            <FileText className="h-4 w-4 text-[#D4A72C]" /> Foundation
            Insulation & Protection Protocols
          </h2>
          <p>
            Heavy seasonal rain periods across high-elevation cities like Addis
            Ababa demand specialized subgrade design models to intercept
            moisture before it degrades concrete porous cells.
          </p>
          <h3 className="font-bold text-[#0F172A] uppercase text-xs tracking-wider">
            Defensive Engineering Controls:
          </h3>
          <ul className="space-y-2 pl-4">
            <li className="flex items-start gap-2">
              <strong>SBS Modified Sheets:</strong> Standard high-elasticity
              bituminous rolls torched down over foundations.
            </li>
            <li className="flex items-start gap-2">
              <strong>Perimeter Drainage Channels:</strong> Active gravel-filled
              paths designed to redirect bulk water away efficiently.
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
