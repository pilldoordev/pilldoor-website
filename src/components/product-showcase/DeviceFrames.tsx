import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  cameraCutout?: "dot" | "notch" | "none";
  aspectRatio?: string;
}

export function PhoneFrame({
  src,
  alt,
  priority = false,
  className,
  sizes = "(max-width: 768px) 280px, 320px",
  cameraCutout = "dot",
  aspectRatio = "aspect-[340/750]",
}: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[270px] sm:max-w-[300px] rounded-[32px] sm:rounded-[40px] bg-[#0F172A] p-2 sm:p-2.5 shadow-[0_24px_60px_-12px_rgba(7,44,33,0.28)] ring-1 ring-black/10",
        className
      )}
    >
      {/* Front Camera Cutout — Modern Centered Punch-Hole Dot or Notch */}
      {cameraCutout === "dot" && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-3 sm:top-3.5 left-1/2 z-20 h-2 w-2 sm:h-2.5 sm:w-2.5 -translate-x-1/2 rounded-full bg-[#0F172A] ring-1 ring-white/10"
        />
      )}
      {cameraCutout === "notch" && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-2.5 sm:top-3.5 left-1/2 z-20 h-3 sm:h-3.5 w-14 sm:w-16 -translate-x-1/2 rounded-full bg-[#0F172A]"
        />
      )}

      <div
        className={cn(
          "relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-white w-full",
          aspectRatio
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

interface DesktopBrowserFrameProps {
  src: string;
  alt: string;
  urlLabel?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export function DesktopBrowserFrame({
  src,
  alt,
  urlLabel = "pharmaops.pilldoor",
  priority = false,
  className,
  sizes = "(max-width: 1024px) 100vw, 960px",
}: DesktopBrowserFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_24px_64px_-16px_rgba(15,23,42,0.12)]",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#CBD5E1]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#CBD5E1]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#CBD5E1]" />
        </div>
        <div className="rounded-md border border-[#E2E8F0] bg-white px-3 py-1 text-[11px] font-medium text-[#64748B]">
          {urlLabel}
        </div>
        <div className="w-10" />
      </div>
      <div className="relative aspect-[16/10] w-full bg-[#F8FAFC]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

