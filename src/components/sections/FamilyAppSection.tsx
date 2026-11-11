"use client";

import React from "react";
import Link from "next/link";
import { PhoneFrame } from "@/components/product-showcase/DeviceFrames";
import { Users, ArrowRight, HeartHandshake, ShieldAlert, MapPin } from "lucide-react";

export function FamilyAppSection() {
  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-white border-b border-[#E2E8F0] overflow-hidden">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Column: Copy & Benefits */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0D4E3A]">
              <Users className="h-4 w-4" />
              <span>Family Healthcare Management</span>
            </span>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
              One app for your family.{" "}
              <span className="text-[#0D4E3A]">Care tailored for everyone.</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[#64748B] leading-relaxed">
              Caring for aging parents or young children shouldn&apos;t require multiple pharmacy visits and confusing paperwork. With Pilldoor, you can organize prescriptions, chronic health notes, and delivery addresses for every family member under one secure account.
            </p>

            {/* 3 Family Pillars */}
            <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
              <div className="flex items-start gap-3 sm:gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F5E9] text-[#0D4E3A]">
                  <HeartHandshake className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] mb-1">
                    Caring for Elderly Parents from Afar
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    Upload their regular monthly prescriptions, save their home address, and ensure their cardiac, diabetes, or blood pressure medicines arrive without interruption.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F5E9] text-[#0D4E3A]">
                  <ShieldAlert className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] mb-1">
                    Drug Allergy &amp; Chronic Health Profiles
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    Store known drug allergies and pre-existing medical conditions alongside each family member&apos;s name so reviewing pharmacists have complete safety context.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F5E9] text-[#0D4E3A]">
                  <MapPin className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] mb-1">
                    Multiple Delivery Destinations
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    Route orders to your home, your parents&apos; residence, or your office address with GPS-pinned accuracy and clear delivery notes.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/family-care"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D4E3A] px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-[#157356] transition-all"
              >
                <span>Learn More About Family Healthcare</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Real Customer App Screen showing Family Patients */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 rounded-[50px] bg-gradient-to-tr from-[#10B981]/20 via-[#0D4E3A]/10 to-transparent blur-2xl -z-10" />
              <PhoneFrame
                src="/mockups/mobile/pilldoor_family_patients_screen.png"
                alt="Pilldoor Family Patients screen showing member profiles, clinical safety notes, and chronic conditions"
                cameraCutout="dot"
                className="w-[240px] xs:w-[270px] sm:w-[300px]"
              />
              <div className="mt-4 text-center">
                <span className="text-xs font-semibold text-[#64748B]">
                  Actual Pilldoor app screen: Family patient profiles &amp; clinical safety
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
