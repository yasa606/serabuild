// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "./../components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "SeraBuild | Construction Company Addis Ababa",
    template: "%s | SeraBuild",
  },
  description: "Case study modeling residential contractor systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-[#F8FAFC]`}
      >
        <Navbar />

        <main className="flex-grow">{children}</main>
        {/* Footer will inject right under this later */}
        <Footer />
      </body>
    </html>
  );
}
