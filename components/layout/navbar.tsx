// components/layout/navbar.tsx

"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "HOME", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Cost Guide", href: "/construction-cost" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E2E8F0] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            LOGO
        ====================================================== */}

        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          {/* Construction mark */}
          <div className="relative flex h-9 w-9 items-end justify-center gap-[3px]">
            {/* Building 1 */}
            <span className="h-5 w-[5px] bg-[#916E13] transition-all duration-300 group-hover:h-6" />{" "}
            {/* Fixed: Accessible Dark Gold */}
            {/* Building 2 */}
            <span className="h-7 w-[5px] bg-[#916E13] transition-all duration-300 group-hover:h-8" />{" "}
            {/* Fixed: Accessible Dark Gold */}
            {/* Building 3 */}
            <span className="h-9 w-[5px] bg-[#916E13] transition-all duration-300 group-hover:h-10" />{" "}
            {/* Fixed: Accessible Dark Gold */}
            {/* Foundation line */}
            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#0F172A]" />
          </div>

          {/* Wordmark */}
          <div className="flex flex-col leading-none">
            <span className="text-[19px] font-black tracking-[-0.04em] text-[#0F172A]">
              Sera<span className="text-[#916E13]">Build</span>{" "}
              {/* Fixed: Accessible Dark Gold */}
            </span>

            <span className="mt-1 text-[7px] font-black uppercase tracking-[0.24em] text-[#64748B]">
              {" "}
              {/* Fixed: High contrast text weight & color */}
              Build With Confidence
            </span>
          </div>
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#334155] transition-colors duration-200 hover:text-[#916E13]" // Fixed: Hover color accent-dark
            >
              {link.name}
              {/* Gold hover line */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#916E13] transition-all duration-300 group-hover:w-full" />{" "}
              {/* Fixed: Accessible Dark Gold */}
            </Link>
          ))}
        </nav>

        {/* =====================================================
            DESKTOP CTA
        ====================================================== */}

        <div className="hidden lg:block">
          <Link
            href="/request-quote"
            className="group inline-flex h-11 items-center justify-center gap-3 bg-[#0F172A] px-5 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#D4A72C] hover:text-[#0F172A]"
          >
            Request a Quote
            <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center border border-[#E2E8F0] text-[#0F172A] transition-colors hover:border-[#916E13] hover:text-[#916E13] lg:hidden" // Fixed: Border and text dark gold handles
        >
          <div className="flex w-5 flex-col gap-[5px]">
            <span
              className={`h-[2px] w-full bg-current transition-all duration-300 ${
                mobileOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />

            <span
              className={`h-[2px] w-full bg-current transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-[2px] w-full bg-current transition-all duration-300 ${
                mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* =======================================================
          MOBILE NAVIGATION
      ======================================================== */}

      <div
        className={`overflow-hidden border-t border-[#E2E8F0] bg-white transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
          <div className="flex flex-col">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#334155] transition-colors hover:text-[#916E13] ${
                  index !== links.length - 1 ? "border-b border-[#E2E8F0]" : ""
                }`} // Fixed: Hover text dark gold mapping
              >
                {link.name}
                <span className="text-[#916E13]">→</span>{" "}
                {/* Fixed: Arrow indicator color */}
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              href="/request-quote"
              onClick={() => setMobileOpen(false)}
              className="mt-5 flex h-12 items-center justify-center gap-3 bg-[#0F172A] text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#D4A72C] hover:text-[#0F172A]"
            >
              Request a Quote
              <span>→</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
