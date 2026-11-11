import React from "react";
import { buildPageMetadata } from "@/lib/seo";
import { Lock } from "lucide-react";

export const metadata = buildPageMetadata({
  title: "Privacy Policy | Pilldoor Healthcare",
  description:
    "How Pilldoor protects and governs personal medical data, doctor prescriptions, and patient account information in accordance with healthcare privacy regulations.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-10 border-b border-[#E2E8F0] pb-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0D4E3A] mb-4">
            <Lock className="h-3.5 w-3.5" />
            <span>Healthcare Privacy & Data Governance</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B]">
            Effective Date: November 10, 2026 | Last Updated: November 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-[#334155] space-y-8">
          <section>
            <h2 className="text-xl font-bold text-[#0F172A] mb-3">1. Scope and Commitment</h2>
            <p>
              Pilldoor (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates a connected healthcare delivery ecosystem comprising the Pilldoor Patient App, the PharmaOps pharmacy management platform, and the Pilldoor Rider fleet application. We recognize the profound confidentiality of personal health information and are committed to safeguarding doctor prescriptions, patient diagnostic details, and contact information with strict administrative and cryptographic safeguards.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F172A] mb-3">2. Information We Collect</h2>
            <p>To safely fulfill and deliver prescription medications, we collect:</p>
            <ul className="list-disc pl-6 space-y-1.5 mt-2">
              <li><strong>Patient Identity:</strong> Name, mobile phone number, age, relationship to primary account holder (for family profiles).</li>
              <li><strong>Prescription Documents:</strong> Uploaded digital doctor prescriptions, scanned images, physician details, clinic letterheads, and prescribed medication schedules.</li>
              <li><strong>Health Profile Attributes:</strong> Recorded drug allergies, chronic health conditions, and specific dosage preferences shared voluntarily.</li>
              <li><strong>Logistics Data:</strong> Delivery addresses, GPS coordinates for delivery accuracy, and delivery verification records (4-digit OTP matching timestamps).</li>
              <li><strong>Transaction Records:</strong> Order itemization, Razorpay transaction reference numbers, and cash-on-delivery collection receipts (we never store raw credit card numbers or banking passwords).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F172A] mb-3">3. How Information is Used</h2>
            <p>Collected medical and account information is utilized exclusively for:</p>
            <ul className="list-disc pl-6 space-y-1.5 mt-2">
              <li>Clinical review, transcription, and dispensing verification by licensed partner pharmacists.</li>
              <li>Assisting patients with generic substitution approvals, dosage clarifications, and chronic refill tracking.</li>
              <li>Coordinating accurate dispatch and doorstep handover with delivery riders.</li>
              <li>Fulfilling legal pharmacy record-keeping requirements mandated under drug and cosmetics regulations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F172A] mb-3">4. Information Sharing and Disclosure</h2>
            <p>
              We do <strong>not</strong> sell, rent, or monetize patient healthcare information to pharmaceutical marketing firms, insurance brokers, or third-party advertisers. Information is disclosed solely to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 mt-2">
              <li><strong>Licensed Partner Pharmacies:</strong> To allow qualified pharmacists to fulfill and bill your prescription.</li>
              <li><strong>Assigned Delivery Personnel:</strong> Only the recipient name, delivery address, and contact number are provided to the rider for the active delivery task. Prescription images are never accessible to riders.</li>
              <li><strong>Payment Processors:</strong> Secure tokenized transaction data transmitted to Razorpay for processing digital payments.</li>
              <li><strong>Law Enforcement & Regulators:</strong> When legally compelled under court orders or statutory drug regulatory requirements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F172A] mb-3">5. Data Retention & Patient Rights</h2>
            <p>
              Patients retain the right to review their recorded family profiles, access historic prescription uploads, and request the deletion of non-statutory personal data. To submit a data deletion or account closure request, please review our <a href="/data-deletion" className="text-[#0D4E3A] font-semibold underline">Data Deletion Policy</a> or contact <a href="mailto:privacy@pilldoor.com" className="text-[#0D4E3A] font-semibold underline">privacy@pilldoor.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F172A] mb-3">6. Security Safeguards</h2>
            <p>
              All data transmitted between mobile devices and Pilldoor servers is encrypted in transit via TLS 1.3. Prescription images and health profiles are stored in encrypted object vaults with strict role-based access control. Rider sessions utilize AES-256-GCM encrypted local vault tokens.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F172A] mb-3">7. Contact the Data Protection Officer</h2>
            <p>
              If you have inquiries or concerns regarding the handling of your health data, contact our Privacy and Governance Officer at:
            </p>
            <p className="mt-2 font-medium text-[#0F172A]">
              Email: <a href="mailto:privacy@pilldoor.com" className="text-[#0D4E3A] underline">privacy@pilldoor.com</a><br />
              Attn: Data Protection Officer, Pilldoor Healthcare Network
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
