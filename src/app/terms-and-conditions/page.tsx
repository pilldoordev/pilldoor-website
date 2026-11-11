import React from "react";
import { buildPageMetadata } from "@/lib/seo";
import { FileText } from "lucide-react";

export const metadata = buildPageMetadata({
  title: "Terms and Conditions | Pilldoor Healthcare",
  description:
    "Terms of service, clinical responsibility, prescription requirements, and delivery verification conditions governing use of the Pilldoor platform.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-10 border-b border-[#E2E8F0] pb-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0D4E3A] mb-4">
            <FileText className="h-3.5 w-3.5" />
            <span>Platform Agreement</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B]">
            Effective Date: November 10, 2026 | Last Updated: November 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-[#334155] space-y-8">
          <section>
            <h2 className="text-xl font-bold text-[#0F172A] mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Pilldoor Patient Application, PharmaOps, or Pilldoor Rider services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, you must not use our applications or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F172A] mb-3">2. Nature of Platform &amp; Medical Disclaimer</h2>
            <p>
              Pilldoor is a healthcare technology ecosystem that facilitates communication and logistics between users and licensed independent retail pharmacies. <strong>Pilldoor is not a medical practice, hospital, or prescribing doctor.</strong> Information provided through our app does not constitute professional medical diagnosis or clinical treatment advice.
            </p>
            <div className="mt-3 rounded-xl bg-amber-50 p-4 border border-amber-200 text-amber-900 text-xs sm:text-sm">
              <strong>Emergency Care Notice:</strong> Pilldoor is not an emergency response service. In the event of a severe medical emergency, call 112 / 108 or go to the nearest emergency medical facility immediately.
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F172A] mb-3">3. Prescription Requirements &amp; Pharmacist Authority</h2>
            <p>
              All prescription medications (Schedule H, Schedule H1, and Schedule X medications where permitted by law) require a valid, unexpired prescription issued by a registered medical practitioner.
            </p>
            <ul className="list-disc pl-6 space-y-1.5 mt-2">
              <li>Our licensed partner pharmacists retain complete statutory discretion to reject illegible, altered, fraudulent, or expired prescriptions.</li>
              <li>A prescription order is not confirmed until a pharmacist has clinically reviewed the document and verified medicine availability.</li>
              <li>Generic substitutions proposed by the pharmacist require affirmative patient consent before packing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F172A] mb-3">4. Pricing, Payments &amp; Delivery Verification</h2>
            <ul className="list-disc pl-6 space-y-1.5 mt-2">
              <li>All medicine prices comply with maximum retail price (MRP) regulations and include applicable statutory taxes.</li>
              <li>Digital payments are processed securely via Razorpay. Where available, Cash on Delivery (COD) must be paid in full to the rider upon arrival.</li>
              <li><strong>Four-Digit Delivery OTP:</strong> You agree that delivery handover is completed only upon providing the four-digit OTP generated in your app to the rider. Providing this code constitutes conclusive proof of receipt of the sealed parcel.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F172A] mb-3">5. Return &amp; Refund Policy for Medications</h2>
            <p>
              Due to regulatory drug safety standards and temperature control requirements, opened, unsealed, or dispensed prescription medications cannot be returned once handed over, except in cases of:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 mt-2">
              <li>Damaged or broken tamper-evident seals upon arrival.</li>
              <li>Mismatched item dispensing differing from the verified invoice.</li>
              <li>Expired medications received upon delivery.</li>
            </ul>
            <p className="mt-2">
              Claims must be reported within 24 hours of delivery via the in-app support desk with photographic evidence.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F172A] mb-3">6. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
