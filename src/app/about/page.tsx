import React from "react";
import Image from "next/image";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { ABOUT_CONTENT } from "@/data/content";
import {
  Heart,
  CheckCircle2,
  ArrowRight,
  Download,
  Award,
} from "lucide-react";

export const metadata = buildPageMetadata({
  title: "About Us — Dedicated to Family Healthcare Convenience | Pilldoor",
  description:
    "Learn about Pilldoor's mission to make medicine ordering dependable, transparent, and effortlessly accessible for individuals and families across India.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* About Hero */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-[#E8F5E9]/50 via-white to-white border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0D4E3A] ring-1 ring-[#10B981]/30">
            <Heart className="h-4 w-4 text-[#10B981]" />
            <span>Our Purpose &amp; Conviction</span>
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
            Your medicines, delivered with care.
          </h1>

          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Pilldoor is built around one simple belief: ordering essential medicines for yourself and your family should be easy, transparent, and always verified with clinical responsibility.
          </p>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-10 sm:py-14 lg:py-16 bg-white">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#10B981]">
                Why We Built Pilldoor
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] leading-snug">
                {ABOUT_CONTENT.headline}
              </h2>

              {ABOUT_CONTENT.storyParagraphs.map((paragraph, idx) => (
                <p key={idx} className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E2E8F0]">
                <div className="rounded-2xl bg-[#F8FAFC] p-4 border border-[#E2E8F0]">
                  <span className="block text-2xl font-black text-[#0D4E3A]">100%</span>
                  <span className="text-xs font-medium text-[#64748B]">Licensed Pharmacy Sourced</span>
                </div>
                <div className="rounded-2xl bg-[#F8FAFC] p-4 border border-[#E2E8F0]">
                  <span className="block text-2xl font-black text-[#0D4E3A]">4-Digit</span>
                  <span className="text-xs font-medium text-[#64748B]">OTP Delivery Verification</span>
                </div>
              </div>
            </div>

            {/* Campaign Visual Frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[380px] sm:h-[460px] w-full rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-xl">
                <Image
                  src="/images/hero/pharmacist-hero.jpg"
                  alt="Senior pharmacist reviewing medicine orders in a sunlit modern pharmacy dispensing counter"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#072C21]/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#10B981]">
                    Clinical Responsibility
                  </span>
                  <p className="text-sm font-medium leading-snug">
                    Every prescription is verified by a qualified pharmacist before packing and dispatch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-10 sm:py-14 lg:py-16 bg-[#F8FAFC] border-t border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-14">
            {/* Mission */}
            <div className="rounded-3xl bg-white p-8 sm:p-10 border border-[#E2E8F0] shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F5E9] text-[#0D4E3A] mb-5">
                <Heart className="h-6 w-6 text-[#10B981]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
                {ABOUT_CONTENT.mission.title}
              </h3>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                {ABOUT_CONTENT.mission.body}
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-3xl bg-white p-8 sm:p-10 border border-[#E2E8F0] shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F5E9] text-[#0D4E3A] mb-5">
                <Award className="h-6 w-6 text-[#10B981]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
                {ABOUT_CONTENT.vision.title}
              </h3>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                {ABOUT_CONTENT.vision.body}
              </p>
            </div>
          </div>

          {/* 4 Core Values */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] text-center mb-8">
              Our Core Commitments to You
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ABOUT_CONTENT.values.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white p-6 border border-[#E2E8F0] shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#10B981]" />
                      <h5 className="text-sm font-bold text-[#0F172A]">
                        {item.title}
                      </h5>
                    </div>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="py-12 sm:py-14 bg-[#072C21] text-white">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Experience reliable healthcare from home
          </h2>
          <p className="text-base text-emerald-100/80 max-w-xl mx-auto">
            Download the Pilldoor app today and order authentic medicines for yourself and your loved ones.
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
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <span>Contact Support</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
