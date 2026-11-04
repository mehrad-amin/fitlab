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
  title: "Coach Rise | Elite Fitness Coaching",
  description: "Bilingual personal training and nutrition systems",
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
