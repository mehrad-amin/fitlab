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
  // ۱. آدرس قطعی دامنه روی ورسل (حیاتی برای موتور پیش‌نمایش اینستاگرام)
  metadataBase: new URL("https://coachrisepro.vercel.app"),

  title: {
    default: "Coach Rise | كوتش رايز - تدريب شخصي وتغذية مخصصة",
    template: "%s | Coach Rise",
  },
  description:
    "برامج تدريب وتغذية مخصصة لجينات جسمك وهدفك مع متابعة يومية مباشرة 1-on-1 بالواتساب.",

  // ۲. پروتکل اختصاصی Open Graph (مورد استفاده مستقیم اینستاگرام و فیسبوک)
  openGraph: {
    title: "Coach Rise | كوتش رايز - تدريب وتغذية خاصة",
    description:
      "برامج تدريب وتغذية مخصصة لجينات جسمك مع متابعة يومية مباشرة 1-on-1 بالواتساب.",
    url: "https://coachrisepro.vercel.app",
    siteName: "Coach Rise",
    locale: "ar_KW",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        alt: "Coach Rise",
      },
    ],
  },

  // ۳. کارت توییتر و تلگرام
  twitter: {
    card: "summary_large_image",
    title: "Coach Rise | كوتش رايز",
    description: "برامج تدريب وتغذية مخصصة لجينات جسمك مع متابعة يومية 1-on-1.",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
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
