import React from "react";
import Link from "next/link";
import { CUSTOMER_FEATURES } from "@/data/features";
import { buildPageMetadata } from "@/lib/seo";
import { PhoneFrame } from "@/components/product-showcase/DeviceFrames";
import { CheckCircle2, ArrowRight, Download, Sparkles } from "lucide-react";

export const metadata = buildPageMetadata({
  title: "App Features — Easy Medicine Ordering & Care | Pilldoor",
  description:
    "Explore Pilldoor features: prescription uploads, family member management, licensed pharmacist review, generic substitution consent, and live OTP delivery tracking.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Features Hero */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-[#E8F5E9]/50 via-white to-white border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0D4E3A] ring-1 ring-[#10B981]/30">
            <Sparkles className="h-4 w-4" />
            <span>Pilldoor Mobile Capabilities</span>
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
            Features built for your convenience and safety
          </h1>

          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Every tool inside Pilldoor is engineered around simplicity, clinical responsibility, and peace of mind for you and your family.
          </p>
        </div>
      </section>

      {/* 9 Features Detailed Walkthrough */}
      <section className="py-10 sm:py-14 lg:py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
          <div className="space-y-12 sm:space-y-16">
            {CUSTOMER_FEATURES.map((feature, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={feature.id}
                  id={feature.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                  {/* Text Column */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? "lg:order-2" : ""}`}>
                    <div className="inline-flex items-center gap-2 rounded-lg bg-[#E8F5E9] px-3 py-1 text-xs font-bold text-[#0D4E3A]">
                      <span>Feature 0{idx + 1}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A]">
                      {feature.title}
                    </h2>

                    <p className="text-sm sm:text-base font-semibold text-[#0D4E3A]">
                      {feature.shortBenefit}
                    </p>

                    <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                      {feature.description}
                    </p>

                    <ul className="space-y-2.5 pt-2">
                      {feature.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0F172A]">
                          <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-[#10B981] mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual Column */}
                  <div className={`lg:col-span-5 flex justify-center ${isEven ? "lg:order-1" : ""}`}>
                    <div className="relative">
                      <div className="pointer-events-none absolute -inset-6 rounded-[50px] bg-gradient-to-tr from-[#10B981]/20 via-[#0D4E3A]/10 to-transparent blur-2xl -z-10" />
                      <PhoneFrame
                        src={feature.screenshot}
                        alt={feature.screenshotAlt}
                        className="w-[270px] sm:w-[300px]"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="py-12 sm:py-14 bg-[#072C21] text-white">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to simplify your medicine ordering?
          </h2>
          <p className="text-base text-emerald-100/80 max-w-xl mx-auto">
            Get the Pilldoor Android app today and experience verified doorstep medicine delivery.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#download"
              className="inline-flex items-center gap-2 rounded-xl bg-[#10B981] px-6 py-3.5 text-sm font-bold text-[#072C21] hover:bg-[#34D399] transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>Get the Pilldoor App</span>
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <span>See How It Works</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
