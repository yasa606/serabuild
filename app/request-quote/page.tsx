// app/request-quote/page.tsx
import { FileSpreadsheet, Calculator } from "lucide-react";
import Disclaimer from "@/components/shared/disclaimer";

export const metadata = {
  title: "Request a Structural Construction Quote | SeraBuild Addis Ababa",
  description:
    "Configure project layout parameters, target footprints, and service models to evaluate illustrative pricing parameters across Ethiopia.",
};

export default function RequestQuotePage() {
  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen pb-24">
      {/* Header Banner */}
      <section className="bg-[#0F172A] py-16 text-white border-b border-[#E2E8F0]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="block text-xs font-mono text-[#D4A72C] uppercase tracking-wider mb-2">
            Estimation Engine
          </span>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
            Request Pricing Model
          </h1>
        </div>
      </section>

      {/* Main Structural Layout Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-6">
        <Disclaimer message="Form Rule: Input metrics processed by this interface run through isolated mock calculation arrays to return illustrative parameters only." />

        <div className="bg-white border-2 border-[#D4A72C] p-6 sm:p-10 shadow-md">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E2E8F0]">
            <div className="p-2 bg-[#0F172A] text-[#D4A72C]">
              <FileSpreadsheet className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-black uppercase tracking-tight text-[#0F172A]">
                Project Matrix Specification Form
              </h2>
              <p className="text-[11px] text-[#64748B]">
                All submitted figures are processed strictly for simulation
                verification.
              </p>
            </div>
          </div>

          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-wider text-[#111827] mb-1">
                  Target Core Service
                </label>
                <select className="w-full bg-[#F8FAFC] border border-[#E2E8F0] p-3 text-xs outline-none focus:border-[#D4A72C] h-11 rounded-none appearance-none">
                  <option>House Construction Model</option>
                  <option>Home Renovation Mapping</option>
                  <option>Waterproofing Matrix Seal</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-wider text-[#111827] mb-1">
                  Zoning Sub-City Location
                </label>
                <select className="w-full bg-[#F8FAFC] border border-[#E2E8F0] p-3 text-xs outline-none focus:border-[#D4A72C] h-11 rounded-none appearance-none">
                  <option>Bole Sub-City Node</option>
                  <option>Yeka Sub-City Node</option>
                  <option>Nefas Silk Lafto Node</option>
                  <option>Other / Out-of-Zone Area</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-wider text-[#111827] mb-1">
                  Target Footprint Scale (SqM)
                </label>
                <input
                  type="number"
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] p-3 text-xs outline-none focus:border-[#D4A72C] h-11"
                  placeholder="e.g. 240"
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-wider text-[#111827] mb-1">
                  Anticipated Construction Staging
                </label>
                <select className="w-full bg-[#F8FAFC] border border-[#E2E8F0] p-3 text-xs outline-none focus:border-[#D4A72C] h-11 rounded-none appearance-none">
                  <option>Standard Rollout Schedule</option>
                  <option>Accelerated Delivery Optimization</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-[#111827] mb-1">
                Site Plot Specifications & Boundary Context
              </label>
              <textarea
                rows={4}
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] p-3 text-xs outline-none focus:border-[#D4A72C] resize-none"
                placeholder="Describe access points, slope angles, or water constraints if known..."
                required
              />
            </div>

            <div className="pt-4 border-t border-[#E2E8F0]">
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center bg-[#D4A72C] text-white px-8 text-[10px] font-bold uppercase tracking-widest hover:bg-[#b88e21] transition-colors gap-2 shadow-sm"
              >
                Process Estimate Matrix <Calculator className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
