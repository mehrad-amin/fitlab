"use client";

import { Dumbbell, MessageCircle, Users, Clock } from "lucide-react";

export default function WhyChooseUs({ lang = "ar" }) {
  const isAr = lang === "ar";

  const outlineStyle = {
    color: "#C7F500",
  };

  const cardClipPath =
    "polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 22px 100%, 0 calc(100% - 22px))";

  const content = {
    en: {
      eyebrow: "Why Choose Us",
      line1Solid: "FUEL YOUR AMBITION",
      line1Stroke: "IGNITE YOUR PASSION",
      cards: [
        {
          icon: Dumbbell,
          title: "CUTTING-EDGE EQUIPMENT",
          desc: "A top-notch system should boast a diverse array of cutting-edge fitness methodology catering to various workout styles.",
        },
        {
          icon: MessageCircle,
          title: "EXPERT GUIDANCE AND PERSONALIZED",
          desc: "Direct daily WhatsApp check-ins and expert 1-on-1 supervision to maximize your physical performance safely.",
        },
        {
          icon: Users,
          title: "ATMOSPHERE AND COMMUNITY",
          desc: "An elite ecosystem built to keep your discipline high, pushing your limits toward sustainable body transformation.",
        },
        {
          icon: Clock,
          title: "FLEXIBLE HOURS AND ACCESSIBILITY",
          desc: "Tailored schedules and flexible nutrition frameworks designed specifically around your busy GCC business lifestyle.",
        },
      ],
    },
    ar: {
      eyebrow: "لماذا تختارنا",
      line1Solid: "حفز طموحك البدني",
      line1Stroke: "وأطلق شغفك نحو القمة",
      cards: [
        {
          icon: Dumbbell,
          title: "أنظمة وبرمجة متقدمة",
          desc: "نظام تدريبي عالي المستوى يعتمد على أحدث أساليب بيوميكانيكا الحركة المخصصة لمختلف أنماط التدريب.",
        },
        {
          icon: MessageCircle,
          title: "توجيه خبرة ومتابعة واتساب",
          desc: "تواصل مباشر يومي عبر الواتساب وإشراف شخصي خاص لضمان أداء التمارين بأعلى كفاءة وأمان.",
        },
        {
          icon: Users,
          title: "بيئة تحفيز ومجتمع طموح",
          desc: "منظومة مصممة خصيصاً للحفاظ على أعلى درجات الانضباط والتحفيز المستمر للوصول لهدفك المنشود.",
        },
        {
          icon: Clock,
          title: "مرونة كاملة وسهولة وصول",
          desc: "جداول مرنة وأنظمة غذائية تتناسب تماماً مع ساعات عملك واختياراتك في دول الخليج.",
        },
      ],
    },
  };

  const t = content[lang] || content.ar;

  return (
    <section
      id="why-us"
      className="relative w-full overflow-hidden bg-[#111827] py-14 sm:py-20 lg:py-24 select-none border-t border-white/5 scroll-mt-20"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#C7F500]">
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
            <span className="text-white mb-1">{t.line1Solid}</span>
            <span style={outlineStyle}>{t.line1Stroke}</span>
          </h2>
        </div>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                style={{ clipPath: cardClipPath }}
                className="group relative p-[1px] bg-white/15 hover:bg-[#C7F500] transition-all duration-300 rounded-[24px] shadow-xl"
              >
                <div
                  style={{ clipPath: cardClipPath }}
                  className="flex flex-col justify-between bg-[#151F31] p-6 sm:p-8 h-full w-full rounded-[23px] transition-colors duration-300 group-hover:bg-[#1a263b]"
                >
                  <div>
                    <div className="inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#C7F500] text-black transition-transform duration-300 group-hover:scale-110 shadow-[0_0_15px_rgba(199,245,0,0.4)]">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.5]" />
                    </div>

                    <h3 className="mt-4 sm:mt-6 text-sm sm:text-base font-[900] text-white tracking-wider leading-snug uppercase">
                      {card.title}
                    </h3>

                    <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-[13px] leading-relaxed text-slate-300/80 transition-colors">
                      {card.desc}
                    </p>
                  </div>

                  <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-black tracking-widest text-[#C7F500]">
                      ELITE SYSTEM
                    </span>
                    <div className="h-1 w-6 rounded-full bg-white/15 group-hover:bg-[#C7F500] transition-colors duration-300" />
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
