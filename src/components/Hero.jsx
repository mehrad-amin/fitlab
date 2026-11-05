"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Hero({ lang = "ar" }) {
  const isAr = lang === "ar";

  const rigContainerRef = useRef(null);
  const backRibbonRef = useRef(null);
  const frontRibbonRef = useRef(null);

  useEffect(() => {
    // انیمیشن کاملاً بهینه روی opacity بدون دستکاری filter در GPU
    const ctx = gsap.context(() => {
      gsap.to([frontRibbonRef.current, backRibbonRef.current], {
        opacity: 0.8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, rigContainerRef);

    return () => ctx.revert();
  }, []);

  const content = {
    en: {
      eyebrow: "ELITE PERFORMANCE & COACHING",
      titleTop: "STRONGER",
      titleTopStroke: "EVERY DAY",
      titleBottom: "FITTER",
      titleBottomStroke: "FOREVER",
      description:
        "Customized high-performance training programs tailored to your genetics with flexible nutrition plans. Get daily direct coaching to reach your peak physique.",
      badges: [
        "1-on-1 Coaching",
        "Genetic Custom Nutrition",
        "Flexible Nutrition",
      ],
      primaryCta: "Start Transformation",
      secondaryCta: "Programs",
      stats: [
        { value: "1200", prefix: "+", label: "Transformed Lives" },
        { value: "10", prefix: "+", label: "Years Experience" },
        { value: "100", suffix: "%", label: "Guaranteed Results" },
      ],
    },
    ar: {
      eyebrow: "تدريب شخصي احترافي بمعايير عالمية",
      titleTop: "قوة أعلى",
      titleTopStroke: "كل يوم",
      titleBottom: "لياقة تدوم",
      titleBottomStroke: "للأبد",
      description:
        "برامج تدريبية وتغذوية مخصصة لجينات جسمك وهدفك. متابعة يومية وتوجيه شخصي مباشر لتصل إلى أفضل فورمة بمرونة غذائية تامة.",
      badges: ["متابعة يومية بالواتساب", "برامج مخصصة لجيناتك", "مرونة غذائية"],
      primaryCta: "ابدأ خطتك الآن",
      secondaryCta: "عرض البرامج",
      stats: [
        { value: "1200", prefix: "+", label: "متدرب ناجح" },
        { value: "10", prefix: "+", label: "سنوات خبرة" },
        { value: "100", suffix: "%", label: "نتائج مضمونة" },
      ],
    },
  };

  const t = content[lang] || content.ar;

  const cleanOutlineStyle = {
    color: "#C7F500",
  };

  return (
    <section className="relative w-full max-w-full overflow-x-hidden bg-brand-bg pt-4 pb-8 sm:pt-14 sm:pb-12 lg:pt-16 select-none">
      {/* المان‌های پس‌زمینه با بلور بهینه‌شده برای موبایل */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_50%_-15%,rgba(36,49,74,0.45),rgba(23,31,47,1))]" />

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.8) 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div
          className={`absolute top-1/4 h-[280px] w-[280px] sm:h-[400px] sm:w-[400px] -translate-y-1/2 rounded-full opacity-15 blur-2xl sm:blur-[100px] ${
            isAr ? "left-10 lg:left-28" : "right-10 lg:right-28"
          }`}
          style={{
            background: "radial-gradient(circle, #d7fb00 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-6 sm:gap-10 lg:grid-cols-12">
          {/* ستون متون */}
          <div
            className={`z-10 flex flex-col justify-center pb-6 lg:col-span-7 ${
              isAr ? "text-center lg:text-right" : "text-center lg:text-left"
            }`}
          >
            <div className="inline-flex items-center justify-center gap-2 lg:justify-start">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-neon animate-pulse" />
              <p className="text-[11px] font-black tracking-widest text-brand-neon uppercase sm:text-xs">
                {t.eyebrow}
              </p>
            </div>

            <h1
              className={`mt-2 font-[900] uppercase tracking-tight break-words ${
                isAr
                  ? "text-[34px] leading-[1.15] sm:text-5xl md:text-6xl lg:text-[70px]"
                  : "text-[36px] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[72px] font-display"
              }`}
            >
              <span className="block text-brand-white">{t.titleTop}</span>
              <span
                className="block"
                lang={isAr ? "ar" : "en"}
                dir={isAr ? "rtl" : "ltr"}
                style={cleanOutlineStyle}
              >
                {t.titleTopStroke}
              </span>
              <span className="block text-brand-white">{t.titleBottom}</span>
              <span
                className="block"
                lang={isAr ? "ar" : "en"}
                dir={isAr ? "rtl" : "ltr"}
                style={cleanOutlineStyle}
              >
                {t.titleBottomStroke}
              </span>
            </h1>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              {t.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="whitespace-nowrap rounded-full border border-white/10 bg-brand-surface/80 px-3 py-1 text-[11px] font-bold text-white/90 backdrop-blur-md sm:text-xs"
                >
                  <span className="ml-1 font-black text-brand-neon">✓</span>{" "}
                  {badge}
                </span>
              ))}
            </div>

            <p className="mt-3 text-xs leading-relaxed text-brand-muted sm:text-base sm:leading-relaxed lg:text-lg">
              {t.description}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:justify-start sm:gap-4">
              <a
                href="#register"
                className="group flex min-w-0 items-center justify-center gap-1 rounded-xl bg-brand-neon px-2 py-3.5 text-center text-xs font-black text-black shadow-[0_0_25px_rgba(215,251,0,0.35)] transition-all hover:scale-[1.02] active:scale-95 sm:gap-2 sm:px-8 sm:py-4 sm:text-base whitespace-nowrap cursor-pointer"
              >
                <span>{t.primaryCta}</span>
                {isAr ? (
                  <ArrowLeft className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-x-1 sm:h-5 sm:w-5 stroke-[2.5]" />
                ) : (
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1 sm:h-5 sm:w-5 stroke-[2.5]" />
                )}
              </a>

              <a
                href="#programs"
                className="flex min-w-0 items-center justify-center rounded-xl border border-white/20 bg-brand-surface/70 px-2 py-3.5 text-center text-xs font-bold text-brand-white backdrop-blur-sm transition-all hover:border-brand-neon hover:text-brand-neon active:scale-95 sm:px-8 sm:py-4 sm:text-base whitespace-nowrap cursor-pointer"
              >
                {t.secondaryCta}
              </a>
            </div>
          </div>

          {/* ریگ سه‌بعدی سبک‌شده بدون فشار پردازشی */}
          <div className="relative flex w-full justify-center self-end overflow-hidden lg:col-span-5">
            <div
              ref={rigContainerRef}
              className={`relative h-[380px] w-[265px] min-[480px]:h-[430px] min-[480px]:w-[300px] sm:h-[550px] sm:w-[380px] lg:h-[600px] lg:w-[410px] transition-transform duration-300 ${
                isAr ? "scale-x-[-1]" : ""
              }`}
            >
              {/* لایه عقب روبان - سایه استاتیک و بدون انیمیشن فیلتر */}
              <div
                ref={backRibbonRef}
                className="pointer-events-none absolute inset-0 z-10 h-full w-full transform-gpu"
                style={{
                  filter: "drop-shadow(0 0 12px rgba(215,251,0,0.5))",
                }}
              >
                <Image
                  src="/images/ribbon-back.webp"
                  alt="Neon Ribbon Back"
                  fill
                  priority
                  sizes="(max-width: 768px) 300px, 410px"
                  className="object-contain object-bottom"
                />
              </div>

              {/* عکس مربی */}
              <div
                className="relative z-20 h-full w-full transform-gpu"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 75%, transparent 98%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 75%, transparent 98%)",
                }}
              >
                <Image
                  src="/images/body.webp"
                  alt="Fitness Coach"
                  fill
                  priority
                  sizes="(max-width: 768px) 300px, 410px"
                  className="object-contain object-bottom"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-bg via-brand-bg/70 to-transparent" />
              </div>

              {/* لایه جلو روبان - سایه استاتیک و بدون انیمیشن فیلتر */}
              <div
                ref={frontRibbonRef}
                className="pointer-events-none absolute inset-0 z-30 h-full w-full transform-gpu"
                style={{
                  filter: "drop-shadow(0 0 16px rgba(215,251,0,0.75))",
                }}
              >
                <Image
                  src="/images/ribbon-front.webp"
                  alt="Neon Ribbon Front"
                  fill
                  priority
                  sizes="(max-width: 768px) 300px, 410px"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </div>

        {/* نوار آمار */}
        {/* نوار آمار */}
        <div className="mt-8 w-full border-t border-white/10 py-6 sm:mt-12 sm:py-8 lg:mt-14">
          <div className="grid grid-cols-3 gap-2 text-center sm:gap-4">
            {t.stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-start"
              >
                <div className="flex items-center justify-center font-[900] tracking-tight">
                  {stat.prefix && (
                    <span className="text-xl text-brand-neon sm:text-3xl md:text-4xl whitespace-nowrap">
                      {stat.prefix}
                    </span>
                  )}
                  <span className="text-2xl text-brand-white drop-shadow-sm sm:text-4xl md:text-5xl whitespace-nowrap">
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="text-xl text-brand-neon sm:text-3xl md:text-4xl whitespace-nowrap">
                      {stat.suffix}
                    </span>
                  )}
                </div>

                {/* باکس توضیحات با ارتفاع رزرو یکنواخت و شکست متوازن */}
                <div className="mt-1 flex min-h-[32px] sm:min-h-0 items-start justify-center">
                  <span className="max-w-[105px] sm:max-w-none text-[11px] font-semibold text-brand-muted leading-tight text-balance sm:text-xs md:text-sm">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
