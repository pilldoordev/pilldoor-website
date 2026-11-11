"use client";

import React from "react";
import Link from "next/link";
import { PhoneFrame } from "@/components/product-showcase/DeviceFrames";
import { Stethoscope, CheckCircle2, ArrowRight } from "lucide-react";

export function PrescriptionEasierSection() {
  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Column: Real Customer App Screen showing Pharmacist Review Detail */}
          <div className="lg:col-span-5 flex justify-center lg:order-1 order-2">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 rounded-[50px] bg-gradient-to-tr from-[#10B981]/20 via-[#0D4E3A]/10 to-transparent blur-2xl -z-10" />
              <PhoneFrame
                src="/mockups/mobile/pilldoor_pharmacist_verification_screen.png"
                alt="Pilldoor medicine order screen showing pharmacist review of composition, stock availability, and dosages"
                cameraCutout="dot"
                className="w-[240px] xs:w-[270px] sm:w-[300px]"
              />
              <div className="mt-4 text-center">
                <span className="text-xs font-semibold text-[#64748B]">
                  Actual Pilldoor app screen: Licensed pharmacist verification &amp; prescription review
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Clinical Safeguards */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 lg:order-2 order-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0D4E3A]">
              <Stethoscope className="h-4 w-4" />
              <span>Clinical Responsibility &amp; Safety</span>
            </span>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
              Prescriptions made easier.{" "}
              <span className="text-[#0D4E3A]">Safety verified by pharmacists.</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[#64748B] leading-relaxed">
              We never use automated guesswork for your medications. Every doctor&apos;s prescription is reviewed by a qualified pharmacist at a licensed retail pharmacy before packing, ensuring authentic medications and correct dosages.
            </p>

            {/* 4 Feature Points */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#10B981] mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">
                    Multi-Format Prescription Upload
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    Snap a photo with your smartphone camera, upload images from your gallery, or attach multi-page PDFs up to 10MB.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#10B981] mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">
                    Manual Medicine Search &amp; Pack Selection
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    Add up to 40 items with clear pack unit selectors (Strips, Tablets, Bottles, Tubes) and pharmacist guidance flags.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#10B981] mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">
                    Two-Way Pharmacist Clarification
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    If doctor handwriting is unclear or dosage needs checking, the pharmacist contacts you directly or you can tap &apos;Call Pharmacy&apos; in one touch.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#10B981] mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">
                    Generic Substitution Only with Explicit Consent
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    If an affordable bioequivalent generic is available, you receive a side-by-side price comparison. You must approve the change before it is packed.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0D4E3A] hover:text-[#157356] hover:underline transition-colors"
              >
                <span>Explore all medicine ordering features</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
