import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import UtilityBar from "@/components/UtilityBar";
import Header from "@/components/Header";
import SectionNav from "@/components/SectionNav";
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

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
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
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body>
        <Header />
        <SectionNav />
        {children}
        <Footer />
        <HcpDialog />
        <ScrollCue />
        <InteractiveEnhancements />
      </body>
    </html>
  );
}

