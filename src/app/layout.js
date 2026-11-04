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

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${syne.variable}`}>
      {/* اضافه کردن مستقیم cairo.className به کلاس‌های بادی */}
      <body
        className={`min-h-screen bg-brand-bg text-brand-white antialiased selection:bg-brand-neon selection:text-black ${cairo.className}`}
      >
        <main className="relative flex min-h-screen flex-col overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
