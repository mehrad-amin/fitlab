"use client";

import { ArrowUpRight, Phone, MapPin, Clock } from "lucide-react";

// آیکون رسمی واتس‌اپ
function WhatsAppIcon({ className = "h-11 w-11" }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="WhatsApp"
      role="img"
      viewBox="0 0 512 512"
    >
      <rect width="512" height="512" rx="15%" fill="#25d366" />
      <path
        fill="#25d366"
        stroke="#ffffff"
        strokeWidth="26"
        d="M123 393l14-65a138 138 0 1150 47z"
      />
      <path
        fill="#ffffff"
        d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"
      />
    </svg>
  );
}

// آیکون رسمی اینستاگرام
function InstagramIcon({ className = "h-11 w-11" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 3364.7 3364.7"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient
          id="insta-grad-0"
          cx="217.76"
          cy="3290.99"
          r="4271.92"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".09" stopColor="#fa8f21" />
          <stop offset=".78" stopColor="#d82d7e" />
        </radialGradient>
        <radialGradient
          id="insta-grad-1"
          cx="2330.61"
          cy="3182.95"
          r="3759.33"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".64" stopColor="#8c3aaa" stopOpacity="0" />
          <stop offset="1" stopColor="#8c3aaa" />
        </radialGradient>
      </defs>
      <path
        d="M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9"
        fill="url(#insta-grad-0)"
      />
      <path
        d="M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9"
        fill="url(#insta-grad-1)"
      />
      <path
        d="M1269.25,1689.52c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7-416.6-186.59-416.6-416.7m-225.26,0c0,354.5,287.36,641.86,641.86,641.86s641.86-287.36,641.86-641.86-287.36-641.86-641.86-641.86S1044,1335,1044,1689.52m1159.13-667.31a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M1180.85,2707c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27S2059.13,666,2191,672c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M1170.5,447.09c-133.07,6.06-224,27.16-303.41,58.06-82.19,31.91-151.86,74.72-221.43,144.18S533.39,788.47,501.48,870.76c-30.9,79.46-52,170.34-58.06,303.41-6.16,133.28-7.57,175.89-7.57,515.35s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43s139.14,112.18,221.43,144.18c79.56,30.9,170.34,52,303.41,58.06,133.35,6.06,175.89,7.57,515.35,7.57s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2586.8,537.06,2504.71,505.15c-79.56-30.9-170.44-52.1-303.41-58.06C2068,441,2025.41,439.52,1686,439.52s-382.1,1.41-515.45,7.57"
        fill="#ffffff"
      />
    </svg>
  );
}

// آیکون رسمی اسنپ‌چت
function SnapchatIcon({ className = "h-11 w-11" }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Snapchat"
      role="img"
      viewBox="0 0 512 512"
    >
      <rect width="512" height="512" rx="15%" fill="#fffc00" />
      <path
        fill="#ffffff"
        stroke="#000000"
        strokeWidth="7"
        d="M203 414c-18-13-32-20-66-14-5 1-14 4-15-5-2-7-2-18-7-19-31-4-42-10-47-16-2-2-3-7 1-8 53-10 78-61 83-71 6-15-4-24-23-30-9-3-24-7-24-17 0-5 5-8 10-10 4-1 8-2 12 0 12 5 23 7 29 2 0-27-7-61 4-89 13-31 45-59 96-59s83 28 96 59c11 28 4 62 4 89 6 5 17 3 29-2 4-2 8-1 12 0 5 2 10 5 10 10 0 10-15 14-24 17-19 6-29 15-23 30 5 10 30 61 83 71 4 1 3 6 1 8-5 6-16 12-47 16-5 1-5 12-7 19-1 9-10 6-15 5-34-6-48 1-66 14a82 82 0 0 1-53 20c-21 1-38-8-53-20z"
      />
    </svg>
  );
}

export default function ContactSection({ lang = "ar" }) {
  const isAr = lang === "ar";

  const content = {
    en: {
      eyebrow: "GET IN TOUCH WITH COACH",
      line1Solid: "CONNECT",
      line1Stroke: "DIRECTLY",
      line2Stroke: "START YOUR",
      line2Solid: "JOURNEY TODAY",
      description:
        "Have questions about custom protocols or need consultation before booking? Reach out through any of the official channels below.",
      cards: {
        whatsapp: {
          title: "Direct WhatsApp",
          handle: "+965 9999 8888",
          sub: "Instant VIP Chat & Consultation",
          action: "Chat On WhatsApp",
          link: "https://wa.me/96599998888",
        },
        instagram: {
          title: "Instagram",
          handle: "@coach_fit",
          sub: "Daily tips, workouts & client PRs",
          action: "Follow Profile",
          link: "https://instagram.com",
        },
        snapchat: {
          title: "Snapchat",
          handle: "coach.fit",
          sub: "Behind-the-scenes meals & daily routines",
          action: "Add on Snapchat",
          link: "https://snapchat.com",
        },
        phone: {
          title: "Direct Call",
          handle: "+965 9999 8888",
          sub: "Direct line for active subscribers",
          action: "Call Now",
          link: "tel:+96599998888",
        },
      },
      locationTitle: "Training Studio & Clinic",
      locationDesc: "Kuwait City, Al Hamra Tower - Elite Performance Floor",
      workingHours: "Daily: 08:00 AM – 10:00 PM (Direct Support)",
      fastReply: "Average Response Time: < 15 Minutes",
    },
    ar: {
      eyebrow: "قنوات التواصل الرسمية مع الكوتش",
      line1Solid: "تواصل",
      line1Stroke: "معنا مباشرة",
      line2Stroke: "خطوتك الأولى",
      line2Solid: "تبدأ هنا!",
      description:
        "هل لديك استفسار محدد حول الأنظمة أو ترغب في استشارة سريعة قبل الاشتراك؟ يسعدنا تواصلك عبر أي من قنواتنا المعتمدة أدناه.",
      cards: {
        whatsapp: {
          title: "واتساب مباشر",
          handle: "+965 9999 8888",
          sub: "المحادثة الفورية والاستفسار عن الباقات",
          action: "محادثة فورية",
          link: "https://wa.me/96599998888",
        },
        instagram: {
          title: "إنستغرام",
          handle: "@coach_fit",
          sub: "نصائح يومية، تكنيك التمارين ونتائج المتدربين",
          action: "متابعة الحساب",
          link: "https://instagram.com",
        },
        snapchat: {
          title: "سناب شات",
          handle: "coach.fit",
          sub: "يوميات التحضير، الوجبات والكواليس اليومية",
          action: "إضافة سناب",
          link: "https://snapchat.com",
        },
        phone: {
          title: "اتصال هاتفي",
          handle: "+965 9999 8888",
          sub: "الخط المباشر للمشتركين والاستفسارات",
          action: "اتصل الآن",
          link: "tel:+96599998888",
        },
      },
      locationTitle: "مقر التدريب والاستشارات",
      locationDesc: "مدينة الكويت، برج الحمراء - جناح التدريب الرياضي الفاخر",
      workingHours: "يومياً: ۰۸:۰۰ صباحاً – ۱۰:۰۰ مساءً (دعم مباشر)",
      fastReply: "متوسط وقت الرد: أقل من ۱۵ دقيقة",
    },
  };

  const t = content[lang] || content.ar;

  const outlineStyle = {
    color: "#C7F500",
  };

  return (
    <section
      id="contact"
      className="relative w-full max-w-full overflow-hidden bg-[#111827] py-14 sm:py-20 lg:py-24 select-none scroll-mt-20 border-t border-white/10"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ۱. هدر سکشن با سبک تایپوگرافی دوخطی برند */}
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

          <p className="mt-3 max-w-2xl text-xs sm:text-sm text-slate-400 leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* ۲. گرید کانال‌های ارتباطی با آیکون‌های وکتوری رسمی */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* کارت واتس‌اپ */}
          <a
            href={t.cards.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#162032]/70 p-5 transition-all hover:border-[#25d366] hover:bg-[#162032] hover:shadow-[0_0_25px_rgba(37,211,102,0.2)] active:scale-[0.98] cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="overflow-hidden rounded-xl shadow-md transition-transform duration-200 group-hover:scale-105">
                  <WhatsAppIcon className="h-11 w-11" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-slate-400 transition-all duration-200 group-hover:text-[#25d366] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <h3 className="mt-4 text-base font-[900] text-white">
                {t.cards.whatsapp.title}
              </h3>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                {t.cards.whatsapp.sub}
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3">
              <span className="text-xs font-black text-slate-200" dir="ltr">
                {t.cards.whatsapp.handle}
              </span>
              <span className="text-[11px] font-bold text-slate-300 transition-colors group-hover:text-[#25d366]">
                {t.cards.whatsapp.action}
              </span>
            </div>
          </a>

          {/* کارت اینستاگرام */}
          <a
            href={t.cards.instagram.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#162032]/70 p-5 transition-all hover:border-[#d82d7e] hover:bg-[#162032] hover:shadow-[0_0_25px_rgba(216,45,126,0.2)] active:scale-[0.98] cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="overflow-hidden rounded-xl shadow-md transition-transform duration-200 group-hover:scale-105">
                  <InstagramIcon className="h-11 w-11" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-slate-400 transition-all duration-200 group-hover:text-[#d82d7e] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <h3 className="mt-4 text-base font-[900] text-white">
                {t.cards.instagram.title}
              </h3>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                {t.cards.instagram.sub}
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3">
              <span className="text-xs font-black text-slate-200" dir="ltr">
                {t.cards.instagram.handle}
              </span>
              <span className="text-[11px] font-bold text-slate-300 transition-colors group-hover:text-[#d82d7e]">
                {t.cards.instagram.action}
              </span>
            </div>
          </a>

          {/* کارت اسنپ‌چت */}
          <a
            href={t.cards.snapchat.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#162032]/70 p-5 transition-all hover:border-[#fffc00] hover:bg-[#162032] hover:shadow-[0_0_25px_rgba(255,252,0,0.2)] active:scale-[0.98] cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="overflow-hidden rounded-xl shadow-md transition-transform duration-200 group-hover:scale-105">
                  <SnapchatIcon className="h-11 w-11" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-slate-400 transition-all duration-200 group-hover:text-[#fffc00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <h3 className="mt-4 text-base font-[900] text-white">
                {t.cards.snapchat.title}
              </h3>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                {t.cards.snapchat.sub}
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3">
              <span className="text-xs font-black text-slate-200" dir="ltr">
                {t.cards.snapchat.handle}
              </span>
              <span className="text-[11px] font-bold text-slate-300 transition-colors group-hover:text-[#fffc00]">
                {t.cards.snapchat.action}
              </span>
            </div>
          </a>

          {/* کارت تماس مستقیم */}
          <a
            href={t.cards.phone.link}
            className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#162032]/70 p-5 transition-all hover:border-[#C7F500] hover:bg-[#162032] hover:shadow-[0_0_25px_rgba(199,245,0,0.2)] active:scale-[0.98] cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white shadow-md transition-all duration-200 group-hover:scale-105 group-hover:bg-[#C7F500] group-hover:text-black">
                  <Phone className="h-5 w-5 stroke-[2.4]" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-slate-400 transition-all duration-200 group-hover:text-[#C7F500] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <h3 className="mt-4 text-base font-[900] text-white">
                {t.cards.phone.title}
              </h3>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                {t.cards.phone.sub}
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3">
              <span className="text-xs font-black text-slate-200" dir="ltr">
                {t.cards.phone.handle}
              </span>
              <span className="text-[11px] font-bold text-slate-300 transition-colors group-hover:text-[#C7F500]">
                {t.cards.phone.action}
              </span>
            </div>
          </a>
        </div>

        {/* ۳. کارت لوکیشن و ساعات پشتیبانی */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-[#162032]/40 p-5 sm:p-6 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#C7F500]">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-black text-white uppercase tracking-wider">
                  {t.locationTitle}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  {t.locationDesc}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#C7F500]">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-black text-white uppercase tracking-wider">
                  {isAr ? "ساعات العمل" : "Operating Hours"}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  {t.workingHours}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-start md:justify-end gap-2">
              <span className="h-2 w-2 rounded-full bg-[#C7F500] animate-pulse" />
              <span className="text-xs font-bold text-[#C7F500]">
                {t.fastReply}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
