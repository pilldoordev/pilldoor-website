import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, PhoneCall } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F8FAFC] px-4 py-24 text-center">
      {/* Brand Squircle */}
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#0D4E3A] p-4 shadow-lg ring-4 ring-[#10B981]/20">
        <Image
          src="/icons/icon-squircle-512.png"
          alt="Pilldoor"
          width={56}
          height={56}
          className="h-full w-full object-contain"
        />
      </div>

      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F5E9] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0D4E3A] mb-4">
        404 Page Not Found
      </span>

      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-4">
        We couldn&apos;t locate that page.
      </h1>

      <p className="max-w-md text-sm sm:text-base text-[#64748B] leading-relaxed mb-8">
        The link you followed may be expired, mistyped, or moved to another section of the Pilldoor healthcare platform.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-[#0D4E3A] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#157356] transition-all"
        >
          <Home className="h-4 w-4" />
          <span>Return to Homepage</span>
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-5 py-3 text-sm font-semibold text-[#0F172A] hover:bg-[#F8FAFC] transition-colors"
        >
          <PhoneCall className="h-4 w-4" />
          <span>Contact Support Desk</span>
        </Link>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs text-[#64748B]">
        <Link href="/family-care" className="hover:text-[#0D4E3A] transition-colors">
          For Families
        </Link>
        <span>•</span>
        <Link href="/pharmacy-partners" className="hover:text-[#0D4E3A] transition-colors">
          For Pharmacies
        </Link>
        <span>•</span>
        <Link href="/delivery-partners" className="hover:text-[#0D4E3A] transition-colors">
          For Delivery Fleet
        </Link>
        <span>•</span>
        <Link href="/about" className="hover:text-[#0D4E3A] transition-colors">
          About Us
        </Link>
      </div>
    </div>
  );
}
