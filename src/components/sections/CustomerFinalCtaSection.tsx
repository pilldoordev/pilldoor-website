"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { PLAY_STORE_URL } from "@/data/navigation";

export function CustomerFinalCtaSection() {
  return (
    <section id="download" className="relative py-12 sm:py-14 lg:py-16 bg-[#072C21] text-white overflow-hidden">
      {/* Background Soft Glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#10B981]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#0D4E3A]/40 blur-3xl" />

      <div className="mx-auto max-w-4xl px-4 sm:px-8 lg:px-10 text-center relative z-10">
        {/* Brand Squircle */}
        <div className="mx-auto mb-5 sm:mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white/10 p-2 sm:p-2.5 backdrop-blur-md ring-1 ring-white/20">
          <Image
            src="/icons/pilldoor-logo-192.png"
            alt="Pilldoor"
            width={48}
            height={48}
            className="h-full w-full object-contain"
          />
        </div>

        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 sm:px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#10B981] backdrop-blur-md ring-1 ring-white/15 mb-5 sm:mb-6">
          <ShieldCheck className="h-4 w-4" />
          <span>Your Health, On Time, Every Time</span>
        </span>

        <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-tight">
          Healthcare ordering, made simpler.
        </h2>

        <p className="text-sm sm:text-base lg:text-lg text-emerald-100/80 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
          Bring your medicine ordering experience into one convenient place with Pilldoor. Upload prescriptions, manage family health needs, and receive genuine medicines at your door.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto sm:max-w-none">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#10B981] px-7 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-[#072C21] shadow-lg hover:bg-[#34D399] transition-all"
          >
            <Image
              src="/icons/playstore-icon-512.png"
              alt="Google Play"
              width={22}
              height={22}
              className="rounded shrink-0"
            />
            <span>Download on Google Play</span>
          </a>

          <Link
            href="/how-it-works"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white hover:bg-white/10 transition-colors"
          >
            <span>See How It Works</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-emerald-200/60 pt-6 sm:pt-8 border-t border-white/10">
          <span>• 100% Genuine Pharmacy Stock</span>
          <span>• Licensed Pharmacist Review</span>
          <span>• 4-Digit Delivery Verification</span>
        </div>
      </div>
    </section>
  );
}
