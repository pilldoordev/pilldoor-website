"use client";

import React from "react";
import Image from "next/image";
import { RotateCcw, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { PLAY_STORE_URL } from "@/data/navigation";

export function RepeatCareSection() {
  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-10">
        <div className="rounded-3xl bg-white p-6 sm:p-10 lg:p-12 border border-[#E2E8F0] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0D4E3A]">
                <RotateCcw className="h-4 w-4" />
                <span>Chronic Care &amp; Routine Prescriptions</span>
              </span>

              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
                Designed for repeat medicine needs.{" "}
                <span className="text-[#0D4E3A]">Never run out of essential care.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-2xl">
                Managing regular monthly medications for diabetes, high blood pressure, thyroid disorders, or heart health is simple. Instead of re-entering every medicine from scratch, open your past orders and trigger a quick refill.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#0F172A]">One-Tap Quick Refills</h3>
                    <p className="text-xs text-[#64748B]">Repeat past prescriptions with saved dosages in seconds.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#0F172A]">Re-Verified by Pharmacists</h3>
                    <p className="text-xs text-[#64748B]">Every repeat order is verified for ongoing validity before dispatch.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#0F172A]">Direct Dosage Enquiries</h3>
                    <p className="text-xs text-[#64748B]">Clarify timing, food precautions, and schedule queries directly.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#0F172A]">Full Invoice Receipts</h3>
                    <p className="text-xs text-[#64748B]">Download itemized bills anytime for tax or insurance claims.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <div className="w-full sm:max-w-xs rounded-2xl bg-[#F8FAFC] p-6 border border-[#E2E8F0] space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D4E3A]">
                  <Clock className="h-4 w-4" />
                  <span>Quick Reorders</span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Start ordering your regular medicines with Pilldoor today and experience convenient home delivery.
                </p>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D4E3A] px-5 py-3 text-sm font-semibold text-white hover:bg-[#157356] transition-colors"
                >
                  <Image
                    src="/icons/playstore-icon-512.png"
                    alt="Google Play"
                    width={18}
                    height={18}
                    className="rounded shrink-0"
                  />
                  <span>Get Started on Google Play</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
