import React from "react";
import Image from "next/image";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DesktopBrowserFrame } from "@/components/product-showcase/DeviceFrames";
import { PharmacyDemoForm } from "@/components/forms/PharmacyDemoForm";
import {
  Building2,
  CheckCircle2,
  ArrowRight,
  Layers,
  Users2,
  FileSpreadsheet,
} from "lucide-react";

export const metadata = buildPageMetadata({
  title: "Pharmacy Partnership & PharmaOps Platform | Pilldoor",
  description:
    "Partner your licensed retail pharmacy or healthcare network with Pilldoor. Receive local verified digital prescription orders and streamline fulfillment with PharmaOps.",
  path: "/pharmacy-partners",
});

const PHARMACY_MODULES = [
  {
    id: "prescriptions",
    title: "Prescription Review & Dosage Verification",
    badge: "Clinical Operations",
    description:
      "Inspect high-resolution customer prescription uploads, transcribe active molecules line-by-line, calculate exact dosages, and propose generic equivalents with complete price transparency.",
    src: "/mockups/desktop/pharmaops-prescriptions.png",
    alt: "PharmaOps prescription verification management queue showing patient uploads, review drawer, and clinical status",
    bullets: [
      "Side-by-side prescription document viewer with pan and zoom",
      "Line-by-line molecule transcription and pack unit calculations",
      "Integrated drug allergy flags and chronic condition context",
      "Two-way patient clarification messaging and instant call link",
    ],
  },
  {
    id: "orders",
    title: "Order Management & Partner Pharmacy Routing",
    badge: "Fulfillment Routing",
    description:
      "Route verified prescriptions across network retail pharmacies based on real-time stock availability, geographical distance, and GPS-verified store coordinates.",
    src: "/mockups/desktop/pharmaops-orders.png",
    alt: "PharmaOps order routing dashboard with partner pharmacy assignment tabs and fulfillment status",
    bullets: [
      "Automated and manual partner pharmacy order assignment",
      "Real-time item substitution consent tracking",
      "Razorpay payment status and COD invoice generation",
      "Multi-store inventory balancing and replenishment alerts",
    ],
  },
  {
    id: "deliveries",
    title: "Delivery Board & Fleet Dispatch Coordination",
    badge: "Logistics Control",
    description:
      "Monitor rider assignments from pharmacy dispatch to doorstep arrival. Reconcile Cash on Delivery (COD) and UPI collections with zero leakage.",
    src: "/mockups/desktop/pharmaops-deliveries.png",
    alt: "PharmaOps deliveries dispatch board tracking active rider routes and handover OTP states",
    bullets: [
      "Live task statuses: Assigned, In Transit, Delivered, and Returned",
      "Mandatory 4-digit customer OTP verification before delivery close",
      "Cash vs UPI payment reconciliation board for each rider shift",
      "Zero-loss pharmacy return workflow for failed delivery attempts",
    ],
  },
  {
    id: "audit",
    title: "Audit & Operational Traceability Logs",
    badge: "Compliance & Security",
    description:
      "Maintain a tamper-evident, timestamped log of every prescription review, dosage adjustment, substitution proposal, order handover, and rider assignment across your organization.",
    src: "/mockups/desktop/pharmaops-audit.png",
    alt: "PharmaOps immutable activity log displaying timestamped clinical and operational events",
    bullets: [
      "Immutable event logs tied to authenticated pharmacist credentials",
      "Timestamped records of patient consent for generic substitutions",
      "Exportable CSV/Excel reports for healthcare regulatory audits",
      "Role-scoped access ensuring patient records remain confidential",
    ],
  },
];

export default function PharmacyPartnersPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* PharmaOps B2B Partner Hero */}
      <section className="relative py-10 sm:py-14 bg-gradient-to-b from-[#E8F5E9]/40 via-white to-white overflow-hidden border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0D4E3A] ring-1 ring-[#10B981]/30 mb-6">
              <Building2 className="h-4 w-4" />
              <span>For Licensed Pharmacies &amp; Healthcare Networks</span>
            </span>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-tight mb-6">
              Expand your pharmacy reach with{" "}
              <span className="text-[#0D4E3A]">PharmaOps.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed mb-8">
              Join the Pilldoor network of licensed community pharmacies. Receive verified local prescription orders, manage clinical reviews, coordinate delivery riders, and reconcile settlements from one workspace.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#demo"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0D4E3A] px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-[#157356] transition-all"
              >
                <span>Request Live Demo</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#modules"
                className="inline-flex items-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F172A] hover:bg-[#F8FAFC] transition-colors"
              >
                <span>Explore Core Modules</span>
              </Link>
            </div>
          </div>

          {/* Hero Desktop Frame with Dashboard */}
          <div className="relative mx-auto max-w-5xl">
            <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-b from-[#10B981]/20 via-transparent to-transparent blur-3xl -z-10" />
            <DesktopBrowserFrame
              src="/mockups/desktop/pharmaops-dashboard.png"
              alt="PharmaOps live dashboard displaying real-time prescription queues, orders, and delivery metrics"
              urlLabel="pharmaops.pilldoor/dashboard"
              priority={true}
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      </section>

      {/* Clinical Standards Banner */}
      <section className="py-8 sm:py-10 bg-white">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
          <div className="relative rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-sm bg-[#072C21] text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 p-8 sm:p-12 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#10B981]">
                  Clinical Dispensing Standards
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
                  Designed for licensed retail pharmacies.
                </h2>
                <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed">
                  PharmaOps respects clinical pharmacy autonomy: document clarity checks, line-by-line transcription, patient allergy verification, and generic substitution approval before packing.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3.5 py-2 text-xs font-medium text-white">
                    <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                    <span>Zero unverified medicine dispatch</span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3.5 py-2 text-xs font-medium text-white">
                    <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                    <span>Complete audit accountability</span>
                  </span>
                </div>
              </div>
              <div className="lg:col-span-6 relative h-[320px] sm:h-[400px] w-full">
                <Image
                  src="/images/pharmacy/pharmacy-verification.jpg"
                  alt="Pharmacist verifying prescription items beside modern computer terminal and dispatch parcels"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Operational Modules Deep-Dive */}
      <section id="modules" className="py-10 sm:py-14 lg:py-16 bg-[#F8FAFC] border-t border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
          <SectionHeading
            badge="PharmaOps Platform Modules"
            title="Purpose-built for modern pharmacy fulfillment"
            description="Inspect the actual interfaces powering prescription intake, partner pharmacy routing, and delivery fleet dispatch."
            align="center"
            className="mb-8 sm:mb-12"
          />

          <div className="space-y-12 sm:space-y-16">
            {PHARMACY_MODULES.map((mod, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={mod.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                  <div className={`lg:col-span-5 space-y-5 ${isEven ? "lg:order-2" : ""}`}>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] px-3.5 py-1 text-xs font-semibold text-[#0D4E3A]">
                      <span>{mod.badge}</span>
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A]">
                      {mod.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-[#64748B]">
                      {mod.description}
                    </p>
                    <ul className="space-y-2.5 text-sm text-[#0F172A] pt-2">
                      {mod.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#10B981] mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : ""}`}>
                    <div className="relative">
                      <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#10B981]/15 to-transparent blur-xl -z-10" />
                      <DesktopBrowserFrame
                        src={mod.src}
                        alt={mod.alt}
                        urlLabel={`pharmaops.pilldoor/${mod.id}`}
                        sizes="(max-width: 1024px) 100vw, 720px"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Multi-Tenant Governance */}
      <section className="py-10 sm:py-14 lg:py-16 bg-white">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
          <SectionHeading
            badge="Enterprise Architecture"
            title="Multi-tenant isolation &amp; role-based permissions"
            description="Whether operating an independent neighborhood pharmacy or coordinating a multi-state hospital network, PharmaOps provides strict data segregation."
            align="center"
            className="mb-8 sm:mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-[#F8FAFC] p-8 border border-[#E2E8F0]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F5E9] text-[#0D4E3A] mb-5">
                <Layers className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-[#0F172A] mb-2">
                Tenant Data Isolation
              </h4>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Separate customer lists, prescription databases, pricing schedules, and inventory records for each registered pharmacy partner.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F8FAFC] p-8 border border-[#E2E8F0]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F5E9] text-[#0D4E3A] mb-5">
                <Users2 className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-[#0F172A] mb-2">
                Granular Role Permissions
              </h4>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Distinct privilege levels for Organization Admins, Licensed Pharmacists, Dispatch Supervisors, and Fleet Auditors with least-privilege scoping.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F8FAFC] p-8 border border-[#E2E8F0]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F5E9] text-[#0D4E3A] mb-5">
                <FileSpreadsheet className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-[#0F172A] mb-2">
                Automated Settlement Reports
              </h4>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Daily and monthly financial reconciliations detailing item sales, partner commissions, COD collections, and Razorpay gateway payouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Request Form Section */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#072C21] text-white">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#10B981]">
                Partner With Pilldoor
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Modernize your retail pharmacy fulfillment today.
              </h2>
              <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed">
                Schedule a live demonstration of PharmaOps with our operations team. We will walk you through prescription routing, pharmacist verification, and settlement terms.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-white/90">
                  <CheckCircle2 className="h-5 w-5 text-[#10B981]" />
                  <span>Full walkthrough of clinical verification workflows</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/90">
                  <CheckCircle2 className="h-5 w-5 text-[#10B981]" />
                  <span>Discussion of partner pharmacy settlement terms</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/90">
                  <CheckCircle2 className="h-5 w-5 text-[#10B981]" />
                  <span>Dedicated onboarding support for pharmacy staff</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7">
              <PharmacyDemoForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
