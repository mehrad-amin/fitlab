"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export default function FaqSection({ lang = "ar" }) {
  const isAr = lang === "ar";
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const content = {
    en: {
      eyebrow: "COMMON QUESTIONS & ANSWERS",
      line1Solid: "COMMON",
      line1Stroke: "QUESTIONS",
      line2Stroke: "CLEAR",
      line2Solid: "ANSWERS!",
      items: [
        {
          q: "Do I have to strictly give up my favorite foods or social outings?",
          a: "Not at all. We rely on flexible nutrition calculated for your basal metabolic rate and lifestyle. You will learn how to fit social dinners and favorite meals into your macros while losing fat steadily.",
        },
        {
          q: "How does the daily 1-on-1 WhatsApp coaching actually work?",
          a: "You get direct private access to the coach. You log daily weight, nutrition, and send your workout execution videos for biomechanical review and form correction in real-time.",
        },
        {
          q: "Can I train at home or do I need a fully equipped gym?",
          a: "The program is engineered around your available equipment. Whether you train in an elite commercial gym, a compact home setup, or with minimal dumbbells, the biomechanics are fully tailored.",
        },
        {
          q: "When can I expect to see the first noticeable changes?",
          a: "Most clients notice significant shifts in energy, strength, and reduced waist circumference within the first 14 to 21 days following our precise metabolic protocol.",
        },
        {
          q: "Can I pause my subscription if I travel or have an emergency?",
          a: "Yes. All VIP coaching tiers include freeze privileges for travel, exams, or business trips so you never lose any paid coaching days.",
        },
      ],
    },
    ar: {
      eyebrow: "الأسئلة الشائعة والإجابات",
      line1Solid: "كل ما يدور",
      line1Stroke: "في ذهنك",
      line2Stroke: "إجابات واضحة",
      line2Solid: "قبل أن تبدأ!",
      items: [
        {
          q: "هل يتطلب البرنامج الحرمان من العزائم أو وجباتي المفضلة؟",
          a: "إطلاقاً. نعتمد نظام المرونة الغذائية المحسوب بدقة لسعراتك ونشاطك. ستتعلم كيف تستمتع بوجباتك المفضلة ومناسباتك الاجتماعية دون أن تعطل نزول الدهون أو بنائك العضلي.",
        },
        {
          q: "كيف تتم المتابعة اليومية المباشرة عبر الواتساب؟",
          a: "تحصل على شات خاص ومباشر مع الكوتش. تقوم برفع أوزانك يومياً، صور وجباتك، وفيديوهات تكنيك التمارين ليتم تصحيح الزوايا الحركية ومتابعة التزامك خطوة بخطوة.",
        },
        {
          q: "هل البرنامج مناسب للتمرين في المنزل أم يتطلب نادياً متكاملاً؟",
          a: "الخطة تُصمم وفقاً للأدوات المتاحة لديك تماماً؛ سواء كنت تتمرن في نادٍ رياضي متكامل أو في منزلك بأوزان بسيطة، ستصل لأفضل شد ونحت لعضلاتك.",
        },
        {
          q: "متى أبدأ بملاحظة النتائج الأولى في جسمي؟",
          a: "خلال أول ۱۴ إلى ۲۱ يوماً ستلاحظ فارقاً واضحاً في قياسات الخصر، خفة الحركة، ومستويات القوة والنشاط البدني بفضل التوازن الهرموني الغذائي.",
        },
        {
          q: "هل يمكنني إيقاف الاشتراك مؤقتاً في حال السفر أو الظروف الطارئة؟",
          a: "نعم بكل تأكيد. تشمل باقات التدريب ميزة التجميد (Freeze) لأيام اشتراكك عند السفر أو العمل لضمان عدم ضياع أي يوم تدريبي.",
        },
      ],
    },
  };

  const t = content[lang] || content.ar;

  const outlineStyle = {
    color: "#C7F500",
  };

  return (
    <section
      id="faq"
      className="relative w-full max-w-full overflow-hidden bg-[#111827] py-14 sm:py-20 lg:py-24 select-none scroll-mt-20"
    >
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* ۱. هدر سکشن با سبک دوخطی برند */}
        <div className="flex flex-col items-center text-center">
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#C7F500]">
            {t.eyebrow}
          </span>

          <h2
            dir={isAr ? "rtl" : "ltr"}
            className={`mt-2 sm:mt-3 flex flex-col items-center font-[900] uppercase select-none ${
              isAr
                ? "leading-[1.25] tracking-normal"
                : "leading-[1.08] tracking-tight font-display"
            }`}
          >
            <div
              className={`flex items-center justify-center gap-1.5 sm:gap-3 whitespace-nowrap ${
                isAr
                  ? "text-2xl sm:text-4xl md:text-[42px]"
                  : "text-[16px] xs:text-[18px] sm:text-3xl md:text-[40px] tracking-tight"
              }`}
            >
              <span className="text-white">{t.line1Solid}</span>
              <span style={outlineStyle}>{t.line1Stroke}</span>
            </div>
            <div
              className={`flex items-center justify-center gap-1.5 sm:gap-3 whitespace-nowrap mt-1 ${
                isAr
                  ? "text-2xl sm:text-4xl md:text-[42px]"
                  : "text-[16px] xs:text-[18px] sm:text-3xl md:text-[40px] tracking-tight"
              }`}
            >
              <span style={outlineStyle}>{t.line2Stroke}</span>
              <span className="text-white">{t.line2Solid}</span>
            </div>
          </h2>
        </div>

        {/* ۲. لیست آکاردئون */}
        <div className="mt-10 sm:mt-14 space-y-3 sm:space-y-4">
          {t.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#C7F500]/60 bg-[#162032] shadow-[0_0_20px_rgba(199,245,0,0.12)]"
                    : "border-white/10 bg-[#162032]/40 hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-start cursor-pointer"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span
                      className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg text-xs font-black transition-colors ${
                        isOpen
                          ? "bg-[#C7F500] text-black"
                          : "bg-white/10 text-slate-300"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm sm:text-base font-[900] text-white">
                      {item.q}
                    </span>
                  </div>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#C7F500]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-white/10 px-5 pt-3 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-300 font-medium">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
