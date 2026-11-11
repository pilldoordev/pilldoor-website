"use client";

import React from "react";
import Link from "next/link";
import { CUSTOMER_FAQS } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown, PhoneCall } from "lucide-react";

export function CustomerFaqSection() {
  return (
    <section
      id="faqs"
      className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden"
      aria-labelledby="customer-faq-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-8 lg:px-10">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Questions about ordering on Pilldoor"
          description="Everything you need to know about prescription uploads, pharmacist verification, generic alternatives, and delivery verification."
          align="center"
          className="mb-6 sm:mb-8 lg:mb-10"
        />

        <div className="space-y-3 sm:space-y-4">
          {CUSTOMER_FAQS.map((faq, idx) => (
            <details
              key={idx}
              className="group rounded-2xl bg-white p-4 sm:p-6 border border-[#E2E8F0] shadow-xs transition-colors open:border-[#10B981] open:shadow-sm"
            >
              <summary className="flex cursor-pointer items-center justify-between font-bold text-[#0F172A] list-none select-none">
                <span className="text-sm xs:text-base sm:text-lg pr-4">{faq.q}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8F5E9] text-[#0D4E3A] group-open:rotate-180 transition-transform duration-200">
                  <ChevronDown className="h-4 w-4" />
                </span>
              </summary>
              <p className="mt-4 text-sm sm:text-base text-[#64748B] leading-relaxed border-t border-[#F1F5F9] pt-4">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        {/* Support Help Banner */}
        <div className="mt-12 rounded-2xl bg-white p-6 border border-[#E2E8F0] text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-[#0F172A] mb-1">
              Have a specific question about your prescription?
            </h4>
            <p className="text-xs text-[#64748B]">
              Our patient care desk is available Monday through Saturday, 8am – 10pm IST.
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link
              href="/contact?topic=prescription_help"
              className="inline-flex items-center gap-2 rounded-xl bg-[#E8F5E9] px-4 py-2.5 text-xs font-bold text-[#0D4E3A] hover:bg-[#0D4E3A] hover:text-white transition-colors"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Contact Patient Desk</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
