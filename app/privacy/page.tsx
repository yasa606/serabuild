import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | SeraBuild",
  description:
    "Read the SeraBuild Privacy Policy covering information, website usage, forms, cookies, and third-party services.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-[#F8FAFC] text-[#0F172A]">
      {/* Header */}
      <section className="border-b border-[#E2E8F0] bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#D4A72C]">
            Legal
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-[#64748B]">
            This Privacy Policy explains how information may be handled when
            using the SeraBuild website.
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
              created as a portfolio and SEO implementation project. It is not
              presented as an operating construction company, registered
              contractor, or real-world service provider.
            </p>
          </div>

          <LegalSection title="1. Information we may receive">
            <p>
              Depending on which website features are enabled, SeraBuild may
              receive information that you voluntarily provide through forms or
              other interactions.
            </p>

            <p>
              This may include information such as your name, email address,
              telephone number, property or project details, and the contents of
              a message submitted through a contact or quote form.
            </p>

            <p>
              Please do not submit passwords, payment-card information,
              government identification numbers, or other highly sensitive
              information through this demonstration website.
            </p>
          </LegalSection>

          <LegalSection title="2. How information may be used">
            <p>
              Information voluntarily submitted through the website may be used
              to demonstrate website functionality, respond to an inquiry,
              understand a requested service, or improve the demonstration
              experience.
            </p>

            <p>
              Because SeraBuild is a portfolio project, any form-processing
              functionality should be understood as demonstration functionality
              unless a specific production service is explicitly connected.
            </p>
          </LegalSection>

          <LegalSection title="3. Website and technical information">
            <p>
              When a website is accessed, hosting and infrastructure providers
              may automatically process technical information associated with
              the request. This can include information such as IP address,
              browser type, device information, requested pages, and technical
              logs.
            </p>

            <p>
              Such information is generally used for security, reliability,
              debugging, and infrastructure operation.
            </p>
          </LegalSection>

          <LegalSection title="4. Cookies and similar technologies">
            <p>
              SeraBuild may use cookies or similar technologies if required by
              website functionality, analytics, security, or other integrated
              services.
            </p>

            <p>
              No claim is made that a particular analytics or advertising
              service is currently active. Any future third-party service should
              be configured with its own applicable privacy requirements.
            </p>
          </LegalSection>

          <LegalSection title="5. Third-party services">
            <p>
              The website may be hosted on or connected to third-party platforms
              and services. Those providers may process information according to
              their own privacy policies and terms.
            </p>

            <p>
              Examples may include website hosting, form processing, analytics,
              communication, or other infrastructure services if they are
              actually connected to the website.
            </p>
          </LegalSection>

          <LegalSection title="6. Data security">
            <p>
              Reasonable technical measures should be used to protect
              information handled by the website. However, no internet
              transmission or electronic storage system can be guaranteed to be
              completely secure.
            </p>
          </LegalSection>

          <LegalSection title="7. Data retention">
            <p>
              Information submitted through a connected production service
              should be retained only for as long as reasonably necessary for
              the purpose for which it was collected, subject to applicable
              legal or operational requirements.
            </p>

            <p>
              The retention period for this portfolio demonstration is not
              represented as a fixed production policy because the site does not
              represent an operating customer-data system.
            </p>
          </LegalSection>

          <LegalSection title="8. Children's privacy">
            <p>
              The website is not specifically directed toward children. Users
              should not submit unnecessary personal information through the
              website.
            </p>
          </LegalSection>

          <LegalSection title="9. Changes to this Privacy Policy">
            <p>
              This Privacy Policy may be updated when the website structure,
              functionality, integrations, or project purpose changes. The
              latest version will be published on this page.
            </p>
          </LegalSection>

          <LegalSection title="10. Contact">
            <p>
              For questions about this demonstration website or its privacy
              content, use the information available on the{" "}
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
            href="/terms"
            className="inline-flex items-center justify-center bg-[#0F172A] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1E293B]"
          >
            Terms & Conditions
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
