import React from "react";
import Image from "next/image";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhoneFrame } from "@/components/product-showcase/DeviceFrames";
import {
  Bike,
  ShieldCheck,
  CheckCircle2,
  Navigation,
  Smartphone,
  Wallet,
  ArrowRight,
} from "lucide-react";

export const metadata = buildPageMetadata({
  title: "For Delivery Partners — Pilldoor Rider Fleet Platform",
  description:
    "A dedicated healthcare delivery Progressive Web App. Turn-by-turn GPS routing, four-digit OTP delivery verification, and zero-leakage cash reconciliation.",
  path: "/delivery-partners",
});

const RIDER_FAQS = [
  {
    q: "How do riders install the Pilldoor Rider app?",
    a: "Pilldoor Rider is an installable Progressive Web App (PWA). Riders simply open the secure dispatcher link in their mobile browser (Chrome or Safari) and tap 'Add to Home Screen'. It launches as a full-screen application with no heavy app store downloads.",
  },
  {
    q: "How does the four-digit delivery OTP verification work?",
    a: "Every medicine delivery task requires a secret four-digit OTP generated on the customer's Pilldoor app. The rider must enter this code upon handing over the sealed package to verify completion and close the task.",
  },
  {
    q: "What happens if a customer is unreachable or refuses delivery?",
    a: "The PWA includes a dedicated 'Failed Delivery' protocol. The rider records the failure reason (e.g., customer unreachable, incorrect address) and initiates an accountable return workflow to hand the sealed medication parcel back to the originating partner pharmacy.",
  },
  {
    q: "How are Cash on Delivery (COD) collections managed?",
    a: "The app calculates exact cash amounts owed at the doorstep and supports instant UPI QR payments. Every collected rupee is tracked against the rider's active shift ledger, ensuring accurate reconciliation at the end of the day.",
  },
  {
    q: "Does the app work in low network connectivity areas?",
    a: "Yes. The Rider PWA is architected with an offline mutation queue and local storage. Navigation and delivery actions can be recorded locally and will automatically synchronize with dispatch servers once cell signal is restored.",
  },
];

export default function DeliveryPartnersPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Rider Hero */}
      <section className="relative py-10 sm:py-14 bg-gradient-to-b from-[#E8F5E9]/50 via-white to-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0D4E3A] ring-1 ring-[#10B981]/30">
                <Bike className="h-4 w-4" />
                <span>Pilldoor Rider Fleet & Logistics</span>
              </span>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
                Every delivery,{" "}
                <span className="text-[#0D4E3A]">accounted for.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl">
                A purpose-built Progressive Web App for professional medicine delivery. Clear pickup instructions from licensed pharmacies, verified GPS routes, transparent cash reconciliation, and 4-digit OTP handovers.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact?topic=rider"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0D4E3A] px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-[#157356] transition-all"
                >
                  <span>Fleet Partner Enquiries</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#pwa-features"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F172A] hover:bg-[#F8FAFC] transition-colors"
                >
                  <span>Explore Rider Features</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#E2E8F0] text-xs text-[#64748B]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                  <span>Mandatory 4-Digit Handover OTP</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                  <span>Zero-Leakage Cash Ledger</span>
                </div>
              </div>
            </div>

            {/* Right Phone Mockup Composition */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative">
                <div className="pointer-events-none absolute -inset-6 rounded-[50px] bg-gradient-to-tr from-[#10B981]/20 to-[#0D4E3A]/10 blur-2xl -z-10" />
                <PhoneFrame
                  src="/mockups/rider/rider-dashboard.png"
                  alt="Pilldoor Rider PWA interface showing active delivery task, pickup pharmacy details, and earnings ledger"
                  priority={true}
                  className="w-[280px] sm:w-[310px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Delivery Handover Banner */}
      <section className="py-8 sm:py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-sm bg-[#072C21] text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 p-8 sm:p-12 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#10B981]">
                  Professional Field Standards
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
                  Delivering essential medications with care and accountability.
                </h2>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  Medicine delivery requires higher standards than standard food or parcel drops. Our riders carry tamper-sealed packages, follow clinical handling instructions, and ensure medications reach patients without delays.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3.5 py-2 text-xs font-medium text-white">
                    <ShieldCheck className="h-4 w-4 text-[#10B981]" />
                    <span>Heat-sealed tamper-evident bags</span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3.5 py-2 text-xs font-medium text-white">
                    <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                    <span>Reconciled pharmacy returns</span>
                  </span>
                </div>
              </div>
              <div className="lg:col-span-6 relative h-[320px] sm:h-[420px] w-full">
                <Image
                  src="/images/rider/delivery-handover.jpg"
                  alt="Pilldoor rider safely handing sealed medicine parcel to customer at apartment doorway"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rider Features Deep-Dive */}
      <section id="pwa-features" className="py-10 sm:py-14 lg:py-16 bg-[#F8FAFC] border-t border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="PWA Architecture"
            title="Tools designed for high-efficiency logistics"
            description="Inspect the actual mobile PWA interfaces built to assist delivery personnel from morning dispatch to evening settlement."
            align="center"
            className="mb-8 sm:mb-12"
          />

          {/* Feature 1: Lightweight PWA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div className="lg:col-span-6 space-y-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F5E9] text-[#0D4E3A]">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A]">
                Progressive Web App with Zero App Store Friction
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#64748B]">
                Riders install the Pilldoor Rider PWA instantly in seconds without consuming gigabytes of phone storage or waiting for app store updates. Supports multiple regional languages (English, Kannada, Hindi, Tamil) and encrypted credential caching.
              </p>
              <ul className="space-y-2.5 text-sm text-[#0F172A]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                  <span>Sub-second load times and minimal battery consumption</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                  <span>Encrypted credential vault keeping tokens safe</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                  <span>Multilingual UI for inclusive field teams</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <PhoneFrame
                src="/mockups/rider/rider-login.png"
                alt="Pilldoor Rider login screen showing language selector and secure credentials"
              />
            </div>
          </div>

          {/* Feature 2: Route Navigation & Turn-by-Turn GPS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div className="lg:col-span-6 lg:order-2 space-y-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F5E9] text-[#0D4E3A]">
                <Navigation className="h-6 w-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A]">
                Turn-by-Turn GPS Navigation & Pharmacy Pickup
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#64748B]">
                View live pharmacy coordinates, verified contact persons, and customer destination landmarks. Launch Google Maps or preferred navigation apps with one tap.
              </p>
              <ul className="space-y-2.5 text-sm text-[#0F172A]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                  <span>Verified pickup pharmacy address and contact phone</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                  <span>Customer landmark notes and security gate instructions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                  <span>One-tap navigation launching device mapping apps</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6 lg:order-1 flex justify-center">
              <PhoneFrame
                src="/mockups/rider/rider-map.png"
                alt="Pilldoor Rider PWA route and deliveries list interface"
              />
            </div>
          </div>

          {/* Feature 3: OTP Handover & Cash Reconciliation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F5E9] text-[#0D4E3A]">
                <Wallet className="h-6 w-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A]">
                Four-Digit Customer OTP & Idempotent COD Settlement
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#64748B]">
                Complete deliveries with complete confidence. The app requires customer OTP verification and tracks Cash on Delivery collections against the daily shift balance, eliminating disputes and shortages.
              </p>
              <ul className="space-y-2.5 text-sm text-[#0F172A]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                  <span>Four-digit OTP matching before task is marked delivered</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                  <span>Dynamic UPI QR generation for cash-free doorstep payment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                  <span>Pharmacy return receipt generation for failed attempts</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <PhoneFrame
                src="/mockups/rider/rider-otp.png"
                alt="Pilldoor Rider delivery confirmation and verification interface"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rider FAQs */}
      <section className="py-10 sm:py-14 lg:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Fleet FAQ"
            title="Questions about Pilldoor delivery operations"
            description="Important operational guidelines regarding verification codes, cash reconciliation, and pharmacy return workflows."
            align="center"
            className="mb-8 sm:mb-10"
          />

          <div className="space-y-4">
            {RIDER_FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl bg-[#F8FAFC] p-6 border border-[#E2E8F0] transition-colors open:bg-white open:border-[#10B981] open:shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between font-bold text-[#0F172A] list-none">
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E8F5E9] text-[#0D4E3A] group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-4 text-sm sm:text-base text-[#64748B] leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Rider CTA */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#072C21] text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Partner with Pilldoor for pharmacy logistics
          </h2>
          <p className="text-base text-white/80 max-w-2xl mx-auto mb-8">
            Are you a logistics fleet manager or pharmacy chain coordinating deliveries? Contact our fleet operations desk to deploy the Pilldoor Rider PWA.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?topic=rider"
              className="inline-flex items-center gap-2 rounded-xl bg-[#10B981] px-6 py-3.5 text-sm font-bold text-[#072C21] hover:bg-[#34D399] transition-colors"
            >
              <span>Fleet Partner Enquiries</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
