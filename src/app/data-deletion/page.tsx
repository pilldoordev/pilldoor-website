import React from "react";
import { buildPageMetadata } from "@/lib/seo";
import { Trash2, Mail } from "lucide-react";

export const metadata = buildPageMetadata({
  title: "Data Deletion & Account Closure | Pilldoor Healthcare",
  description:
    "How Pilldoor users can request account closure, prescription document purging, and personal data deletion in accordance with Google Play Store data safety standards.",
  path: "/data-deletion",
});

export default function DataDeletionPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-10 border-b border-[#E2E8F0] pb-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-red-700 mb-4">
            <Trash2 className="h-3.5 w-3.5" />
            <span>Google Play Data Safety &amp; User Control</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            Data Deletion &amp; Account Closure
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B]">
            Instructions for Pilldoor Patient App users to request data purge and account termination.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-[#334155] space-y-8">
          <section>
            <h2 className="text-xl font-bold text-[#0F172A] mb-3">1. How to Request Account &amp; Data Deletion</h2>
            <p>You can request complete deletion of your account and associated personal data through two methods:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
              {/* Method 1: In-App */}
              <div className="rounded-2xl bg-[#F8FAFC] p-6 border border-[#E2E8F0]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D4E3A]">Method 01 (Recommended)</span>
                <h3 className="text-lg font-bold text-[#0F172A] mt-1 mb-2">Within the Pilldoor Mobile App</h3>
                <ol className="list-decimal pl-5 space-y-1 text-xs sm:text-sm text-[#64748B]">
                  <li>Open the Pilldoor app on your mobile device.</li>
                  <li>Go to <strong>Profile &amp; Settings</strong>.</li>
                  <li>Tap <strong>Account Security &amp; Privacy</strong>.</li>
                  <li>Select <strong>Request Account Deletion</strong> and confirm via OTP.</li>
                </ol>
              </div>

              {/* Method 2: Email */}
              <div className="rounded-2xl bg-[#F8FAFC] p-6 border border-[#E2E8F0]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D4E3A]">Method 02</span>
                <h3 className="text-lg font-bold text-[#0F172A] mt-1 mb-2">Direct Email Request</h3>
                <p className="text-xs sm:text-sm text-[#64748B] mb-3">
                  Send an email from your registered email address or provide your registered mobile number:
                </p>
                <a
                  href="mailto:privacy@pilldoor.com?subject=Account%20and%20Data%20Deletion%20Request"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#0D4E3A] underline"
                >
                  <Mail className="h-4 w-4" />
                  <span>privacy@pilldoor.com</span>
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F172A] mb-3">2. Types of Data Deleted</h2>
            <p>Upon confirmation of your deletion request, the following data is permanently purged:</p>
            <ul className="list-disc pl-6 space-y-1.5 mt-2">
              <li>Primary user profile (Name, phone number, email address, password hash).</li>
              <li>Dependent family member profiles, chronic condition notes, and recorded drug allergies.</li>
              <li>Saved home, work, and family delivery addresses and GPS coordinates.</li>
              <li>Uploaded prescription photos, scans, and PDF attachments.</li>
              <li>Push notification tokens and device hardware identifiers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F172A] mb-3">3. Statutory Data Retention (Legal Exceptions)</h2>
            <p>
              Please note that under the Drugs and Cosmetics Act and applicable pharmacy billing statutes, licensed retail pharmacies are legally required to retain transaction invoices and statutory prescription dispensing records for a mandatory audit retention period (typically 2 to 5 years).
            </p>
            <p className="mt-2">
              Statutory invoice records stored by partner pharmacies are decoupled from your active mobile profile and maintained solely for regulatory tax and drug enforcement inspection audits.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F172A] mb-3">4. Processing Timeline</h2>
            <p>
              Account deletion requests submitted in-app or via email are processed within <strong>7 business days</strong>. You will receive an SMS and email notification confirming the permanent purge of your data.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
