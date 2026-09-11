// app/about/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ClipboardCheck,
  HardHat,
  House,
  MapPin,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import Disclaimer from "@/components/shared/disclaimer";

export const metadata = {
  title:
    "About SeraBuild | Residential Construction & Renovation in Addis Ababa",
  description:
    "Learn about SeraBuild, a portfolio-based residential construction and home renovation concept focused on clear processes, quality workmanship, waterproofing, finishing, and transparent project planning in Addis Ababa.",
};

const coreServices = [
  {
    icon: <House className="h-5 w-5" />,
    title: "Residential Construction",
    description:
      "A structured approach to house construction, residential building work, extensions, and project coordination.",
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: "Home Renovation",
    description:
      "Planning and organizing renovation work including kitchens, bathrooms, rooms, interiors, and property improvements.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Waterproofing & Finishing",
    description:
      "Focused solutions for waterproofing, painting, tiling, flooring, ceilings, and other residential finishing work.",
  },
];

const principles = [
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: "Clear Scope",
    description:
      "Projects begin with a clear understanding of the requested work, site conditions, materials, and expected deliverables.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Transparent Planning",
    description:
      "The project structure is designed to make decisions, assumptions, and cost considerations easier to understand.",
  },
  {
    icon: <HardHat className="h-5 w-5" />,
    title: "Technical Focus",
    description:
      "Construction decisions are presented with attention to practical site execution, structural requirements, materials, and finishing quality.",
  },
  {
    icon: <BadgeCheck className="h-5 w-5" />,
    title: "Quality Mindset",
    description:
      "The framework emphasizes inspection, coordination, workmanship, and verification throughout the construction process.",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full bg-[#F8FAFC] min-h-screen pb-24">
      {/* =========================================================
          1. HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#0F172A]">
        {/* Subtle technical grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Decorative gold line */}
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-px bg-[#D4A72C]/20"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex items-center gap-3"
            >
              <Link
                href="/"
                className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#94A3B8] transition-colors hover:text-[#D4A72C]"
              >
                Home
              </Link>

              <span className="text-[#475569]">/</span>

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D4A72C]">
                About
              </span>
            </nav>

            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              {/* Main heading */}
              <div className="lg:col-span-8">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D4A72C]" />

                  <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#D4A72C]">
                    SeraBuild · Addis Ababa
                  </span>
                </div>

                <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Residential Construction
                  <br />
                  <span className="text-[#D4A72C]">Built Around Clarity.</span>
                </h1>

                <p className="mt-7 max-w-2xl text-sm leading-7 text-[#CBD5E1] sm:text-base">
                  SeraBuild is a residential construction and home renovation
                  concept focused on making construction services easier to
                  understand, plan, and evaluate for property owners in Addis
                  Ababa.
                </p>
              </div>

              {/* Location / identity block */}
              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <div className="border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#D4A72C]/40 bg-[#D4A72C]/10">
                      <MapPin className="h-5 w-5 text-[#D4A72C]" />
                    </div>

                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#64748B]">
                        Primary Market
                      </p>

                      <p className="mt-1 text-sm font-bold text-white">
                        Addis Ababa, Ethiopia
                      </p>

                      <p className="mt-2 text-[11px] leading-5 text-[#94A3B8]">
                        Residential construction · Renovation · Finishing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. INTRODUCTION
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Main content */}
          <article className="lg:col-span-8">
            <div className="border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-10">
              <div className="mb-8">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4A72C]">
                  About SeraBuild
                </p>

                <h2 className="mt-2 text-2xl font-black tracking-tight text-[#0F172A] sm:text-3xl">
                  A clearer way to approach residential construction
                </h2>
              </div>

              <div className="space-y-5 text-sm leading-7 text-[#475569]">
                <p>
                  SeraBuild is a portfolio-based residential construction and
                  home improvement concept designed around the needs of
                  homeowners and property owners in Addis Ababa.
                </p>

                <p>
                  The service model brings together{" "}
                  <strong className="font-semibold text-[#0F172A]">
                    house construction, home renovation, interior finishing,
                    waterproofing, repairs, and construction consultation
                  </strong>{" "}
                  within a structured customer journey. The goal is to make it
                  easier for a property owner to understand the required work,
                  evaluate options, request an assessment, and move toward a
                  clearly defined project scope.
                </p>

                <p>
                  Rather than presenting construction as a collection of
                  disconnected services, SeraBuild organizes the experience
                  around a practical process: understand the requirement, assess
                  the site, define the scope, plan the work, execute, inspect,
                  and complete.
                </p>
              </div>

              {/* Internal SEO/service links */}
              <div className="mt-8 grid gap-3 border-t border-[#E2E8F0] pt-8 sm:grid-cols-2">
                <Link
                  href="/services/house-construction"
                  className="group flex items-center justify-between border border-[#E2E8F0] p-4 transition-all hover:border-[#D4A72C] hover:bg-[#FFFBEB]"
                >
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-wider text-[#0F172A]">
                      House Construction
                    </p>
                    <p className="mt-1 text-xs text-[#64748B]">
                      Explore the construction service
                    </p>
                  </div>

                  <ArrowRight className="h-4 w-4 text-[#D4A72C] transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/services/home-renovation"
                  className="group flex items-center justify-between border border-[#E2E8F0] p-4 transition-all hover:border-[#D4A72C] hover:bg-[#FFFBEB]"
                >
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-wider text-[#0F172A]">
                      Home Renovation
                    </p>
                    <p className="mt-1 text-xs text-[#64748B]">
                      Explore renovation services
                    </p>
                  </div>

                  <ArrowRight className="h-4 w-4 text-[#D4A72C] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </article>

          {/* Side identity card */}
          <aside className="lg:col-span-4">
            <div className="h-full bg-[#1E293B] p-6 text-white sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center border border-[#D4A72C]/40 bg-[#0F172A]">
                <Building2 className="h-5 w-5 text-[#D4A72C]" />
              </div>

              <p className="mt-7 text-[10px] font-black uppercase tracking-[0.2em] text-[#64748B]">
                Service Model
              </p>

              <h3 className="mt-2 text-xl font-black uppercase tracking-tight">
                Residential
                <br />
                <span className="text-[#D4A72C]">Construction</span>
              </h3>

              <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                <div className="flex justify-between gap-4">
                  <span className="text-xs text-[#94A3B8]">Market</span>
                  <span className="text-xs font-bold text-white">
                    Addis Ababa
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-xs text-[#94A3B8]">Focus</span>
                  <span className="text-right text-xs font-bold text-white">
                    Residential
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-xs text-[#94A3B8]">Core</span>
                  <span className="text-right text-xs font-bold text-white">
                    Build + Renovate
                  </span>
                </div>
              </div>

              <Link
                href="/services"
                className="mt-8 inline-flex h-11 w-full items-center justify-center gap-2 bg-[#D4A72C] px-5 text-[10px] font-black uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#E2B83D]"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* =========================================================
          3. CORE SERVICES
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4A72C]">
              What SeraBuild Covers
            </p>

            <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-[#0F172A] sm:text-3xl">
              Core Residential Services
            </h2>
          </div>

          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-[#0F172A] hover:text-[#D4A72C]"
          >
            View All Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {coreServices.map((service) => (
            <div
              key={service.title}
              className="group border border-[#E2E8F0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A72C]/60 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center border border-[#D4A72C]/30 bg-[#FFFBEB] text-[#D4A72C] transition-colors group-hover:bg-[#D4A72C] group-hover:text-white">
                {service.icon}
              </div>

              <h3 className="mt-6 text-sm font-black uppercase tracking-tight text-[#0F172A]">
                {service.title}
              </h3>

              <p className="mt-3 text-xs leading-6 text-[#64748B]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          4. PROCESS
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8">
        <div className="overflow-hidden bg-[#0F172A]">
          <div className="grid lg:grid-cols-12">
            <div className="relative p-6 sm:p-10 lg:col-span-5 lg:p-12">
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-24 w-24 border-b border-l border-[#D4A72C]/20"
              />

              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4A72C]">
                How It Works
              </p>

              <h2 className="mt-3 text-2xl font-black uppercase leading-tight tracking-tight text-white sm:text-3xl">
                From First
                <br />
                <span className="text-[#D4A72C]">Request to Completion.</span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#94A3B8]">
                A clear construction process reduces uncertainty by defining
                what happens before, during, and after project execution.
              </p>

              <Link
                href="/process"
                className="mt-8 inline-flex h-11 items-center gap-2 border border-[#D4A72C] px-5 text-[10px] font-black uppercase tracking-wider text-[#D4A72C] transition-all hover:bg-[#D4A72C] hover:text-[#0F172A]"
              >
                View Construction Process
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid border-t border-white/10 sm:grid-cols-2 lg:col-span-7 lg:border-l lg:border-t-0">
              {[
                [
                  "01",
                  "Understand",
                  "Define the requirement and project objective.",
                ],
                [
                  "02",
                  "Assess",
                  "Review site conditions and project constraints.",
                ],
                [
                  "03",
                  "Plan",
                  "Develop scope, materials, sequencing, and budget considerations.",
                ],
                [
                  "04",
                  "Execute",
                  "Coordinate construction, renovation, finishing, and inspection.",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="border-b border-white/10 p-6 last:border-b-0 sm:nth-[3]:border-b-0 sm:nth-[4]:border-b-0 lg:p-8"
                >
                  <span className="font-mono text-[10px] font-bold text-[#D4A72C]">
                    {number}
                  </span>

                  <h3 className="mt-4 text-sm font-black uppercase tracking-wider text-white">
                    {title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-[#64748B]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. PRINCIPLES
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4A72C]">
              Working Principles
            </p>

            <h2 className="mt-2 text-2xl font-black uppercase leading-tight tracking-tight text-[#0F172A] sm:text-3xl">
              Construction
              <br />
              With Structure.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#64748B]">
              SeraBuild is structured around practical principles that help
              property owners understand their construction or renovation
              project before committing to execution.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="border border-[#E2E8F0] bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#D4A72C]/30 bg-[#FFFBEB] text-[#D4A72C]">
                    {principle.icon}
                  </div>

                  <div>
                    <span className="font-mono text-[9px] text-[#94A3B8]">
                      0{index + 1}
                    </span>

                    <h3 className="text-xs font-black uppercase tracking-wider text-[#0F172A]">
                      {principle.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-6 text-[#64748B]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          6. TRANSPARENCY / DEMO DISCLOSURE
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Disclaimer message="SeraBuild is a fictional portfolio/demo project. Its company identity, service presentation, project concepts, cost examples, and other business information are used to demonstrate website development, SEO implementation, UX, and digital marketing execution. They should not be interpreted as real company credentials, client results, testimonials, or live commercial pricing." />
          </div>

          <div className="lg:col-span-4">
            <div className="border-2 border-[#D4A72C] bg-white p-6">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#D4A72C]">
                Continue Exploring
              </p>

              <h3 className="mt-2 text-base font-black uppercase tracking-tight text-[#0F172A]">
                See the Cost Guide
              </h3>

              <p className="mt-2 text-xs leading-6 text-[#64748B]">
                Explore the illustrative construction cost model and understand
                how project assumptions affect estimates.
              </p>

              <Link
                href="/construction-cost"
                className="mt-5 inline-flex h-10 w-full items-center justify-center gap-2 bg-[#0F172A] px-5 text-[10px] font-black uppercase tracking-wider text-white transition-colors hover:bg-[#D4A72C]"
              >
                Open Cost Guide
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          7. FINAL CTA
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8">
        <div className="relative overflow-hidden border border-[#E2E8F0] bg-white p-8 shadow-sm sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 h-32 w-32 border-b border-l border-[#D4A72C]/30"
          />

          <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4A72C]">
                Start With Your Project
              </p>

              <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-[#0F172A] sm:text-3xl">
                Planning a House Construction or Renovation?
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#64748B]">
                Explore the services or use the request form to define the
                project you want to model.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex h-11 items-center justify-center border-2 border-[#0F172A] px-6 text-[10px] font-black uppercase tracking-wider text-[#0F172A] transition-colors hover:bg-[#0F172A] hover:text-white"
              >
                Explore Services
              </Link>

              <Link
                href="/request-quote"
                className="inline-flex h-11 items-center justify-center gap-2 bg-[#D4A72C] px-6 text-[10px] font-black uppercase tracking-wider text-white transition-colors hover:bg-[#B88E21]"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
