"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Trash2, ShieldCheck, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function DataDeletionForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
    acknowledged: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus("error");
      setFeedbackMessage("Please enter your full name.");
      return;
    }

    if (!formData.phone.trim() || formData.phone.replace(/\D/g, "").length < 7) {
      setStatus("error");
      setFeedbackMessage("Please enter your registered mobile phone number.");
      return;
    }

    // Email is optional: validate format only if provided
    if (formData.email.trim() && !formData.email.includes("@")) {
      setStatus("error");
      setFeedbackMessage("Please enter a valid email address or leave it blank.");
      return;
    }

    if (!formData.acknowledged) {
      setStatus("error");
      setFeedbackMessage("Please check the statutory acknowledgment checkbox to activate submission.");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setFeedbackMessage("");

    // Format phone to standard E.164 if user entered 10 digits
    let formattedPhone = formData.phone.trim();
    const digitsOnly = formattedPhone.replace(/\D/g, "");
    if (digitsOnly.length === 10 && !formattedPhone.startsWith("+")) {
      formattedPhone = `+91${digitsOnly}`;
    }

    try {
      // Use internal Next.js proxy route for robust CORS-free execution
      const res = await fetch("/api/privacy/request-deletion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          username: formattedPhone,
          notes: formData.notes.trim() || "Account and personal data deletion request from Pilldoor website",
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && (data.status === "success" || data.message)) {
        setStatus("success");
        setSubmittedEmail(formData.email.trim());
        setFeedbackMessage(
          data.message ||
            "Data deletion request received successfully. Our compliance team will process it within 30 days."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          notes: "",
          acknowledged: false,
        });
      } else {
        setStatus("error");
        setFeedbackMessage(
          data.message ||
            data.error?.message ||
            "Unable to submit data deletion request at this moment. Please email privacy@pilldoor.com directly."
        );
      }
    } catch {
      setStatus("error");
      setFeedbackMessage(
        "A connection error occurred. Please check your network or email privacy@pilldoor.com directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="deletion-form" className="rounded-3xl bg-white p-6 sm:p-8 lg:p-10 shadow-sm border border-[#E2E8F0]">
      <div className="mb-6 border-b border-[#E2E8F0] pb-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-700 mb-1.5">
          <Trash2 className="h-4 w-4" />
          <span>Web Request Form</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
          Submit an Online Account &amp; Data Deletion Request
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
          Online account deletion portal. You do not need to be logged into the mobile app to submit this request.
        </p>
      </div>

      {status === "success" && (
        <div className="mb-6 rounded-2xl bg-[#E8F5E9] p-5 sm:p-6 text-[#0D4E3A] border border-[#10B981]/40 space-y-3">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-6 w-6 shrink-0 text-[#10B981] mt-0.5" />
            <div>
              <h4 className="text-base font-bold text-[#0D4E3A]">
                Request Registered Successfully
              </h4>
              <p className="text-xs sm:text-sm text-[#0D4E3A]/90 mt-1 leading-relaxed">
                {feedbackMessage}
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-white/70 p-3.5 text-xs text-[#0D4E3A] space-y-1">
            <p>• <strong>Status:</strong> Acknowledged &amp; Logged in Privacy Audit Vault</p>
            {submittedEmail ? (
              <p>• <strong>Confirmation Email:</strong> Sent to <span className="font-semibold">{submittedEmail}</span></p>
            ) : (
              <p>• <strong>Confirmation:</strong> Linked to your registered mobile account</p>
            )}
            <p>• <strong>Processing SLA:</strong> Verification within 3 business days, de-identification within 30 days.</p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 flex items-start gap-3 rounded-2xl bg-red-50 p-4 sm:p-5 text-red-800 border border-red-200">
          <AlertCircle className="h-5 w-5 shrink-0 text-red-600 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-red-900">Unable to Submit Request</h4>
            <p className="text-xs sm:text-sm text-red-800/90 mt-0.5">{feedbackMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate suppressHydrationWarning>
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-[#0F172A] mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Aarav Sharma"
            required
            suppressHydrationWarning
            className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#0D4E3A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D4E3A]/20 transition-all"
          />
        </div>

        {/* Registered Mobile Number (username) */}
        <div>
          <label htmlFor="phone" className="block text-xs sm:text-sm font-bold text-[#0F172A] mb-1.5">
            Registered Mobile Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 98765 43210 or 9876543210"
            required
            suppressHydrationWarning
            className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#0D4E3A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D4E3A]/20 transition-all font-mono"
          />
          <p className="mt-1 text-[11px] text-[#64748B]">
            This is the primary mobile number used to sign in to the Pilldoor mobile application.
          </p>
        </div>

        {/* Email Address (Optional) */}
        <div>
          <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-[#0F172A] mb-1.5">
            Confirmation Email Address <span className="text-xs font-normal text-[#64748B]">(Optional)</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. aarav.sharma@example.com (optional)"
            suppressHydrationWarning
            className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#0D4E3A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D4E3A]/20 transition-all"
          />
          <p className="mt-1 text-[11px] text-[#64748B]">
            Optional. If provided, written status updates and the final deletion confirmation will be sent to this email.
          </p>
        </div>

        {/* Reason / Notes */}
        <div>
          <label htmlFor="notes" className="block text-xs sm:text-sm font-bold text-[#0F172A] mb-1.5">
            Reason for Deletion or Additional Notes <span className="text-xs font-normal text-[#64748B]">(Optional)</span>
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            value={formData.notes}
            onChange={handleChange}
            placeholder="e.g. I no longer need the medicine delivery service. Please delete my account and personal data."
            suppressHydrationWarning
            className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#0D4E3A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D4E3A]/20 transition-all resize-y"
          />
        </div>

        {/* Mandatory Statutory Acknowledgement Checkbox */}
        <div className="rounded-2xl bg-amber-50/70 p-4 border border-amber-200">
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              id="acknowledged"
              name="acknowledged"
              checked={formData.acknowledged}
              onChange={handleChange}
              suppressHydrationWarning
              className="mt-1 h-4 w-4 rounded border-amber-300 text-[#0D4E3A] focus:ring-[#0D4E3A]"
            />
            <span className="text-xs text-amber-950 leading-relaxed">
              <strong>Statutory Retention Acknowledgment:</strong> I understand that my account credentials, family profiles, delivery addresses, and push tokens will be deleted. I acknowledge that under Indian drug regulations, prescription dispensing registers and tax invoices are retained in an offline audit vault for mandatory regulatory audit periods.
            </span>
          </label>
        </div>

        {/* Submit Button (Active only when acknowledged) */}
        <div>
          <button
            type="submit"
            disabled={!formData.acknowledged || isSubmitting}
            suppressHydrationWarning
            className={cn(
              "w-full inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 text-sm sm:text-base font-bold transition-all",
              formData.acknowledged && !isSubmitting
                ? "bg-red-700 text-white shadow-md hover:bg-red-800 hover:shadow-lg cursor-pointer"
                : "bg-[#E2E8F0] text-[#94A3B8] shadow-none border border-[#CBD5E1] cursor-not-allowed opacity-75"
            )}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Registering Deletion Request...</span>
              </>
            ) : (
              <>
                <Trash2 className="h-4 w-4" />
                <span>Submit Deletion Request</span>
              </>
            )}
          </button>

          {!formData.acknowledged ? (
            <p className="mt-2 text-center text-xs text-amber-800 font-medium">
              Please check the statutory acknowledgment box above to enable this button.
            </p>
          ) : (
            <p className="mt-2 text-center text-xs text-[#0D4E3A] font-medium flex items-center justify-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-[#10B981]" />
              <span>Acknowledgment accepted. You may now submit your request.</span>
            </p>
          )}
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-[#64748B] pt-1">
          <ShieldCheck className="h-4 w-4 text-[#10B981]" />
          <span>Secure 256-bit encrypted submission • Connected directly to Pilldoor compliance desk</span>
        </div>
      </form>
    </div>
  );
}
