// app/blog/managing-moisture-addis-ababa-rainy-season/page.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import Disclaimer from "@/components/shared/disclaimer";

export const metadata = {
  title:
    "Managing Moisture Risks During the Ethiopian Rainy Season | SeraBuild",
  description:
    "Practical guidance for identifying and reducing moisture problems in homes during the Ethiopian rainy season, including roofs, walls, bathrooms, terraces, and drainage.",
};

const moistureSources = [
  {
    title: "Roof and Terrace Water",
    text: "Blocked drainage, damaged waterproofing, poor detailing, or cracks can allow rainwater to enter through roofs and terraces. Water stains on ceilings or upper walls may be an early warning sign.",
  },
  {
    title: "Bathroom and Wet Areas",
    text: "Bathrooms are exposed to frequent water use. Poor sealing around floors, walls, pipes, and drainage areas can allow moisture to move into surrounding finishes or lower levels.",
  },
  {
    title: "Wall and Window Penetration",
    text: "Rainwater can enter through cracks, poorly sealed openings, damaged external finishes, or joints around windows and other building elements.",
  },
  {
    title: "Ground and Surface Water",
    text: "Water accumulating near a building can increase moisture exposure around lower walls and foundations. Surface drainage should direct water away from vulnerable areas rather than allowing it to collect against the building.",
  },
];

const preventionSteps = [
  "Keep roof and terrace drainage paths clear.",
  "Inspect visible cracks and damaged external finishes.",
  "Check seals around windows, pipes, and other openings.",
  "Look for recurring damp marks on walls and ceilings.",
  "Make sure surface water can drain away from the building.",
  "Investigate the source of recurring leaks instead of only covering the visible stain.",
];

export default function MoistureManagementPage() {
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
            Waterproofing Guide
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight">
            Managing Moisture Risks During the Ethiopian Rainy Season
          </h1>

          <p className="mt-5 max-w-2xl text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
            Common sources of moisture problems and practical steps property
            owners can take to identify and reduce water-related damage.
          </p>

          <div className="flex flex-wrap items-center gap-5 text-xs text-[#94A3B8] mt-6 pt-6 border-t border-[#1E293B]">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[#D4A72C]" />5 min read
            </span>

            <span>Sep 11, 2026</span>

            <span>Waterproofing Guide</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 mt-12 space-y-10">
        {/* Featured Image */}
        <div className="relative w-full h-72 sm:h-[400px] border-4 sm:border-8 border-[#D4A72C] shadow-xl overflow-hidden bg-[#1E293B]">
          <Image
            src="/images/Moisture Risks During the Ethiopian Rainy.png"
            alt="Managing moisture and waterproofing risks in residential buildings"
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
              Seasonal rain can expose weaknesses that may not be obvious during
              dry periods. Leaks, damp walls, ceiling stains, and standing water
              are often symptoms of a problem that needs to be traced back to
              its source.
            </p>
          </div>

          {/* Why moisture matters */}
          <section className="mt-10 space-y-4">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#0F172A]">
              Why Moisture Problems Should Be Investigated Early
            </h2>

            <p className="text-sm text-[#334155] leading-7">
              Persistent moisture can damage finishes, encourage mold growth,
              deteriorate vulnerable materials, and create recurring repair
              costs. The visible stain is not always the location where water
              entered the building.
            </p>

            <p className="text-sm text-[#334155] leading-7">
              For this reason, simply repainting a damp wall may hide the
              symptom without addressing the underlying source.
            </p>
          </section>

          {/* Common sources */}
          <section className="mt-12 space-y-6">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#0F172A]">
              Common Sources of Moisture
            </h2>

            <div className="space-y-6">
              {moistureSources.map((source) => (
                <div
                  key={source.title}
                  className="border-l-2 border-[#D4A72C] pl-5"
                >
                  <h3 className="text-sm font-black uppercase tracking-tight text-[#0F172A]">
                    {source.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#475569] leading-7">
                    {source.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Prevention */}
          <section className="mt-12 pt-10 border-t border-[#E2E8F0]">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#0F172A]">
              Practical Prevention and Inspection
            </h2>

            <p className="mt-3 text-sm text-[#475569] leading-7">
              Regular inspection can help identify moisture problems before they
              become more difficult to repair. Property owners can start with a
              simple visual check:
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {preventionSteps.map((step) => (
                <li
                  key={step}
                  className="flex items-start gap-3 text-sm text-[#475569]"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#D4A72C] shrink-0 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* When professional assessment is useful */}
          <section className="mt-12 pt-10 border-t border-[#E2E8F0] space-y-4">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#0F172A]">
              When a Professional Assessment May Be Needed
            </h2>

            <p className="text-sm text-[#334155] leading-7">
              Recurring leaks, extensive dampness, water entering after every
              rainfall, or moisture appearing in areas away from the obvious
              source may require a closer inspection.
            </p>

            <p className="text-sm text-[#334155] leading-7">
              The appropriate repair depends on the cause. This could involve
              drainage improvements, sealing, repair of damaged finishes,
              waterproofing work, or correction of another building detail.
            </p>
          </section>

          {/* Conclusion */}
          <section className="mt-12 pt-10 border-t border-[#E2E8F0] space-y-4">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#0F172A]">
              Protect the Building by Finding the Source
            </h2>

            <p className="text-sm text-[#334155] leading-7">
              Good moisture management starts with understanding where water is
              coming from and why it is getting into the building. Regular
              inspection, clear drainage paths, appropriate waterproofing, and
              timely repairs can all contribute to better protection during
              periods of heavy rain.
            </p>
          </section>

          {/* Disclaimer */}
          <div className="mt-10 pt-8 border-t border-[#E2E8F0]">
            <Disclaimer message="This article is part of a fictional SeraBuild portfolio project and is provided for general educational purposes. Moisture problems can have different causes, and the appropriate repair depends on the specific building and site conditions. Consult a qualified construction or engineering professional when necessary." />
          </div>
        </article>

        {/* CTA */}
        <div className="bg-[#0F172A] p-7 sm:p-9 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-7">
            <div className="max-w-2xl">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4A72C] mb-3">
                Moisture & Water Protection
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                Dealing With a Water or Moisture Problem?
              </h2>

              <p className="mt-3 text-sm text-[#CBD5E1] leading-relaxed">
                Learn more about SeraBuild's waterproofing service and the types
                of residential moisture problems it is designed to address.
              </p>
            </div>

            <Link
              href="/services/waterproofing"
              className="inline-flex items-center justify-center gap-2 shrink-0 bg-[#D4A72C] text-[#0F172A] px-6 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-[#E0B83F] transition-colors"
            >
              Explore Waterproofing
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
