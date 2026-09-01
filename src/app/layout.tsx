import type { Metadata } from "next";
import { Bebas_Neue, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteMeta } from "@/data/content";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SportCursor } from "@/components/SportCursor";
import { PageTransition } from "@/components/PageTransition";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-hud",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  icons: {
    icon: [{ url: siteMeta.favicon, type: "image/svg+xml" }],
    apple: siteMeta.favicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${outfit.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-void font-sans text-ghost">
        <SportCursor>
          <SmoothScroll>
            <ScrollToTop />
            <ScrollProgress />
            <div className="noise-overlay" aria-hidden />
            <div className="scanlines" aria-hidden />
            <PageTransition>{children}</PageTransition>
          </SmoothScroll>
        </SportCursor>
      </body>
    </html>
  );
}
