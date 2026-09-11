// app/services/page.tsx

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Paintbrush,
  Droplet,
  ShieldCheck,
  CheckCircle2,
  ClipboardList,
  Ruler,
  Hammer,
  Home,
} from "lucide-react";

import Disclaimer from "@/components/shared/disclaimer";

export const metadata = {
  title: "Construction Services Addis Ababa | SeraBuild",
  description:
    "Explore SeraBuild residential construction, house construction, home renovation, waterproofing, and finishing services designed for property owners in Addis Ababa.",
};

const serviceHubItems = [
  {
    slug: "house-construction",
    number: "01",
    title: "House Construction",
    tagline: "From Site to Structure",
    description:
      "A structured approach to residential house construction, covering project planning, foundation work, structural construction, masonry, and finishing coordination.",
    image: "/images/house_construction.png",
    icon: <Building2 className="h-5 w-5" />,
    scope: [
      "Site & Foundation Work",
      "Structural Construction",
      "Masonry & Building Envelope",
      "Construction Coordination",
    ],
  },
  {
    slug: "home-renovation",
    number: "02",
    title: "Home Renovation",
    tagline: "Improve. Modernize. Transform.",
    description:
      "Residential renovation planning for homeowners looking to improve existing spaces, modernize layouts, upgrade finishes, or coordinate building services.",
    image: "/images/re.png",
    icon: <Paintbrush className="h-5 w-5" />,
    scope: [
      "Layout Improvements",
      "Interior Renovation",
      "Kitchen & Bathroom Upgrades",
      "Plumbing & Electrical Coordination",
    ],
  },
  {
    slug: "waterproofing",
    number: "03",
    title: "Waterproofing",
    tagline: "Protect Your Property",
    description:
      "Waterproofing solutions focused on identifying moisture problems and selecting appropriate protection for roofs, bathrooms, terraces, foundations, and other vulnerable areas.",
    image: "/images/proofing.png",
    icon: <Droplet className="h-5 w-5" />,
    scope: [
      "Roof Waterproofing",
      "Bathroom & Wet Areas",
      "Terrace Protection",
      "Foundation Moisture Protection",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    icon: <ClipboardList className="h-5 w-5" />,
    title: "Understand",
    description:
      "Define the property, requested service, project objectives, and major requirements.",
  },
  {
    number: "02",
    icon: <Ruler className="h-5 w-5" />,
    title: "Assess",
    description:
      "Review site conditions, existing work, dimensions, constraints, and potential requirements.",
  },
  {
    number: "03",
    icon: <Hammer className="h-5 w-5" />,
    title: "Plan",
    description:
      "Organize the scope, materials, sequence, responsibilities, and project considerations.",
  },
  {
    number: "04",
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Execute",
    description:
      "Coordinate the work with attention to quality, inspection, communication, and completion.",
  },
];

export default function ServicesHubPage() {
  return (
    <main className="min-h-screen w-full bg-[#F8FAFC]">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#0F172A]">
        {/* Subtle architectural grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Decorative architectural lines */}
        <div
          aria-hidden="true"
          className="absolute right-[8%] top-0 hidden h-full w-px bg-[#D4A72C]/10 lg:block"
        />

        <div
          aria-hidden="true"
          className="absolute right-[8%] top-1/2 hidden h-px w-48 bg-[#D4A72C]/10 lg:block"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-7 flex items-center gap-3"
            >
              <Link
                href="/"
                className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#94A3B8] transition-colors hover:text-[#D4A72C]"
              >
                Home
              </Link>

              <span className="text-[#475569]">/</span>

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D4A72C]">
                Services
              </span>
            </nav>

            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              {/* Heading */}
              <div className="lg:col-span-8">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D4A72C]" />

                  <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#D4A72C]">
                    SeraBuild · Addis Ababa
                  </span>
                </div>

                <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Construction Services
                  <br />
                  <span className="text-[#D4A72C]">
                    Built Around Your Property.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-sm leading-7 text-[#CBD5E1] sm:text-base">
                  Explore residential construction, home renovation,
                  waterproofing, and finishing services structured for property
                  owners in Addis Ababa.
                </p>
              </div>

              {/* Hero side information */}
              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <div className="border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#D4A72C]/40 bg-[#D4A72C]/10">
                      <Home className="h-5 w-5 text-[#D4A72C]" />
                    </div>

                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#64748B]">
                        Residential Focus
                      </p>

                      <p className="mt-1 text-sm font-bold text-white">
                        Build · Renovate · Protect
                      </p>

                      <p className="mt-2 text-[11px] leading-5 text-[#94A3B8]">
                        Clear service scopes for residential property work.
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
          INTRO
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4A72C]">
              Our Services
            </p>

            <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-[#0F172A] sm:text-3xl">
              One Residential Focus.
              <br />
              Multiple Construction Needs.
            </h2>
          </div>

          <p className="text-sm leading-7 text-[#64748B] lg:col-span-4">
            From building a new house to improving an existing property or
            addressing water-related problems, each service is organized around
            a clear scope and practical project process.
          </p>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="space-y-8">
          {serviceHubItems.map((service, index) => (
            <article
              key={service.slug}
              className="group overflow-hidden border border-[#E2E8F0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A72C]/60 hover:shadow-lg"
            >
              <div className="grid lg:grid-cols-12">
                {/* IMAGE */}
                <div
                  className={`relative min-h-[280px] overflow-hidden bg-[#1E293B] sm:min-h-[360px] lg:col-span-5 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={`${service.title} in Addis Ababa`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />

                  {/* Number */}
                  <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center border border-white/20 bg-[#0F172A]/80 backdrop-blur-sm">
                    <span className="font-mono text-[10px] font-bold text-[#D4A72C]">
                      {service.number}
                    </span>
                  </div>

                  {/* Image label */}
                  <div className="absolute bottom-5 left-5">
                    <span className="border border-white/20 bg-[#0F172A]/80 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                      Addis Ababa · Residential
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div
                  className={`flex flex-col justify-between p-6 sm:p-9 lg:col-span-7 lg:p-10 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div>
                    {/* Service icon */}
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center bg-[#0F172A] text-[#D4A72C]">
                        {service.icon}
                      </div>
                    </div>

                    <h2 className="mt-6 text-2xl font-black uppercase tracking-tight text-[#0F172A] sm:text-3xl">
                      {service.title}
                    </h2>

                    <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#D4A72C]">
                      {service.tagline}
                    </p>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-[#475569]">
                      {service.description}
                    </p>

                    {/* Scope */}
                    <div className="mt-7 border-t border-[#E2E8F0] pt-6">
                      <p className="mb-3 text-[9px] font-black uppercase tracking-[0.18em] text-[#64748B]">
                        What We Can Help With
                      </p>

                      <ul className="grid gap-3 sm:grid-cols-2">
                        {service.scope.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-xs text-[#334155]"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#D4A72C]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 flex flex-col gap-3 border-t border-[#E2E8F0] pt-6 sm:flex-row">
                    <Link
                      href={`/services/${service.slug}`}
                      className="group/button inline-flex h-11 items-center justify-center gap-2 border-2 border-[#0F172A] px-6 text-[10px] font-black uppercase tracking-[0.14em] text-[#0F172A] transition-all hover:bg-[#0F172A] hover:text-white"
                    >
                      Explore Service
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/button:translate-x-1" />
                    </Link>

                    <Link
                      href="/request-quote"
                      className="inline-flex h-11 items-center justify-center gap-2 bg-[#D4A72C] px-6 text-[10px] font-black uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#B88E21]"
                    >
                      Request a Quote
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================== */}
      <section className="border-y border-[#E2E8F0] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Intro */}
            <div className="lg:col-span-4">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4A72C]">
                Our Approach
              </p>

              <h2 className="mt-2 text-2xl font-black uppercase leading-tight tracking-tight text-[#0F172A] sm:text-3xl">
                A Clearer
                <br />
                Construction Process.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#64748B]">
                Good construction starts before physical work begins. A
                structured process helps define requirements, identify
                constraints, and organize the work that follows.
              </p>

              <Link
                href="/process"
                className="group mt-7 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.14em] text-[#0F172A] transition-colors hover:text-[#D4A72C]"
              >
                See Full Process
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Steps */}
            <div className="grid gap-px overflow-hidden border border-[#E2E8F0] bg-[#E2E8F0] sm:grid-cols-2 lg:col-span-8">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="bg-[#F8FAFC] p-6 transition-colors hover:bg-white sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center border border-[#D4A72C]/30 bg-[#FFFBEB] text-[#D4A72C]">
                      {step.icon}
                    </div>

                    <span className="font-mono text-[10px] font-bold text-[#CBD5E1]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xs font-black uppercase tracking-[0.14em] text-[#0F172A]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-[#64748B]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPLORE MORE
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Cost Guide */}
          <Link
            href="/construction-cost"
            className="group border border-[#E2E8F0] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#D4A72C]"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#D4A72C]">
              Planning Resource
            </span>

            <h3 className="mt-2 text-sm font-black uppercase tracking-tight text-[#0F172A]">
              Construction Cost Guide
            </h3>

            <p className="mt-3 text-xs leading-6 text-[#64748B]">
              Explore the illustrative cost model and understand the factors
              that can influence a construction budget.
            </p>

            <span className="mt-5 inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-wider text-[#0F172A]">
              Explore Guide
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          {/* Projects */}
          <Link
            href="/projects"
            className="group border border-[#E2E8F0] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#D4A72C]"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#D4A72C]">
              Project Concepts
            </span>

            <h3 className="mt-2 text-sm font-black uppercase tracking-tight text-[#0F172A]">
              Explore Projects
            </h3>

            <p className="mt-3 text-xs leading-6 text-[#64748B]">
              Review conceptual residential construction and renovation examples
              used within the SeraBuild project.
            </p>

            <span className="mt-5 inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-wider text-[#0F172A]">
              View Projects
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          {/* Blog */}
          <Link
            href="/blog"
            className="group border border-[#E2E8F0] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#D4A72C]"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#D4A72C]">
              Knowledge
            </span>

            <h3 className="mt-2 text-sm font-black uppercase tracking-tight text-[#0F172A]">
              Construction Guides
            </h3>

            <p className="mt-3 text-xs leading-6 text-[#64748B]">
              Learn about contractor selection, residential construction,
              renovation planning, and property improvement.
            </p>

            <span className="mt-5 inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-wider text-[#0F172A]">
              Read Guides
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>

      {/* =========================================================
          TRANSPARENCY
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <Disclaimer message="SeraBuild is a fictional portfolio/demo project. The services, project concepts, pricing examples, and business information shown on this website are used to demonstrate website development, SEO implementation, UX, and digital marketing execution. They should not be interpreted as live commercial services, real client results, testimonials, certifications, or guaranteed pricing." />
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-[#1E293B]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-[#D4A72C]" />

                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#D4A72C]">
                  Start Planning
                </span>
              </div>

              <h2 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                Have a Construction or
                <br />
                <span className="text-[#D4A72C]">Renovation Project?</span>
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#94A3B8]">
                Start by describing the property and the work you are
                considering.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center border border-white/20 px-6 text-[10px] font-black uppercase tracking-[0.14em] text-white transition-colors hover:border-[#D4A72C] hover:text-[#D4A72C]"
              >
                Contact
              </Link>

              <Link
                href="/request-quote"
                className="inline-flex h-11 items-center justify-center gap-2 bg-[#D4A72C] px-6 text-[10px] font-black uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#B88E21]"
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
