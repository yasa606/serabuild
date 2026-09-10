// components/home/hero.tsx

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#E2E8F0] bg-white">
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================== */}

      {/* Very subtle architectural grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(#0F172A 1px, transparent 1px),
            linear-gradient(90deg, #0F172A 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Subtle gold circle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-56 top-20 hidden h-[560px] w-[560px] rounded-full border border-[#D4A72C]/10 lg:block"
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative mx-auto grid min-h-[680px] w-full max-w-7xl grid-cols-1 items-center px-4 py-10 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-12">
        {/* =======================================================
            LEFT SIDE — CONTENT
        ======================================================== */}

        <div className="relative z-20 flex items-center lg:col-span-6">
          <div className="relative w-full max-w-[590px]">
            {/* ---------------------------------------------------
                OUTER GOLD ARCHITECTURAL FRAME
            ---------------------------------------------------- */}

            {/* Top-left */}
            <div
              aria-hidden="true"
              className="absolute -left-2 -top-2 h-14 w-14 border-l-[3px] border-t-[3px] border-[#D4A72C] sm:-left-3 sm:-top-3 sm:h-20 sm:w-20"
            />

            {/* Top-right */}
            <div
              aria-hidden="true"
              className="absolute -right-2 -top-2 h-14 w-14 border-r-[3px] border-t-[3px] border-[#D4A72C] sm:-right-3 sm:-top-3 sm:h-20 sm:w-20"
            />

            {/* Bottom-left */}
            <div
              aria-hidden="true"
              className="absolute -bottom-2 -left-2 h-14 w-14 border-b-[3px] border-l-[3px] border-[#D4A72C] sm:-bottom-3 sm:-left-3 sm:h-20 sm:w-20"
            />

            {/* Bottom-right */}
            <div
              aria-hidden="true"
              className="absolute -bottom-2 -right-2 h-14 w-14 border-b-[3px] border-r-[3px] border-[#D4A72C] sm:-bottom-3 sm:-right-3 sm:h-20 sm:w-20"
            />

            {/* ---------------------------------------------------
                CONTENT PANEL
            ---------------------------------------------------- */}

            <div className="relative bg-white px-7 py-9 sm:px-10 sm:py-11 lg:px-12 lg:py-12">
              {/* Small decorative gold line */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-14 h-px w-8 bg-[#D4A72C]"
              />

              {/* -------------------------------------------------
                  EYEBROW
              -------------------------------------------------- */}

              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-[#D4A72C]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#64748B] sm:text-xs">
                  SeraBuild • Addis Ababa, Ethiopia
                </span>
              </div>

              {/* -------------------------------------------------
                  MAIN H1
              -------------------------------------------------- */}

              <h1 className="max-w-[560px] text-[2.65rem] font-black uppercase leading-[0.94] tracking-[-0.04em] text-[#0F172A] sm:text-5xl lg:text-[4.15rem]">
                Build With
                <br />
                <span className="text-[#D4A72C]">Clarity.</span>
                <br />
                Build With
                <br />
                <span className="text-[#D4A72C]">Confidence.</span>
              </h1>

              {/* -------------------------------------------------
                  DIVIDER
              -------------------------------------------------- */}

              <div className="my-7 flex items-center gap-3">
                <div className="h-[2px] w-14 bg-[#D4A72C]" />
                <div className="h-[2px] w-2 bg-[#D4A72C]/30" />
                <div className="h-[2px] w-2 bg-[#D4A72C]/20" />
              </div>

              {/* -------------------------------------------------
                  DESCRIPTION
              -------------------------------------------------- */}

              <p className="max-w-[500px] text-sm leading-7 text-[#64748B] sm:text-base">
                Residential construction, home renovation, finishing and
                waterproofing services built around a clear and practical
                process in Addis Ababa.
              </p>

              {/* -------------------------------------------------
                  CTA BUTTONS
              -------------------------------------------------- */}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {/* Primary */}
                <Link
                  href="/request-quote"
                  className="group inline-flex h-12 items-center justify-center gap-3 bg-[#0F172A] px-6 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#D4A72C] hover:text-[#0F172A]"
                >
                  Request a Quote
                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                {/* Secondary */}
                <Link
                  href="/about"
                  className="group inline-flex h-12 items-center justify-center gap-3 border-2 border-[#D4A72C] bg-white px-6 text-xs font-bold uppercase tracking-[0.14em] text-[#0F172A] transition-all duration-300 hover:bg-[#D4A72C]"
                >
                  More About Us
                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

              {/* -------------------------------------------------
                  SERVICE AREA
              -------------------------------------------------- */}

              <div className="mt-8 flex items-center gap-3 border-t border-[#E2E8F0] pt-5">
                {/* Location icon */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#D4A72C] text-[#D4A72C]">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#94A3B8]">
                    Service Area
                  </p>

                  <p className="mt-0.5 text-xs font-medium text-[#334155]">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            RIGHT SIDE — IMAGE
        ======================================================== */}

        <div className="relative z-10 mt-12 h-[400px] lg:col-span-6 lg:mt-0 lg:h-[590px]">
          {/* ---------------------------------------------------
              OFFSET ARCHITECTURAL FRAME
          ---------------------------------------------------- */}

          <div
            aria-hidden="true"
            className="absolute -right-3 -top-3 h-full w-full border border-[#0F172A]/10 sm:-right-5 sm:-top-5 lg:-right-7 lg:-top-7"
          />

          {/* Gold bottom-left accent */}
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 z-20 h-24 w-24 border-b-[3px] border-l-[3px] border-[#D4A72C] sm:-bottom-5 sm:-left-5 lg:-bottom-6 lg:-left-6 lg:h-28 lg:w-28"
          />

          {/* ---------------------------------------------------
              IMAGE
          ---------------------------------------------------- */}

          <div className="relative h-full w-full overflow-hidden bg-[#E2E8F0] shadow-[0_25px_60px_rgba(15,23,42,0.16)]">
            <Image
              src="/images/hero_image.png"
              alt="Residential construction project in Addis Ababa"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
            />

            {/* Very subtle image overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/5 via-transparent to-[#0F172A]/10" />

            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0F172A]/50 to-transparent" />

            {/* -------------------------------------------------
                IMAGE TOP LABEL
            -------------------------------------------------- */}

            <div className="absolute left-5 top-5 border border-white/40 bg-[#0F172A]/70 px-4 py-2 backdrop-blur-md">
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white">
                Residential Construction
              </p>
            </div>

            {/* -------------------------------------------------
                IMAGE BOTTOM INFORMATION
            -------------------------------------------------- */}

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#D4A72C]">
                  SeraBuild
                </p>

                <p className="mt-1 text-xs font-medium text-white sm:text-sm">
                  Construction • Renovation • Finishing
                </p>
              </div>

              {/* Project number */}
              <div className="flex items-center gap-3">
                <span className="hidden h-px w-8 bg-[#D4A72C] sm:block" />

                <span className="text-sm font-bold tracking-wider text-white">
                  01 / 04
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          DESKTOP EXPLORE INDICATOR
      ========================================================== */}

      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 lg:flex">
        <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#94A3B8]">
          Explore
        </span>

        <span className="h-px w-10 bg-[#D4A72C]" />
      </div>
    </section>
  );
}
