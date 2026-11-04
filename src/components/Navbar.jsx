"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar({ lang, setLang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const content = {
    en: {
      brand: "COACH FIT",
      links: [
        { name: "Coaches", href: "#coaches" },
        { name: "About us", href: "#about" },
        { name: "Programs", href: "#programs" },
        { name: "Pricing", href: "#pricing" },
        { name: "Blog", href: "#blog" },
      ],
      cta: "Register Now",
      switchLang: "العربية",
    },
    ar: {
      brand: "كوتش فيت",
      links: [
        { name: "المدربون", href: "#coaches" },
        { name: "عن الكوتش", href: "#about" },
        { name: "البرامج", href: "#programs" },
        { name: "الأسعار", href: "#pricing" },
        { name: "المقالات", href: "#blog" },
      ],
      cta: "سجّل الآن",
      switchLang: "English",
    },
  };

  const t = content[lang];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-brand-bg/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* لوگو برند */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-neon font-black text-black">
            CF
          </div>
          <span className="text-xl font-[900] tracking-wider text-brand-white">
            {t.brand}
          </span>
        </Link>

        {/* منوی ناوبری در دسکتاپ */}
        <nav className="hidden items-center gap-8 md:flex">
          {t.links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brand-muted transition-colors hover:text-brand-neon"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* دکمه‌های اکشن دسکتاپ: تغییر زبان + دکمه ثبت‌نام */}
        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="rounded-lg border border-white/15 px-3 py-1.5 text-xs font-semibold text-brand-white transition-all hover:border-brand-neon hover:text-brand-neon"
          >
            {t.switchLang}
          </button>

          <a
            href="#register"
            className="glow-neon rounded-full bg-brand-neon px-6 py-2.5 text-sm font-black text-black transition-transform hover:scale-105 active:scale-95"
          >
            {t.cta}
          </a>
        </div>

        {/* کنترل‌های موبایل */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="rounded-md border border-white/20 px-2 py-1 text-xs font-semibold text-brand-white"
          >
            {t.switchLang}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-brand-white focus:outline-none p-1.5"
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
        <div className="border-b border-white/10 bg-brand-surface px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-4">
            {t.links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-brand-muted hover:text-brand-neon"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 block w-full rounded-xl bg-brand-neon py-3 text-center text-sm font-black text-black shadow-lg"
            >
              {t.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
