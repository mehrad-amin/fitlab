"use client";

export default function TrustBar({ lang }) {
  const isAr = lang === "ar";

  // لیست تأییدیه‌ها و اعتبارات تخصصی مربی
  const credentials = [
    {
      code: "ISSA",
      titleEn: "Certified Fitness Trainer",
      titleAr: "مدرب معتمد دولياً",
      tag: "USA ACCREDITED",
    },
    {
      code: "NASM",
      titleEn: "Performance Specialist",
      titleAr: "أخصائي أداء رياضي",
      tag: "SPORTS MEDICINE",
    },
    {
      code: "REPs",
      titleEn: "UAE / GCC Certified Coach",
      titleAr: "معتمد لدى REPs الخليج",
      tag: "OFFICIAL REGISTRY",
    },
    {
      code: "ISSN",
      titleEn: "Sports Nutrition Specialist",
      titleAr: "أخصائي تغذية رياضية",
      tag: "CLINICAL NUTRITION",
    },
    {
      code: "ACE",
      titleEn: "Biomechanics & Mobility",
      titleAr: "أخصائي ميكانيكا الحركة",
      tag: "CORRECTIVE EXERCISE",
    },
  ];

  // تکرار آرایه برای ساخت حلقه بی‌نهایت و بدون وقفه
  const marqueeItems = [...credentials, ...credentials, ...credentials];

  return (
    <section className="relative w-full overflow-hidden border-y-2 border-black/10 bg-[#C7F500] py-4 shadow-xl select-none">
      {/* کانتینر اصلی با مکانیزم جلوگیری از سرریز افقی و شتاب‌دهنده سخت‌افزاری */}
      <div className="flex w-full overflow-hidden">
        <div
          className={`flex items-center gap-12 sm:gap-16 whitespace-nowrap transform-gpu will-change-transform hover:[animation-play-state:paused] ${
            isAr ? "animate-marquee-rtl" : "animate-marquee"
          }`}
        >
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 flex-shrink-0 cursor-pointer transition-transform duration-200 hover:scale-105"
            >
              {/* بچ مونوکروم مشکی */}
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-black text-[#C7F500] font-[900] text-xs tracking-tighter shadow-md">
                {item.code}
              </div>

              {/* عنوان مدرک و تگ بین‌المللی */}
              <div
                className={`flex flex-col ${isAr ? "text-right" : "text-left"}`}
              >
                <span className="text-sm font-[900] tracking-wide uppercase text-black leading-tight sm:text-base whitespace-nowrap">
                  {isAr ? item.titleAr : item.titleEn}
                </span>
                <span className="text-[10px] font-bold text-black/70 tracking-widest uppercase whitespace-nowrap">
                  {item.tag}
                </span>
              </div>

              {/* جداکننده ستاره‌ای مینیمال بین آیتم‌ها */}
              <span className="mx-4 text-black/30 text-lg font-black select-none">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
