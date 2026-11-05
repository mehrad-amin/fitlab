"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar({ lang = "ar", setLang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const content = {
    en: {
      brand: "COACH FIT",
      links: [
        { name: "Programs", href: "#programs" },
        { name: "Results", href: "#results" },
        { name: "Why Us", href: "#why-us" },
        { name: "Pricing", href: "#pricing" },
        { name: "Reviews", href: "#reviews" },
      ],
      cta: "Register Now",
      switchLang: "العربية",
    },
    ar: {
      brand: "كوتش فيت",
      links: [
        { name: "البرامج", href: "#programs" },
        { name: "النتائج", href: "#results" },
        { name: "لماذا نحن", href: "#why-us" },
        { name: "الأسعار", href: "#pricing" },
        { name: "آراء المشتركين", href: "#reviews" },
      ],
      cta: "سجّل الآن",
      switchLang: "English",
    },
  };

  const t = content[lang] || content.ar;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#111827]/90 backdrop-blur-md transition-all select-none">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* لوگو برند */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C7F500] font-black text-black text-sm">
            CF
          </div>
          <span className="text-xl font-[900] tracking-wider text-white">
            {t.brand}
          </span>
        </Link>

        {/* منوی ناوبری در دسکتاپ */}
        <nav className="hidden items-center gap-7 lg:gap-8 md:flex">
          {t.links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-slate-300 transition-colors hover:text-[#C7F500]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* دکمه‌های اکشن دسکتاپ */}
        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="rounded-lg border border-white/15 px-3 py-1.5 text-xs font-bold text-white transition-all hover:border-[#C7F500] hover:text-[#C7F500] cursor-pointer"
          >
            {t.switchLang}
          </button>

          <a
            href="#register"
            className="rounded-full bg-[#C7F500] px-5 py-2 text-xs lg:text-sm font-black text-black shadow-[0_0_20px_rgba(199,245,0,0.3)] transition-transform hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            {t.cta}
          </a>
        </div>

        {/* کنترل‌های موبایل */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="rounded-md border border-white/20 px-2.5 py-1 text-xs font-bold text-white cursor-pointer"
          >
            {t.switchLang}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none p-1.5 cursor-pointer"
            aria-label="Toggle Menu"
          >
            <svg
              className="h-6 w-6 fill-none stroke-current"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* کشوی بازشونده موبایل */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-[#162032] px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-4">
            {t.links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-slate-300 hover:text-[#C7F500]"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 block w-full rounded-xl bg-[#C7F500] py-3 text-center text-sm font-black text-black shadow-lg cursor-pointer"
            >
              {t.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
