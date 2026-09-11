import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | SeraBuild",
  description:
    "Read the SeraBuild Terms and Conditions covering website use, content, estimates, project information, and limitations.",
};

export default function TermsPage() {
  return (
    <main className="bg-[#F8FAFC] text-[#0F172A]">
      {/* Header */}
      <section className="border-b border-[#E2E8F0] bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#D4A72C]">
            Legal
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            Terms & Conditions
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-[#64748B]">
            These terms describe the general conditions for using the SeraBuild
            website and its demonstration content.
          </p>

          <p className="mt-4 text-sm text-[#94A3B8]">
            Last updated: September 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {/* Demo notice */}
          <div className="border-l-4 border-[#D4A72C] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#0F172A]">
              Important project notice
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#475569]">
              SeraBuild is a fictional construction and home-improvement website
              created as a portfolio and SEO implementation project. The website
              does not establish a real construction contract, contractor
              relationship, quotation, guarantee, or service agreement.
            </p>
          </div>

          <LegalSection title="1. Acceptance of these terms">
            <p>
              By accessing or using the SeraBuild website, you agree to use the
              website responsibly and in accordance with these Terms &
              Conditions.
            </p>

            <p>
              If you do not agree with these terms, you should discontinue use
              of the website.
            </p>
          </LegalSection>

          <LegalSection title="2. Purpose of the website">
            <p>
              SeraBuild is a portfolio demonstration of a residential
              construction and home-improvement website focused on Addis Ababa,
              Ethiopia.
            </p>

            <p>
              The website demonstrates concepts including residential
              construction, home renovation, waterproofing, construction
              planning, cost guidance, user experience, and search engine
              optimization.
            </p>
          </LegalSection>

          <LegalSection title="3. No construction contract">
            <p>
              Information displayed on this website does not constitute a
              construction contract, architectural agreement, engineering
              agreement, quotation, tender, purchase order, or legally binding
              offer.
            </p>

            <p>
              A website form, button, inquiry, or request for a quote does not
              by itself create a contractual relationship.
            </p>
          </LegalSection>

          <LegalSection title="4. Construction and technical information">
            <p>
              Construction, renovation, waterproofing, material, planning, and
              cost-related information is provided for general demonstration or
              educational purposes.
            </p>

            <p>
              Actual construction decisions should be based on project-specific
              site conditions, drawings, specifications, measurements,
              applicable standards, professional advice, material availability,
              labor conditions, and legally required approvals.
            </p>
          </LegalSection>

          <LegalSection title="5. Cost information and estimates">
            <p>
              Any prices, ranges, calculations, rates, quantities, or cost
              examples displayed on the website are illustrative unless
              explicitly identified otherwise.
            </p>

            <p>
              Demonstration estimates should not be interpreted as current
              market quotations or guaranteed construction prices. Actual
              project costs can vary substantially depending on scope,
              specifications, location, materials, labor, design, site
              conditions, and other factors.
            </p>
          </LegalSection>

          <LegalSection title="6. Projects and portfolio content">
            <p>
              Project examples presented on the website may be conceptual or
              hypothetical examples created for demonstration purposes.
            </p>

            <p>
              They should not be interpreted as completed projects,
              representations of actual clients, or evidence of previous
              construction performance unless a specific project is explicitly
              identified as real and independently verifiable.
            </p>
          </LegalSection>

          <LegalSection title="7. Website content accuracy">
            <p>
              Reasonable care is taken when preparing website content, but no
              guarantee is made that every item is complete, current, or free
              from errors.
            </p>

            <p>
              Information may be changed, removed, or updated without prior
              notice.
            </p>
          </LegalSection>

          <LegalSection title="8. Intellectual property">
            <p>
              The SeraBuild website structure, original written content,
              branding elements, interface design, and other original materials
              created for the project are intended to remain protected by
              applicable intellectual-property rights.
            </p>

            <p>
              You may not reproduce, redistribute, modify, or commercially
              exploit original website materials without appropriate permission,
              except where permitted by law.
            </p>
          </LegalSection>

          <LegalSection title="9. Acceptable use">
            <p>
              You agree not to misuse the website, attempt to gain unauthorized
              access, interfere with its operation, introduce malicious code,
              scrape information in a harmful manner, or use the website for
              unlawful purposes.
            </p>
          </LegalSection>

          <LegalSection title="10. External links and services">
            <p>
              The website may contain links or integrations involving
              third-party websites or services. SeraBuild does not control
              third-party platforms and is not responsible for their content,
              availability, security, or policies.
            </p>
          </LegalSection>

          <LegalSection title="11. Limitation of liability">
            <p>
              To the extent permitted by applicable law, the SeraBuild
              demonstration website and its content are provided without
              guarantees regarding availability, accuracy, suitability, or
              fitness for a particular purpose.
            </p>

            <p>
              Because this is a portfolio demonstration rather than an operating
              construction business, users should not rely on the website as the
              sole basis for construction, financial, engineering, procurement,
              or property decisions.
            </p>
          </LegalSection>

          <LegalSection title="12. Changes to these terms">
            <p>
              These Terms & Conditions may be updated as the SeraBuild project
              evolves. The latest version will be published on this page.
            </p>
          </LegalSection>

          <LegalSection title="13. Contact">
            <p>
              Questions about the demonstration website can be directed through
              the{" "}
              <Link
                href="/contact"
                className="font-semibold text-[#0F172A] underline decoration-[#D4A72C] decoration-2 underline-offset-4"
              >
                Contact page
              </Link>
              .
            </p>
          </LegalSection>
        </div>

        {/* Bottom navigation */}
        <div className="mt-14 flex flex-wrap gap-4 border-t border-[#E2E8F0] pt-8">
          <Link
            href="/privacy"
            className="inline-flex items-center justify-center bg-[#0F172A] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1E293B]"
          >
            Privacy Policy
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center border border-[#CBD5E1] bg-white px-5 py-3 text-sm font-bold text-[#0F172A] transition hover:border-[#D4A72C]"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-[#E2E8F0] pb-8">
      <h2 className="text-xl font-bold tracking-tight text-[#0F172A]">
        {title}
      </h2>

      <div className="mt-4 space-y-4 text-sm leading-7 text-[#475569]">
        {children}
      </div>
    </section>
  );
}
