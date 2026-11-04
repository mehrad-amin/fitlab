"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function PricingSection({
  lang = "ar",
  onSelectPlan,
  selectedPlan,
}) {
  const isAr = lang === "ar";
  const [selectedCurrency, setSelectedCurrency] = useState("AED");

  const currencyRates = {
    AED: { symbol: "AED", rate: 1 },
    SAR: { symbol: "SAR", rate: 1.02 },
    KWD: { symbol: "KWD", rate: 0.084 },
    QAR: { symbol: "QAR", rate: 0.99 },
    BHD: { symbol: "BHD", rate: 0.103 },
    OMR: { symbol: "OMR", rate: 0.105 },
  };

  const calculatePrice = (basePriceUSD) => {
    const rate = currencyRates[selectedCurrency].rate;
    const converted = Math.round(basePriceUSD * rate);
    return converted.toLocaleString();
  };

  const pricingData = {
    ar: {
      eyebrow: "الأسعار والاستثمار البدني",
      titlePart1: "اختر باقتك",
      titlePart2: "التدريبية المثالية",
      currencyLabel: "اختر عملتك:",
      selectedBadgeText: "الباقة المختارة",
      plans: [
        {
          id: "daily",
          title: "الباقة اليومية السريعة",
          basePrice: 30,
          badge: "للبدء السريع",
          desc: "خطة يومية مصممة خصيصاً لاختبار النظام البدني وبدء أول خطوة نحو روتينك الرياضي الصحي.",
          features: [
            "جدول تمريني ليوم واحد",
            "إرشادات التغذية السريعة",
            "دعم مبدئي للتمارين",
          ],
          buttonText: "اختيار الباقة",
        },
        {
          id: "monthly",
          title: "باقة النخبة الشهرية VIP",
          basePrice: 199,
          badge: "الأكثر طلباً",
          desc: "نظامنا الاحترافي المتكامل للمتابعة اليومية، التغذية المخصصة، وضمان تحقيق أسرع معدلات البناء العضلي وحرق الدهون.",
          features: [
            "متابعة يومية مباشرة عبر الواتساب",
            "خطة تدريب وتغذية مخصصة ۱۰۰٪",
            "مراجعة دورية لتكنيك الحركات",
            "مرونة غذائية تناسب حياتك اليومية",
          ],
          buttonText: "اختيار الباقة",
        },
        {
          id: "yearly",
          title: "باقة التحول الشامل السنوية",
          basePrice: 999,
          badge: "الاستثمار الأقوى",
          desc: "برمجة طويلة الأمد، إشراف هندسي متقدم للجسم، وإعادة صياغة كاملة لنمط حياتك الرياضي على مدار العام.",
          features: [
            "إشراف ومتابعة خاصة لمدة ۱۲ شهراً",
            "تعديلات فورية للبرامج حسب التطور",
            "مكالمات فيديو استشارية مباشرة",
            "أولوية مطلقة في الردود والدعم",
          ],
          buttonText: "اختيار الباقة",
        },
      ],
    },
    en: {
      eyebrow: "PRICING & INVESTMENT",
      titlePart1: "CHOOSE YOUR",
      titlePart2: "PERFECT PLAN",
      currencyLabel: "Select Currency:",
      selectedBadgeText: "Selected Plan",
      plans: [
        {
          id: "daily",
          title: "DAILY KICKSTART PLAN",
          basePrice: 30,
          badge: "QUICK START",
          desc: "A focused daily coaching layout designed to test the system and kickstart your fitness routine instantly.",
          features: [
            "Single Day Workout Blueprint",
            "Basic Macro Guidelines",
            "Introductory Form Audit",
          ],
          buttonText: "Select Plan",
        },
        {
          id: "monthly",
          title: "VIP ELITE MONTHLY TIER",
          basePrice: 199,
          badge: "MOST POPULAR",
          desc: "Our signature high-ticket coaching system with daily WhatsApp check-ins, custom macros, and guaranteed steady progress.",
          features: [
            "Direct Daily WhatsApp Access",
            "100% Customized Training & Diet",
            "Weekly Video Form Adjustments",
            "Flexible Nutrition Framework",
          ],
          buttonText: "Select Plan",
        },
        {
          id: "yearly",
          title: "YEARLY TOTAL TRANSFORMATION",
          basePrice: 999,
          badge: "BEST VALUE",
          desc: "Long-term elite body engineering and complete lifestyle overhaul for sustained peak physical performance.",
          features: [
            "12-Month Dedicated VIP Coaching",
            "Continuous Protocol Adaptation",
            "Exclusive 1-on-1 Video Calls",
            "Priority 24/7 Coach Support",
          ],
          buttonText: "Select Plan",
        },
      ],
    },
  };

  const t = pricingData[lang] || pricingData.ar;

  const outlineStyle = {
    color: "#111827", // حتماً باید دقیقاً همرنگ پس‌زمینه سکشن (#111827) باشد تا متن داخلی کاملاً محو و مخفی بماند
    WebkitTextStroke: isAr ? "1.5px #FFFFFF" : "1.8px #FFFFFF",
    paintOrder: "stroke fill",
  };

  const cardClipPath =
    "polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 22px 100%, 0 calc(100% - 22px))";

  return (
    <section className="relative w-full overflow-hidden bg-[#111827] py-20 sm:py-24 select-none border-t border-white/5">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#C7F500]">
            {t.eyebrow}
          </span>

          <h2
            dir={isAr ? "rtl" : "ltr"}
            className={`mt-2 sm:mt-3 flex flex-col items-center font-[900] uppercase select-none ${
              isAr
                ? "leading-[1.25] tracking-normal text-2xl sm:text-4xl md:text-[42px]"
                : "leading-[1.08] tracking-tight font-display text-2xl sm:text-4xl md:text-[44px]"
            }`}
          >
            <span className="text-white mb-1">{t.titlePart1}</span>
            <span style={outlineStyle}>{t.titlePart2}</span>
          </h2>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="text-xs font-bold text-slate-400">
            {t.currencyLabel}
          </span>
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-2xl border border-white/10 bg-[#162032] p-1.5 backdrop-blur-md">
            {Object.keys(currencyRates).map((curr) => (
              <button
                key={curr}
                onClick={() => setSelectedCurrency(curr)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-black transition-all ${
                  selectedCurrency === curr
                    ? "bg-[#C7F500] text-black shadow-[0_0_15px_rgba(199,245,0,0.3)] scale-105"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {t.plans.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            const isPopular = plan.id === "monthly";

            return (
              <div
                key={plan.id}
                style={{ clipPath: cardClipPath }}
                className={`group relative p-[1px] transition-all duration-300 rounded-[24px] ${
                  isSelected
                    ? "bg-[#C7F500] ring-2 ring-[#C7F500]/50 shadow-[0_0_35px_rgba(199,245,0,0.25)] lg:-translate-y-2"
                    : isPopular
                      ? "bg-[#C7F500]/40 border-t border-[#C7F500] shadow-xl"
                      : "bg-white/10 hover:bg-white/20 shadow-xl"
                }`}
              >
                <div
                  style={{ clipPath: cardClipPath }}
                  className={`flex flex-col justify-between p-7 sm:p-8 h-full w-full rounded-[23px] transition-colors duration-300 ${
                    isSelected
                      ? "bg-[#182338]"
                      : isPopular
                        ? "bg-[#162032] group-hover:bg-[#192438]"
                        : "bg-[#151F31] group-hover:bg-[#182235]"
                  }`}
                >
                  <div className="absolute top-6 end-6 z-10">
                    {isSelected ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#C7F500] px-3.5 py-1 text-[11px] font-black tracking-wider text-black shadow-md">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                        <span>{t.selectedBadgeText}</span>
                      </span>
                    ) : (
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-[10px] font-black tracking-wider ${
                          isPopular
                            ? "bg-[#C7F500]/15 text-[#C7F500] border border-[#C7F500]/30"
                            : "bg-white/10 text-slate-300"
                        }`}
                      >
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <div className="relative z-10 pe-16">
                    <h3 className="text-sm sm:text-base font-[900] text-white tracking-wider uppercase leading-snug">
                      {plan.title}
                    </h3>

                    <div className="mt-4 flex items-baseline gap-1.5 text-white font-[900]">
                      <span className="text-xs sm:text-sm font-bold text-[#A3AEC0]">
                        {selectedCurrency}
                      </span>
                      <span className="text-3xl sm:text-4xl tracking-tight">
                        {calculatePrice(plan.basePrice)}
                      </span>
                    </div>

                    <p className="mt-4 text-xs sm:text-[13px] leading-relaxed text-slate-300/80">
                      {plan.desc}
                    </p>

                    <div className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                      {plan.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5">
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${isSelected || isPopular ? "bg-[#C7F500]" : "bg-slate-400"}`}
                          />
                          <span className="text-xs font-semibold text-slate-200">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 mt-8 pt-4 border-t border-white/5">
                    <button
                      onClick={() => onSelectPlan && onSelectPlan(plan.id)}
                      className={`flex h-12 w-full items-center justify-center gap-2 rounded-2xl text-xs sm:text-sm font-black transition-all duration-200 active:scale-95 cursor-pointer ${
                        isSelected
                          ? "bg-[#C7F500] text-black shadow-[0_0_20px_rgba(199,245,0,0.4)]"
                          : isPopular
                            ? "border border-[#C7F500] text-[#C7F500] hover:bg-[#C7F500] hover:text-black"
                            : "bg-white/10 text-white hover:border-[#C7F500] hover:text-[#C7F500]"
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="h-4 w-4 stroke-[3]" />
                          <span>
                            {isAr ? "تم اختيار هذه الباقة" : "Selected Plan"}
                          </span>
                        </>
                      ) : (
                        plan.buttonText
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
