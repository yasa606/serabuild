// app/blog/page.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import Disclaimer from "@/components/shared/disclaimer";

export const metadata = {
  title: "Construction Guides & Home Improvement Tips | SeraBuild",
  description:
    "Practical guides on construction, home renovation, waterproofing, permits, contractor selection, and property improvement in Addis Ababa and Ethiopia.",
};

const blogPosts = [
  {
    slug: "how-to-choose-construction-contractor-ethiopia",
    title: "How to Choose a Construction Contractor in Ethiopia",
    summary:
      "Learn what to check before hiring a contractor, including experience, scope of work, communication, documentation, pricing, and project planning.",
    date: "Sep 10, 2026",
    readTime: "6 min read",
    category: "Contractor Guide",
    image: "/images/How to Choose.png",
  },
  {
    slug: "understanding-residential-zoning-addis-ababa",
    title: "Understanding Residential Zoning Laws in Addis Ababa",
    summary:
      "A practical introduction to residential permits, site requirements, setbacks, building height, and other planning considerations property owners should understand.",
    date: "Sep 11, 2026",
    readTime: "8 min read",
    category: "Permits & Planning",
    image: "/images/Residential Zoning Laws.png",
  },
  {
    slug: "managing-moisture-addis-ababa-rainy-season",
    title: "Managing Moisture Risks During the Ethiopian Rainy Season",
    summary:
      "Understand common sources of water intrusion and practical ways to reduce moisture problems in roofs, bathrooms, walls, terraces, and other vulnerable areas.",
    date: "Sep 11, 2026",
    readTime: "5 min read",
    category: "Waterproofing",
    image: "/images/Moisture Risks During the Ethiopian Rainy.png",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen">
      {/* Hero */}
      <section className="relative w-full bg-[#0F172A] py-16 sm:py-20 border-b border-[#E2E8F0]/10 overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-3 mb-5">
              <Link
                href="/"
                className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] hover:text-[#D4A72C] transition-colors"
              >
                Home
              </Link>

              <span aria-hidden="true" className="text-[#64748B] text-xs">
                /
              </span>

              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4A72C]">
                Blog
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-[0.95]">
              Construction Guides &{" "}
              <span className="text-[#D4A72C]">Home Improvement Tips.</span>
            </h1>

            <div className="mt-6 flex items-start gap-4 border-l-2 border-[#D4A72C] pl-4">
              <p className="text-sm sm:text-base text-[#E2E8F0] leading-relaxed max-w-2xl">
                Practical information to help property owners understand
                construction, renovation, waterproofing, planning, and
                maintenance decisions in Addis Ababa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Transparency Notice */}
        <div className="mb-12">
          <Disclaimer message="SeraBuild is a fictional portfolio project. The articles on this website are provided for educational and demonstration purposes and should not be treated as legal, engineering, cost, or construction advice for a specific property." />
        </div>

        {/* Section Heading */}
        <div className="max-w-2xl mb-10">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4A72C] mb-3">
            SeraBuild Resources
          </p>

          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0F172A]">
            Useful Information for Property Owners
          </h2>

          <p className="mt-3 text-sm text-[#475569] leading-relaxed">
            Explore practical guides covering common questions that come before,
            during, and after a residential construction or renovation project.
          </p>
        </div>

        {/* Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-[#E2E8F0] shadow-sm flex flex-col overflow-hidden group hover:border-[#D4A72C] hover:shadow-md transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-52 bg-[#1E293B] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Category */}
                <div className="absolute top-4 left-4 bg-[#0F172A]/95 border border-[#D4A72C]/40 text-white text-[9px] font-black uppercase tracking-wider px-3 py-1.5">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-4 text-[10px] font-mono text-[#64748B] mb-4">
                  <span className="flex items-center gap-1.5">
                    <Clock
                      aria-hidden="true"
                      className="h-3 w-3 text-[#D4A72C]"
                    />
                    {post.readTime}
                  </span>

                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-black uppercase text-[#0F172A] tracking-tight leading-tight group-hover:text-[#D4A72C] transition-colors">
                  {post.title}
                </h2>

                {/* Summary */}
                <p className="mt-4 text-sm text-[#475569] leading-relaxed line-clamp-4">
                  {post.summary}
                </p>

                {/* Read More */}
                <div className="mt-auto pt-6">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 border-t border-[#E2E8F0] pt-4 w-full text-[10px] font-black uppercase tracking-widest text-[#0F172A] hover:text-[#D4A72C] transition-colors"
                  >
                    Read Guide
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-[#0F172A] border border-[#1E293B] p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4A72C] mb-3">
                Planning a Project?
              </p>

              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                Have Questions About Your Property?
              </h2>

              <p className="mt-3 text-sm text-[#CBD5E1] leading-relaxed">
                Use the available resources to understand your options, then
                contact SeraBuild to describe the type of construction,
                renovation, or property improvement you are considering.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center gap-2 bg-[#D4A72C] text-[#0F172A] px-6 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-[#E0B83F] transition-colors"
              >
                Request a Quote
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center border border-[#475569] text-white px-6 py-3 text-[10px] font-black uppercase tracking-widest hover:border-[#D4A72C] hover:text-[#D4A72C] transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
