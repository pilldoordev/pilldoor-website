"use client";

import React from "react";
import { ORDER_JOURNEY_STAGES } from "@/data/content";
import { PhoneFrame } from "@/components/product-showcase/DeviceFrames";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Lock } from "lucide-react";

export function OrderVisibilitySection() {
  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-white border-b border-[#E2E8F0] overflow-hidden">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-10">
        <SectionHeading
          badge="Complete Visibility"
          title="Your order, accounted for at every step"
          description="Know exactly who has verified your prescription, when your medicines are packed, and confirm delivery with a secret 4-digit OTP."
          align="center"
          className="mb-6 sm:mb-8 lg:mb-10"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Column: 6 Stages Timeline */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {ORDER_JOURNEY_STAGES.map((stage) => (
                <div
                  key={stage.stage}
                  className="rounded-2xl bg-[#F8FAFC] p-4 sm:p-5 border border-[#E2E8F0] hover:border-[#10B981] transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#0D4E3A] font-bold text-xs">
                      {stage.stage}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                      {stage.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>

            {/* OTP Callout Box */}
            <div className="mt-4 rounded-2xl bg-gradient-to-r from-[#0D4E3A] to-[#072C21] p-4 sm:p-5 text-white flex items-start gap-3.5 sm:gap-4">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#10B981]">
                <Lock className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold mb-1">
                  Tamper-Evident Packaging &amp; Four-Digit Secret OTP Handover
                </h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  Your delivery partner cannot complete the task without entering your confidential 4-digit code. Medicines are never dropped unattended on a porch or handed to unauthorized individuals.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Real Customer App Screen showing My Orders & Tracking */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 rounded-[50px] bg-gradient-to-tr from-[#10B981]/20 via-[#0D4E3A]/10 to-transparent blur-2xl -z-10" />
              <PhoneFrame
                src="/mockups/mobile/pilldoor_orders_tracking_screen.png"
                alt="Pilldoor My Orders screen showing live delivery progress, order statuses, and tracking"
                cameraCutout="dot"
                className="w-[240px] xs:w-[270px] sm:w-[300px]"
              />
              <div className="mt-4 text-center">
                <span className="text-xs font-semibold text-[#64748B]">
                  Actual Pilldoor app screen: Live order tracking &amp; status history
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
