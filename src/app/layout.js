import { Cairo, Syne } from "next/font/google";
import "./globals.css";

// فونت رسمی و مدرن عربی فصیح مناسب مخاطبان حوزه خلیج
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

// فونت صنعتی و ورزشی برای بخش انگلیسی هیرو
const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata = {
  title: "Fitness & Personal Coaching | كوتش اللياقة البدنية",
  description: "Transform your body with elite online coaching across the GCC.",
  themeColor: "#171F2F",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${syne.variable}`}>
      <body className="min-h-screen bg-brand-bg text-brand-white font-sans antialiased selection:bg-brand-neon selection:text-black">
        {/* کانتینر اصلی با حفظ سازگاری در ابعاد مختلف */}
        <main className="relative flex min-h-screen flex-col overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
