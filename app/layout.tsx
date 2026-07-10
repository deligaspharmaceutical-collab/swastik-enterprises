import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ginto = localFont({
  src: "../public/fonts/Ginto-400.woff",
  variable: "--font-ginto",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Swastik Enterprises | Liquid Adhesives & Coatings",
  description: "High-performance adhesive solutions engineered for strength, durability and industrial excellence. Delivering strength, quality & trust since 2013.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${ginto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
