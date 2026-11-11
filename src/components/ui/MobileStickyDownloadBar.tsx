"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PLAY_STORE_URL } from "@/data/navigation";

export function MobileStickyDownloadBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar once user scrolls past 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-30 lg:hidden p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] bg-white/95 backdrop-blur-md border-t border-[#E2E8F0] shadow-[0_-4px_20px_rgba(15,23,42,0.08)] transition-all animate-in fade-in slide-in-from-bottom duration-300">
      <div className="mx-auto flex items-center justify-between gap-3 max-w-md">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white border border-[#E2E8F0] p-1 shadow-xs">
            <Image
              src="/icons/pilldoor-logo-192.png"
              alt="Pilldoor"
              width={28}
              height={28}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="min-w-0">
            <span className="block text-xs font-bold text-[#0F172A] truncate">Pilldoor App</span>
            <span className="block text-[11px] text-[#64748B] truncate">Order medicines from home</span>
          </div>
        </div>

        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#0D4E3A] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#157356] transition-colors"
        >
          <Image
            src="/icons/playstore-icon-512.png"
            alt="Google Play"
            width={14}
            height={14}
            className="rounded shrink-0"
          />
          <span>Get App</span>
        </a>
      </div>
    </div>
  );
}
