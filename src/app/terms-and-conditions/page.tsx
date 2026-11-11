import React from "react";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { AppSummaryCard } from "@/components/legal/AppSummaryCard";
import {
  FileText,
  AlertTriangle,
  ShieldCheck,
  Building2,
  Lock,
  Mail,
  CheckCircle2,
} from "lucide-react";

export const metadata = buildPageMetadata({
  title: "Terms and Conditions | Pilldoor Healthcare",
  description:
    "Official terms of service, clinical responsibility, doctor prescription mandates, and 4-digit OTP delivery verification governing use of the Pilldoor mobile app.",
  path: "/terms-and-conditions",
});

const TERMS_SECTIONS = [
  { id: "acceptance", num: "01", title: "Acceptance & Eligibility" },
  { id: "disclaimer", num: "02", title: "Platform Role & Medical Disclaimer" },
  { id: "prescriptions", num: "03", title: "Prescription Mandate & Pharmacists" },
  { id: "payments", num: "04", title: "Pricing, Payments & Tax Invoices" },
  { id: "delivery-otp", num: "05", title: "Doorstep Delivery & 4-Digit OTP" },
  { id: "returns", num: "06", title: "Cancellation, Returns & Refunds" },
  { id: "family", num: "07", title: "Family Health Profiles & Caregivers" },
  { id: "conduct", num: "08", title: "User Conduct & Prohibited Acts" },
  { id: "jurisdiction", num: "09", title: "Governing Law & Disputes" },
  { id: "contact", num: "10", title: "Legal Notice & Grievance Desk" },
];

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-[72px]">
      {/* Branded Hero Header */}
      <section className="py-8 sm:py-10 bg-gradient-to-b from-[#E8F5E9]/50 via-white to-white border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0D4E3A] ring-1 ring-[#10B981]/30">
            <FileText className="h-3.5 w-3.5 text-[#10B981]" />
            <span>Platform Agreement &amp; User Terms</span>
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A]">
            Terms &amp; Conditions
          </h1>

          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Effective Date: November 11, 2026 | Last Updated: November 2026 | Version: 2.1 (Production)
          </p>
        </div>
      </section>

      {/* Main Section — 12-Column Responsive Layout */}
      <section className="py-8 sm:py-12 bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
          {/* Top Application Context Banner */}
          <AppSummaryCard pageContext="terms" />

          {/* 12-Column Grid: Sticky TOC & Safeguards on Left, Terms on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column (4 Cols): TOC, Safety Principles, Support Desk */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* Table of Contents Card */}
              <div className="rounded-3xl bg-white p-6 border border-[#E2E8F0] shadow-sm space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0F172A] flex items-center justify-between">
                  <span>Table of Contents</span>
                  <span className="text-[11px] font-normal text-[#64748B]">10 Sections</span>
                </h3>

                <nav className="space-y-1">
                  {TERMS_SECTIONS.map((sec) => (
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

              {/* Patient Safeguards Card */}
              <div className="rounded-3xl bg-[#0D4E3A] p-6 text-white space-y-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[#10B981]" />
                  <h4 className="text-sm font-bold tracking-tight">
                    Safety &amp; Delivery Protocols
                  </h4>
                </div>

                <ul className="space-y-2.5 text-xs text-emerald-100/90 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span><strong>100% Pharmacist Review:</strong> Every prescription clinically checked before packing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span><strong>4-Digit Delivery OTP:</strong> Essential code required at doorstep handover.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span><strong>Sealed Security Bags:</strong> Heat-sealed tamper-evident medical parcels.</span>
                  </li>
                </ul>

                <div className="pt-2 border-t border-emerald-800">
                  <Link
                    href="/privacy-policy"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A7F3D0] hover:text-white transition-colors"
                  >
                    <Lock className="h-3.5 w-3.5" />
                    <span>Review Privacy Policy</span>
                  </Link>
                </div>
              </div>

              {/* Legal Support Desk */}
              <div className="rounded-3xl bg-white p-6 border border-[#E2E8F0] shadow-sm space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  Legal Inquiries &amp; Questions
                </h4>
                <p className="text-xs text-[#0F172A] font-semibold">
                  Pilldoor Customer Legal Cell
                </p>
                <p className="text-xs text-[#64748B]">
                  Support: <a href="mailto:support@pilldoor.com" className="text-[#0D4E3A] font-semibold underline">support@pilldoor.com</a>
                </p>
                <p className="text-xs text-[#64748B]">
                  Legal: <a href="mailto:privacy@pilldoor.com" className="text-[#0D4E3A] font-semibold underline">privacy@pilldoor.com</a>
                </p>
                <p className="text-[11px] text-[#94A3B8]">
                  Operational Hours: Mon–Sat, 8:00 AM – 10:00 PM IST
                </p>
              </div>
            </aside>

            {/* Right Column (8 Cols): Full Legal Sections in White Cards */}
            <main className="lg:col-span-8 space-y-6">
              {/* Section 1 */}
              <section id="acceptance" className="scroll-mt-28 rounded-3xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#0D4E3A] font-bold text-xs">
                    01
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                    Acceptance of Terms &amp; User Eligibility
                  </h2>
                </div>

                <p className="text-sm leading-relaxed text-[#334155]">
                  These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User&quot;, &quot;you&quot;, or &quot;your&quot;) and <strong>Pilldoor Healthcare</strong> (&quot;Pilldoor&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), governing your download, access, and use of the <strong>Pilldoor Patient Mobile Application</strong>, the Pilldoor website (<code>https://pilldoor.in</code>), and all associated services.
                </p>

                <p className="text-sm leading-relaxed text-[#334155]">
                  By installing the Pilldoor application, registering an account using your mobile phone number, or ordering medications, you affirm that you are at least 18 years of age, legally capable of entering into binding contracts under the Indian Contract Act, 1872, and agree to abide by these Terms in full.
                </p>
              </section>

              {/* Section 2 */}
              <section id="disclaimer" className="scroll-mt-28 rounded-3xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#0D4E3A] font-bold text-xs">
                    02
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                    Platform Role &amp; Medical Disclaimer
                  </h2>
                </div>

                <p className="text-sm leading-relaxed text-[#334155]">
                  <strong>Pilldoor is a technology facilitator, not a medical clinic, doctor, or prescribing authority.</strong> Pilldoor operates a digital bridge connecting verified customers with licensed, independent retail pharmacies and trained delivery personnel.
                </p>

                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#475569] leading-relaxed">
                  <li>We do not practice medicine, offer clinical diagnoses, or provide medical advice.</li>
                  <li>Information presented within the app (such as drug molecule facts, wellness articles, or price comparisons) is purely educational and must not substitute for professional medical judgment.</li>
                  <li>Always consult a registered medical practitioner regarding any symptoms, illnesses, or treatment plans.</li>
                </ul>

                {/* Emergency Notice */}
                <div className="rounded-2xl bg-amber-50 p-5 border border-amber-200 text-amber-900 flex items-start gap-3.5">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm leading-relaxed">
                    <strong className="block text-amber-900 font-bold mb-1">
                      CRITICAL: Emergency Medical Notice
                    </strong>
                    Pilldoor is designed solely for scheduled and home healthcare delivery. In the event of an acute medical emergency, poisoning, stroke, cardiac crisis, or severe traumatic injury, immediately dial <strong>112</strong> or <strong>108</strong>, or visit your nearest emergency room without delay.
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="prescriptions" className="scroll-mt-28 rounded-3xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#0D4E3A] font-bold text-xs">
                    03
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                    Doctor Prescription Requirements &amp; Pharmacist Autonomy
                  </h2>
                </div>

                <p className="text-sm leading-relaxed text-[#334155]">
                  In strict adherence to the Drugs and Cosmetics Act, 1940, and the Drugs and Cosmetics Rules, 1945:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
                  <div className="rounded-2xl bg-[#F8FAFC] p-4 border border-[#E2E8F0]">
                    <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] flex items-center gap-2 mb-1">
                      <Building2 className="h-4 w-4 text-[#0D4E3A]" />
                      <span>Licensed Retail Pharmacists</span>
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      Every uploaded prescription is reviewed by a qualified, registered pharmacist at a state-licensed partner retail pharmacy before dispensing.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F8FAFC] p-4 border border-[#E2E8F0]">
                    <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] flex items-center gap-2 mb-1">
                      <ShieldCheck className="h-4 w-4 text-[#0D4E3A]" />
                      <span>Statutory Rejection Discretion</span>
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      Pharmacists hold complete statutory authority to reject illegible, expired, altered, or fraudulent prescription uploads.
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  <strong>Explicit Consent for Bioequivalent Generics:</strong> If a prescribed brand is unavailable or a cost-saving approved bioequivalent generic alternative exists, the pharmacist proposes the alternative with clear MRP comparisons. <em>You must explicitly tap &apos;Approve&apos; in the app before any substitution is packed or dispensed.</em>
                </p>
              </section>

              {/* Section 4 */}
              <section id="payments" className="scroll-mt-28 rounded-3xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#0D4E3A] font-bold text-xs">
                    04
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                    Pricing, Payments &amp; Itemized Invoices
                  </h2>
                </div>

                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#475569] leading-relaxed">
                  <li><strong>Maximum Retail Price (MRP):</strong> All medications are sold at or below their legally mandated MRP, inclusive of statutory Goods and Services Tax (GST).</li>
                  <li><strong>Digital Payments:</strong> We partner with Razorpay to process UPI (Google Pay, PhonePe, Paytm), debit/credit cards, and net banking transactions securely. We never store bank passwords or raw credit card credentials.</li>
                  <li><strong>Cash on Delivery (COD):</strong> Where available, COD orders require exact cash payment to the delivery partner upon arrival. Delivery cannot be completed without settling the order amount.</li>
                  <li><strong>Tax Invoices:</strong> You receive an official itemized pharmacy bill inside the app upon delivery confirmation, suitable for tax and insurance claims.</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section id="delivery-otp" className="scroll-mt-28 rounded-3xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#0D4E3A] font-bold text-xs">
                    05
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                    Doorstep Delivery &amp; Four-Digit Secret OTP Handover Protocol
                  </h2>
                </div>

                <p className="text-sm leading-relaxed text-[#334155]">
                  To maintain the highest level of patient safety and prevent medication misplacement:
                </p>

                <div className="rounded-2xl bg-[#E8F5E9]/60 p-5 border border-[#10B981]/30 text-[#0D4E3A] space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <Lock className="h-4 w-4 text-[#10B981]" />
                    <span>Mandatory 4-Digit Delivery Verification Code</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#0D4E3A]/90 leading-relaxed">
                    Every delivery requires a confidential four-digit OTP generated exclusively inside your Pilldoor customer app. The delivery partner cannot conclude the delivery task without entering this code into the dispatch terminal.
                  </p>
                  <div className="text-xs text-[#0D4E3A]/80 font-medium leading-relaxed pt-1">
                    • <strong>Proof of Handover:</strong> Sharing your 4-digit code with the delivery partner constitutes definitive legal proof that the sealed package was handed over into your possession.
                    <br />
                    • <strong>Tamper-Evident Packaging:</strong> Medications are delivered in sealed, tamper-evident security bags. Do not accept any parcel if the tamper seal is broken or compromised.
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section id="returns" className="scroll-mt-28 rounded-3xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#0D4E3A] font-bold text-xs">
                    06
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                    Cancellation, Return &amp; Refund Policy
                  </h2>
                </div>

                <p className="text-sm leading-relaxed text-[#334155]">
                  Under drug safety regulations and Good Pharmacy Practices, medications cannot be re-dispensed or returned once delivered, except under the following specific circumstances:
                </p>

                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#475569] leading-relaxed">
                  <li>The tamper-evident bag was visibly broken, torn, or opened prior to handover.</li>
                  <li>The delivered medication batch differed from the reviewed doctor prescription or itemized invoice.</li>
                  <li>The medication received was damaged in transit or had crossed its expiration date.</li>
                </ul>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  <strong>Reporting Window:</strong> Eligible return requests must be reported within <strong>24 hours</strong> of delivery through the in-app support desk or by emailing <code>support@pilldoor.com</code> with clear photographs of the package and batch numbers. Verified refunds are credited to the original payment source within 5–7 business days.
                </p>
              </section>

              {/* Section 7 */}
              <section id="family" className="scroll-mt-28 rounded-3xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#0D4E3A] font-bold text-xs">
                    07
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                    Family Health Profiles &amp; Caregiver Responsibility
                  </h2>
                </div>

                <p className="text-sm leading-relaxed text-[#334155]">
                  When utilizing Pilldoor to organize medications for elderly parents, children, or dependents:
                </p>

                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#475569] leading-relaxed">
                  <li>You represent that you hold lawful authority or familial consent to manage healthcare orders on their behalf.</li>
                  <li>You are responsible for recording accurate known drug allergies, age categories, and delivery addresses for each profile.</li>
                  <li>Prescriptions uploaded for minors must be initiated by a parent or legal guardian.</li>
                </ul>
              </section>

              {/* Section 8 */}
              <section id="conduct" className="scroll-mt-28 rounded-3xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#0D4E3A] font-bold text-xs">
                    08
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                    User Conduct &amp; Prohibited Activities
                  </h2>
                </div>

                <p className="text-sm leading-relaxed text-[#334155]">You agree not to:</p>

                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-[#475569] leading-relaxed">
                  <li>Upload forged, doctored, stolen, or digitally modified doctor prescriptions.</li>
                  <li>Attempt to order scheduled narcotics, psychotropic substances, or prohibited drugs contrary to law.</li>
                  <li>Abuse, threaten, or harass partner pharmacists, support personnel, or delivery riders.</li>
                  <li>Decompile, reverse-engineer, or attempt unauthorized access to Pilldoor software or applications.</li>
                </ul>

                <p className="text-xs text-[#64748B] leading-relaxed pt-1">
                  Any fraudulent or abusive activity will result in immediate account termination and reporting to statutory drug regulatory and law enforcement authorities.
                </p>
              </section>

              {/* Section 9 */}
              <section id="jurisdiction" className="scroll-mt-28 rounded-3xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#0D4E3A] font-bold text-xs">
                    09
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                    Governing Law &amp; Dispute Resolution
                  </h2>
                </div>

                <p className="text-sm leading-relaxed text-[#334155]">
                  These Terms are governed by the laws of India. Any dispute, claim, or controversy arising out of or relating to these Terms or your use of the Pilldoor platform shall be resolved through good-faith negotiation, and failing that, submitted to the exclusive jurisdiction of the competent courts of <strong>Bengaluru, Karnataka, India</strong>.
                </p>
              </section>

              {/* Section 10 */}
              <section id="contact" className="scroll-mt-28 rounded-3xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-[#0D4E3A]" />
                  <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                    Contact Legal &amp; Grievance Desk
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  If you have any questions or require formal legal clarifications regarding these Terms and Conditions:
                </p>

                <div className="rounded-2xl bg-[#F8FAFC] p-4 sm:p-5 border border-[#E2E8F0] text-xs sm:text-sm text-[#0F172A] space-y-1">
                  <p><strong>Entity:</strong> Pilldoor Healthcare</p>
                  <p><strong>Support Email:</strong> <a href="mailto:support@pilldoor.com" className="text-[#0D4E3A] font-semibold underline">support@pilldoor.com</a></p>
                  <p><strong>Legal &amp; Privacy Desk:</strong> <a href="mailto:privacy@pilldoor.com" className="text-[#0D4E3A] font-semibold underline">privacy@pilldoor.com</a></p>
                  <p><strong>Headquarters:</strong> Bengaluru, Karnataka, India</p>
                </div>
              </section>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
