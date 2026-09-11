// app/contact/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact SeraBuild | Construction & Renovation Addis Ababa",
  description:
    "Contact SeraBuild about residential construction, home renovation, waterproofing, and property improvement services in Addis Ababa.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* HERO */}
      <section className="border-b border-[#E2E8F0] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#D4A72C]">
              Get In Touch
            </p>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s Talk About Your{" "}
              <span className="text-[#D4A72C]">Project.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg">
              Have a construction, renovation, waterproofing, or property
              improvement project in Addis Ababa? Send us your project details
              and we&apos;ll help you define the next step.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* CONTACT INFORMATION */}
          <div className="lg:col-span-5">
            <div className="border border-[#E2E8F0] bg-white p-6 sm:p-8">
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4A72C]">
                  Contact Information
                </p>

                <h2 className="mt-2 text-2xl font-black tracking-tight">
                  Start the conversation
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#64748B]">
                  Choose the contact method that works best for you or send us a
                  message using the form.
                </p>
              </div>

              <div className="space-y-5">
                {/* EMAIL */}
                <a
                  href="yassermuna01@gmail.com"
                  className="group flex items-start gap-4 border-t border-[#E2E8F0] pt-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F8FAFC]">
                    <Mail className="h-5 w-5 text-[#D4A72C]" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                      Email
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#0F172A] group-hover:text-[#D4A72C]">
                      yassermuna01@gmail.com
                    </p>
                  </div>
                </a>

                {/* PHONE */}
                <a
                  href="tel:+251973415854"
                  className="group flex items-start gap-4 border-t border-[#E2E8F0] pt-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F8FAFC]">
                    <Phone className="h-5 w-5 text-[#D4A72C]" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#0F172A] group-hover:text-[#D4A72C]">
                      +251973415854
                    </p>
                  </div>
                </a>

                {/* LOCATION */}
                <div className="flex items-start gap-4 border-t border-[#E2E8F0] pt-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F8FAFC]">
                    <MapPin className="h-5 w-5 text-[#D4A72C]" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                      Service Area
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#0F172A]">
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>

                {/* HOURS */}
                <div className="flex items-start gap-4 border-t border-[#E2E8F0] pt-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F8FAFC]">
                    <Clock className="h-5 w-5 text-[#D4A72C]" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                      Availability
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#0F172A]">
                      By inquiry
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SERVICE LINKS */}
            <div className="mt-6 border border-[#E2E8F0] bg-[#0F172A] p-6 text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4A72C]">
                What can we help with?
              </p>

              <div className="mt-5 space-y-3">
                <ServiceLink
                  href="/services/house-construction"
                  label="House Construction"
                />

                <ServiceLink
                  href="/services/home-renovation"
                  label="Home Renovation"
                />

                <ServiceLink
                  href="/services/waterproofing"
                  label="Waterproofing"
                />

                <ServiceLink
                  href="/construction-cost"
                  label="Construction Cost Guide"
                />
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-7">
            <div className="border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-10">
              <div className="mb-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-[#0F172A]">
                    <MessageSquare className="h-5 w-5 text-[#D4A72C]" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4A72C]">
                      Send a Message
                    </p>

                    <h2 className="text-2xl font-black tracking-tight">
                      Tell us about your project
                    </h2>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-[#64748B]">
                  Give us enough information to understand what you need. You
                  can include the property type, service, location, and any
                  important project details.
                </p>
              </div>

              {/* FORM */}
              <form
                action="https://formspree.io/f/mvkolvbz"
                method="POST"
                className="space-y-5"
              >
                {/* NAME + EMAIL */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0F172A]"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="w-full border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#D4A72C] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0F172A]"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="w-full border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#D4A72C] focus:bg-white"
                    />
                  </div>
                </div>

                {/* PHONE */}
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
                    className="w-full border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#D4A72C] focus:bg-white"
                  />
                </div>

                {/* SERVICE */}
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0F172A]"
                  >
                    Service
                  </label>

                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className="w-full border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#D4A72C] focus:bg-white"
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

                    <option value="Consultation">Consultation</option>

                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0F172A]"
                  >
                    Project Details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    placeholder="Tell us about your project, property type, location, approximate scope, and what you need help with..."
                    required
                    className="w-full resize-none border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#D4A72C] focus:bg-white"
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

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 bg-[#0F172A] px-6 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[#1E293B] sm:w-auto"
                >
                  Send Inquiry
                  <ArrowRight className="h-4 w-4 text-[#D4A72C]" />
                </button>

                <p className="text-xs leading-5 text-[#94A3B8]">
                  By submitting this form, you agree to the information being
                  processed for the purpose of responding to your inquiry. See
                  our{" "}
                  <Link
                    href="/privacy"
                    className="font-semibold text-[#475569] underline underline-offset-2"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* DEMO NOTICE */}
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="border border-[#E2E8F0] bg-white px-6 py-5">
          <p className="text-xs leading-5 text-[#64748B]">
            <strong className="text-[#0F172A]">Portfolio demonstration:</strong>{" "}
            SeraBuild is a fictional construction and home-improvement website
            created as a portfolio project. Contact information and service
            availability should be replaced with real business information if
            the website is used commercially.
          </p>
        </div>
      </section>
    </main>
  );
}

function ServiceLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between border-b border-white/10 py-3 text-sm font-semibold transition hover:text-[#D4A72C]"
    >
      <span>{label}</span>

      <ArrowRight className="h-4 w-4 text-[#D4A72C] transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
