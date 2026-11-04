"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import TransformationSlider from "@/components/TransformationSlider";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import RegistrationSection from "@/components/RegistrationSection";

export default function Home() {
  const [lang, setLang] = useState("ar");
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
  };

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="font-sans bg-[#111827] text-white min-h-screen w-full max-w-full overflow-x-hidden"
    >
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <TrustBar lang={lang} />
      <FeaturedPrograms lang={lang} />
      <TransformationSlider lang={lang} />
      <WhyChooseUs lang={lang} />

      <PricingSection
        lang={lang}
        onSelectPlan={handleSelectPlan}
        selectedPlan={selectedPlan}
      />

      <TestimonialsSection lang={lang} />

      <RegistrationSection
        lang={lang}
        selectedPlan={selectedPlan}
        onPlanChange={setSelectedPlan}
      />
    </div>
  );
}
