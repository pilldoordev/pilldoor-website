import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pilldoor.in";

export const BRAND = {
  name: "Pilldoor",
  legalName: "Pilldoor Healthcare",
  tagline: "YOUR HEALTH, ON TIME, EVERY TIME",
  primaryMessage: "Your medicines, delivered with care.",
  description:
    "Order your medicines from home, upload prescriptions and manage your family's healthcare needs with Pilldoor. Verified by licensed pharmacists and delivered with a secure 4-digit OTP.",
  androidPackageId: "com.pharma.pilldoor",
};

interface BuildMetadataInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: BuildMetadataInput): Metadata {
  const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    keywords: [
      "Pilldoor medicine delivery",
      "online medicine delivery",
      "order medicines from home",
      "upload prescription online",
      "family healthcare app",
      "chronic medicine refills",
      "licensed pharmacy medicines",
      "doorstep medicine delivery",
      "Pilldoor app",
      ...keywords,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: BRAND.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "Pilldoor — Your Medicines. Your Family. One Simple App.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/opengraph-image`],
    },
  };
}
