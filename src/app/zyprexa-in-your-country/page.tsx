import type { Metadata } from "next";
import CountryHero from "@/components/country/CountryHero";
import CountryIntro from "@/components/country/CountryIntro";
import CountryInteractive from "@/components/country/CountryInteractive";
import LegendAndNotes from "@/components/country/LegendAndNotes";
import ReportingSideEffects from "@/components/country/ReportingSideEffects";
import AccuracyReviewStatement from "@/components/country/AccuracyReviewStatement";

export const metadata: Metadata = {
  title: "Zyprexa in Your Country — Local Prescribing & Regulatory Information",
  description:
    "Overview of local Marketing Authorisation Holders (MAHs), approved indications, Summary of Product Characteristics (SmPC) documents, and adverse event reporting details for Zyprexa across 30 countries.",
};

export default function ZyprexaInYourCountryPage() {
  return (
    <main id="app">
      <CountryHero />
      <div className="w">
        <CountryIntro />
        <CountryInteractive />
        <LegendAndNotes />
        <ReportingSideEffects />
        <AccuracyReviewStatement />
      </div>
    </main>
  );
}
