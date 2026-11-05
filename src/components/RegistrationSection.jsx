"use client";

import { useState, useEffect } from "react";
import {
  Send,
  CheckCircle2,
  User,
  Mail,
  Phone,
  Target,
  Calendar,
  Check,
} from "lucide-react";

export default function RegistrationSection({
  lang = "ar",
  selectedPlan,
  onPlanChange,
}) {
  const isAr = lang === "ar";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneCode: "+971",
    phoneNumber: "",
    age: "",
    weight: "",
    height: "",
    goal: isAr ? "بناء العضلات وحرق الدهون" : "Muscle Building & Fat Loss",
    daysPerWeek: "4",
    selectedPlan: selectedPlan || null, // بدون انتخاب پیش‌فرض
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, selectedPlan: selectedPlan || null }));
  }, [selectedPlan]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const phoneCodes = [
    { code: "+971", country: "UAE" },
    { code: "+966", country: "KSA" },
    { code: "+965", country: "KWT" },
    { code: "+974", country: "QAT" },
    { code: "+973", country: "BHR" },
    { code: "+968", country: "OMN" },
  ];

  const content = {
    ar: {
      eyebrow: "ابدأ التحول الحقيقي",
      titlePart1: "سجل بياناتك",
      titlePart2: "وانضم لنخبة المشتركين",
      desc: "اختر باقتك المفضلة وأملأ النموذج أدناه بدقة لكي يتمكن الكوتش من دراسة حالتك البدنية.",
      nameLabel: "الاسم الكامل",
      emailLabel: "البريد الإلكتروني (يفضل Gmail)",
      phoneLabel: "رقم الهاتف / الواتساب",
      ageLabel: "العمر (سنة)",
      weightLabel: "الوزن الحالي (كجم)",
      heightLabel: "الطول (سم)",
      goalLabel: "الهدف الرئيسي من التدريب",
      daysLabel: "عدد أيام التدريب أسبوعياً",
      planLabel: "تحديد الباقة التدريبية:",
      goalsOptions: [
        "بناء العضلات الصافية (Hypertrophy)",
        "حرق الدهون وتنشيط الجسم (Fat Loss)",
        "إعادة التكوين البدني الشامل (Transformation)",
        "تحسين اللياقة والصحة العامة (General Fitness)",
      ],
      plansCards: [
        {
          id: "daily",
          name: "الباقة اليومية السريعة",
          desc: "خطة ليوم واحد واختبار النظام",
        },
        {
          id: "monthly",
          name: "باقة النخبة الشهرية VIP",
          desc: "متابعة يومية عبر الواتساب (الأكثر طلباً)",
        },
        {
          id: "yearly",
          name: "باقة التحول الشامل السنوية",
          desc: "إشراف هندسي متقدم لمدة 12 شهراً",
        },
      ],
      submitBtn: "إرسال طلب الانضمام الآن",
      successTitle: "تم استلام طلبك بنجاح!",
      successDesc:
        "شكراً لك. سيقوم الكوتش بمراجعة بياناتك والتواصل معك عبر الواتساب في أقرب وقت لتبدأ رحلة التحول.",
      anotherRequest: "إرسال طلب جديد",
    },
    en: {
      eyebrow: "START YOUR TRANSFORMATION",
      titlePart1: "APPLY FOR",
      titlePart2: "ELITE COACHING",
      desc: "Select your preferred plan and fill out the form accurately so the coach can evaluate your physique.",
      nameLabel: "Full Name",
      emailLabel: "Email Address (Preferably Gmail)",
      phoneLabel: "Phone / WhatsApp Number",
      ageLabel: "Age (Years)",
      weightLabel: "Current Weight (Kg)",
      heightLabel: "Height (Cm)",
      goalLabel: "Primary Fitness Goal",
      daysLabel: "Training Days Per Week",
      planLabel: "Select Coaching Package:",
      goalsOptions: [
        "Pure Muscle Hypertrophy",
        "Fat Loss & Body Recomposition",
        "Complete Elite Transformation",
        "General Fitness & Health",
      ],
      plansCards: [
        {
          id: "daily",
          name: "Daily Kickstart Plan",
          desc: "Single day layout & system test",
        },
        {
          id: "monthly",
          name: "VIP Elite Monthly Tier",
          desc: "Daily WhatsApp access (Most Popular)",
        },
        {
          id: "yearly",
          name: "Yearly Total Transformation",
          desc: "12-month dedicated elite coaching",
        },
      ],
      submitBtn: "Submit Application Now",
      successTitle: "Application Received Successfully!",
      successDesc:
        "Thank you. The coach will review your details and contact you via WhatsApp shortly to begin.",
      anotherRequest: "Submit Another Request",
    },
  };

  const t = content[lang] || content.ar;

  const outlineStyle = {
    color: "#C7F500",
  };
  const cardClipPath =
    "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))";

  const handlePlanCardClick = (planId) => {
    setFormData((prev) => ({ ...prev, selectedPlan: planId }));
    if (onPlanChange) {
      onPlanChange(planId);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section
      id="register"
      className="relative w-full overflow-hidden bg-[#111827] py-20 sm:py-24 select-none border-t border-white/5 scroll-mt-20"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#C7F500]/5 blur-[160px]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
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

          <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-xl">
            {t.desc}
          </p>
        </div>

        <div
          style={{ clipPath: cardClipPath }}
          className="relative p-[1px] bg-[#C7F500]/50 rounded-[28px] shadow-2xl"
        >
          <div
            style={{ clipPath: cardClipPath }}
            className="bg-[#151F31] p-8 sm:p-12 h-full w-full rounded-[27px]"
          >
            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C7F500] text-black shadow-[0_0_25px_rgba(199,245,0,0.4)] mb-6">
                  <CheckCircle2 className="h-8 w-8 stroke-[2.5]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-[900] text-white">
                  {t.successTitle}
                </h3>
                <p className="mt-3 text-sm text-slate-300 max-w-md leading-relaxed">
                  {t.successDesc}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 rounded-2xl bg-[#C7F500] px-8 py-3.5 text-xs sm:text-sm font-black text-black transition-transform active:scale-95 shadow-[0_0_20px_rgba(199,245,0,0.3)] cursor-pointer"
                >
                  {t.anotherRequest}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                dir={isAr ? "rtl" : "ltr"}
              >
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-3">
                    {t.planLabel}
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {t.plansCards.map((p) => {
                      const isCardSelected = formData.selectedPlan === p.id;
                      return (
                        <div
                          key={p.id}
                          onClick={() => handlePlanCardClick(p.id)}
                          className={`cursor-pointer rounded-2xl p-4 transition-all border flex flex-col justify-between ${
                            isCardSelected
                              ? "bg-[#1c2e4a] border-[#C7F500] shadow-[0_0_20px_rgba(199,245,0,0.2)]"
                              : "bg-[#111827] border-white/10 hover:border-white/30"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span
                              className={`text-xs font-black ${isCardSelected ? "text-[#C7F500]" : "text-white"}`}
                            >
                              {p.name}
                            </span>
                            <div
                              className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                                isCardSelected
                                  ? "bg-[#C7F500] border-[#C7F500] text-black"
                                  : "border-white/30 text-transparent"
                              }`}
                            >
                              <Check className="h-3 w-3 stroke-[3]" />
                            </div>
                          </div>
                          <p className="text-[11px] text-slate-400 leading-tight">
                            {p.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2 flex items-center gap-2">
                      <User className="h-3.5 w-3.5 text-[#C7F500]" />
                      {t.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={
                        isAr ? "أدخل اسمك الثلاثي" : "Enter your full name"
                      }
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full rounded-2xl bg-[#111827] border border-white/10 px-4 py-3.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#C7F500] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2 flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5 text-[#C7F500]" />
                      {t.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@gmail.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-2xl bg-[#111827] border border-white/10 px-4 py-3.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#C7F500] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2 flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-[#C7F500]" />
                      {t.phoneLabel}
                    </label>
                    <div className="flex gap-2" dir="ltr">
                      <select
                        value={formData.phoneCode}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phoneCode: e.target.value,
                          })
                        }
                        className="rounded-2xl bg-[#111827] border border-white/10 px-3 py-3.5 text-xs font-bold text-[#C7F500] focus:border-[#C7F500] focus:outline-none cursor-pointer"
                      >
                        {phoneCodes.map((item) => (
                          <option
                            key={item.code}
                            value={item.code}
                            className="bg-[#151F31] text-white"
                          >
                            {item.code} ({item.country})
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        required
                        placeholder="50 123 4567"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phoneNumber: e.target.value,
                          })
                        }
                        className="w-full rounded-2xl bg-[#111827] border border-white/10 px-4 py-3.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#C7F500] focus:outline-none transition-colors text-right"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-2">
                        {t.ageLabel}
                      </label>
                      <input
                        type="number"
                        required
                        placeholder="25"
                        value={formData.age}
                        onChange={(e) =>
                          setFormData({ ...formData, age: e.target.value })
                        }
                        className="w-full rounded-2xl bg-[#111827] border border-white/10 px-3 py-3.5 text-xs sm:text-sm text-white text-center focus:border-[#C7F500] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-2">
                        {t.weightLabel}
                      </label>
                      <input
                        type="number"
                        required
                        placeholder="78"
                        value={formData.weight}
                        onChange={(e) =>
                          setFormData({ ...formData, weight: e.target.value })
                        }
                        className="w-full rounded-2xl bg-[#111827] border border-white/10 px-3 py-3.5 text-xs sm:text-sm text-white text-center focus:border-[#C7F500] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-2">
                        {t.heightLabel}
                      </label>
                      <input
                        type="number"
                        required
                        placeholder="178"
                        value={formData.height}
                        onChange={(e) =>
                          setFormData({ ...formData, height: e.target.value })
                        }
                        className="w-full rounded-2xl bg-[#111827] border border-white/10 px-3 py-3.5 text-xs sm:text-sm text-white text-center focus:border-[#C7F500] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2 flex items-center gap-2">
                      <Target className="h-3.5 w-3.5 text-[#C7F500]" />
                      {t.goalLabel}
                    </label>
                    <select
                      value={formData.goal}
                      onChange={(e) =>
                        setFormData({ ...formData, goal: e.target.value })
                      }
                      className="w-full rounded-2xl bg-[#111827] border border-white/10 px-4 py-3.5 text-xs sm:text-sm text-white focus:border-[#C7F500] focus:outline-none cursor-pointer"
                    >
                      {t.goalsOptions.map((opt, idx) => (
                        <option
                          key={idx}
                          value={opt}
                          className="bg-[#151F31] text-white"
                        >
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2 flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5 text-[#C7F500]" />
                      {t.daysLabel}
                    </label>
                    <select
                      value={formData.daysPerWeek}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          daysPerWeek: e.target.value,
                        })
                      }
                      className="w-full rounded-2xl bg-[#111827] border border-white/10 px-4 py-3.5 text-xs sm:text-sm text-white focus:border-[#C7F500] focus:outline-none cursor-pointer"
                    >
                      <option value="3" className="bg-[#151F31]">
                        3 {isAr ? "أيام أسبوعياً" : "Days/Week"}
                      </option>
                      <option value="4" className="bg-[#151F31]">
                        4 {isAr ? "أيام أسبوعياً" : "Days/Week"}
                      </option>
                      <option value="5" className="bg-[#151F31]">
                        5 {isAr ? "أيام أسبوعياً" : "Days/Week"}
                      </option>
                      <option value="6" className="bg-[#151F31]">
                        6 {isAr ? "أيام أسبوعياً" : "Days/Week"}
                      </option>
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="group flex h-14 w-full items-center justify-center gap-2.5 rounded-2xl bg-[#C7F500] text-black text-xs sm:text-sm font-black transition-all hover:bg-[#b5df00] shadow-[0_0_25px_rgba(199,245,0,0.35)] active:scale-95 cursor-pointer"
                  >
                    <span>{t.submitBtn}</span>
                    <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 stroke-[2.5]" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
