"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CONTACT_CATEGORIES } from "@/data/content";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialTopic = searchParams.get("topic");

  const resolveInitialCategory = () => {
    if (initialTopic === "prescription_help") return "prescription_help";
    if (initialTopic === "order_help") return "order_help";
    if (initialTopic === "family_profiles") return "family_profiles";
    if (initialTopic === "pharmacy_inquiry") return "pharmacy_inquiry";
    return "general_support";
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderId: "",
    category: resolveInitialCategory(),
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (initialTopic) {
      if (initialTopic === "prescription_help") setFormData((p) => ({ ...p, category: "prescription_help" }));
      else if (initialTopic === "order_help") setFormData((p) => ({ ...p, category: "order_help" }));
      else if (initialTopic === "family_profiles") setFormData((p) => ({ ...p, category: "family_profiles" }));
      else if (initialTopic === "pharmacy_inquiry") setFormData((p) => ({ ...p, category: "pharmacy_inquiry" }));
    }
  }, [initialTopic]);

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
          source: "Customer Support Contact Form",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          enquiryType: formData.category,
          category: formData.category,
          message: formData.message,
          details: {
            orderId: formData.orderId || "N/A",
            subject: formData.subject,
            message: formData.message,
          },
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFeedbackMessage(
          "Thank you for reaching out! Your support message has been sent to our customer care desk. A team member will assist you shortly."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          orderId: "",
          category: "general_support",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
        setFeedbackMessage(
          data.error ||
            "Unable to submit message at this moment. Please email support@pilldoor.com directly."
        );
      }
    } catch {
      setStatus("error");
      setFeedbackMessage(
        "A connection error occurred. Please check your network or reach us at support@pilldoor.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-lg border border-[#E2E8F0]">
      <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-2">
        Send Us a Message
      </h3>
      <p className="text-sm text-[#64748B] mb-6">
        Select your inquiry topic so our patient care team can assist you quickly.
      </p>

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

      <form onSubmit={handleSubmit} className="space-y-4" suppressHydrationWarning>
        {/* Category Selector */}
        <div>
          <label htmlFor="category" className="block text-xs font-bold text-[#0F172A] mb-1.5 uppercase tracking-wider">
            How can we help you? *
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            suppressHydrationWarning
            className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] focus:border-[#10B981] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 transition-all cursor-pointer"
          >
            {CONTACT_CATEGORIES.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        {/* Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-bold text-[#0F172A] mb-1.5 uppercase tracking-wider">
              Your Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Priya Sharma"
              suppressHydrationWarning
              className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:border-[#10B981] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold text-[#0F172A] mb-1.5 uppercase tracking-wider">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="priya@example.com"
              suppressHydrationWarning
              className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:border-[#10B981] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 transition-all"
            />
          </div>
        </div>

        {/* Phone and Optional Order ID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-[#0F172A] mb-1.5 uppercase tracking-wider">
              Mobile Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              suppressHydrationWarning
              className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:border-[#10B981] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 transition-all"
            />
          </div>

          <div>
            <label htmlFor="orderId" className="block text-xs font-bold text-[#0F172A] mb-1.5 uppercase tracking-wider">
              Order ID or Prescription No. (Optional)
            </label>
            <input
              type="text"
              id="orderId"
              name="orderId"
              value={formData.orderId}
              onChange={handleChange}
              placeholder="e.g. PLD-2026-0492"
              suppressHydrationWarning
              className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:border-[#10B981] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 transition-all"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-xs font-bold text-[#0F172A] mb-1.5 uppercase tracking-wider">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="Brief description of your question..."
            suppressHydrationWarning
            className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:border-[#10B981] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 transition-all"
          />
        </div>

        {/* Detailed Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold text-[#0F172A] mb-1.5 uppercase tracking-wider">
            Detailed Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please provide any relevant details so we can assist you..."
            suppressHydrationWarning
            className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:border-[#10B981] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 transition-all"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          suppressHydrationWarning
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0D4E3A] px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-[#157356] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:ring-offset-2 disabled:opacity-70 transition-all cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Sending Your Message...</span>
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              <span>Send Message to Support</span>
            </>
          )}
        </button>

        <p className="text-center text-[11px] text-[#64748B]">
          Your medical privacy is strictly protected. We never share patient information with third parties.
        </p>
      </form>
    </div>
  );
}
