// app/page.tsx
import Hero from "@/components/home/hero";
import CapabilityStrip from "@/components/home/capability-strip";
import ProcessSection from "@/components/home/process-section"; // Imported process timeline
import ServicesSection from "@/components/home/services-section";
import Disclaimer from "@/components/shared/disclaimer";

export const metadata = {
  title: "SeraBuild | Construction Company Addis Ababa",
  description:
    "Fictional portfolio case study showcasing modern house construction, home renovation, and waterproofing services in Addis Ababa, Ethiopia.",
};

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Bright High-Exposure Hero Segment */}
      <Hero />

      {/* 2. Operations Simulation Data Ribbon */}
      <CapabilityStrip />

      {/* 3. New Architectural Milestone Timeline Section */}
      <ProcessSection />

      {/* 4. Core Capabilities Matrix Grid */}
      <ServicesSection />

      {/* 5. Structural Disclaimer Safeguard Box */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <Disclaimer />
      </div>
    </div>
  );
}
