// components/home/services-section.tsx

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Paintbrush, DropletOff } from "lucide-react";

const services = [
  {
    number: "01",
    title: "House Construction",
    description:
      "Residential construction from the early planning stages through structural work, building work, and finishing.",
    href: "/services/house-construction",
    icon: Building2,
    image: "/images/house_construction.png",
    imageAlt: "Residential house construction",
  },
  {
    number: "02",
    title: "Home Renovation",
    description:
      "Practical renovation solutions for improving existing spaces, updating layouts, and upgrading finishes.",
    href: "/services/home-renovation",
    icon: Paintbrush,
    image: "/images/re.png",
    imageAlt: "Home renovation and interior improvement",
  },
  {
    number: "03",
    title: "Waterproofing Systems",
    description:
      "Solutions for reducing moisture problems and protecting roofs, bathrooms, terraces, and other vulnerable areas.",
    href: "/services/waterproofing",
    icon: DropletOff,
    image: "/images/proofing.png",
    imageAlt: "Residential waterproofing work",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-[#E2E8F0] bg-[#F8FAFC] py-20 sm:py-24">
      {/* Background architectural grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `
            linear-gradient(#0F172A 1px, transparent 1px),
            linear-gradient(90deg, #0F172A 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Background architectural circle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-24 hidden h-[500px] w-[500px] rounded-full border border-[#D4A72C]/10 lg:block"
      />

      {/* Main container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto mb-14 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#D4A72C]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#64748B] sm:text-xs">
              What We Do
            </span>
          </div>

          <h2 className="max-w-2xl text-3xl font-black uppercase leading-[0.95] tracking-[-0.03em] text-[#0F172A] sm:text-4xl lg:text-5xl">
            Practical Construction
            <br />
            <span className="text-[#D4A72C]">Solutions.</span>
          </h2>

          <div className="mt-6 flex items-start gap-5">
            <div className="mt-1 h-10 w-0.5 shrink-0 bg-[#D4A72C]" />

            <p className="max-w-xl text-sm leading-7 text-[#64748B] sm:text-base">
              From new residential construction to renovation and waterproofing,
              we focus on clear scope, practical solutions, and a disciplined
              project process.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative flex flex-col overflow-hidden border border-[#E2E8F0] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A72C] hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
              >
                {/* Top gold hover line */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-[3px] w-0 bg-[#D4A72C] transition-all duration-500 group-hover:w-full"
                />

                {/* Card header */}
                <div className="flex items-center justify-between border-b border-[#E2E8F0] px-7 py-5">
                  <span className="text-[10px] font-black tracking-[0.2em] text-[#94A3B8] transition-colors duration-300 group-hover:text-[#D4A72C]">
                    {service.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="h-2 w-2 border-b border-r border-[#D4A72C]"
                  />
                </div>

                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-[#1E293B]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-[#0F172A]/5 transition-all duration-300 group-hover:bg-transparent" />
                </div>

                {/* Card content */}
                <div className="relative flex flex-1 flex-col px-7 py-8">
                  {/* Floating icon */}
                  <div className="absolute -top-7 left-7 z-10 flex h-14 w-14 items-center justify-center bg-[#0F172A] transition-all duration-300 group-hover:bg-[#D4A72C]">
                    <Icon
                      className="h-6 w-6 text-[#D4A72C] transition-colors duration-300 group-hover:text-[#0F172A]"
                      strokeWidth={1.5}
                    />

                    <span
                      aria-hidden="true"
                      className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-[#D4A72C] transition-colors duration-300 group-hover:border-[#0F172A]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 max-w-[270px] text-xl font-black uppercase leading-tight tracking-[-0.02em] text-[#0F172A]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 max-w-[300px] text-sm leading-6 text-[#64748B]">
                    {service.description}
                  </p>

                  {/* Link */}
                  <div className="mt-auto pt-8">
                    <Link
                      href={service.href}
                      className="inline-flex w-full items-center gap-3 border-t border-[#E2E8F0] pt-5 text-[10px] font-black uppercase tracking-[0.16em] text-[#0F172A] transition-colors duration-300 hover:text-[#D4A72C]"
                    >
                      Explore Service
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        strokeWidth={1.8}
                      />
                    </Link>
                  </div>
                </div>

                {/* Bottom architectural corner */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-[#E2E8F0] transition-colors duration-300 group-hover:border-[#D4A72C]"
                />
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-[#E2E8F0] pt-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#94A3B8]">
              Need a different solution?
            </p>

            <p className="mt-1 text-xs text-[#64748B]">
              Every project begins with understanding the scope and property.
            </p>
          </div>

          <Link
            href="/request-quote"
            className="group inline-flex h-11 items-center gap-3 bg-[#0F172A] px-5 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#D4A72C] hover:text-[#0F172A]"
          >
            Start a Project
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
