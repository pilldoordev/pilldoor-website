import React from "react";
import Image from "next/image";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhoneFrame } from "@/components/product-showcase/DeviceFrames";
import { FAMILY_CARE_PILLARS } from "@/data/features";
import {
  Users,
  HeartHandshake,
  Baby,
  ShieldAlert,
  MapPin,
  CheckCircle2,
  Download,
  ShieldCheck,
} from "lucide-react";

export const metadata = buildPageMetadata({
  title: "Family Care — Manage Healthcare for Your Entire Household | Pilldoor",
  description:
    "Organize prescriptions, chronic condition notes, and delivery addresses for parents, children, and dependents under one secure Pilldoor family account.",
  path: "/family-care",
});

export default function FamilyCarePage() {
  const getPillarIcon = (id: string) => {
    switch (id) {
      case "elderly":
        return <HeartHandshake className="h-6 w-6 text-[#0D4E3A]" />;
      case "children":
        return <Baby className="h-6 w-6 text-[#0D4E3A]" />;
      case "allergies":
        return <ShieldAlert className="h-6 w-6 text-[#0D4E3A]" />;
      case "caregiver":
        return <MapPin className="h-6 w-6 text-[#0D4E3A]" />;
      default:
        return <Users className="h-6 w-6 text-[#0D4E3A]" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Header */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-[#E8F5E9]/50 via-white to-white border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0D4E3A] ring-1 ring-[#10B981]/30">
            <Users className="h-4 w-4" />
            <span>Connected Family Wellness</span>
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
            One simple app for your entire family&apos;s healthcare
          </h1>

          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Whether ordering monthly blood pressure medicines for elderly parents or pediatric care for a sick child, Pilldoor keeps your household organized, safe, and supported.
          </p>
        </div>
      </section>

      {/* Editorial Lifestyle Hero Banner */}
      <section className="py-8 sm:py-10 bg-white">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
          <div className="relative rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-sm bg-[#072C21] text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 p-8 sm:p-12 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#10B981]">
                  Caregiver Peace of Mind
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  Never worry about forgotten prescriptions or missing dosages.
                </h2>
                <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed">
                  Managing health records across scattered pharmacy receipts is stressful. With Pilldoor, every family member has a dedicated profile with recorded drug allergies, saved prescriptions, and customized delivery destinations.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2 text-xs font-semibold text-white">
                    <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                    <span>Multiple profiles under one login</span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2 text-xs font-semibold text-white">
                    <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                    <span>Distinct delivery addresses</span>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 relative h-[340px] sm:h-[440px] w-full">
                <Image
                  src="/images/patients/family-care.jpg"
                  alt="Daughter and elderly father reviewing medicine schedules and sealed Pilldoor packages at home"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section className="py-10 sm:py-14 lg:py-16 bg-[#F8FAFC] border-t border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
          <SectionHeading
            badge="Family Care Architecture"
            title="How Pilldoor supports every generation"
            description="Explore the features designed to give family caregivers complete control and visibility over their loved ones' medications."
            align="center"
            className="mb-8 sm:mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {FAMILY_CARE_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="flex flex-col justify-between rounded-3xl bg-white p-8 border border-[#E2E8F0] shadow-sm hover:border-[#10B981] hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F5E9] mb-5">
                    {getPillarIcon(pillar.id)}
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#0D4E3A] mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <ul className="space-y-2.5 border-t border-[#F1F5F9] pt-4">
                  {pillar.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#0F172A]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#10B981] mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Real Screen Walkthrough for Family Uploads */}
          <div className="rounded-3xl bg-white p-8 sm:p-12 border border-[#E2E8F0] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F5E9] px-3.5 py-1 text-xs font-semibold text-[#0D4E3A]">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Actual Mobile Interface</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F172A]">
                  Select the patient profile before uploading
                </h3>
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                  Inside the Pilldoor app, every prescription upload starts by selecting the person it belongs to: Self, Parents, Children, or Dependents. This ensures the reviewing pharmacist has accurate age, allergy, and chronic health context from the very first second.
                </p>
                <div className="pt-2">
                  <Link
                    href="/#download"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0D4E3A] px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-[#157356] transition-all"
                  >
                    <Download className="h-4 w-4" />
                    <span>Get the Pilldoor App</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <PhoneFrame
                  src="/mockups/mobile/pilldoor_family_patients_screen.png"
                  alt="Pilldoor Family Patients screen showing member profiles, clinical safety notes, and chronic conditions"
                  cameraCutout="dot"
                  className="w-[270px] sm:w-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-12 sm:py-14 bg-[#072C21] text-white">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Bring your family&apos;s medicine care into one simple app
          </h2>
          <p className="text-base text-emerald-100/80 max-w-xl mx-auto">
            Download Pilldoor and experience peaceful, reliable healthcare management for you and your loved ones.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#download"
              className="inline-flex items-center gap-2 rounded-xl bg-[#10B981] px-6 py-3.5 text-sm font-bold text-[#072C21] hover:bg-[#34D399] transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>Download Pilldoor App</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
