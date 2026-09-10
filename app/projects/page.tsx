// app/projects/page.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Box, Ruler, Layers, ShieldCheck } from "lucide-react";
import Disclaimer from "@/components/shared/disclaimer";

export const metadata = {
  title: "Residential Project Concepts Addis Ababa | SeraBuild Showcase",
  description:
    "Explore our technical residential project concepts for Addis Ababa. Review full architectural planning data, villa concepts, duplex structures, and material specs.",
};

const projectConcepts = [
  {
    slug: "three-bedroom-house",
    title: "3-Bedroom Residential Concept",
    location: "Bole Sub-City, Addis Ababa",
    area: "240 SqM Footprint",
    status: "Simulation Blueprint Profile",
    description:
      "A rigorous structural design mapping modern residential efficiency. Engineered for optimized local material sourcing and structural resilience under regional seismic soil configurations.",
    image: "/images/3-Bedroom Residential Concept.png",
    specs: [
      "Reinforced Concrete Framework",
      "Optimized Core Masonry",
      "Integrated Dual-Layer Waterproofing",
    ],
  },
  {
    slug: "modern-minimalist-villa",
    title: "Modern Minimalist Villa Model",
    location: "Yeka Sub-City, Addis Ababa",
    area: "380 SqM Footprint",
    status: "Simulation Blueprint Profile",
    description:
      "An upscale single-family residential layout modeling thermal massing efficiency for Addis Ababa's climate. Features expansive glazing paths optimized with reinforced solar lintels.",
    image: "/images/Modern Minimalist Villa Model.png",
    specs: [
      "Post-Tensioned Concrete Slabs",
      "High-Performance Energy Glazing",
      "Sub-Grade Moisture Protection",
    ],
  },
  {
    slug: "multi-family-duplex",
    title: "Multi-Family Urban Duplex Concept",
    location: "Lebu / Lafto, Addis Ababa",
    area: "450 SqM Footprint",
    status: "Simulation Blueprint Profile",
    description:
      "A high-density twin-unit residential concept engineered for narrow urban parcels. Focuses on acoustic isolation barriers and multi-tier structural water drainage routing.",
    image: "/images/Multi-Family Urban Duplex Concept.png",
    specs: [
      "Acoustic Double-Wall Masonry",
      "Integrated Rainwater Management",
      "Monolithic Foundation Casting",
    ],
  },
];

export default function ProjectsHubPage() {
  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen">
      {/* 1. SECTOR HERO BANNER */}
      <section className="relative w-full bg-[#0F172A] py-16 sm:py-24 border-b border-[#E2E8F0]/10 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Link
                href="/"
                className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] hover:text-[#D4A72C] transition-colors"
              >
                Home
              </Link>
              <span className="text-[#64748B] text-xs">/</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4A72C]">
                Projects
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-[0.95]">
              Residential Project <br />
              <span className="text-[#D4A72C]">Concepts & Briefs.</span>
            </h1>

            <div className="mt-6 flex items-start gap-4 border-l-2 border-[#D4A72C] pl-4">
              <p className="text-sm sm:text-base text-[#E2E8F0] leading-relaxed max-w-xl">
                Transparent framework blueprints mapping building plans across
                Ethiopia. We replace synthetic reviews with technical data
                modeling structural engineering, spatial allocation, and precise
                scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE PORTFOLIO SHOWCASE MAIN MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mb-12">
          <Disclaimer message="Ground Rules Adherence: The following section documents conceptual layout planning briefs modeled specifically for architectural case validation in Addis Ababa." />
        </div>

        {/* Dynamic Project Loop (Renders sequentially with standard spacing) */}
        <div className="space-y-16">
          {projectConcepts.map((project) => (
            <article
              key={project.slug}
              className="bg-white border border-[#E2E8F0] grid grid-cols-1 lg:grid-cols-12 shadow-sm relative group hover:border-[#D4A72C] transition-all duration-300"
            >
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 h-4 w-4 border-b border-l border-[#E2E8F0] bg-[#F8FAFC] group-hover:border-[#D4A72C] transition-colors"
              />

              {/* LEFT COLUMN: Clear Image Element */}
              <div className="relative lg:col-span-6 min-h-[320px] sm:min-h-[420px] bg-[#1E293B] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} architectural concept visualization for Addis Ababa residential projects`}
                  fill
                  sizes="(max-w-1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* RIGHT COLUMN: Engineering Details Layout */}
              <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider bg-[#0F172A] text-white border border-[#1E293B]">
                      <Box className="h-3 w-3 text-[#D4A72C]" />
                      {project.status}
                    </span>
                    <span className="text-xs font-medium text-[#64748B] font-mono">
                      {project.location}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#0F172A] tracking-tight group-hover:text-[#D4A72C] transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-xs font-mono text-[#64748B] mt-1 flex items-center gap-1.5">
                    <Ruler className="h-3.5 w-3.5 text-[#D4A72C]" /> Scale:{" "}
                    {project.area}
                  </p>

                  <p className="mt-5 text-sm text-[#111827] leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-[#64748B] mb-3 flex items-center gap-1.5">
                      <Layers className="h-3.5 w-3.5 text-[#D4A72C]" />{" "}
                      Engineered Directives:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.specs.map((spec, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-xs text-[#111827] font-mono"
                        >
                          <span className="h-1.5 w-1.5 bg-[#D4A72C] shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E2E8F0]">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex h-11 items-center justify-center bg-[#0F172A] group-hover:bg-[#D4A72C] text-white group-hover:text-[#0F172A] px-6 text-[10px] font-bold uppercase tracking-wider transition-all duration-300 w-full sm:w-auto gap-3"
                  >
                    View Technical Model
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      strokeWidth={2}
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. PERSISTENT LOWER ACTION HUB COMPONENT */}
      <section className="bg-[#1E293B] border-t border-[#E2E8F0]/10 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-3 bg-[#0F172A] inline-block mb-4 border border-[#D4A72C]/20">
            <ShieldCheck className="h-6 w-6 text-[#D4A72C]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            Ready to Map Out Your Project Requirements?
          </h2>
          <p className="mt-3 text-sm text-[#64748B] max-w-xl mx-auto leading-relaxed">
            Translate this architectural engineering framework case into
            real-world structural milestones for your development site in Addis
            Ababa.
          </p>
          <div className="mt-8">
            <Link
              href="/request-quote"
              className="inline-flex h-11 items-center justify-center bg-[#D4A72C] hover:bg-[#b88e21] text-[#0F172A] px-8 text-[10px] font-bold uppercase tracking-widest transition-all shadow-md"
            >
              Initialize Quote Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
