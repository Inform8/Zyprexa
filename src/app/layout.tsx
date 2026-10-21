import type { Metadata } from "next";
import { Public_Sans, Spectral, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import UtilityBar from "@/components/UtilityBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HcpDialog from "@/components/HcpDialog";
import ScrollCue from "@/components/ScrollCue";
import InteractiveEnhancements from "@/components/InteractiveEnhancements";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s · ZYPREXA HCP",
    default: "ZYPREXA HCP",
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
      className={`${publicSans.variable} ${spectral.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <UtilityBar />
        <Header />
        {children}
        <Footer />
        <HcpDialog />
        <ScrollCue />
        <InteractiveEnhancements />
      </body>
    </html>
  );
}
