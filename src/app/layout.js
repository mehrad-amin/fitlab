import { Cairo, Syne } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata = {
  // ۱. آدرس دامنه اصلی (الزامی برای نمایش تصویر در تلگرام و واتس‌اپ)
  // در زمان دیپلوی، دامنه اصلی یا ساب‌دامنه Vercel/Cloudflare را جایگزین کنید
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://coachrise.com",
  ),

  title: {
    default: "Coach Rise | كوتش رايز - تدريب شخصي وتغذية مخصصة",
    template: "%s | Coach Rise",
  },
  description:
    "برامج تدريب وتغذية مخصصة لجينات جسمك وهدفك مع متابعة يومية مباشرة عبر الواتساب. Elite 1-on-1 performance coaching & custom nutrition.",
  keywords: [
    "تدريب شخصي",
    "كوتش فتنس",
    "مرونة غذائية",
    "تنشيف عضلات",
    "Personal Trainer",
    "Fitness Coach",
    "Online Coaching",
  ],

  // ۲. تنظیمات Open Graph برای پیش‌نمایش تلگرام، واتس‌اپ و اینستاگرام
  openGraph: {
    title: "Coach Rise | كوتش رايز - برامج تدريب وتغذية خاصة",
    description:
      "برامج رياضية وتغذوية مصممة بدقة لجيناتك مع متابعة يومية مباشرة 1-on-1 لتصل إلى أفضل فورمة بدنية.",
    url: "/",
    siteName: "Coach Rise",
    locale: "ar_KW",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg", // عکس ۱۲۰۰ در ۶۳۰ در پوشه public/images
        width: 1200,
        height: 630,
        alt: "Coach Rise - Elite Fitness & Performance Coaching",
      },
    ],
  },

  // ۳. پیش‌نمایش کارت بزرگ در توییتر و تلگرام
  twitter: {
    card: "summary_large_image",
    title: "Coach Rise | Elite Performance Coaching",
    description:
      "Custom training protocols & flexible nutrition with daily WhatsApp accountability.",
    images: ["/images/og-image.jpg"],
  },

  // ۴. آیکون‌ها
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html className={`${cairo.variable} ${syne.variable} overflow-x-hidden`}>
      <body
        className={`min-h-screen w-full max-w-full overflow-x-hidden bg-[#111827] text-white antialiased selection:bg-[#C7F500] selection:text-black ${cairo.className}`}
      >
        <main className="relative flex min-h-screen w-full max-w-full flex-col overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
