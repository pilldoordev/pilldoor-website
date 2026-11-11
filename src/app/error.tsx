"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { RotateCcw, Home, AlertTriangle, PhoneCall } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected client-side runtime errors
    console.error("Pilldoor application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[75vh] flex-col items-center justify-center bg-[#F8FAFC] px-4 py-20 text-center">
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

      <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-red-700 border border-red-200 mb-4">
        <AlertTriangle className="h-3.5 w-3.5" />
        <span>Application Notice</span>
      </span>

      <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3">
        Something unexpected occurred.
      </h1>

      <p className="max-w-md text-sm sm:text-base text-[#64748B] leading-relaxed mb-8">
        We encountered an issue loading this section of the Pilldoor platform. You can try refreshing the component or returning to safety.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => reset()}
          type="button"
          className="inline-flex items-center gap-2 rounded-xl bg-[#0D4E3A] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#157356] transition-all cursor-pointer"
        >
          <RotateCcw className="h-4 w-4" />
          <span>Try Again</span>
        </button>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-5 py-3 text-sm font-semibold text-[#0F172A] hover:bg-[#F8FAFC] transition-colors"
        >
          <Home className="h-4 w-4" />
          <span>Return to Homepage</span>
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-5 py-3 text-sm font-semibold text-[#0F172A] hover:bg-[#F8FAFC] transition-colors"
        >
          <PhoneCall className="h-4 w-4" />
          <span>Contact Support</span>
        </Link>
      </div>

      {error.digest && (
        <p className="mt-8 text-xs text-[#94A3B8] font-mono">
          Error Reference: {error.digest}
        </p>
      )}
    </div>
  );
}

