"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

export function PharmacyDemoForm() {
  const [formData, setFormData] = useState({
    pharmacyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    city: "",
    storeCount: "1",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setFeedbackMessage("");

    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "PharmaOps Demo Request",
          name: formData.contactPerson,
          email: formData.email,
          phone: formData.phone,
          organization: formData.pharmacyName,
          enquiryType: "pharmacy_partner",
          category: "pharmacy_partner",
          message: `PharmaOps demonstration request for ${formData.pharmacyName} (${formData.storeCount} stores in ${formData.city}). ${formData.message ? `Notes: ${formData.message}` : ""}`.trim(),
          details: {
            city: formData.city,
            storeCount: formData.storeCount,
            notes: formData.message,
          },
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFeedbackMessage(
          "Thank you! Your PharmaOps demonstration request has been received. Our clinical operations team will contact you within 24 business hours."
        );
        setFormData({
          pharmacyName: "",
          contactPerson: "",
          email: "",
          phone: "",
          city: "",
          storeCount: "1",
          message: "",
        });
      } else {
        setStatus("error");
        setFeedbackMessage(
          data.error ||
            "Unable to submit demo request at this moment. Please email partner@pilldoor.com directly."
        );
      }
    } catch {
      setStatus("error");
      setFeedbackMessage(
        "A network error occurred. Please check your internet connection or email partner@pilldoor.com directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="demo" className="rounded-3xl bg-white p-8 sm:p-10 shadow-lg border border-[#E2E8F0]">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight">
          Request a Live PharmaOps Demonstration
        </h3>
        <p className="mt-2 text-sm text-[#64748B]">
          See how PharmaOps manages prescription verification, partner routing, and fleet dispatch for retail pharmacies and healthcare networks.
        </p>
      </div>

      {status === "success" && (
        <div className="mb-6 flex items-start gap-3 rounded-2xl bg-[#E8F5E9] p-4 text-[#0D4E3A] border border-[#10B981]/30">
          <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-[#10B981]" />
          <p className="text-sm font-medium leading-relaxed">{feedbackMessage}</p>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 flex items-start gap-3 rounded-2xl bg-red-50 p-4 text-red-800 border border-red-200">
          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-red-600" />
          <p className="text-sm font-medium leading-relaxed">{feedbackMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="pharmacyName" className="block text-xs font-bold text-[#0F172A] mb-1.5 uppercase tracking-wider">
              Pharmacy / Hospital Name *
            </label>
            <input
              type="text"
              id="pharmacyName"
              name="pharmacyName"
              required
              value={formData.pharmacyName}
              onChange={handleChange}
              placeholder="e.g. Apollo Pharmacy Indiranagar"
              className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:border-[#10B981] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 transition-all"
            />
          </div>

          <div>
            <label htmlFor="contactPerson" className="block text-xs font-bold text-[#0F172A] mb-1.5 uppercase tracking-wider">
              Contact Person *
            </label>
            <input
              type="text"
              id="contactPerson"
              name="contactPerson"
              required
              value={formData.contactPerson}
              onChange={handleChange}
              placeholder="e.g. Dr. Rajesh Sharma"
              className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:border-[#10B981] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-bold text-[#0F172A] mb-1.5 uppercase tracking-wider">
              Official Work Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="pharmacist@organization.com"
              className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:border-[#10B981] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 transition-all"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-[#0F172A] mb-1.5 uppercase tracking-wider">
              Mobile Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:border-[#10B981] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-xs font-bold text-[#0F172A] mb-1.5 uppercase tracking-wider">
              City / Operating State *
            </label>
            <input
              type="text"
              id="city"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              placeholder="e.g. Bengaluru, Karnataka"
              className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:border-[#10B981] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 transition-all"
            />
          </div>

          <div>
            <label htmlFor="storeCount" className="block text-xs font-bold text-[#0F172A] mb-1.5 uppercase tracking-wider">
              Number of Dispensing Outlets
            </label>
            <select
              id="storeCount"
              name="storeCount"
              value={formData.storeCount}
              onChange={handleChange}
              className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] focus:border-[#10B981] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 transition-all"
            >
              <option value="1">1 Retail Pharmacy Outlet</option>
              <option value="2-5">2 to 5 Pharmacy Outlets</option>
              <option value="6-20">6 to 20 Pharmacy Chain Stores</option>
              <option value="20+">20+ Enterprise Hospital / Retail Chain</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-bold text-[#0F172A] mb-1.5 uppercase tracking-wider">
            Operational Requirements or Current Software (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your current daily prescription volume and integration needs..."
            className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:border-[#10B981] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 transition-all"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0D4E3A] px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-[#157356] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:ring-offset-2 disabled:opacity-70 transition-all"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Transmitting Demo Request...</span>
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              <span>Schedule Live PharmaOps Demo</span>
            </>
          )}
        </button>

        <p className="text-center text-[11px] text-[#64748B]">
          We respect medical trade privacy. Your organization details will never be sold or shared.
        </p>
      </form>
    </div>
  );
}

