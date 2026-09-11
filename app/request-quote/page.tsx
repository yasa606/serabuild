// app/request-quote/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Construction Quote | SeraBuild Addis Ababa",
  description:
    "Request a quote for residential construction, home renovation, waterproofing, repairs, or property improvement services in Addis Ababa.",
};

export default function RequestQuotePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* HERO */}
      <section className="border-b border-[#E2E8F0] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#D4A72C]">
              Start Your Project
            </p>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Request a <span className="text-[#D4A72C]">Project Quote.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg">
              Tell us about your construction, renovation, waterproofing, or
              property improvement project. The more detail you provide, the
              easier it is to understand the work involved.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* LEFT INFORMATION */}
          <aside className="lg:col-span-4">
            <div className="border border-[#E2E8F0] bg-white p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center bg-[#0F172A]">
                <ClipboardList className="h-5 w-5 text-[#D4A72C]" />
              </div>

              <h2 className="mt-5 text-2xl font-black tracking-tight">
                What to include
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#64748B]">
                You do not need to know everything before contacting us. Start
                with the information you have.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Type of project",
                  "Property or building type",
                  "Project location",
                  "Approximate project size",
                  "Current project stage",
                  "Main requirements or problems",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D4A72C]" />

                    <span className="text-sm font-medium text-[#475569]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CONTACT CARD */}
            <div className="mt-6 border border-[#E2E8F0] bg-[#0F172A] p-6 text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4A72C]">
                Prefer Direct Contact?
              </p>

              <h2 className="mt-2 text-xl font-black">
                We&apos;re available by inquiry.
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-[#D4A72C]" />

                  <span className="text-sm text-[#CBD5E1]">
                    yassermuna01@gmail.com
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-[#D4A72C]" />

                  <span className="text-sm text-[#CBD5E1]">+251 973415854</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-[#D4A72C]" />

                  <span className="text-sm text-[#CBD5E1]">
                    Addis Ababa, Ethiopia
                  </span>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white transition hover:text-[#D4A72C]"
              >
                View Contact Page
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </aside>

          {/* FORM */}
          <div className="lg:col-span-8">
            <div className="border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-10">
              <div className="mb-8 border-b border-[#E2E8F0] pb-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4A72C]">
                  Project Information
                </p>

                <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                  Tell us about your project
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#64748B]">
                  Submit the form below and provide the information you
                  currently have available.
                </p>
              </div>

              <form
                action="https://formspree.io/f/mvkolvbz"
                method="POST"
                className="space-y-6"
              >
                {/* NAME + EMAIL */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0F172A]"
                    >
                      Full Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="h-12 w-full border border-[#CBD5E1] bg-[#F8FAFC] px-4 text-sm outline-none transition focus:border-[#D4A72C] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0F172A]"
                    >
                      Email Address *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="h-12 w-full border border-[#CBD5E1] bg-[#F8FAFC] px-4 text-sm outline-none transition focus:border-[#D4A72C] focus:bg-white"
                    />
                  </div>
                </div>

                {/* PHONE + SERVICE */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0F172A]"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+251 ..."
                      className="h-12 w-full border border-[#CBD5E1] bg-[#F8FAFC] px-4 text-sm outline-none transition focus:border-[#D4A72C] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0F172A]"
                    >
                      Service *
                    </label>

                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      required
                      className="h-12 w-full appearance-none border border-[#CBD5E1] bg-[#F8FAFC] px-4 text-sm text-[#0F172A] outline-none transition focus:border-[#D4A72C] focus:bg-white"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      <option value="House Construction">
                        House Construction
                      </option>

                      <option value="Home Renovation">Home Renovation</option>

                      <option value="Waterproofing">Waterproofing</option>

                      <option value="Repairs & Maintenance">
                        Repairs & Maintenance
                      </option>

                      <option value="Interior & Exterior Finishing">
                        Interior & Exterior Finishing
                      </option>

                      <option value="Consultation">Consultation</option>

                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* PROPERTY TYPE + LOCATION */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="property-type"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0F172A]"
                    >
                      Property Type
                    </label>

                    <select
                      id="property-type"
                      name="property_type"
                      defaultValue=""
                      className="h-12 w-full appearance-none border border-[#CBD5E1] bg-[#F8FAFC] px-4 text-sm text-[#0F172A] outline-none transition focus:border-[#D4A72C] focus:bg-white"
                    >
                      <option value="" disabled>
                        Select property type
                      </option>

                      <option value="House">House</option>
                      <option value="Villa">Villa</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Residential Building">
                        Residential Building
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0F172A]"
                    >
                      Project Location
                    </label>

                    <input
                      id="location"
                      name="location"
                      type="text"
                      placeholder="Sub-city / area"
                      className="h-12 w-full border border-[#CBD5E1] bg-[#F8FAFC] px-4 text-sm outline-none transition focus:border-[#D4A72C] focus:bg-white"
                    />
                  </div>
                </div>

                {/* AREA + STAGE */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="area"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0F172A]"
                    >
                      Approximate Area
                    </label>

                    <div className="relative">
                      <input
                        id="area"
                        name="approximate_area"
                        type="number"
                        min="0"
                        placeholder="e.g. 150"
                        className="h-12 w-full border border-[#CBD5E1] bg-[#F8FAFC] px-4 pr-16 text-sm outline-none transition focus:border-[#D4A72C] focus:bg-white"
                      />

                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#94A3B8]">
                        m²
                      </span>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="stage"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0F172A]"
                    >
                      Project Stage
                    </label>

                    <select
                      id="stage"
                      name="project_stage"
                      defaultValue=""
                      className="h-12 w-full appearance-none border border-[#CBD5E1] bg-[#F8FAFC] px-4 text-sm text-[#0F172A] outline-none transition focus:border-[#D4A72C] focus:bg-white"
                    >
                      <option value="" disabled>
                        Select current stage
                      </option>

                      <option value="Planning">Planning</option>
                      <option value="Design">Design / Documentation</option>
                      <option value="Ready to Start">Ready to Start</option>
                      <option value="Under Construction">
                        Already Under Construction
                      </option>
                      <option value="Renovation Needed">
                        Existing Property / Renovation
                      </option>
                    </select>
                  </div>
                </div>

                {/* BUDGET */}
                <div>
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0F172A]"
                  >
                    Approximate Budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    className="h-12 w-full appearance-none border border-[#CBD5E1] bg-[#F8FAFC] px-4 text-sm text-[#0F172A] outline-none transition focus:border-[#D4A72C] focus:bg-white"
                  >
                    <option value="" disabled>
                      Select if known
                    </option>

                    <option value="Not sure">Not sure yet</option>
                    <option value="Under 1M ETB">Under 1M ETB</option>
                    <option value="1M - 3M ETB">1M – 3M ETB</option>
                    <option value="3M - 5M ETB">3M – 5M ETB</option>
                    <option value="5M+ ETB">5M+ ETB</option>
                  </select>

                  <p className="mt-2 text-xs text-[#94A3B8]">
                    This is only to understand the project scope. It is not used
                    as a guaranteed pricing calculation.
                  </p>
                </div>

                {/* DETAILS */}
                <div>
                  <label
                    htmlFor="details"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0F172A]"
                  >
                    Project Details *
                  </label>

                  <textarea
                    id="details"
                    name="message"
                    rows={7}
                    required
                    placeholder="Describe what you want to build, renovate, repair, or improve..."
                    className="w-full resize-none border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-3 text-sm leading-6 outline-none transition focus:border-[#D4A72C] focus:bg-white"
                  />
                </div>

                {/* HONEYPOT */}
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />

                {/* SUBJECT */}
                <input
                  type="hidden"
                  name="_subject"
                  value="New SeraBuild Project Quote Request"
                />

                {/* SUBMIT */}
                <div className="border-t border-[#E2E8F0] pt-6">
                  <button
                    type="submit"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 bg-[#D4A72C] px-7 text-sm font-bold uppercase tracking-wider text-[#0F172A] transition hover:bg-[#E5BB45] sm:w-auto"
                  >
                    Submit Project Request
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <p className="mt-4 max-w-2xl text-xs leading-5 text-[#94A3B8]">
                    By submitting this form, you agree that the information may
                    be used to respond to your inquiry. A submitted request is
                    not a quotation, construction contract, or guarantee of
                    service. See our{" "}
                    <Link
                      href="/privacy"
                      className="font-semibold text-[#475569] underline underline-offset-2"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-[#E2E8F0] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <SimpleStep
              number="01"
              title="Submit"
              description="Tell us about your project and what you need."
            />

            <SimpleStep
              number="02"
              title="Review"
              description="The project information is reviewed to understand the scope."
            />

            <SimpleStep
              number="03"
              title="Discuss"
              description="The next steps can then be discussed based on the project requirements."
            />
          </div>
        </div>
      </section>

      {/* DEMO NOTICE */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="border border-[#E2E8F0] bg-white px-6 py-5">
          <p className="text-xs leading-5 text-[#64748B]">
            <strong className="text-[#0F172A]">Portfolio demonstration:</strong>{" "}
            SeraBuild is a fictional construction and home-improvement website
            created as a portfolio project. The quote request interface
            demonstrates a real-world inquiry workflow; service availability,
            contact details, pricing, and project claims should be replaced with
            verified business information before commercial use.
          </p>
        </div>
      </section>
    </main>
  );
}

function SimpleStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <span className="text-3xl font-black text-[#D4A72C]">{number}</span>

      <div>
        <h3 className="text-lg font-black">{title}</h3>

        <p className="mt-2 text-sm leading-6 text-[#64748B]">{description}</p>
      </div>
    </div>
  );
}
