"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import {
  Calendar,
  Flame,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Dumbbell,
  ShieldCheck,
  MoveHorizontal,
} from "lucide-react";

// دیتاست مقیاس‌پذیر برای مربی (پشتیبانی تا ده‌ها شاگرد)
const TRANSFORMATIONS_DATA = [
  {
    id: 0,
    nameEn: "Ahmed Mansoor",
    nameAr: "أحمد المنصور",
    categoryEn: "SHRED & DEFINE",
    categoryAr: "تنشيف ونحت عضلات",
    goalEn: "Fat Loss & Core Shred",
    goalAr: "تنشيف حاد ونحت عضلات البطن",
    protocolEn: "Flexible Diet & Metabolic Resistance",
    protocolAr: "مرونة غذائية وتدريب مقاومة متقدم",
    quoteEn:
      "Lost 14 kg without giving up social dinners or my favorite foods. The direct WhatsApp support made all the difference.",
    quoteAr:
      "خسرت ۱۴ كغ ونحت عضلات بطني بدون أي حرمان من المناسبات أو وجباتي المفضلة. المتابعة اليومية المباشرة في الواتساب كانت سر التزامي.",
    stats: [
      {
        labelEn: "Duration",
        labelAr: "المدة الزمنية",
        value: "12",
        unitEn: "Weeks",
        unitAr: "أسبوعاً",
        icon: Calendar,
      },
      {
        labelEn: "Fat Loss",
        labelAr: "نزول دهون",
        value: "-14",
        unitEn: "KG",
        unitAr: "كغ",
        icon: Flame,
      },
      {
        labelEn: "Lean Muscle",
        labelAr: "عضل صافي",
        value: "+3.8",
        unitEn: "KG",
        unitAr: "كغ",
        icon: TrendingUp,
      },
    ],
    beforeImg: "/images/before-1.jpg",
    afterImg: "/images/after-1.jpg",
  },
  {
    id: 1,
    nameEn: "Fahad Al-Kandari",
    nameAr: "فهد الكندري",
    categoryEn: "HYPERTROPHY",
    categoryAr: "ضخامة عضلية",
    goalEn: "Pure Hypertrophy & Bulk",
    goalAr: "بناء كتلة عضلية نقية وضخامة",
    protocolEn: "Heavy Compound & Precision Surplus",
    protocolAr: "تضخيم ذكي وتمارين مركبة مستهدفة",
    quoteEn:
      "Gained pure solid muscle while keeping my waist tight. The customized biomechanics kept my joints 100% pain-free.",
    quoteAr:
      "بنيت كتلة عضلية صافية وقوية مع الحفاظ على مقاس الخصر نحيفاً. التكنيك الحركي الدقيق حماني تماماً من آلام المفاصل السابقة.",
    stats: [
      {
        labelEn: "Duration",
        labelAr: "المدة الزمنية",
        value: "20",
        unitEn: "Weeks",
        unitAr: "أسبوعاً",
        icon: Calendar,
      },
      {
        labelEn: "Lean Mass",
        labelAr: "زيادة عضلية",
        value: "+7.2",
        unitEn: "KG",
        unitAr: "كغ",
        icon: TrendingUp,
      },
      {
        labelEn: "Body Fat",
        labelAr: "نسبة الدهون",
        value: "-6%",
        unitEn: "",
        unitAr: "",
        icon: Flame,
      },
    ],
    beforeImg: "/images/before-2.jpg",
    afterImg: "/images/after-2.jpg",
  },
];

export default function TransformationSlider({ lang = "ar" }) {
  const isAr = lang === "ar";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const client = TRANSFORMATIONS_DATA[currentIndex];
  const totalClients = TRANSFORMATIONS_DATA.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalClients - 1 : prev - 1));
    setSliderPos(50);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalClients - 1 ? 0 : prev + 1));
    setSliderPos(50);
  };

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    let percentage = (offsetX / rect.width) * 100;
    if (percentage < 2) percentage = 2;
    if (percentage > 98) percentage = 98;
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e) => {
    updatePosition(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const outlineStyle = {
    color: "#111827", // حتماً باید دقیقاً همرنگ پس‌زمینه سکشن (#111827) باشد تا متن داخلی کاملاً محو و مخفی بماند
    WebkitTextStroke: isAr ? "1.5px #FFFFFF" : "1.8px #FFFFFF",
    paintOrder: "stroke fill",
  };

  const frameClipPath =
    "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))";

  const content = {
    en: {
      eyebrow: "PROVEN BIOMETRIC RESULTS",
      line1Solid: "REAL PROOF",
      line1Stroke: "REAL CLIENTS",
      line2Stroke: "YOUR TIME",
      line2Solid: "IS NOW!",
      beforeBadge: "BEFORE",
      afterBadge: "AFTER",
      cta: "I Want A Similar Transformation",
      guarantee: "Verified client result with 1-on-1 private VIP protocol",
      swipeHint: "Drag slider to compare",
    },
    ar: {
      eyebrow: "نتائج واقعية وموثقة بالأرقام",
      line1Solid: "نتائج حقيقية",
      line1Stroke: "لا تكذب",
      line2Stroke: "وجاء دورك",
      line2Solid: "لتحقيق هدفك!",
      beforeBadge: "قبل البداية",
      afterBadge: "بعد التحول",
      cta: "أريد نتيجة مماثلة لهدفي",
      guarantee: "نتيجة حقيقية موثقة بنظام التدريب والتغذية الخاص ۱-على-۱",
      swipeHint: "اسحب الخط للمقارنة",
    },
  };

  const t = content[lang] || content.ar;

  return (
    <section className="relative w-full overflow-hidden bg-[#111827] py-14 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ۱. هدر سکشن با تایپوگرافی دوخطی برند */}
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
            <div className="flex items-center justify-center gap-2 sm:gap-3 text-2xl sm:text-4xl md:text-[42px] whitespace-nowrap">
              <span className="text-white">{t.line1Solid}</span>
              <span style={outlineStyle}>{t.line1Stroke}</span>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-3 text-2xl sm:text-4xl md:text-[42px] whitespace-nowrap mt-0.5 sm:mt-1">
              <span style={outlineStyle}>{t.line2Stroke}</span>
              <span className="text-white">{t.line2Solid}</span>
            </div>
          </h2>
        </div>

        {/* ۲. نوار ناوبری لوکس و مقیاس‌پذیر برای شاگردان */}
        <div className="mt-8 sm:mt-10 flex items-center justify-between max-w-4xl mx-auto border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#C7F500] animate-pulse" />
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#C7F500]">
              {isAr ? client.categoryAr : client.categoryEn}
            </span>
          </div>

          <div className="flex items-center gap-3" dir="ltr">
            <button
              onClick={handlePrev}
              aria-label="Previous Transformation"
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-white/15 bg-[#162032]/80 text-white transition-all hover:border-[#C7F500] hover:text-[#C7F500] active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <span className="text-xs sm:text-sm font-black tracking-widest text-slate-300">
              <span className="text-white">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-slate-500 mx-1">/</span>
              <span>{String(totalClients).padStart(2, "0")}</span>
            </span>

            <button
              onClick={handleNext}
              aria-label="Next Transformation"
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-white/15 bg-[#162032]/80 text-white transition-all hover:border-[#C7F500] hover:text-[#C7F500] active:scale-95 cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* ۳. گرید اصلی: اسلایدر مقایسه و کارت نتایج */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* ستون اسلایدر مقایسه‌ای پرده‌ای */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div
              dir="ltr"
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
              onClick={(e) => updatePosition(e.clientX)}
              style={{
                clipPath: frameClipPath,
                touchAction: "pan-y",
              }}
              className="relative aspect-[4/5] sm:aspect-[4/5] md:aspect-[5/6] w-full max-w-[490px] cursor-ew-resize overflow-hidden bg-[#162032] p-[2px] shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              <div
                style={{ clipPath: frameClipPath }}
                className="relative h-full w-full overflow-hidden bg-[#0d131f]"
              >
                {/* تصویر بعد (پس‌زمینه) */}
                <Image
                  src={client.afterImg}
                  alt="After Transformation"
                  fill
                  priority
                  className="object-cover object-center brightness-95 contrast-105 pointer-events-none"
                />

                <div className="absolute top-4 right-4 z-20 rounded-md border border-[#C7F500]/50 bg-black/75 px-2.5 py-1 text-[10px] font-black tracking-wider text-[#C7F500] backdrop-blur-md pointer-events-none">
                  {t.afterBadge}
                </div>

                {/* تصویر قبل (پرده رویی که با اسلایدر برش می‌خورد) */}
                <div
                  className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                  }}
                >
                  <Image
                    src={client.beforeImg}
                    alt="Before Transformation"
                    fill
                    priority
                    className="object-cover object-center brightness-90 contrast-105 pointer-events-none"
                  />

                  <div className="absolute top-4 left-4 z-20 rounded-md border border-white/20 bg-black/75 px-2.5 py-1 text-[10px] font-black tracking-wider text-slate-300 backdrop-blur-md">
                    {t.beforeBadge}
                  </div>
                </div>

                {/* خط عمودی و دایره هندل که به صورت فیزیکی به هم قفل شده‌اند */}
                <div
                  className="pointer-events-none absolute top-0 bottom-0 z-30 w-[3px] bg-[#C7F500] shadow-[0_0_15px_#C7F500]"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-black bg-[#C7F500] text-black shadow-[0_0_25px_rgba(199,245,0,0.9)]">
                    <MoveHorizontal className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            </div>

            <span className="mt-2.5 text-[11px] font-semibold text-slate-400 lg:hidden">
              {t.swipeHint}
            </span>
          </div>

          {/* ستون کارت دیتای بیومتریک و نتایج */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-start">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2">
              <Dumbbell className="h-4 w-4 text-[#C7F500]" />
              <span className="text-xs font-black uppercase tracking-wider text-[#C7F500]">
                {isAr ? client.goalAr : client.goalEn}
              </span>
            </div>

            <h3 className="mt-2 text-2xl sm:text-3xl font-[900] text-white">
              {isAr ? client.nameAr : client.nameEn}
            </h3>
            <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-400">
              {isAr ? client.protocolAr : client.protocolEn}
            </p>

            <div className="relative mt-5 rounded-2xl border border-white/10 bg-[#162032]/60 p-4 sm:p-5 backdrop-blur-md text-start">
              <span className="text-2xl text-[#C7F500] font-serif leading-none block mb-1">
                “
              </span>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                {isAr ? client.quoteAr : client.quoteEn}
              </p>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
              {client.stats.map((st, idx) => {
                const Icon = st.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-[#162032]/40 p-2.5 sm:p-3"
                  >
                    <Icon className="h-4 w-4 text-[#C7F500] mb-1" />
                    <div className="flex items-baseline gap-0.5 font-[900] text-white text-base sm:text-xl">
                      <span>{st.value}</span>
                      <span className="text-[10px] text-slate-400 font-bold">
                        {isAr ? st.unitAr : st.unitEn}
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400 mt-0.5 text-center">
                      {isAr ? st.labelAr : st.labelEn}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6">
              <a
                href="#register"
                className="group flex h-12 sm:h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#C7F500] px-6 text-xs sm:text-sm font-black text-black shadow-[0_0_24px_rgba(199,245,0,0.3)] transition-all hover:scale-[1.02] active:scale-95 whitespace-nowrap cursor-pointer"
              >
                <span>{t.cta}</span>
                {isAr ? (
                  <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1 stroke-[2.5]" />
                ) : (
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 stroke-[2.5]" />
                )}
              </a>

              <div className="mt-2.5 flex items-center justify-center lg:justify-start gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="h-3.5 w-3.5 text-[#C7F500]" />
                <span>{t.guarantee}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ۴. نوار اسکرول مینیاتوری چهره شاگردان */}
        <div className="mt-10 sm:mt-12 flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {TRANSFORMATIONS_DATA.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentIndex(idx);
                setSliderPos(50);
              }}
              className={`flex-shrink-0 flex items-center gap-2.5 rounded-xl border p-1.5 pe-4 transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "border-[#C7F500] bg-[#162032] shadow-[0_0_15px_rgba(199,245,0,0.25)]"
                  : "border-white/10 bg-[#162032]/40 hover:border-white/20 opacity-60 hover:opacity-100"
              }`}
            >
              <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                <Image
                  src={item.afterImg}
                  alt={isAr ? item.nameAr : item.nameEn}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col text-start">
                <span className="text-xs font-black text-white">
                  {isAr ? item.nameAr : item.nameEn}
                </span>
                <span className="text-[10px] text-[#C7F500] font-bold">
                  {isAr ? item.categoryAr : item.categoryEn}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
