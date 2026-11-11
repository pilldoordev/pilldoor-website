"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PATIENT_SCREEN_SHOWCASE } from "@/data/features";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhoneFrame } from "@/components/product-showcase/DeviceFrames";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { PLAY_STORE_URL } from "@/data/navigation";

export function CustomerAppShowcaseSection() {
  const [activeTabId, setActiveTabId] = useState(PATIENT_SCREEN_SHOWCASE[0].id);

  const activeFeature =
    PATIENT_SCREEN_SHOWCASE.find((f) => f.id === activeTabId) ||
    PATIENT_SCREEN_SHOWCASE[0];

  return (
    <section
      id="app-showcase"
      className="py-10 sm:py-12 lg:py-14 bg-white border-b border-[#E2E8F0] overflow-hidden"
      aria-labelledby="app-showcase-heading"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-10">
        <SectionHeading
          badge="Live Mobile App Showcase"
          title="Designed for simplicity on every screen"
          description="Explore the real Pilldoor mobile interface. Clear buttons, legible text, and intuitive workflows make ordering medicines easy for users of all ages."
          align="center"
          className="mb-6 sm:mb-8"
        />

        {/* Tab Selection Pills */}
        <div
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 mb-6 sm:mb-8 border-b border-[#E2E8F0] pb-4 sm:pb-5"
          role="tablist"
          aria-label="Pilldoor application features"
        >
          {PATIENT_SCREEN_SHOWCASE.map((item) => {
            const isActive = item.id === activeTabId;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`showcase-panel-${item.id}`}
                onClick={() => setActiveTabId(item.id)}
                className={`rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#0D4E3A] text-white shadow-md"
                    : "bg-[#F1F5F9] text-[#64748B] hover:bg-[#E2E8F0] hover:text-[#0F172A]"
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Active Tab Content Card */}
        <div
          id={`showcase-panel-${activeFeature.id}`}
          role="tabpanel"
          className="rounded-3xl bg-[#F8FAFC] p-5 sm:p-8 lg:p-10 border border-[#E2E8F0]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F5E9] px-3.5 py-1 text-xs font-semibold text-[#0D4E3A]">
                <ShieldCheck className="h-4 w-4" />
                <span>Verified Customer Feature</span>
              </span>

              <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A]">
                {activeFeature.subtitle}
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-[#64748B]">
                {activeFeature.description}
              </p>

              {/* Bullet Points */}
              <div className="space-y-2.5 sm:space-y-3 pt-1">
                {activeFeature.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="h-4.5 w-4.5 sm:h-5 sm:w-5 shrink-0 text-[#10B981] mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-[#0F172A]">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-3">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D4E3A] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#157356] transition-all"
                >
                  <Image
                    src="/icons/playstore-icon-512.png"
                    alt="Google Play"
                    width={18}
                    height={18}
                    className="rounded shrink-0"
                  />
                  <span>Get the Pilldoor App</span>
                </a>
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-5 py-3 text-sm font-semibold text-[#0F172A] hover:bg-[#F8FAFC] transition-colors"
                >
                  <span>Explore All Features</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Phone Mockup Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                <div className="pointer-events-none absolute -inset-6 rounded-[50px] bg-gradient-to-tr from-[#10B981]/20 via-[#0D4E3A]/10 to-transparent blur-2xl -z-10" />
                <PhoneFrame
                  src={activeFeature.screenshot}
                  alt={activeFeature.alt}
                  priority={true}
                  className="w-[240px] xs:w-[270px] sm:w-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

