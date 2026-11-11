import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BRAND, SITE_URL } from "@/lib/seo";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyDownloadBar } from "@/components/ui/MobileStickyDownloadBar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D4E3A",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pilldoor — Your Medicines. Your Family. One Simple App.",
    template: "%s | Pilldoor",
  },
  description: BRAND.description,
  keywords: [
    "Pilldoor medicine delivery",
    "online medicine delivery",
    "prescription medicine ordering",
    "order medicine online",
    "family healthcare app",
    "upload prescription online",
    "chronic medicine refills",
  ],
  authors: [{ name: "Pilldoor Healthcare" }],
  icons: {
    icon: "/icons/pilldoor-logo-192.png",
    apple: "/icons/icon-squircle-512.png",
  },
  openGraph: {
    title: "Pilldoor — Your Medicines. Your Family. One Simple App.",
    description: BRAND.description,
    url: SITE_URL,
    siteName: "Pilldoor",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Pilldoor — Your Health, On Time, Every Time",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] antialiased">
        <Navbar />
        <main className="flex-1 w-full pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileStickyDownloadBar />
      </body>
    </html>
  );
}
