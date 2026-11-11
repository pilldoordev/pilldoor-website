import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PilldoorLogoProps {
  variant?: "dark" | "light";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function PilldoorLogo({
  variant = "dark",
  showTagline = false,
  size = "md",
  className,
}: PilldoorLogoProps) {
  const isSm = size === "sm";
  const isLg = size === "lg";

  return (
    <span className={cn("inline-flex items-center gap-2 sm:gap-2.5 select-none", className)}>
      <span
        className={cn(
          "relative flex shrink-0 items-center justify-center transition-all",
          isSm
            ? "h-8 w-8"
            : isLg
            ? "h-10 w-10 sm:h-12 sm:w-12"
            : "h-9 w-9 sm:h-10 sm:w-10"
        )}
      >
        <Image
          src="/icons/pilldoor-logo-192.png"
          alt="Pilldoor logo mark"
          width={44}
          height={44}
          className="h-full w-full object-contain"
          priority
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-bold tracking-[-0.025em]",
            isSm
              ? "text-lg"
              : isLg
              ? "text-2xl sm:text-[26px]"
              : "text-xl sm:text-2xl",
            variant === "light" ? "text-white" : "text-[#0F172A]"
          )}
        >
          pilldoor
        </span>
        {showTagline && (
          <span
            className={cn(
              "mt-1 text-[10px] sm:text-[11px] font-medium tracking-[0.12em] uppercase",
              variant === "light" ? "text-emerald-200/90" : "text-[#64748B]"
            )}
          >
            Your Health, On Time, Every Time
          </span>
        )}
      </span>
    </span>
  );
}
