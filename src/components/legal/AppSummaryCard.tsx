import React from "react";
import Image from "next/image";
import { BRAND, SITE_URL } from "@/lib/seo";
import { PLAY_STORE_URL } from "@/data/navigation";
import {
  ShieldCheck,
  Smartphone,
  Building2,
  CheckCircle2,
  ExternalLink,
  Lock,
} from "lucide-react";

interface AppSummaryCardProps {
  pageContext?: "terms" | "privacy" | "data-deletion";
}

export function AppSummaryCard({ pageContext = "terms" }: AppSummaryCardProps) {
  const getContextBadge = () => {
    switch (pageContext) {
      case "privacy":
        return "Privacy & Data Protection Notice";
      case "data-deletion":
        return "Google Play Data Safety & Deletion Policy";
      default:
        return "Application Terms of Service";
    }
  };

  return (
    <div className="mb-6 sm:mb-8 overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-sm">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#072C21] to-[#0D4E3A] px-6 py-6 sm:px-8 sm:py-7 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white p-2 shadow-md">
              <Image
                src="/icons/pilldoor-logo-192.png"
                alt="Pilldoor Application Icon"
                width={48}
                height={48}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {BRAND.name}
                </h2>
                <span className="rounded-full bg-[#10B981]/25 px-2.5 py-0.5 text-[11px] font-semibold text-[#A7F3D0] border border-[#10B981]/40">
                  Android App
                </span>
              </div>
              <p className="text-xs text-emerald-100/80 font-medium mt-0.5">
                Official Medicine Delivery &amp; Healthcare Platform
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#10B981] px-4 py-2.5 text-xs font-bold text-[#072C21] hover:bg-[#34D399] transition-colors shadow-xs"
            >
              <Image
                src="/icons/playstore-icon-512.png"
                alt="Google Play"
                width={16}
                height={16}
                className="rounded shrink-0"
              />
              <span>Google Play Store</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-80" />
            </a>
          </div>
        </div>
      </div>

      {/* App Summary Details */}
      <div className="p-6 sm:p-8 bg-[#F8FAFC]">
        <div className="mb-5 flex items-center justify-between flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F5E9] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0D4E3A]">
            <ShieldCheck className="h-3.5 w-3.5 text-[#10B981]" />
            <span>{getContextBadge()}</span>
          </span>
          <span className="text-xs text-[#64748B]">
            Official legal documentation for {BRAND.legalName}
          </span>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-bold text-[#0F172A] mb-1">
              About the Pilldoor Application
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              <strong>Pilldoor</strong> is a mobile healthcare and prescription delivery platform designed to make ordering essential medications seamless, verified, and safe for families across India. Patients can upload doctor prescriptions in multiple formats, organize recurring medicines for children and elderly parents, speak directly with dispensing pharmacists, and receive authentic medications at their doorstep verified by a mandatory 4-digit secret OTP.
            </p>
          </div>

          {/* Key Architectural & Legal Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            <div className="rounded-xl bg-white p-3.5 border border-[#E2E8F0]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0F172A] mb-1">
                <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" />
                <span>Prescription Upload</span>
              </div>
              <p className="text-[11px] text-[#64748B]">
                Camera photo, gallery image, or multi-page PDF up to 10MB.
              </p>
            </div>

            <div className="rounded-xl bg-white p-3.5 border border-[#E2E8F0]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0F172A] mb-1">
                <Building2 className="h-4 w-4 text-[#10B981] shrink-0" />
                <span>Licensed Pharmacists</span>
              </div>
              <p className="text-[11px] text-[#64748B]">
                100% human clinical verification before order packing.
              </p>
            </div>

            <div className="rounded-xl bg-white p-3.5 border border-[#E2E8F0]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0F172A] mb-1">
                <Lock className="h-4 w-4 text-[#10B981] shrink-0" />
                <span>4-Digit Delivery OTP</span>
              </div>
              <p className="text-[11px] text-[#64748B]">
                Confidential handover verification code protects every parcel.
              </p>
            </div>

            <div className="rounded-xl bg-white p-3.5 border border-[#E2E8F0]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0F172A] mb-1">
                <Smartphone className="h-4 w-4 text-[#10B981] shrink-0" />
                <span>Family Health Profiles</span>
              </div>
              <p className="text-[11px] text-[#64748B]">
                Manage loved ones, chronic refills, and recorded allergies.
              </p>
            </div>
          </div>

          {/* Legal Identity Card */}
          <div className="rounded-xl bg-emerald-50/60 p-3.5 border border-emerald-100 flex flex-wrap items-center justify-between gap-3 text-xs text-[#0D4E3A]">
            <div className="space-y-0.5">
              <span className="font-bold">Entity:</span> {BRAND.legalName} •{" "}
              <span className="font-bold">Website:</span> {SITE_URL.replace(/^https?:\/\//, "")} •{" "}
              <span className="font-bold">Support:</span> support@pilldoor.com
            </div>
            <div className="text-[11px] text-[#157356]">
              Governed by the Information Technology Act &amp; Indian Drug Regulations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

