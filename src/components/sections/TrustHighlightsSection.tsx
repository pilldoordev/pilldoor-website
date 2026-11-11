"use client";

import React from "react";
import { ShoppingBag, FileUp, Users, Stethoscope, ShieldCheck } from "lucide-react";
import { TRUST_HIGHLIGHTS } from "@/data/content";

export function TrustHighlightsSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case "ordering":
        return <ShoppingBag className="h-6 w-6 transition-colors duration-300" />;
      case "upload":
        return <FileUp className="h-6 w-6 transition-colors duration-300" />;
      case "family":
        return <Users className="h-6 w-6 transition-colors duration-300" />;
      case "pharmacist":
        return <Stethoscope className="h-6 w-6 transition-colors duration-300" />;
      case "tracking":
        return <ShieldCheck className="h-6 w-6 transition-colors duration-300" />;
      default:
        return <ShieldCheck className="h-6 w-6 transition-colors duration-300" />;
    }
  };

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-white border-b border-[#E2E8F0]">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-10">
        {/* Section Heading matching Prompt Section C & Brand Positioning */}
        <div className="mx-auto max-w-3xl text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0D4E3A]/15 bg-[#E8F5E9] px-3.5 py-1.5 text-xs font-semibold text-[#0D4E3A] mb-3.5">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[#0D4E3A]" />
            <span>Trust &amp; Convenience Highlights</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#0F172A] mb-3 sm:mb-4 leading-tight">
            Your medicines, delivered with care.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#64748B] leading-relaxed">
            Order medicines from the comfort of your home. Upload prescriptions, manage your family&apos;s medicine needs and follow your delivery &mdash; all from one simple app.
          </p>
        </div>

        {/* 5 Value & Convenience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {TRUST_HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col rounded-2xl bg-[#F8FAFC] p-5 sm:p-6 border border-[#E2E8F0] hover:border-[#10B981] hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F5E9] text-[#0D4E3A] mb-4 group-hover:scale-105 group-hover:bg-[#0D4E3A] group-hover:text-white transition-all duration-300">
                {getIcon(item.id)}
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
