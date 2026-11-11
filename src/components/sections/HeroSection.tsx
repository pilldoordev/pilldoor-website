"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, ShieldCheck, CheckCircle2, HeartPulse } from "lucide-react";
import { PLAY_STORE_URL } from "@/data/navigation";
import { PhoneFrame } from "@/components/product-showcase/DeviceFrames";

gsap.registerPlugin(useGSAP);

export function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".hero-stagger", {
          y: 14,
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.out",
          clearProps: "all",
        });
        gsap.from(".hero-visual", {
          y: 16,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          clearProps: "all",
        });
      });
      return () => mm.revert();
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#F8FAFC] pt-[78px] sm:pt-[82px] lg:pt-[84px] pb-8 sm:pb-10 lg:pb-12 border-b border-[#E2E8F0]"
    >
      <div className="pointer-events-none absolute inset-0 clinical-grid-bg opacity-65" />

      <div className="relative mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column — Customer Value Proposition */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="hero-stagger inline-flex items-center gap-2 rounded-full border border-[#0D4E3A]/15 bg-[#E8F5E9] px-3.5 py-1.5 text-xs font-semibold text-[#0D4E3A]">
              <HeartPulse className="h-3.5 w-3.5 shrink-0 text-[#0D4E3A]" />
              <span className="tracking-wide">Online Medicine Delivery &amp; Family Care</span>
            </div>

            <h1 className="hero-stagger text-3xl xs:text-4xl sm:text-5xl lg:text-[44px] xl:text-[50px] font-bold tracking-[-0.032em] leading-[1.1] text-[#0F172A]">
              Your Medicines.
              <br />
              Your Family.
              <br />
              <span className="text-[#0D4E3A]">One Simple App.</span>
            </h1>

            <p className="hero-stagger max-w-xl text-base sm:text-lg text-[#64748B] leading-[1.6]">
              Order your medicines from home, upload prescriptions and manage your family&apos;s healthcare needs with Pilldoor.
            </p>

            <div className="hero-stagger flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-0.5">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0D4E3A] px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-[#072C21] transition-colors shadow-[0_4px_16px_rgba(13,78,58,0.25)] hover:shadow-[0_6px_20px_rgba(13,78,58,0.32)]"
              >
                <Image
                  src="/icons/playstore-icon-512.png"
                  alt="Google Play"
                  width={20}
                  height={20}
                  className="rounded shrink-0"
                />
                <span>Get the Pilldoor App</span>
              </a>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#CBD5E1] bg-white px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-[#0F172A] hover:border-[#0D4E3A]/40 hover:bg-[#F8FAFC] transition-colors"
              >
                <span>See How It Works</span>
                <ArrowRight className="h-4 w-4 text-[#0D4E3A]" />
              </Link>
            </div>

            <div className="hero-stagger pt-3.5 border-t border-[#E2E8F0]">
              <div className="flex flex-wrap gap-x-6 gap-y-2 max-w-lg">
                <div className="inline-flex items-start gap-2 text-xs sm:text-sm font-medium text-[#0F172A]/85">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span>Pharmacist-Reviewed Prescriptions</span>
                </div>
                <div className="inline-flex items-start gap-2 text-xs sm:text-sm font-medium text-[#0F172A]/85">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span>Four-Digit OTP Handover Verification</span>
                </div>
                <div className="w-full inline-flex items-start gap-2 text-xs sm:text-sm font-medium text-[#0F172A]/85">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span>100% Genuine Pharmacy Stock • Razorpay &amp; COD Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Pharmacist Editorial Photography + Real Patient App Mockup (PRESERVED AS REQUESTED) */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end pb-4 sm:pb-6 lg:pb-0">
            <div className="relative w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[390px] lg:max-w-[420px] xl:max-w-[460px]">
              {/* Primary Campaign Photograph — Smiling Clinical Pharmacist */}
              <div className="hero-visual relative ml-auto w-[84%] sm:w-[82%] aspect-[3/4] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_20px_50px_-16px_rgba(7,44,33,0.18)]">
                <Image
                  src="/images/hero/pharmacist-hero.jpg"
                  alt="Licensed pharmacist in a modern sunlit pharmacy holding a sealed Pilldoor prescription delivery package"
                  fill
                  priority
                  sizes="(max-width: 640px) 75vw, (max-width: 1024px) 50vw, 420px"
                  className="object-cover object-top"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 sm:h-24 bg-gradient-to-t from-[#072C21]/80 via-[#072C21]/30 to-transparent" />
                <div className="absolute bottom-2.5 right-2.5 sm:bottom-3.5 sm:right-3.5 flex items-center justify-end gap-1.5 sm:gap-2 text-white">
                  <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#10B981] shrink-0" />
                  <span className="text-[10px] sm:text-[11px] xl:text-xs font-semibold tracking-wide">
                    Pharmacist-Verified Dispatch
                  </span>
                </div>
              </div>

              {/* Overlapping Authentic Patient App Screenshot */}
              <div className="hero-visual absolute bottom-0 left-0 sm:bottom-0 sm:-left-2 lg:-left-3 z-20">
                <PhoneFrame
                  src="/mockups/mobile/pilldoor_welcome_login_screen.png"
                  alt="Pilldoor mobile application welcome screen showing mobile login and OTP authentication"
                  priority={true}
                  cameraCutout="dot"
                  className="w-[145px] xs:w-[160px] sm:w-[175px] lg:w-[195px] xl:w-[210px] shadow-[0_20px_48px_-10px_rgba(7,44,33,0.36)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
