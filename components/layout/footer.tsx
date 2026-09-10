import Link from "next/link";
import { ArrowUpRight, Building2, Mail, MapPin, Phone } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const services = [
  {
    label: "House Construction",
    href: "/services/house-construction",
  },
  {
    label: "Home Renovation",
    href: "/services/home-renovation",
  },
  {
    label: "Waterproofing",
    href: "/services/waterproofing",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0F172A] text-white">
      {/* Technical background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(#FFFFFF 1px, transparent 1px),
            linear-gradient(90deg, #FFFFFF 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Architectural circle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-64 -top-64 h-[650px] w-[650px] rounded-full border border-[#D4A72C]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -top-48 h-[500px] w-[500px] rounded-full border border-[#D4A72C]/10"
      />

      {/* Main footer */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA band */}
        <div className="border-b border-white/10 py-14 sm:py-16">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#D4A72C]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                  Start With Your Project
                </span>
              </div>

              <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Planning to
                <br />
                <span className="text-[#D4A72C]">Build or Renovate?</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                Tell us about your residential project, its scope, and what you
                are looking to achieve. We start by understanding the project
                before discussing the next step.
              </p>
            </div>

            <Link
              href="/request-quote"
              className="group inline-flex h-12 shrink-0 items-center justify-center gap-3 bg-[#D4A72C] px-6 text-[10px] font-black uppercase tracking-[0.16em] text-[#0F172A] transition-all duration-300 hover:bg-white"
            >
              Request a Quote
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </Link>
          </div>
        </div>

        {/* Footer content */}
        <div className="grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center border border-[#D4A72C]">
                <Building2
                  className="h-5 w-5 text-[#D4A72C]"
                  strokeWidth={1.5}
                />

                <span className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-[#D4A72C]" />
              </div>

              <div>
                <div className="text-xl font-black uppercase tracking-[-0.02em]">
                  Sera<span className="text-[#D4A72C]">Build</span>
                </div>

                <div className="text-[8px] font-bold uppercase tracking-[0.24em] text-slate-500">
                  Construction & Renovation
                </div>
              </div>
            </Link>

            <p className="mt-7 max-w-md text-sm leading-7 text-slate-400">
              Residential construction and renovation solutions focused on
              practical planning, clear project scope, and disciplined
              execution.
            </p>

            {/* Location */}
            <div className="mt-7 flex items-start gap-3 text-sm text-slate-400">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D4A72C]" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-white">
              Navigation
            </h3>

            <nav className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex w-fit items-center gap-2 text-sm text-slate-400 transition-colors hover:text-[#D4A72C]"
                >
                  <span className="h-px w-0 bg-[#D4A72C] transition-all duration-300 group-hover:w-3" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-white">
              Services
            </h3>

            <nav className="flex flex-col gap-3">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex w-fit items-center gap-2 text-sm text-slate-400 transition-colors hover:text-[#D4A72C]"
                >
                  <span className="h-px w-0 bg-[#D4A72C] transition-all duration-300 group-hover:w-3" />
                  {service.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-white">
              Contact
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#D4A72C]" />
                <span>Project inquiries</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-400">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#D4A72C]" />
                <span>Contact information</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-[#D4A72C] transition-colors hover:text-white"
            >
              Contact Us
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Technical divider */}
        <div className="relative border-t border-white/10">
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 h-px w-20 bg-[#D4A72C]"
          />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.12em] text-slate-500">
            © {new Date().getFullYear()} SeraBuild. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500 transition-colors hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500 transition-colors hover:text-white"
            >
              Terms
            </Link>

            <span className="h-3 w-px bg-white/10" />

            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-600">
              Addis Ababa
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
