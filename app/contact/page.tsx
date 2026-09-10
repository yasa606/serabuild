// app/contact/page.tsx
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export const metadata = {
  title: "Contact Our Engineering Office Addis Ababa | SeraBuild",
  description:
    "Connect with SeraBuild's case study team. Access support channels, email details, and mock regional communications arrays.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen pb-24">
      {/* Header Banner */}
      <section className="bg-[#0F172A] py-16 text-white border-b border-[#E2E8F0]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="block text-xs font-mono text-[#D4A72C] uppercase tracking-wider mb-2">
            Connect With Us
          </span>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Main Form Split Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Hand: Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-[#E2E8F0] p-6 shadow-sm">
            <h2 className="text-sm font-black uppercase tracking-widest text-[#0F172A] mb-6 pb-2 border-b border-[#E2E8F0]">
              Office Communications
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#D4A72C] shrink-0 mt-0.5" />
                <p className="text-xs text-[#111827] font-mono leading-relaxed">
                  Bole Sub-City, Next to Africa Avenue Node,
                  <br />
                  Addis Ababa, Ethiopia
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-[#F8FAFC]">
                <Phone className="h-4 w-4 text-[#D4A72C]" />
                <p className="text-xs text-[#111827] font-mono">
                  +251 73415458 (Illustrative)
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-[#F8FAFC]">
                <Mail className="h-4 w-4 text-[#D4A72C]" />
                <p className="text-xs text-[#111827] font-mono">
                  admin@serabuild.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Hand: Simple Contact Form */}
        <div className="lg:col-span-7 bg-white border border-[#E2E8F0] p-6 sm:p-10 shadow-sm">
          <h2 className="text-lg font-black uppercase tracking-tight text-[#0F172A] mb-2">
            Submit General Inquiry
          </h2>
          <p className="text-xs text-[#64748B] mb-6">
            For general platform research questions or case inquiries.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-[#111827] mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] p-3 text-xs outline-none focus:border-[#D4A72C]"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-[#111827] mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] p-3 text-xs outline-none focus:border-[#D4A72C]"
                placeholder="yourname@domain.com"
                required
              />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-[#111827] mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] p-3 text-xs outline-none focus:border-[#D4A72C] resize-none"
                placeholder="Type your question here..."
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center bg-[#0F172A] text-white px-6 text-[10px] font-bold uppercase tracking-wider gap-2 hover:bg-[#1E293B] transition-colors"
            >
              Send Message <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
