// app/services/page.tsx
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Paintbrush,
  DropletOff,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import Disclaimer from "@/components/shared/disclaimer";

export const metadata = {
  title: "Construction Services Addis Ababa | SeraBuild Hub",
  description:
    "Comprehensive engineering overview modeling residential house construction, structural home renovation, and precision waterproofing frameworks across Addis Ababa, Ethiopia.",
};

const serviceHubItems = [
  {
    slug: "house-construction",
    title: "House Construction",
    keyword: "house construction Addis Ababa",
    tagline: "Turnkey Residential Engineering",
    description:
      "Complete building execution from site survey and foundation engineering through framing, masonry blockwork, and professional finish delivery.",
    image: "/images/house_construction.png",
    icon: <Building2 className="h-6 w-6 text-[#D4A72C]" />,
    scope: [
      "Foundation Excavation & Casting",
      "Reinforced Frame Systems",
      "Structural Masonry Infill",
    ],
  },
  {
    slug: "home-renovation",
    title: "Home Renovation",
    keyword: "home renovation Addis Ababa",
    tagline: "Structural Optimization & Upgrades",
    description:
      "Modernizing existing residential architecture, optimizing structural load profiles, and managing layout modifications with premium internal finishing.",
    image: "/images/re.png",
    icon: <Paintbrush className="h-6 w-6 text-[#D4A72C]" />,
    scope: [
      "Spatial Layout Restructuring",
      "Interior Boundary Modernization",
      "Electrical & Plumbing Retrofits",
    ],
  },
  {
    slug: "waterproofing",
    title: "Waterproofing Systems",
    keyword: "waterproofing Addis Ababa",
    tagline: "Advanced Moisture Protection",
    description:
      "Multi-layered defensive membranes engineered to intercept heavy seasonal groundwater infiltration and protect structural foundation configurations.",
    image: "/images/proofing.png",
    icon: <DropletOff className="h-6 w-6 text-[#D4A72C]" />,
    scope: [
      "Sub-Grade Foundation Seals",
      "Elastomeric Roof Coating",
      "Wet-Area Containment Plastering",
    ],
  },
];

export default function ServicesHubPage() {
  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen">
      {/* 1. SECTOR HEADER SECTION */}
      <section className="relative w-full bg-[#0F172A] py-16 sm:py-20 border-b border-[#E2E8F0]/10 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
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
                Services
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-[0.95]">
              Core Structural <br />
              <span className="text-[#D4A72C]">Construction Services.</span>
            </h1>

            <div className="mt-6 flex items-start gap-4 border-l-2 border-[#D4A72C] pl-4">
              <p className="text-sm text-[#E2E8F0] leading-relaxed max-w-xl">
                Rigorous operational blueprints configured for Ethiopian
                environmental, municipal, and structural logistics. Every
                service links back to our standardized analysis tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DYNAMIC MATRICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
        <Disclaimer message="Case Validation Framework: Services listed represent structural execution capability profiles modeled explicitly for residential performance tracking in Addis Ababa." />

        <div className="grid grid-cols-1 gap-12">
          {serviceHubItems.map((service) => (
            <article
              key={service.slug}
              className="bg-white border border-[#E2E8F0] shadow-sm grid grid-cols-1 lg:grid-cols-12 overflow-hidden relative group hover:border-[#D4A72C] transition-all duration-300"
            >
              {/* Left Column Graphic */}
              <div className="relative lg:col-span-5 min-h-[260px] sm:min-h-[340px] bg-[#1E293B]">
                <Image
                  src={service.image}
                  alt={`${service.title} services provided by residential engineering contractor in Addis Ababa`}
                  fill
                  sizes="(max-w-1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Right Column Specifications */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#0F172A] text-white flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono text-[#64748B] bg-[#F8FAFC] px-2 py-0.5 border border-[#E2E8F0]">
                        Keyword Index: {service.keyword}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-2xl font-black uppercase text-[#0F172A] tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-xs font-medium text-[#D4A72C] uppercase tracking-wider font-mono mt-0.5">
                    {service.tagline}
                  </p>

                  <p className="mt-4 text-sm text-[#111827] leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-[#E2E8F0]">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.scope.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-xs text-[#64748B] font-mono"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#D4A72C] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex h-11 items-center justify-center border-2 border-[#0F172A] text-[#0F172A] font-bold uppercase tracking-wider text-[10px] px-6 hover:bg-[#F8FAFC] transition-all text-center"
                  >
                    Technical Scope Details
                  </Link>
                  <Link
                    href="/request-quote"
                    className="inline-flex h-11 items-center justify-center bg-[#D4A72C] border-2 border-[#D4A72C] text-white font-bold uppercase tracking-wider text-[10px] px-6 hover:bg-[#b88e21] hover:border-[#b88e21] transition-all text-center gap-2"
                  >
                    Request Pricing Model <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. LOWER SECTION BANNER */}
      <section className="bg-[#1E293B] text-white border-t border-[#E2E8F0]/10 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <ShieldCheck className="h-8 w-8 text-[#D4A72C] mx-auto mb-4" />
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
            Structured Cost Parameter Estimation
          </h2>
          <p className="mt-2 text-xs text-[#64748B] font-mono max-w-xl mx-auto">
            Need an itemized material and logistical calculation? Explore our
            structural cost matrices configured to map building expenses
            efficiently.
          </p>
          <div className="mt-6">
            <Link
              href="/construction-cost"
              className="inline-flex h-10 items-center justify-center bg-[#0F172A] border border-[#E2E8F0]/20 text-white font-bold uppercase tracking-widest text-[10px] px-6 hover:bg-[#0F172A]/80 transition-all"
            >
              Launch Cost Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
