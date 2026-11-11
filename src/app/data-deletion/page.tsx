import React from "react";
import { buildPageMetadata } from "@/lib/seo";
import { AppSummaryCard } from "@/components/legal/AppSummaryCard";
import { DataDeletionForm } from "@/components/forms/DataDeletionForm";
import {
  Trash2,
  Smartphone,
  Mail,
  ShieldCheck,
  Clock,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";

export const metadata = buildPageMetadata({
  title: "Pilldoor — User Account & Personal Data Deletion",
  description:
    "Request deletion of your Pilldoor medicine delivery account and associated personal data in full compliance with Google Play Store Data Safety policies.",
  path: "/data-deletion",
});

export default function DataDeletionPage() {
  return (
    <div className="flex flex-col min-h-screen pt-[72px]">
      {/* Branded Hero Header — Exact Google Play Compliant Title & Disclosures */}
      <section className="py-8 sm:py-10 bg-gradient-to-b from-[#E8F5E9]/50 via-white to-white border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-red-700 border border-red-200">
            <Trash2 className="h-3.5 w-3.5" />
            <span>Google Play Data Safety &amp; User Control Policy</span>
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A]">
            Pilldoor — User Account &amp; Personal Data Deletion
          </h1>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Request deletion of your Pilldoor medicine delivery account and associated personal data.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs text-[#64748B] pt-1">
            <span className="inline-flex items-center gap-1 rounded-md bg-white px-2.5 py-1 border border-[#E2E8F0] font-medium text-[#0F172A]">
              App: <strong>Pilldoor</strong>
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-white px-2.5 py-1 border border-[#E2E8F0] font-medium text-[#0F172A]">
              Platform: <strong>Pilldoor Healthcare</strong>
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-[#E8F5E9] px-2.5 py-1 border border-[#10B981]/30 font-bold text-[#0D4E3A]">
              SLA: <strong>Within 30 Days</strong>
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Section — Integrated 12-Column Grid */}
      <section className="py-8 sm:py-12 bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
          {/* Top Application Context Banner */}
          <AppSummaryCard pageContext="data-deletion" />

          {/* 12-Column Split: Policy Disclosures on Left, Interactive Form on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column (5 Cols): Official Disclosures, Statutory Retentions & SLAs */}
            <div className="lg:col-span-5 space-y-6">
              {/* Card 1: What Data Is Deleted */}
              <div className="rounded-3xl bg-white p-6 sm:p-7 border border-[#E2E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#0D4E3A] font-bold text-xs">
                    01
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-[#0F172A]">
                    What Data Is Deleted
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Upon verification of your deletion request, the following user information is permanently erased from active Pilldoor systems and customer databases:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="rounded-xl bg-[#F8FAFC] p-3.5 border border-[#E2E8F0]">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F172A] mb-1">
                      <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" />
                      <span>Customer Profile</span>
                    </div>
                    <p className="text-[11px] text-[#64748B] leading-relaxed">
                      Full Name, Phone Number, Email, and passwordless authentication tokens.
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#F8FAFC] p-3.5 border border-[#E2E8F0]">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F172A] mb-1">
                      <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" />
                      <span>Delivery Addresses</span>
                    </div>
                    <p className="text-[11px] text-[#64748B] leading-relaxed">
                      Saved home addresses, apartment numbers, landmarks, and GPS points.
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#F8FAFC] p-3.5 border border-[#E2E8F0]">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F172A] mb-1">
                      <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" />
                      <span>Family Profiles</span>
                    </div>
                    <p className="text-[11px] text-[#64748B] leading-relaxed">
                      Linked dependent accounts, patient names, recorded ages, and allergy notes.
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#F8FAFC] p-3.5 border border-[#E2E8F0]">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F172A] mb-1">
                      <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" />
                      <span>Device Tokens</span>
                    </div>
                    <p className="text-[11px] text-[#64748B] leading-relaxed">
                      Push notification tokens, active login sessions, and app preferences.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: What Data Is Retained (Mandatory Healthcare Disclosure) */}
              <div className="rounded-3xl bg-amber-50/70 p-6 sm:p-7 border border-amber-200 text-amber-950 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-200 text-amber-900 font-bold text-xs">
                    02
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-amber-950">
                    What Data Is Retained (Healthcare Mandate)
                  </h2>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 border border-amber-200/80">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Mandatory Statutory Retention Notice:</strong>
                    <br />
                    Under the <strong>Drugs and Cosmetics Rules, 1945</strong> and applicable Indian pharmacy dispensing regulations, medical prescription dispensing records and financial tax invoices must be retained for statutory audit compliance for a minimum statutory period (typically 2 to 5 years).
                  </div>
                </div>

                <p className="text-xs text-amber-900/90 leading-relaxed">
                  This data is archived in a restricted, read-only compliance audit vault accessible exclusively for statutory drug controller audits and is <strong>never used for marketing, advertising, or profiling</strong>.
                </p>
              </div>

              {/* Card 3: Processing Timeline */}
              <div className="rounded-3xl bg-white p-6 sm:p-7 border border-[#E2E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#0D4E3A] font-bold text-xs">
                    03
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-[#0F172A]">
                    Processing Timeline &amp; SLAs
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="rounded-xl bg-[#F8FAFC] p-3.5 border border-[#E2E8F0]">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0D4E3A] mb-1">
                      <Clock className="h-4 w-4 text-[#10B981]" />
                      <span>Immediate</span>
                    </div>
                    <p className="text-[11px] text-[#64748B] leading-relaxed">
                      Request logged in audit ledger with unique reference ID.
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#F8FAFC] p-3.5 border border-[#E2E8F0]">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0D4E3A] mb-1">
                      <ShieldCheck className="h-4 w-4 text-[#10B981]" />
                      <span>3 Business Days</span>
                    </div>
                    <p className="text-[11px] text-[#64748B] leading-relaxed">
                      Identity verification against registered mobile number.
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#F8FAFC] p-3.5 border border-[#E2E8F0]">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0D4E3A] mb-1">
                      <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                      <span>Within 30 Days</span>
                    </div>
                    <p className="text-[11px] text-[#64748B] leading-relaxed">
                      Account deactivated &amp; personal identifiers de-identified.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4: Alternative Channels & Official Contacts */}
              <div className="rounded-3xl bg-white p-6 sm:p-7 border border-[#E2E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#0D4E3A] font-bold text-xs">
                    04
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-[#0F172A]">
                    Alternative Deletion Channels
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="rounded-2xl bg-[#F8FAFC] p-4 border border-[#E2E8F0]">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0D4E3A] mb-1.5">
                      <Smartphone className="h-4 w-4 text-[#10B981]" />
                      <span>In-App Method</span>
                    </div>
                    <p className="text-[11px] text-[#64748B] leading-relaxed">
                      Open <strong>Pilldoor</strong> &gt; Profile &gt; Account Security &gt; <strong>Request Account Deletion</strong>.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F8FAFC] p-4 border border-[#E2E8F0]">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0D4E3A] mb-1.5">
                      <Mail className="h-4 w-4 text-[#10B981]" />
                      <span>Email Privacy Desk</span>
                    </div>
                    <p className="text-[11px] text-[#64748B] leading-relaxed">
                      Email <a href="mailto:privacy@pilldoor.com" className="text-[#0D4E3A] font-semibold underline">privacy@pilldoor.com</a> with your registered phone number.
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E2E8F0] text-xs text-[#64748B] space-y-1">
                  <p><strong>Compliance Entity:</strong> Pilldoor Healthcare Network</p>
                  <p><strong>Verification Method:</strong> Registered Mobile Phone &amp; SMS OTP</p>
                  <p><strong>Jurisdiction:</strong> Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>

            {/* Right Column (7 Cols): Interactive Form (Elevated & Prominent) */}
            <div className="lg:col-span-7 space-y-6 lg:sticky lg:top-24">
              {/* The Submission Form */}
              <DataDeletionForm />

              {/* Help & Assurance Card */}
              <div className="rounded-3xl bg-white p-6 sm:p-7 border border-[#E2E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-[#0D4E3A]" />
                  <h3 className="text-sm sm:text-base font-bold text-[#0F172A]">
                    Common Questions &amp; Support Assistance
                  </h3>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#475569]">
                  <div className="rounded-2xl bg-[#F8FAFC] p-4 border border-[#E2E8F0]">
                    <h4 className="font-bold text-[#0F172A] mb-1">
                      Can I cancel my deletion request?
                    </h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      Yes. If you submitted this request by mistake, contact <a href="mailto:support@pilldoor.com" className="text-[#0D4E3A] underline font-semibold">support@pilldoor.com</a> within 3 business days from your registered mobile phone number.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F8FAFC] p-4 border border-[#E2E8F0]">
                    <h4 className="font-bold text-[#0F172A] mb-1">
                      Can I create a new Pilldoor account in the future?
                    </h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      Yes. You are welcome to create a fresh Pilldoor account anytime using your mobile number and SMS OTP. Past histories and deleted profiles cannot be restored.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F8FAFC] p-4 border border-[#E2E8F0]">
                    <h4 className="font-bold text-[#0F172A] mb-1">
                      What happens if I have an active prescription order?
                    </h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      If an order is currently in transit, your deletion request will be processed immediately after either delivery is concluded or the order is cancelled and any applicable refund is settled.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
