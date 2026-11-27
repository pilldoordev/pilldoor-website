import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustHighlightsSection } from "@/components/sections/TrustHighlightsSection";
import { CustomerHowItWorksSection } from "@/components/sections/CustomerHowItWorksSection";
import { FamilyAppSection } from "@/components/sections/FamilyAppSection";
import { PrescriptionEasierSection } from "@/components/sections/PrescriptionEasierSection";
import { AdditionalMedicinesSection } from "@/components/sections/AdditionalMedicinesSection";
import { OrderVisibilitySection } from "@/components/sections/OrderVisibilitySection";
import { RepeatCareSection } from "@/components/sections/RepeatCareSection";
import { CustomerAppShowcaseSection } from "@/components/sections/CustomerAppShowcaseSection";
import { CustomerFaqSection } from "@/components/sections/CustomerFaqSection";
import { CustomerFinalCtaSection } from "@/components/sections/CustomerFinalCtaSection";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Pilldoor — Your Medicines. Your Family. One Simple App.",
  description:
    "Order your medicines from home, upload prescriptions and manage your family's healthcare needs with Pilldoor. Verified by licensed pharmacists and delivered with a secure 4-digit OTP.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustHighlightsSection />
      <CustomerHowItWorksSection />
      <FamilyAppSection />
      <PrescriptionEasierSection />
      <AdditionalMedicinesSection />
      <OrderVisibilitySection />
      <RepeatCareSection />
      <CustomerAppShowcaseSection />
      <CustomerFaqSection />
      <CustomerFinalCtaSection />
    </div>
  );
}
