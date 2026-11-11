import React from "react";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { AppSummaryCard } from "@/components/legal/AppSummaryCard";
import {
  Lock,
  EyeOff,
  Mail,
  ShieldCheck,
  Trash2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata = buildPageMetadata({
  title: "Privacy Policy | Pilldoor Healthcare",
  description:
    "Official privacy policy for the Pilldoor mobile application. Learn how we safeguard doctor prescriptions, medical data, and personal health information in compliance with Google Play Data Safety standards.",
  path: "/privacy-policy",
});

const PRIVACY_SECTIONS = [
  { id: "pledge", num: "01", title: "Zero Monetization of Health Data" },
  { id: "collected", num: "02", title: "Information We Collect & Specific Purposes" },
  { id: "sharing", num: "03", title: "Data Sharing & Third-Party Disclosures" },
  { id: "security", num: "04", title: "Cryptographic Security & Storage Vaults" },
  { id: "retention", num: "05", title: "Statutory Pharmacy Retention Mandates" },
  { id: "rights", num: "06", title: "Your Rights: Access, Correction & Deletion" },
  { id: "children", num: "07", title: "Children's Healthcare Privacy" },
  { id: "grievance", num: "08", title: "Grievance Officer & Official Contacts" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen pt-[72px]">
      {/* Branded Hero Header */}
      <section className="py-8 sm:py-10 bg-gradient-to-b from-[#E8F5E9]/50 via-white to-white border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0D4E3A] ring-1 ring-[#10B981]/30">
            <Lock className="h-3.5 w-3.5 text-[#10B981]" />
            <span>Healthcare Privacy &amp; Data Governance</span>
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A]">
            Privacy Policy
          </h1>

          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Effective Date: November 11, 2026 | Last Updated: November 2026 | Version: 2.1 (Google Play Data Safety Certified)
          </p>
        </div>
      </section>

      {/* Main Section — 12-Column Responsive Layout */}
      <section className="py-8 sm:py-12 bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
          {/* Top Application Context Banner */}
          <AppSummaryCard pageContext="privacy" />

          {/* 12-Column Grid: Sticky TOC & Highlights on Left, Policy Sections on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column (4 Cols): Table of Contents, Trust Badges, Quick Contact */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* Table of Contents Card */}
              <div className="rounded-3xl bg-white p-6 border border-[#E2E8F0] shadow-sm space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0F172A] flex items-center justify-between">
                  <span>Table of Contents</span>
                  <span className="text-[11px] font-normal text-[#64748B]">8 Sections</span>
                </h3>

                <nav className="space-y-1">
                  {PRIVACY_SECTIONS.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="group flex items-center gap-3 rounded-xl px-3 py-2 text-xs font-medium text-[#475569] hover:bg-[#E8F5E9] hover:text-[#0D4E3A] transition-colors"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#F1F5F9] group-hover:bg-[#10B981]/20 font-bold text-[10px] text-[#64748B] group-hover:text-[#0D4E3A]">
                        {sec.num}
                      </span>
                      <span className="truncate">{sec.title}</span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Trust & Compliance Card */}
              <div className="rounded-3xl bg-[#0D4E3A] p-6 text-white space-y-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[#10B981]" />
                  <h4 className="text-sm font-bold tracking-tight">
                    Privacy Guarantees
                  </h4>
                </div>

                <ul className="space-y-2 text-xs text-emerald-100/90">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span><strong>Zero Data Selling:</strong> We never monetize or broker health profiles.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span><strong>AES-256 Storage:</strong> Prescriptions encrypted in private audit vaults.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span><strong>OTP Handover:</strong> 4-digit secret code protects delivery completion.</span>
                  </li>
                </ul>

                <div className="pt-2 border-t border-emerald-800">
                  <Link
                    href="/data-deletion"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A7F3D0] hover:text-white transition-colors"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    <span>Request Data Deletion</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* Grievance Help Desk */}
              <div className="rounded-3xl bg-white p-6 border border-[#E2E8F0] shadow-sm space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  Privacy &amp; DPO Inquiries
                </h4>
                <p className="text-xs text-[#0F172A] font-semibold">
                  Pilldoor Data Protection Office
                </p>
                <p className="text-xs text-[#64748B]">
                  Email: <a href="mailto:privacy@pilldoor.com" className="text-[#0D4E3A] font-semibold underline">privacy@pilldoor.com</a>
                </p>
                <p className="text-[11px] text-[#94A3B8]">
                  Acknowledged within 24 hours under DPDP Act.
                </p>
              </div>
            </aside>

            {/* Right Column (8 Cols): Full Legal Sections in White Cards */}
            <main className="lg:col-span-8 space-y-6">
              {/* Section 1 */}
              <section id="pledge" className="scroll-mt-28 rounded-3xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#0D4E3A] font-bold text-xs">
                    01
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                    Our Privacy Pledge: Zero Monetization of Health Data
                  </h2>
                </div>

                <p className="text-sm leading-relaxed text-[#334155]">
                  At <strong>Pilldoor Healthcare</strong>, we hold the sanctity of personal health information to the highest ethical and regulatory standards. We recognize that doctor prescriptions, diagnosed medical conditions, and medicine schedules are deeply private.
                </p>

                <div className="rounded-2xl bg-[#0D4E3A] p-5 text-white text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-bold mb-1.5">
                    <EyeOff className="h-4 w-4 text-[#10B981]" />
                    <span>Our Core Guarantee</span>
                  </div>
                  Pilldoor does <strong>NOT</strong> sell, rent, trade, or monetize your health information, doctor prescriptions, or personal identity to pharmaceutical companies, advertising networks, insurance providers, or data brokers.
                </div>
              </section>

              {/* Section 2 */}
              <section id="collected" className="scroll-mt-28 rounded-3xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#0D4E3A] font-bold text-xs">
                    02
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                    Information We Collect &amp; Specific Purposes
                  </h2>
                </div>

                <p className="text-sm leading-relaxed text-[#334155]">
                  In accordance with Google Play Store Data Safety policies and the Digital Personal Data Protection Act, we only collect data necessary to fulfill medical orders, coordinate licensed pharmacy dispensing, and verify doorstep delivery:
                </p>

                <div className="space-y-3 pt-1">
                  <div className="rounded-2xl bg-[#F8FAFC] p-4 border border-[#E2E8F0]">
                    <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] mb-1">
                      A. Personal Identity &amp; Contact Details
                    </h3>
                    <p className="text-xs text-[#64748B] mb-1.5 leading-relaxed">
                      <strong>Data:</strong> Full name, verified mobile phone number, email address.
                    </p>
                    <p className="text-xs text-[#0D4E3A] font-medium leading-relaxed">
                      <strong>Purpose:</strong> Passwordless SMS OTP account authentication, order status text updates, and support desk communication.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F8FAFC] p-4 border border-[#E2E8F0]">
                    <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] mb-1">
                      B. Doctor Prescription Documents &amp; Medical Notes
                    </h3>
                    <p className="text-xs text-[#64748B] mb-1.5 leading-relaxed">
                      <strong>Data:</strong> Uploaded camera photos, scanned prescription images, multi-page PDFs, physician details, prescribed dosage notes, self-reported drug allergies, and chronic health condition tags.
                    </p>
                    <p className="text-xs text-[#0D4E3A] font-medium leading-relaxed">
                      <strong>Purpose:</strong> Statutory clinical review and verification by licensed partner pharmacists prior to medicine packing.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F8FAFC] p-4 border border-[#E2E8F0]">
                    <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] mb-1">
                      C. Delivery Location &amp; GPS Coordinates
                    </h3>
                    <p className="text-xs text-[#64748B] mb-1.5 leading-relaxed">
                      <strong>Data:</strong> Pinned delivery address, apartment/flat numbers, delivery instructions, and background/foreground GPS location during active order dispatch.
                    </p>
                    <p className="text-xs text-[#0D4E3A] font-medium leading-relaxed">
                      <strong>Purpose:</strong> Routing delivery partners to your exact doorstep and verifying service availability within licensed pharmacy operating zones.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F8FAFC] p-4 border border-[#E2E8F0]">
                    <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] mb-1">
                      D. Payment Reference &amp; Delivery Verification Logs
                    </h3>
                    <p className="text-xs text-[#64748B] mb-1.5 leading-relaxed">
                      <strong>Data:</strong> Razorpay payment transaction IDs, invoice breakdowns, COD cash collection timestamps, and 4-digit handover OTP matching logs.
                    </p>
                    <p className="text-xs text-[#0D4E3A] font-medium leading-relaxed">
                      <strong>Purpose:</strong> Confirming successful payments, statutory GST tax invoices, and incontrovertible proof of secure medication delivery.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="sharing" className="scroll-mt-28 rounded-3xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#0D4E3A] font-bold text-xs">
                    03
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                    Data Sharing &amp; Third-Party Disclosures
                  </h2>
                </div>

                <p className="text-sm leading-relaxed text-[#334155]">
                  Your data is accessed strictly by authorized entities involved in your healthcare fulfillment chain:
                </p>

                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#475569] leading-relaxed">
                  <li>
                    <strong>Licensed Retail Partner Pharmacies:</strong> Licensed community pharmacists receive your prescription document and contact number to transcribe medications, check drug interactions, suggest generic savings, and print regulatory dispensing records.
                  </li>
                  <li>
                    <strong>Assigned Delivery Fleet Riders:</strong> Riders receive <em>only</em> recipient name, delivery address, and contact number for active delivery tasks. <strong>Prescription images and detailed medical notes are never shown to delivery riders.</strong>
                  </li>
                  <li>
                    <strong>Payment Gateway (Razorpay):</strong> Transaction totals and payment tokens are processed via Razorpay&apos;s PCI-DSS compliant infrastructure. Pilldoor never sees or stores complete credit card numbers or banking PINs.
                  </li>
                  <li>
                    <strong>Statutory Drug &amp; Healthcare Authorities:</strong> Only when legally mandated under the Drugs and Cosmetics Act, court subpoenas, or authorized healthcare inspections.
                  </li>
                </ul>
              </section>

              {/* Section 4 */}
              <section id="security" className="scroll-mt-28 rounded-3xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#0D4E3A] font-bold text-xs">
                    04
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                    Cryptographic Security &amp; Storage Architecture
                  </h2>
                </div>

                <p className="text-sm leading-relaxed text-[#334155]">
                  We implement industry-standard technical and operational safeguards to protect your personal and medical records:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="rounded-2xl bg-[#F8FAFC] p-4 border border-[#E2E8F0]">
                    <span className="block text-xs font-bold text-[#0D4E3A] mb-1">In-Transit Encryption</span>
                    <p className="text-[11px] text-[#64748B] leading-relaxed">
                      All mobile-to-cloud traffic is secured using modern TLS 1.3 cryptographic protocols.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#F8FAFC] p-4 border border-[#E2E8F0]">
                    <span className="block text-xs font-bold text-[#0D4E3A] mb-1">At-Rest Vaults</span>
                    <p className="text-[11px] text-[#64748B] leading-relaxed">
                      Prescription scans and medical documents are encrypted using AES-256 in private object storage.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#F8FAFC] p-4 border border-[#E2E8F0]">
                    <span className="block text-xs font-bold text-[#0D4E3A] mb-1">Role-Based Access</span>
                    <p className="text-[11px] text-[#64748B] leading-relaxed">
                      Strict role-based isolation ensures only authenticated dispensing pharmacists access prescriptions.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section id="retention" className="scroll-mt-28 rounded-3xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#0D4E3A] font-bold text-xs">
                    05
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                    Data Retention &amp; Statutory Pharmacy Obligations
                  </h2>
                </div>

                <p className="text-sm leading-relaxed text-[#334155]">
                  We retain active account data, family profiles, and chronic refill histories for as long as your Pilldoor account remains active.
                </p>

                <div className="rounded-2xl bg-amber-50/70 p-4 border border-amber-200 text-xs sm:text-sm text-amber-950 leading-relaxed">
                  <strong>Statutory Record-Keeping Mandate:</strong> Under the Drugs and Cosmetics Rules, 1945, and applicable pharmacy licensing laws in India, licensed partner pharmacies are legally required to retain transaction invoices and statutory prescription dispensing registers for a mandatory statutory audit period (typically 2 to 5 years). In the event of an account deletion request, statutory dispensing registers are retained in an offline compliance archive solely for regulatory drug authority audits.
                </div>
              </section>

              {/* Section 6 */}
              <section id="rights" className="scroll-mt-28 rounded-3xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#0D4E3A] font-bold text-xs">
                    06
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                    Your Rights: Access, Correction &amp; Data Deletion
                  </h2>
                </div>

                <p className="text-sm leading-relaxed text-[#334155]">You have complete control over your health information:</p>

                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#475569] leading-relaxed">
                  <li><strong>Access &amp; Export:</strong> View all historic prescription orders, invoices, and family profiles inside the app.</li>
                  <li><strong>Correction:</strong> Update registered phone numbers, addresses, and medical allergy notes anytime.</li>
                  <li>
                    <strong>Data Deletion:</strong> You can permanently delete your user profile and personal data anytime. For full details and instant submission, visit our dedicated{" "}
                    <Link href="/data-deletion" className="text-[#0D4E3A] font-bold underline">
                      User Data Deletion Page
                    </Link>
                    .
                  </li>
                </ul>
              </section>

              {/* Section 7 */}
              <section id="children" className="scroll-mt-28 rounded-3xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#0D4E3A] font-bold text-xs">
                    07
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                    Children&apos;s Healthcare Privacy
                  </h2>
                </div>

                <p className="text-sm leading-relaxed text-[#334155]">
                  The Pilldoor application is not directed toward children under 18 years of age without parental involvement. Family member profiles created for pediatric care must be created, authorized, and managed exclusively by a parent or legal guardian.
                </p>
              </section>

              {/* Section 8 */}
              <section id="grievance" className="scroll-mt-28 rounded-3xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-[#0D4E3A]" />
                  <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                    Grievance Officer &amp; Privacy Contact
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  In accordance with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, our designated Grievance Officer details are:
                </p>

                <div className="rounded-2xl bg-[#F8FAFC] p-4 sm:p-5 border border-[#E2E8F0] text-xs sm:text-sm text-[#0F172A] space-y-1">
                  <p><strong>Designation:</strong> Data Protection &amp; Grievance Officer</p>
                  <p><strong>Organization:</strong> Pilldoor Healthcare Network</p>
                  <p><strong>Privacy Email:</strong> <a href="mailto:privacy@pilldoor.com" className="text-[#0D4E3A] font-semibold underline">privacy@pilldoor.com</a></p>
                  <p><strong>General Support:</strong> <a href="mailto:support@pilldoor.com" className="text-[#0D4E3A] font-semibold underline">support@pilldoor.com</a></p>
                  <p><strong>Location:</strong> Bengaluru, Karnataka, India</p>
                  <p className="text-xs text-[#64748B] pt-1">
                    Privacy inquiries and grievance complaints are formally acknowledged within 24 hours and resolved within 30 days.
                  </p>
                </div>
              </section>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
