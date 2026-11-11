"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PilldoorLogo } from "@/components/ui/PilldoorLogo";
import { FOOTER_COLUMNS, PLAY_STORE_URL } from "@/data/navigation";
import { ArrowUpRight, ShieldCheck, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#072C21] text-white border-t border-white/10">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" aria-label="Pilldoor Home" className="inline-block">
              <PilldoorLogo variant="light" showTagline size="md" />
            </Link>
            <p className="text-sm text-emerald-100/80 leading-relaxed max-w-sm">
              Your medicines, delivered with care. Order authentic medicines from home, upload doctor prescriptions, manage family health records, and follow verified doorstep delivery with Pilldoor.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#10B981] px-4 py-2.5 text-sm font-semibold text-[#072C21] hover:bg-[#34D399] transition-colors"
              >
                <Image
                  src="/icons/playstore-icon-512.png"
                  alt="Google Play"
                  width={18}
                  height={18}
                  className="rounded shrink-0"
                />
                <span>Get on Google Play</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl border border-white/25 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Customer Support
              </Link>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-200/60 pt-2">
              <ShieldCheck className="h-4 w-4 text-[#10B981]" />
              <span>100% Genuine Pharmacy Stock • Pharmacist-Reviewed</span>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold text-white mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((item) => {
                    const isExternal = item.href.startsWith("http");
                    return (
                      <li key={item.label}>
                        {isExternal ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs sm:text-sm text-emerald-100/75 hover:text-white transition-colors inline-flex items-center gap-1"
                          >
                            <span>{item.label}</span>
                            <ArrowUpRight className="h-3 w-3 opacity-70" />
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            className="text-xs sm:text-sm text-emerald-100/75 hover:text-white transition-colors"
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer Row */}
        <div className="mt-12 sm:mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/60 text-center sm:text-left">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Pilldoor Healthcare. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with care for families</span>
            <Heart className="h-3 w-3 text-[#10B981] fill-[#10B981]" />
            <span>across India</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
