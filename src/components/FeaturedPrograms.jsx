"use client";

import { useState, useRef } from "react";
import Image from "next/image";

// لیست تصاویر انتخابی با نورپردازی متمرکز تیره و سینمایی
const BASE_SLIDES = [
  {
    id: 0,
    image: "/images/fit-4.jpg",
    objectPosition: "center 20%", // برای حفظ زاویه سر و دمبل در کادر عمودی
  },
  {
    id: 1,
    image: "/images/fit-2.jpg",
    objectPosition: "center center",
  },
  {
    id: 2,
    image: "/images/fit-5.jpg",
    objectPosition: "center center",
  },
];
export default function FeaturedPrograms({ lang = "ar" }) {
  const isAr = lang === "ar";
  const [activeIndex, setActiveIndex] = useState(1);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (isAr) {
        if (diff > 0) setActiveIndex((prev) => (prev - 1 + 3) % 3);
        else setActiveIndex((prev) => (prev + 1) % 3);
      } else {
        if (diff > 0) setActiveIndex((prev) => (prev + 1) % 3);
        else setActiveIndex((prev) => (prev - 1 + 3) % 3);
      }
    }
  };

  // متون و پکیج‌های بیزینسی مناسب مربی فیتنس
  const content = {
    en: {
      eyebrow: "ENGINEERED FOR PEAK RESULTS",
      line1Solid: "SCULPT",
      line1Stroke: "YOUR BODY",
      line2Stroke: "TRANSFORM",
      line2Solid: "YOUR LIFE!",
      slides: [
        { label: "SHRED & BURN", alt: "Fat Loss & Muscle Definition Program" },
        { label: "VIP TRANSFORMATION", alt: "Full 1-on-1 Body Transformation" },
        { label: "LEAN HYPERTROPHY", alt: "Hypertrophy & Lean Mass Program" },
      ],
    },
    ar: {
      eyebrow: "برامج تدريبية بنتائج مضمونة",
      line1Solid: "اصنع",
      line1Stroke: "شكل جسمك",
      line2Stroke: "واصنع",
      line2Solid: "أسلوب حياتك!",
      slides: [
        {
          label: "التنشيف ونحت الجسم",
          alt: "برنامج حرق الدهون والتنشيف العضلي",
        },
        {
          label: "التحول الشامل VIP",
          alt: "برنامج التحول البدني الشامل للمشتركين",
        },
        {
          label: "البناء العضلي الصافي",
          alt: "برنامج التضخيم وزيادة الكتلة العضلية",
        },
      ],
    },
  };

  const t = content[lang] || content.ar;

  // استایل ضد باگ و هماهنگ برای هر دو زبان: پر کردن داخل حروف با رنگ زمینه و حذف خطوط تقاطع
  const outlineStyle = {
    color: "#111827", // حتماً باید دقیقاً همرنگ پس‌زمینه سکشن (#111827) باشد تا متن داخلی کاملاً محو و مخفی بماند
    WebkitTextStroke: isAr ? "1.5px #FFFFFF" : "1.8px #FFFFFF",
    paintOrder: "stroke fill",
  };

  const clipPathStyle =
    "polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 22px 100%, 0 calc(100% - 22px))";

  const getSlot = (index) => {
    const diff = (index - activeIndex + 3) % 3;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    return "left";
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#111827] py-12 sm:py-16 md:py-20 select-none">
      {/* المان دکوراتیو دوار پس‌زمینه */}
      <div
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 h-[340px] w-[340px] sm:h-[460px] sm:w-[460px] opacity-[0.035] ${
          isAr ? "-right-24 sm:-right-16" : "-left-24 sm:-left-16"
        }`}
      >
        <svg
          viewBox="0 0 500 500"
          className="h-full w-full"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.2"
        >
          <circle cx="250" cy="250" r="95" />
          <circle cx="250" cy="250" r="150" />
          <circle cx="250" cy="250" r="210" />
          <circle cx="250" cy="250" r="270" />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-3 sm:px-6">
        {/* ۱. عنوان دوزبانه دقیقاً دوخطی بدون به هم ریختگی فونت */}
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
            {/* خط اول: سالید + توخالی شارپ */}
            <div className="flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 text-[19px] xs:text-[23px] sm:text-3xl md:text-[38px] lg:text-[44px] whitespace-nowrap">
              <span className="text-white">{t.line1Solid}</span>
              <span style={outlineStyle}>{t.line1Stroke}</span>
            </div>

            {/* خط دوم: توخالی شارپ + سالید */}
            <div className="flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 text-[19px] xs:text-[23px] sm:text-3xl md:text-[38px] lg:text-[44px] whitespace-nowrap mt-0.5 sm:mt-1">
              <span style={outlineStyle}>{t.line2Stroke}</span>
              <span className="text-white">{t.line2Solid}</span>
            </div>
          </h2>
        </div>

        {/* ۲. اسلایدر تعاملی ۳ کارته */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative mt-8 sm:mt-12 h-[320px] xs:h-[350px] sm:h-[400px] md:h-[430px] lg:h-[450px] w-full flex items-center justify-center"
        >
          {BASE_SLIDES.map((baseSlide) => {
            const slot = getSlot(baseSlide.id);
            const isCenter = slot === "center";
            const isLeft = slot === "left";
            const isRight = slot === "right";
            const slideData = t.slides[baseSlide.id];

            let transformClass = "translate-x-0 scale-100 z-30 opacity-100";
            if (isLeft) {
              transformClass =
                "-translate-x-[92%] xs:-translate-x-[96%] sm:-translate-x-[110%] md:-translate-x-[108%] scale-[0.84] sm:scale-[0.92] z-10 opacity-40 sm:opacity-75 hover:opacity-90";
            } else if (isRight) {
              transformClass =
                "translate-x-[92%] xs:translate-x-[96%] sm:translate-x-[110%] md:translate-x-[108%] scale-[0.84] sm:scale-[0.92] z-10 opacity-40 sm:opacity-75 hover:opacity-90";
            }

            return (
              <div
                key={baseSlide.id}
                onClick={() => setActiveIndex(baseSlide.id)}
                style={{ transformOrigin: "center center" }}
                className={`absolute top-0 bottom-0 m-auto cursor-pointer transition-all duration-500 sm:duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${transformClass} ${
                  isCenter
                    ? "w-[66%] xs:w-[68%] sm:w-[34%] max-w-[360px]"
                    : "w-[56%] xs:w-[58%] sm:w-[28%] max-w-[290px]"
                } h-full`}
              >
                {/* فریم برش‌خورده تصویر */}
                <div
                  style={{ clipPath: clipPathStyle }}
                  className="relative h-full w-full overflow-hidden bg-[#161F30]"
                >
                  <Image
                    src={baseSlide.image}
                    alt={slideData.alt}
                    fill
                    priority={isCenter}
                    sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 360px"
                    style={{
                      objectPosition: baseSlide.objectPosition || "center",
                    }}
                    className={`object-cover transition-all duration-700 ease-out ${
                      isCenter
                        ? "scale-105 brightness-95"
                        : "scale-100 brightness-[0.70] contrast-105"
                    }`}
                  />

                  {/* گرادینت تیره ملایم پایینی */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* برچسب اختصاصی کارت فعال با جهت Start */}
                  {isCenter && (
                    <div className="absolute bottom-4 start-4 sm:bottom-5 sm:start-5 z-20 flex items-center gap-1.5 sm:gap-2 select-none">
                      <span className="text-base sm:text-xl font-black text-[#C7F500] leading-none">
                        |
                      </span>
                      <span
                        className={`font-[900] tracking-wider text-white text-xs xs:text-sm sm:text-base uppercase drop-shadow-md ${
                          isAr ? "font-sans" : "font-display"
                        }`}
                      >
                        {slideData.label}
                      </span>
                    </div>
                  )}
                </div>

                {/* حاشیه هندسی با تأکید نئونی روی لبه‌های کارت فعال */}
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full z-20 overflow-visible"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  {isCenter ? (
                    <>
                      <path
                        d="M 0,93.5 L 0,0 L 92,0"
                        fill="none"
                        stroke="rgba(255,255,255,0.12)"
                        strokeWidth="6"
                        vectorEffect="non-scaling-stroke"
                      />
                      <path
                        d="M 92,0 L 100,6.5 L 100,100 L 8,100 L 0,93.5"
                        fill="none"
                        stroke="#C7F500"
                        strokeWidth="6"
                        strokeLinejoin="miter"
                        vectorEffect="non-scaling-stroke"
                        style={{
                          filter: "drop-shadow(0 0 7px rgba(199,245,0,0.45))",
                        }}
                      />
                    </>
                  ) : (
                    <path
                      d="M 0,0 L 92,0 L 100,6.5 L 100,100 L 8,100 L 0,93.5 Z"
                      fill="none"
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="1.2"
                      vectorEffect="non-scaling-stroke"
                    />
                  )}
                </svg>
              </div>
            );
          })}
        </div>

        {/* ۳. نوار پیشرفت متصل به اسلاید فعال */}
        <div className="mt-7 sm:mt-10 flex justify-center">
          <div
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = isAr
                ? rect.right - e.clientX
                : e.clientX - rect.left;
              const ratio = clickX / rect.width;
              if (ratio < 0.33) setActiveIndex(0);
              else if (ratio < 0.66) setActiveIndex(1);
              else setActiveIndex(2);
            }}
            className="group relative h-[2.5px] w-[60%] sm:w-[68%] max-w-[520px] cursor-pointer overflow-hidden rounded-full bg-white/10 py-1"
          >
            <div className="absolute inset-0 m-auto h-[2.5px] w-full rounded-full bg-white/15" />
            <div
              className="absolute top-0 bottom-0 m-auto h-[2.5px] w-1/3 rounded-full bg-white transition-all duration-500 sm:duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              style={{
                insetInlineStart: `${activeIndex * 33.333}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
