import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UtilityBar from "@/components/UtilityBar";
import Header from "@/components/Header";
import SectionNav from "@/components/SectionNav";
import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import HcpDialog from "@/components/HcpDialog";
import ScrollCue from "@/components/ScrollCue";
import InteractiveEnhancements from "@/components/InteractiveEnhancements";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s · ZYPREXA HCP",
    default: "ZYPREXA (olanzapine) HCP",
  },
  description:
    "Information for healthcare professionals on ZYPREXA (olanzapine): approved indications, clinical evidence, pharmacology and prescribing information, based on the EU Summary of Product Characteristics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={inter.variable}
      data-scroll-behavior="smooth"
    >
      <body>
        <div className="bg-circles" aria-hidden="true">
          <span className="c1" />
          <span className="c2" />
          <span className="c3" />
          <span className="c4" />
          <span className="c5" />
          <span className="c6" />
        </div>
        <Header />
        <SectionNav />
        {children}
        <PageNav />
        <Footer />
        <HcpDialog />
        <ScrollCue />
        <InteractiveEnhancements />
      </body>
    </html>
  );
}

