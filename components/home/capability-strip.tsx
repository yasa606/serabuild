// components/home/hero-capability-strip.tsx

import { HardHat, ShieldCheck, Ruler, ClipboardCheck } from "lucide-react";

const capabilities = [
  {
    number: "01",
    icon: HardHat,
    title: "Residential Construction",
    description: "From planning to structural execution",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Quality & Transparency",
    description: "Clear scope, process and communication",
  },
  {
    number: "03",
    icon: Ruler,
    title: "Renovation & Finishing",
    description: "Practical solutions for existing spaces",
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Clear Project Process",
    description: "Defined steps from assessment to completion",
  },
];

export default function CapabilityStrip() {
  return (
    <section
      className="
        relative z-30 w-full overflow-hidden
        bg-[#0F172A]
      "
    >
      {/* =========================================================
          TOP GOLD ACCENT
      ========================================================== */}
      <div
        aria-hidden="true"
        className="
          absolute left-0 top-0
          h-[2px] w-24
          bg-[#D4A72C]
        "
      />

      {/* =========================================================
          CONTENT CONTAINER
      ========================================================== */}
      <div
        className="
          mx-auto max-w-7xl
          px-4 sm:px-6 lg:px-8
        "
      >
        <div
          className="
            grid grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className={`
                  group relative
                  flex items-center gap-4
                  px-2 py-6
                  sm:px-4
                  lg:min-h-[116px] lg:px-6

                  ${
                    index !== capabilities.length - 1
                      ? `
                        border-b border-white/10
                        lg:border-b-0
                        lg:border-r
                      `
                      : ""
                  }
                `}
              >
                {/* =================================================
                    ITEM NUMBER
                ================================================== */}
                <span
                  className="
                    absolute right-4 top-4
                    text-[10px]
                    font-black
                    tracking-[0.15em]
                    text-white/60 
                    transition-colors
                    duration-300
                    group-hover:text-[#D4A72C]
                  "
                >
                  {/* Fixed: Bumped opacity from white/30 to white/60 for accessible contrast on dark navy */}
                  {item.number}
                </span>

                {/* =================================================
                    ICON CONTAINER
                ================================================== */}
                <div
                  className="
                    relative
                    flex h-11 w-11
                    shrink-0
                    items-center justify-center

                    border border-white/10
                    bg-white/[0.04]

                    transition-all
                    duration-300

                    group-hover:border-[#D4A72C]
                    group-hover:bg-[#D4A72C]/10
                  "
                >
                  <Icon
                    className="
                      h-5 w-5
                      text-white/90

                      transition-colors
                      duration-300

                      group-hover:text-[#D4A72C]
                    "
                    strokeWidth={1.6}
                  />

                  {/* ---------------------------------------------
                      GOLD CORNER DETAIL
                  ---------------------------------------------- */}
                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      -bottom-[1px]
                      -right-[1px]

                      h-2 w-2

                      border-b-2
                      border-r-2
                      border-[#D4A72C]
                    "
                  />
                </div>

                {/* =================================================
                    TEXT CONTENT
                ================================================== */}
                <div className="pr-8">
                  <h2
                    className="
                      text-[11px]
                      font-black
                      uppercase
                      leading-tight
                      tracking-[0.08em]
                      text-white
                    "
                  >
                    {item.title}
                  </h2>

                  <p
                    className="
                      mt-1.5
                      max-w-[190px]
                      text-[11px]
                      leading-5
                      text-white/75
                    "
                  >
                    {/* Fixed: Bumped opacity from white/50 to white/75 to meet high contrast parameters */}
                    {item.description}
                  </p>
                </div>

                {/* =================================================
                    HOVER GOLD LINE
                ================================================== */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-0
                    left-0

                    h-[2px]
                    w-0

                    bg-[#D4A72C]

                    transition-all
                    duration-300

                    group-hover:w-full
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
