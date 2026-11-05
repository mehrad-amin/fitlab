"use client";

import { useState } from "react";
import { Star, ChevronRight, ChevronLeft, Quote } from "lucide-react";

export default function TestimonialsSection({ lang = "ar" }) {
  const isAr = lang === "ar";
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialsData = {
    ar: {
      eyebrow: "آراء المشتركين",
      titlePart1: "قصص نجاح",
      titlePart2: "وتجارب حقيقية",
      testimonials: [
        {
          id: 1,
          name: "فهد الكندري",
          role: "رجل أعمال - دبي",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
          text: "النظام التدريبي والغذائي الذي صممه الكوتش غير حياتي بالكامل. المتابعة اليومية عبر الواتساب والاحترافية العالية في التوجيه جعلتني أصل لهدفي بدون أي حرمان.",
          rating: 5,
        },
        {
          id: 2,
          name: "عمر الهاشمي",
          role: "مهندس برمجيات - الرياض",
          avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
          text: "أفضل تجربة تدريب شخصي أعيشها. التحليل الدقيق لبيوميكانيكا التمارين حماني من آلام الظهر وأعطاني نتائج عضلية صافية لم أصل لها من قبل.",
          rating: 5,
        },
        {
          id: 3,
          name: "خالد بن سلطان",
          role: "رائد أعمال - الكويت",
          avatar:
            "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop",
          text: "المرونة الغذائية والمتابعة المستمرة جعلت الالتزام سهلاً جداً وسط جدول أعمالي المزدحم. أنصح كل جاد في التغيير بالاشتراك فوراً.",
          rating: 5,
        },
        {
          id: 4,
          name: "سلطان العتيبي",
          role: "إداري - جدة",
          avatar:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
          text: "النتيجة التي حققتها في 12 أسبوع تتحدث عن نفسها. التنظيم الغذائي مع المتابعة اللحظية صنع فارقاً جذرياً في لياقتي وقوتي البدنية.",
          rating: 5,
        },
      ],
    },
    en: {
      eyebrow: "CLIENT REVIEWS",
      titlePart1: "REAL SUCCESS",
      titlePart2: "VERIFIED STORIES",
      testimonials: [
        {
          id: 1,
          name: "Fahad Al-Kandari",
          role: "Business Executive - Dubai",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
          text: "The coaching system completely changed my physique. Daily WhatsApp check-ins and precise guidance helped me reach my peak shape effortlessly.",
          rating: 5,
        },
        {
          id: 2,
          name: "Omar Al-Hashimi",
          role: "Software Engineer - Riyadh",
          avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
          text: "Best personal training experience ever. Biomechanical movement audits kept my joints pain-free while delivering pure lean gains.",
          rating: 5,
        },
        {
          id: 3,
          name: "Khalid Bin Sultan",
          role: "Entrepreneur - Kuwait",
          avatar:
            "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop",
          text: "Flexible nutrition and continuous support made compliance effortless amidst my hectic schedule. Truly a top-tier elite system.",
          rating: 5,
        },
        {
          id: 4,
          name: "Sultan Al-Otaibi",
          role: "Manager - Jeddah",
          avatar:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
          text: "The 12-week transformation speaks for itself. Precise diet programming combined with real-time feedback completely transformed my fitness.",
          rating: 5,
        },
      ],
    },
  };

  const t = testimonialsData[lang] || testimonialsData.ar;
  const totalReviews = t.testimonials.length;

  const outlineStyle = {
    color: "#C7F500",
  };
  // فرم هندسی برش گوشه‌ها
  const cardClipPath =
    "polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 22px 100%, 0 calc(100% - 22px))";

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalReviews - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalReviews - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#111827] py-20 sm:py-24 select-none border-t border-white/5">
      {/* هاله نور پس‌زمینه */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#C7F500]/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* هدر سکشن و کنترلرهای ناوبری */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="flex flex-col items-center md:items-start text-center md:text-start">
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#C7F500]">
              {t.eyebrow}
            </span>

            <h2
              dir={isAr ? "rtl" : "ltr"}
              className={`mt-2 flex flex-col md:flex-row gap-2 font-[900] uppercase select-none ${
                isAr
                  ? "leading-[1.25] tracking-normal text-2xl sm:text-4xl md:text-[42px]"
                  : "leading-[1.08] tracking-tight font-display text-2xl sm:text-4xl md:text-[44px]"
              }`}
            >
              <span className="text-white">{t.titlePart1}</span>
              <span style={outlineStyle}>{t.titlePart2}</span>
            </h2>
          </div>

          {/* بخش ناوبری شامل شمارنده و دکمه‌ها */}
          <div className="flex items-center justify-center gap-4" dir="ltr">
            <span className="text-xs font-black tracking-widest text-slate-400">
              <span className="text-white">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-slate-600 mx-1">/</span>
              <span>{String(totalReviews).padStart(2, "0")}</span>
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Review"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#151F31] text-white transition-all hover:border-[#C7F500] hover:text-[#C7F500] active:scale-95 shadow-lg"
              >
                <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Review"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#151F31] text-white transition-all hover:border-[#C7F500] hover:text-[#C7F500] active:scale-95 shadow-lg"
              >
                <ChevronRight className="h-5 w-5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* نمایش کارت‌ها با لایه زیرین رنگی (کادر نئونی یکدست روی برش‌ها) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {[0, 1].map((offset) => {
            const itemIdx = (currentIndex + offset) % totalReviews;
            const item = t.testimonials[itemIdx];

            return (
              /* لایه بیرونی که کادر نئونی (رنگ زرد/سبز) را روی کل هندسه کارت ایجاد می‌کند */
              <div
                key={`${item.id}-${offset}`}
                style={{ clipPath: cardClipPath }}
                className="group relative p-[1px] bg-white/15 hover:bg-[#C7F500] transition-all duration-300 rounded-[24px] shadow-2xl"
              >
                {/* لایه درونی که محتوا و پس‌زمینه کارت را نگه می‌دارد */}
                <div
                  style={{ clipPath: cardClipPath }}
                  className="flex flex-col justify-between bg-[#151F31] p-7 sm:p-10 h-full w-full rounded-[23px] transition-colors duration-300 group-hover:bg-[#1a263b]"
                >
                  <div>
                    {/* ستاره‌ها و آیکون نقل‌قول */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-1">
                        {[...Array(item.rating)].map((_, sIdx) => (
                          <Star
                            key={sIdx}
                            className="h-4 w-4 fill-[#C7F500] text-[#C7F500]"
                          />
                        ))}
                      </div>
                      <Quote className="h-6 w-6 text-white/10" />
                    </div>

                    {/* متن نظر */}
                    <p className="text-xs sm:text-base leading-relaxed text-slate-300">
                      &ldquo;{item.text}&rdquo;
                    </p>
                  </div>

                  {/* پروفایل کاربر در پایین کارت */}
                  <div className="mt-8 pt-5 border-t border-white/10 flex items-center gap-3.5">
                    <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#C7F500]/40 flex-shrink-0">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col text-start">
                      <h4 className="text-sm sm:text-base font-black text-white">
                        {item.name}
                      </h4>
                      <span className="text-[11px] font-semibold text-[#C7F500]">
                        {item.role}
                      </span>
                    </div>
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
