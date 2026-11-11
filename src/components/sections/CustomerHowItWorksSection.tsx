"use client";

import React from "react";
import Link from "next/link";
import { HOW_IT_WORKS_STEPS } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Smartphone, FileSearch, Stethoscope, Bike, ArrowRight } from "lucide-react";

export function CustomerHowItWorksSection() {
  const getStepIcon = (step: string) => {
    switch (step) {
      case "01":
        return <Smartphone className="h-6 w-6 transition-colors duration-300" />;
      case "02":
        return <FileSearch className="h-6 w-6 transition-colors duration-300" />;
      case "03":
        return <Stethoscope className="h-6 w-6 transition-colors duration-300" />;
      case "04":
        return <Bike className="h-6 w-6 transition-colors duration-300" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="how-it-works"
      className="relative py-10 sm:py-12 lg:py-14 bg-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden"
      aria-labelledby="customer-how-it-works-heading"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-10">
        <SectionHeading
          badge="Simple 4-Step Process"
          title="How Pilldoor works for you"
          description="From snapping your prescription to safe doorstep delivery, ordering medicines from home takes just four straightforward steps."
          align="center"
          className="mb-6 sm:mb-8 lg:mb-10"
        />

        {/* Desktop Horizontal Journey (>= 1024px) */}
        <div className="hidden lg:block relative mb-8 sm:mb-10">
          {/* Subtle Connecting Line */}
          <div className="absolute top-1/2 left-16 right-16 -translate-y-12 h-1 bg-gradient-to-r from-[#0D4E3A] via-[#10B981] to-[#0D4E3A] opacity-20 z-0" />

          <div className="grid grid-cols-4 gap-5 xl:gap-6 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div
                key={step.step}
                className="group flex flex-col justify-between rounded-2xl bg-white p-5 xl:p-7 border border-[#E2E8F0] shadow-sm hover:border-[#10B981] hover:shadow-lg transition-all duration-300"
              >
                <div>
                  {/* Step Header */}
                  <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F5E9] text-[#0D4E3A] ring-4 ring-white shadow-md group-hover:scale-110 group-hover:bg-[#0D4E3A] group-hover:text-white transition-all duration-300">
                    {getStepIcon(step.step)}
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#0D4E3A] text-[10px] font-bold text-white shadow group-hover:bg-[#10B981] transition-colors">
                      {step.step}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#10B981] block mb-1">
                    Step {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#0D4E3A] mb-3">
                    {step.short}
                  </p>
                  <p className="text-xs leading-relaxed text-[#64748B] mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="mt-auto inline-flex items-center rounded-md bg-[#F1F5F9] px-2.5 py-1 text-[11px] font-medium text-[#0D4E3A]">
                  {step.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Journey (< 1024px) */}
        <div className="lg:hidden relative space-y-4 mb-10">
          <div className="absolute top-6 bottom-6 left-6 w-0.5 bg-gradient-to-b from-[#0D4E3A] via-[#10B981] to-[#0D4E3A]/40 z-0" />

          {HOW_IT_WORKS_STEPS.map((step) => (
            <div
              key={step.step}
              className="flex items-start gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm ml-2 relative z-10"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0D4E3A] text-white shadow-md font-bold text-xs ring-4 ring-white">
                {step.step}
              </div>

              <div className="flex-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#10B981] block mb-0.5">
                  Step {step.step}
                </span>
                <h4 className="text-base font-bold text-[#0F172A]">
                  {step.title}
                </h4>
                <p className="text-xs font-semibold text-[#0D4E3A] mb-1.5">
                  {step.short}
                </p>
                <p className="text-xs text-[#64748B] leading-relaxed mb-3">
                  {step.description}
                </p>
                <div className="inline-flex items-center rounded-md bg-[#F8FAFC] border border-[#E2E8F0] px-2.5 py-1 text-[11px] font-medium text-[#0D4E3A]">
                  {step.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0D4E3A] hover:text-[#157356] hover:underline transition-colors"
          >
            <span>Read the detailed step-by-step prescription guide</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

