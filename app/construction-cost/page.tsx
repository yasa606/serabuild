// app/construction-cost/page.tsx

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  ChevronRight,
  FileSpreadsheet,
  Info,
  MapPin,
  Ruler,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import Disclaimer from "@/components/shared/disclaimer";

/* ================================================================
   ILLUSTRATIVE COST DATA

   IMPORTANT:
   These figures are demonstration values for the SeraBuild
   portfolio project. They are NOT market quotations.
================================================================ */

const costMatrix = [
  {
    id: "house-construction",
    service: "House Construction",
    shortName: "House Construction",
    rateMin: 28000,
    rateMax: 42000,
    basis: "Built-up area",
    unit: "m²",
    description:
      "Illustrative planning range for residential construction scope.",
    factors: [
      "Structural frame",
      "Masonry and basic finishes",
      "Site preparation",
      "Selected material specifications",
    ],
  },
  {
    id: "home-renovation",
    service: "Home Renovation",
    shortName: "Home Renovation",
    rateMin: 12000,
    rateMax: 22000,
    basis: "Renovated area",
    unit: "m²",
    description: "Illustrative planning range for residential renovation work.",
    factors: [
      "Existing-condition assessment",
      "Partition alterations",
      "Utility modifications",
      "Finishing specification",
    ],
  },
  {
    id: "waterproofing",
    service: "Waterproofing",
    shortName: "Waterproofing",
    rateMin: 450,
    rateMax: 850,
    basis: "Treated surface",
    unit: "m²",
    description:
      "Illustrative planning range for selected waterproofing applications.",
    factors: [
      "Surface preparation",
      "Primer / treatment system",
      "Waterproofing layers",
      "Protection requirements",
    ],
  },
];

/*
  These are illustrative location adjustment assumptions for the
  portfolio demonstration. They should NOT be presented as verified
  Addis Ababa market coefficients.
*/
const subCities = [
  {
    name: "Bole",
    multiplier: 1.12,
    note: "Illustrative adjustment for a dense, high-demand urban location.",
  },
  {
    name: "Yeka",
    multiplier: 1.05,
    note: "Illustrative adjustment reflecting access and site-condition variability.",
  },
  {
    name: "Kirkos",
    multiplier: 1.1,
    note: "Illustrative adjustment for constrained urban logistics.",
  },
  {
    name: "Nifas Silk-Lafto",
    multiplier: 1.0,
    note: "Illustrative baseline location factor.",
  },
  {
    name: "Gullele",
    multiplier: 1.06,
    note: "Illustrative adjustment for potential terrain and access variation.",
  },
  {
    name: "Addis Ketema",
    multiplier: 1.08,
    note: "Illustrative adjustment for dense urban access conditions.",
  },
  {
    name: "Lideta",
    multiplier: 1.07,
    note: "Illustrative adjustment for inner-city logistics.",
  },
  {
    name: "Kolfe Keranio",
    multiplier: 0.98,
    note: "Illustrative location factor for demonstration purposes.",
  },
  {
    name: "Akaky Kaliti",
    multiplier: 0.95,
    note: "Illustrative location factor for demonstration purposes.",
  },
  {
    name: "Lemi Kura",
    multiplier: 1.04,
    note: "Illustrative adjustment for a developing suburban corridor.",
  },
];

export default function ConstructionCostPage() {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
  const [area, setArea] = useState(150);
  const [selectedSubCity, setSelectedSubCity] = useState("Bole");

  const activeService = costMatrix[selectedServiceIndex];

  const activeLocation =
    subCities.find((location) => location.name === selectedSubCity) ??
    subCities[0];

  /* ================================================================
     CALCULATION ENGINE
  ================================================================= */

  const calculation = useMemo(() => {
    const safeArea = Math.max(1, area || 1);

    const baseMin = activeService.rateMin * safeArea;
    const baseMax = activeService.rateMax * safeArea;

    const adjustedMin = baseMin * activeLocation.multiplier;
    const adjustedMax = baseMax * activeLocation.multiplier;

    const locationAdjustment = (activeLocation.multiplier - 1) * 100;

    return {
      area: safeArea,
      baseMin,
      baseMax,
      adjustedMin,
      adjustedMax,
      locationAdjustment,
    };
  }, [activeService, activeLocation, area]);

  /* ================================================================
     FORMATTERS
  ================================================================= */

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 0,
    }).format(value);

  const formatRate = (value: number) =>
    new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <main className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* ============================================================
          01 — PAGE HERO
      ============================================================ */}

      <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-white">
        {/* Architectural background */}
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

        {/* Gold architectural accent */}
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 hidden h-[420px] w-[420px] rounded-full border border-[#D4A72C]/15 lg:block"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2">
            <Link
              href="/"
              className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#94A3B8] transition-colors hover:text-[#D4A72C]"
            >
              Home
            </Link>

            <ChevronRight className="h-3 w-3 text-[#CBD5E1]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#D4A72C]">
              Construction Cost Guide
            </span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
            {/* Heading */}
            <div className="lg:col-span-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#D4A72C]" />

                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#64748B]">
                  Planning & Estimation
                </span>
              </div>

              <h1 className="max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-[#0F172A] sm:text-5xl lg:text-6xl">
                House Construction
                <br />
                <span className="text-[#D4A72C]">Cost Guide.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-[#64748B] sm:text-base">
                Explore illustrative residential construction, renovation and
                waterproofing cost ranges based on project area and a
                demonstration location adjustment.
              </p>
            </div>

            {/* Right meta block */}
            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <div className="border-l-2 border-[#D4A72C] pl-5">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">
                  Planning Tool
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0F172A]">
                  Addis Ababa Residential Projects
                </p>

                <p className="mt-1 text-xs leading-5 text-[#64748B]">
                  Use the calculator to create a preliminary planning range.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          02 — ESTIMATOR
      ============================================================ */}

      <section className="relative mx-auto -mt-1 max-w-7xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* ======================================================
              LEFT — CALCULATOR
          ======================================================= */}

          <div className="lg:col-span-7">
            <div className="relative overflow-hidden border border-[#E2E8F0] bg-[#0F172A] shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
              {/* Gold top line */}
              <div className="absolute left-0 right-0 top-0 h-[3px] bg-[#D4A72C]" />

              <div className="p-6 sm:p-8 lg:p-10">
                {/* Header */}
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center border border-[#D4A72C]/40 bg-[#D4A72C]/10">
                        <Calculator className="h-5 w-5 text-[#D4A72C]" />
                      </div>

                      <div>
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">
                          SeraBuild
                        </p>

                        <h2 className="mt-1 text-lg font-black uppercase tracking-tight text-white">
                          Cost Estimator
                        </h2>
                      </div>
                    </div>
                  </div>

                  <span className="hidden border border-[#D4A72C]/30 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#D4A72C] sm:block">
                    Illustrative
                  </span>
                </div>

                <p className="mt-5 max-w-xl text-xs leading-6 text-[#94A3B8]">
                  Adjust the project type, area and location to see how the
                  illustrative planning range changes.
                </p>

                {/* Inputs */}
                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Service */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="service"
                      className="mb-2 block text-[9px] font-black uppercase tracking-[0.18em] text-[#94A3B8]"
                    >
                      Project Type
                    </label>

                    <select
                      id="service"
                      value={selectedServiceIndex}
                      onChange={(event) =>
                        setSelectedServiceIndex(Number(event.target.value))
                      }
                      className="h-12 w-full appearance-none border border-white/10 bg-[#1E293B] px-4 text-xs font-medium text-white outline-none transition-colors focus:border-[#D4A72C]"
                    >
                      {costMatrix.map((item, index) => (
                        <option key={item.id} value={index}>
                          {item.service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Location */}
                  <div>
                    <label
                      htmlFor="location"
                      className="mb-2 block text-[9px] font-black uppercase tracking-[0.18em] text-[#94A3B8]"
                    >
                      Location
                    </label>

                    <div className="relative">
                      <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#D4A72C]" />

                      <select
                        id="location"
                        value={selectedSubCity}
                        onChange={(event) =>
                          setSelectedSubCity(event.target.value)
                        }
                        className="h-12 w-full appearance-none border border-white/10 bg-[#1E293B] pl-11 pr-4 text-xs font-medium text-white outline-none transition-colors focus:border-[#D4A72C]"
                      >
                        {subCities.map((location) => (
                          <option key={location.name} value={location.name}>
                            {location.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Area */}
                  <div>
                    <label
                      htmlFor="area"
                      className="mb-2 block text-[9px] font-black uppercase tracking-[0.18em] text-[#94A3B8]"
                    >
                      Project Area
                    </label>

                    <div className="relative">
                      <Ruler className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#D4A72C]" />

                      <input
                        id="area"
                        type="number"
                        min={1}
                        max={10000}
                        value={area}
                        onChange={(event) => {
                          const value = Number(event.target.value);

                          setArea(
                            Number.isFinite(value) && value > 0 ? value : 1,
                          );
                        }}
                        className="h-12 w-full border border-white/10 bg-[#1E293B] pl-11 pr-14 text-xs font-medium text-white outline-none transition-colors focus:border-[#D4A72C]"
                      />

                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase text-[#64748B]">
                        m²
                      </span>
                    </div>
                  </div>
                </div>

                {/* ==================================================
                    RESULT
                =================================================== */}

                <div className="mt-8 border border-[#D4A72C]/30 bg-[#1E293B]">
                  <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                    {/* Area */}
                    <div className="p-5">
                      <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#64748B]">
                        Area
                      </p>

                      <p className="mt-2 text-lg font-black text-white">
                        {calculation.area.toLocaleString()}{" "}
                        <span className="text-xs text-[#94A3B8]">m²</span>
                      </p>
                    </div>

                    {/* Location */}
                    <div className="p-5">
                      <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#64748B]">
                        Location Factor
                      </p>

                      <p className="mt-2 text-lg font-black text-[#D4A72C]">
                        ×{activeLocation.multiplier.toFixed(2)}
                      </p>
                    </div>

                    {/* Adjustment */}
                    <div className="p-5">
                      <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#64748B]">
                        Adjustment
                      </p>

                      <p className="mt-2 text-lg font-black text-white">
                        {calculation.locationAdjustment >= 0 ? "+" : ""}
                        {calculation.locationAdjustment.toFixed(0)}%
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-[#D4A72C]/20 bg-[#0B1220] p-6">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">
                      Illustrative Planning Range
                    </p>

                    <p className="mt-3 text-2xl font-black tracking-tight text-[#D4A72C] sm:text-3xl">
                      ETB {formatCurrency(calculation.adjustedMin)}
                      <span className="mx-2 text-[#64748B]">—</span>
                      ETB {formatCurrency(calculation.adjustedMax)}
                    </p>

                    <p className="mt-3 text-[10px] leading-5 text-[#64748B]">
                      This is a planning illustration, not a quotation or
                      guaranteed project price.
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/request-quote"
                  className="group mt-6 flex h-12 w-full items-center justify-center gap-3 bg-[#D4A72C] text-[10px] font-black uppercase tracking-[0.16em] text-[#0F172A] transition-all duration-300 hover:bg-white"
                >
                  Request a Project Assessment
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* ======================================================
              RIGHT — CALCULATION EXPLANATION
          ======================================================= */}

          <div className="lg:col-span-5">
            <div className="h-full border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-[#D4A72C]/40 bg-[#F8FAFC]">
                  <TrendingUp className="h-5 w-5 text-[#D4A72C]" />
                </div>

                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">
                    How It Works
                  </p>

                  <h2 className="mt-1 text-lg font-black uppercase tracking-tight text-[#0F172A]">
                    Estimate Logic
                  </h2>
                </div>
              </div>

              <div className="mt-8 space-y-0">
                {/* Step 1 */}
                <div className="relative flex gap-4 pb-8">
                  <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center border border-[#D4A72C] bg-white text-[10px] font-black text-[#0F172A]">
                    01
                  </div>

                  <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.08em] text-[#0F172A]">
                      Select the project scope
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#64748B]">
                      House construction, renovation or waterproofing uses a
                      different illustrative rate range.
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="absolute left-[17px] top-9 h-full w-px bg-[#E2E8F0]"
                  />
                </div>

                {/* Step 2 */}
                <div className="relative flex gap-4 pb-8">
                  <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center border border-[#D4A72C] bg-white text-[10px] font-black text-[#0F172A]">
                    02
                  </div>

                  <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.08em] text-[#0F172A]">
                      Enter the project area
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#64748B]">
                      The selected rate is multiplied by the project area to
                      establish a base planning range.
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="absolute left-[17px] top-9 h-full w-px bg-[#E2E8F0]"
                  />
                </div>

                {/* Step 3 */}
                <div className="relative flex gap-4">
                  <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center border border-[#D4A72C] bg-white text-[10px] font-black text-[#0F172A]">
                    03
                  </div>

                  <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.08em] text-[#0F172A]">
                      Apply location illustration
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#64748B]">
                      A demonstration location factor adjusts the base range to
                      show how the model responds to different inputs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Current scope */}
              <div className="mt-9 border-t border-[#E2E8F0] pt-6">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">
                  Current Scope
                </p>

                <div className="mt-4 flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D4A72C]" />

                  <div>
                    <p className="text-sm font-bold text-[#0F172A]">
                      {activeService.service}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#64748B]">
                      {activeService.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          03 — DISCLAIMER
      ============================================================ */}

      <section className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Disclaimer message="Illustrative planning model: the rates and location factors shown on this page are demonstration assumptions for the SeraBuild portfolio project. They are not verified Addis Ababa market rates and should not be treated as a quotation." />
      </section>

      {/* ============================================================
          04 — RATE GUIDE
      ============================================================ */}

      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border border-[#E2E8F0] bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-[#E2E8F0] p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
            <div>
              <div className="flex items-center gap-3">
                <FileSpreadsheet className="h-5 w-5 text-[#D4A72C]" />

                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">
                  Reference Table
                </span>
              </div>

              <h2 className="mt-2 text-xl font-black uppercase tracking-tight text-[#0F172A]">
                Illustrative Rate Guide
              </h2>
            </div>

            <p className="max-w-md text-xs leading-5 text-[#64748B]">
              The figures below demonstrate how a planning model can organize
              service-level cost assumptions.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC]">
                  <th className="px-6 py-4 text-[9px] font-black uppercase tracking-[0.16em] text-[#475569]">
                    Service
                  </th>

                  <th className="px-6 py-4 text-[9px] font-black uppercase tracking-[0.16em] text-[#475569]">
                    Illustrative Range
                  </th>

                  <th className="px-6 py-4 text-[9px] font-black uppercase tracking-[0.16em] text-[#475569]">
                    Unit
                  </th>

                  <th className="px-6 py-4 text-[9px] font-black uppercase tracking-[0.16em] text-[#475569]">
                    Main Factors
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#E2E8F0]">
                {costMatrix.map((row) => (
                  <tr
                    key={row.id}
                    className="transition-colors hover:bg-[#F8FAFC]"
                  >
                    <td className="px-6 py-5">
                      <p className="text-xs font-black text-[#0F172A]">
                        {row.service}
                      </p>

                      <p className="mt-1 text-[10px] text-[#94A3B8]">
                        {row.basis}
                      </p>
                    </td>

                    <td className="px-6 py-5">
                      <span className="font-mono text-xs font-bold text-[#D4A72C]">
                        ETB {formatRate(row.rateMin)} —{" "}
                        {formatRate(row.rateMax)}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <span className="text-xs text-[#64748B]">
                        per {row.unit}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex flex-wrap gap-2">
                        {row.factors.slice(0, 2).map((factor) => (
                          <span
                            key={factor}
                            className="border border-[#E2E8F0] bg-white px-2 py-1 text-[9px] font-medium text-[#64748B]"
                          >
                            {factor}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================================
          05 — LOCATION MATRIX
      ============================================================ */}

      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border border-[#E2E8F0] bg-white shadow-sm">
          <div className="border-b border-[#E2E8F0] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-[#D4A72C]" />

              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">
                Demonstration Matrix
              </span>
            </div>

            <div className="mt-3 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="text-xl font-black uppercase tracking-tight text-[#0F172A]">
                  Location Comparison
                </h2>

                <p className="mt-2 text-xs leading-5 text-[#64748B]">
                  {activeService.service} · {calculation.area.toLocaleString()}{" "}
                  m²
                </p>
              </div>

              <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[#64748B]">
                <Info className="h-3.5 w-3.5 text-[#D4A72C]" />
                Demonstration factors only
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC]">
                  <th className="px-6 py-4 text-[9px] font-black uppercase tracking-[0.16em] text-[#475569]">
                    Location
                  </th>

                  <th className="px-6 py-4 text-[9px] font-black uppercase tracking-[0.16em] text-[#475569]">
                    Illustrative Factor
                  </th>

                  <th className="px-6 py-4 text-[9px] font-black uppercase tracking-[0.16em] text-[#475569]">
                    Planning Range
                  </th>

                  <th className="px-6 py-4 text-[9px] font-black uppercase tracking-[0.16em] text-[#475569]">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#E2E8F0]">
                {subCities.map((location) => {
                  const rowMin =
                    activeService.rateMin *
                    calculation.area *
                    location.multiplier;

                  const rowMax =
                    activeService.rateMax *
                    calculation.area *
                    location.multiplier;

                  const selected = location.name === selectedSubCity;

                  return (
                    <tr
                      key={location.name}
                      className={`transition-colors ${
                        selected ? "bg-[#D4A72C]/[0.06]" : "hover:bg-[#F8FAFC]"
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <MapPin
                            className={`h-4 w-4 ${
                              selected ? "text-[#D4A72C]" : "text-[#94A3B8]"
                            }`}
                          />

                          <span className="text-xs font-bold text-[#0F172A]">
                            {location.name}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <span className="font-mono text-xs text-[#64748B]">
                          ×{location.multiplier.toFixed(2)}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <span className="font-mono text-xs font-bold text-[#D4A72C]">
                          ETB {formatCurrency(rowMin)} —{" "}
                          {formatCurrency(rowMax)}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        {selected ? (
                          <span className="inline-flex items-center gap-1.5 border border-[#D4A72C]/30 bg-[#D4A72C]/10 px-2 py-1 text-[8px] font-black uppercase tracking-[0.12em] text-[#9A761B]">
                            <CheckCircle2 className="h-3 w-3" />
                            Selected
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setSelectedSubCity(location.name)}
                            className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#64748B] transition-colors hover:text-[#D4A72C]"
                          >
                            Use location
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================================
          06 — LOCATION NOTE
      ============================================================ */}

      <section className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 border border-[#E2E8F0] bg-white p-6 sm:grid-cols-3 sm:p-8">
          <div className="flex gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#D4A72C]" />

            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.12em] text-[#0F172A]">
                Site Conditions
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#64748B]">
                Soil, access, existing structures and site constraints can
                materially change actual project costs.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Ruler className="mt-0.5 h-5 w-5 shrink-0 text-[#D4A72C]" />

            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.12em] text-[#0F172A]">
                Scope & Specification
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#64748B]">
                Structural design, materials, finishes and service scope affect
                the final project value.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#D4A72C]" />

            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.12em] text-[#0F172A]">
                Preliminary Only
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#64748B]">
                A project assessment and defined scope are required before a
                real quotation can be prepared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          07 — FINAL CTA
      ============================================================ */}

      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-[#0F172A] px-6 py-10 sm:px-10 lg:px-12">
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 h-full w-1/3 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(90deg, #FFFFFF 1px, transparent 1px),
                linear-gradient(#FFFFFF 1px, transparent 1px)
              `,
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#D4A72C]">
                Ready for a real project?
              </p>

              <h2 className="mt-3 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                Move From Planning
                <br />
                <span className="text-[#D4A72C]">To Assessment.</span>
              </h2>

              <p className="mt-4 text-xs leading-6 text-[#94A3B8]">
                Share your project requirements so the scope, site conditions
                and next steps can be assessed properly.
              </p>
            </div>

            <Link
              href="/request-quote"
              className="group inline-flex h-12 shrink-0 items-center justify-center gap-3 bg-[#D4A72C] px-7 text-[10px] font-black uppercase tracking-[0.16em] text-[#0F172A] transition-all duration-300 hover:bg-white"
            >
              Request a Project Assessment
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
