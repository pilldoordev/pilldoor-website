import React, { Suspense } from "react";
import { buildPageMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/forms/ContactForm";
import {
  Clock,
  AlertTriangle,
  HeartPulse,
  ShieldCheck,
  Building2,
} from "lucide-react";

export const metadata = buildPageMetadata({
  title: "Customer Support & Contact | Pilldoor Healthcare",
  description:
    "Need help with your prescription upload or ongoing medicine delivery? Reach out to the Pilldoor patient care desk.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Header */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-[#E8F5E9]/50 via-white to-white border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0D4E3A] ring-1 ring-[#10B981]/30">
            <ShieldCheck className="h-4 w-4" />
            <span>Customer Care &amp; Support</span>
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A]">
            How can we help you today?
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Whether you have questions about uploading a prescription, tracking an ongoing order, or managing family profiles, our team is here to assist.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Info Columns */}
      <section className="py-10 sm:py-14 lg:py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
          {/* Emergency Notice Alert Banner */}
          <div className="mb-8 sm:mb-10 rounded-2xl bg-amber-50 p-5 sm:p-6 border border-amber-200 text-amber-900 flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-800 mb-1">
                Medical Emergency Notice
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-amber-900/90">
                Pilldoor is a scheduled medicine delivery service. In case of an acute, life-threatening medical emergency, poisoning, or severe trauma, please dial <strong>112</strong> or <strong>108</strong>, or visit your nearest hospital casualty department immediately.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Direct Contacts & Operations */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
                <h3 className="text-lg font-bold text-[#0F172A] mb-4">
                  Dedicated Support Channels
                </h3>

                <div className="space-y-6">
                  {/* Patient Support */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F5E9] text-[#0D4E3A]">
                      <HeartPulse className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F172A]">
                        Patient &amp; Prescription Care
                      </h4>
                      <p className="text-xs text-[#64748B] mb-1">
                        Prescription clarifications, order updates, and delivery verification help.
                      </p>
                      <a
                        href="mailto:support@pilldoor.com"
                        className="text-xs font-semibold text-[#0D4E3A] hover:underline"
                      >
                        support@pilldoor.com
                      </a>
                    </div>
                  </div>

                  {/* Pharmacy Partnerships */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F5E9] text-[#0D4E3A]">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F172A]">
                        Pharmacy Partnerships
                      </h4>
                      <p className="text-xs text-[#64748B] mb-1">
                        Licensed community pharmacy partner onboarding and queries.
                      </p>
                      <a
                        href="mailto:partner@pilldoor.com"
                        className="text-xs font-semibold text-[#0D4E3A] hover:underline"
                      >
                        partner@pilldoor.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="rounded-3xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F5E9] text-[#0D4E3A]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A]">
                      Pharmacy Operating Hours
                    </h4>
                    <span className="text-xs text-[#64748B]">
                      Prescription review &amp; support desk
                    </span>
                  </div>
                </div>
                <div className="space-y-2 text-xs text-[#0F172A]">
                  <div className="flex justify-between py-1 border-b border-[#F1F5F9]">
                    <span className="text-[#64748B]">Monday – Saturday:</span>
                    <span className="font-semibold">8:00 AM – 10:00 PM IST</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#F1F5F9]">
                    <span className="text-[#64748B]">Sunday:</span>
                    <span className="font-semibold">9:00 AM – 8:00 PM IST</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#64748B]">In-App Support Desk:</span>
                    <span className="font-semibold text-[#0D4E3A]">Accessible anytime via order view</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="rounded-3xl bg-white p-8 text-center text-sm text-[#64748B] border border-[#E2E8F0]">
                    Loading support form...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
