import React from "react";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { PhoneFrame } from "@/components/product-showcase/DeviceFrames";
import {
  CheckCircle2,
  Download,
  Lock,
  ShieldCheck,
} from "lucide-react";

export const metadata = buildPageMetadata({
  title: "How It Works — Step-by-Step Medicine Delivery | Pilldoor",
  description:
    "Learn how Pilldoor makes medicine ordering easy in 6 verified steps: prescription upload, licensed pharmacist review, itemized pricing, and 4-digit OTP doorstep delivery.",
  path: "/how-it-works",
});

const DETAILED_STEPS = [
  {
    step: "01",
    title: "Open Pilldoor & Select Patient Profile",
    subtitle: "Order for yourself or manage medicine needs for a loved one",
    description:
      "When you open the app, choose whether this order is for yourself or a registered family member (such as your parents or child). This ensures the pharmacist has the patient's age and health context upfront.",
    screenshot: "/mockups/mobile/pilldoor_upload_prescription_screen.png",
    screenshotAlt: "Pilldoor profile selector showing family members and self selection",
    bullets: [
      "Switch between family profiles in one tap",
      "Attach drug allergy context automatically",
      "Choose the appropriate delivery address upfront",
    ],
  },
  {
    step: "02",
    title: "Upload Prescription or Search Medicines",
    subtitle: "Clear photo capture or direct product selection",
    description:
      "Take a clear photo of your doctor's prescription with your smartphone camera, upload an image from your gallery, or attach a multi-page PDF up to 10MB. You can also search for regular wellness items.",
    screenshot: "/mockups/mobile/pilldoor_prescription_attached_screen.png",
    screenshotAlt: "Prescription document uploaded with file details and verification button in Pilldoor",
    bullets: [
      "Accepts handwritten notes and printed hospital summaries",
      "Multi-page PDF upload support up to 10MB",
      "Option to add specific requested medicine items manually",
    ],
  },
  {
    step: "03",
    title: "Clinical Review by Licensed Pharmacists",
    subtitle: "Professional safety checks on dosages and formulations",
    description:
      "Your order is received by qualified pharmacists at a licensed partner pharmacy. They examine medicine names, strengths, dosages, and interactions. If handwriting is illegible, they reach out directly for clarification.",
    screenshot: "/mockups/mobile/pilldoor_pharmacist_verification_screen.png",
    screenshotAlt: "Pharmacist verification detail view in Pilldoor app",
    bullets: [
      "100% human pharmacist review on every prescription",
      "Direct two-way clarification call desk",
      "Zero unverified medicine packing or blind dispensing",
    ],
  },
  {
    step: "04",
    title: "Review Itemized Bill & Approve Substitutions",
    subtitle: "Total price transparency before you pay a single rupee",
    description:
      "Once reviewed, you receive an itemized breakdown showing exact MRP pricing and taxes. If the pharmacist suggested an affordable bioequivalent generic alternative, you can review the savings and approve the change.",
    screenshot: "/mockups/mobile/pilldoor_pharmacist_verification_screen.png",
    screenshotAlt: "Itemized medicine invoice in Pilldoor app",
    bullets: [
      "Transparent itemized bills with zero hidden fees",
      "Explicit consent required for any generic substitution",
      "Full visibility into pack sizes and expiration dates",
    ],
  },
  {
    step: "05",
    title: "Secure Payment Your Way",
    subtitle: "Instant digital checkout via Razorpay or Cash on Delivery",
    description:
      "Choose the payment method that suits you best. Pay instantly using UPI (Google Pay, PhonePe, Paytm), debit or credit cards, net banking, or choose Cash on Delivery where available.",
    screenshot: "/mockups/mobile/pilldoor_order_payment_screen.png",
    screenshotAlt: "Pilldoor payment checkout screen with UPI and Cash on Delivery options",
    bullets: [
      "Razorpay-supported secure payment gateway",
      "Cash on Delivery (COD) supported in serviceable locations",
      "Instant digital tax invoice generated for your records",
    ],
  },
  {
    step: "06",
    title: "Live Tracking & 4-Digit Delivery OTP",
    subtitle: "Follow your order and verify handover at your doorstep",
    description:
      "Your medicines are packed in a heat-sealed, tamper-evident bag and dispatched with a dedicated delivery partner. When the partner reaches your door, share your secret 4-digit OTP to complete verified handover.",
    screenshot: "/mockups/mobile/pilldoor_otp_tracking_screen.png",
    screenshotAlt: "Order tracking status with 4-digit delivery OTP confirmation in Pilldoor app",
    bullets: [
      "Real-time status updates from dispatch to doorstep",
      "Tamper-evident heat-sealed security packaging",
      "Confidential four-digit delivery verification OTP",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Header */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-[#E8F5E9]/50 via-white to-white border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0D4E3A] ring-1 ring-[#10B981]/30">
            <ShieldCheck className="h-4 w-4" />
            <span>Clear &amp; Transparent Protocol</span>
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
            How Pilldoor works, step by step
          </h1>

          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            From the moment you upload a prescription to the moment you share your 4-digit delivery OTP at your door, here is how we ensure your medicines arrive safely and punctually.
          </p>
        </div>
      </section>

      {/* Steps List */}
      <section className="py-10 sm:py-14 lg:py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
          <div className="space-y-12 sm:space-y-16">
            {DETAILED_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={step.step}
                  id={step.step === "02" ? "upload" : undefined}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                  {/* Text Column */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? "lg:order-2" : ""}`}>
                    <div className="inline-flex items-center gap-2 rounded-xl bg-[#0D4E3A] px-3.5 py-1 text-xs font-bold text-white shadow-xs">
                      <span>Step {step.step}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A]">
                      {step.title}
                    </h2>

                    <p className="text-sm sm:text-base font-semibold text-[#0D4E3A]">
                      {step.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                      {step.description}
                    </p>

                    <ul className="space-y-2.5 pt-2">
                      {step.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0F172A]">
                          <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-[#10B981] mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mockup Column */}
                  <div className={`lg:col-span-5 flex justify-center ${isEven ? "lg:order-1" : ""}`}>
                    <div className="relative">
                      <div className="pointer-events-none absolute -inset-6 rounded-[50px] bg-gradient-to-tr from-[#10B981]/20 via-[#0D4E3A]/10 to-transparent blur-2xl -z-10" />
                      <PhoneFrame
                        src={step.screenshot}
                        alt={step.screenshotAlt}
                        className="w-[270px] sm:w-[300px]"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety Summary Banner */}
      <section className="py-10 sm:py-12 bg-white border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10 text-center space-y-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F5E9] text-[#0D4E3A]">
            <Lock className="h-7 w-7" />
          </div>
          <h3 className="text-2xl font-bold text-[#0F172A]">
            Your Health Is Our Responsibility
          </h3>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            Every medication order through Pilldoor is sourced from licensed retail pharmacies, reviewed by verified pharmacists, and sealed before leaving the dispensing counter.
          </p>
          <div className="pt-2">
            <Link
              href="/#download"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0D4E3A] px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-[#157356] transition-all"
            >
              <Download className="h-4 w-4" />
              <span>Get the Pilldoor App</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
