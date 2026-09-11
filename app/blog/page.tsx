// app/blog/page.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, User } from "lucide-react";
import Disclaimer from "@/components/shared/disclaimer";

export const metadata = {
  title: "Insights & Construction Guides | SeraBuild Blog",
  description:
    "Review technical analysis briefs, regulatory frameworks, and expert guidance on residential building and home renovation across Addis Ababa, Ethiopia.",
};

const blogPosts = [
  {
    slug: "how-to-choose-construction-contractor-ethiopia",
    title: "How to Choose a Construction Contractor in Ethiopia",
    keyword: "how to choose a construction contractor",
    summary:
      "A rigorous assessment framework mapping technical validation checks, compliance steps, and resource auditing criteria needed to evaluate building contractors safely.",
    date: "Sep 10, 2026",
    readTime: "6 Min Read",
    category: "Regulatory & Vetting",
    image: "/images/How to Choose.png",
  },
  {
    slug: "understanding-residential-zoning-addis-ababa",
    title: "Understanding Residential Zoning Laws in Addis Ababa",
    keyword: "construction company Addis Ababa laws",
    summary:
      "An overview of local building permits, setbacks, and height limitations enforced across sub-cities like Bole, Yeka, and Nefas Silk.",
    date: "Sep 11, 2026",
    readTime: "8 Min Read",
    category: "Zoning & Permits",
    image: "/images/Residential Zoning Laws.png",
  },
  {
    slug: "managing-moisture-addis-ababa-rainy-season",
    title: "Managing Moisture Risks During the Ethiopian Rainy Season",
    keyword: "waterproofing Addis Ababa damage",
    summary:
      "A technical look at sub-grade protection and structural drainage planning needed to defend residential foundations during heavy seasonal precipitation cycles.",
    date: "Sep 11, 2026",
    readTime: "5 Min Read",
    category: "Structural Engineering",
    image: "/images/Moisture Risks During the Ethiopian Rainy.png",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen">
      <section className="relative w-full bg-[#0F172A] py-16 border-b border-[#E2E8F0]/10 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
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
                Blog
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-[0.95]">
              Technical Insights & <br />
              <span className="text-[#D4A72C]">Construction Guides.</span>
            </h1>

            <div className="mt-6 flex items-start gap-4 border-l-2 border-[#D4A72C] pl-4">
              <p className="text-sm text-[#E2E8F0] leading-relaxed max-w-xl">
                Authoritative reference frameworks covering municipal zoning
                codes, contract engineering safeguards, and structural material
                logistics across regional construction nodes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mb-12">
          <Disclaimer message="Editorial Case Context: The documentation provided here functions as architectural research simulations designed to model localized search relevance parameters." />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-[#E2E8F0] shadow-sm flex flex-col justify-between overflow-hidden relative group hover:border-[#D4A72C] transition-all duration-300"
            >
              <div>
                <div className="relative w-full h-52 bg-[#1E293B] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={`${post.title} analytical framework`}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#0F172A] border border-[#D4A72C]/30 text-white text-[9px] font-black uppercase tracking-wider px-2 py-1">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-[10px] font-mono text-[#64748B] mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-[#D4A72C]" />{" "}
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" /> Technical Review
                    </span>
                  </div>

                  <h2 className="text-xl font-black uppercase text-[#0F172A] tracking-tight group-hover:text-[#D4A72C] transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <span className="block text-[9px] font-mono text-[#64748B] mt-2 bg-[#F8FAFC] px-2 py-0.5 border border-[#E2E8F0] inline-block">
                    SEO Target: {post.keyword}
                  </span>

                  <p className="mt-4 text-xs text-[#111827] leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 mt-auto">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 border-t border-[#E2E8F0] pt-4 w-full text-[10px] font-black uppercase tracking-widest text-[#0F172A] hover:text-[#D4A72C] transition-colors"
                >
                  Read Analytical Article{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
