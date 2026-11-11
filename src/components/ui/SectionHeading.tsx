import React from "react";
import { cn } from "@/lib/utils";
import {
  ListOrdered,
  Eye,
  Smartphone,
  HelpCircle,
  Layers,
  Building2,
  Users,
  ShieldCheck,
  HeartPulse,
} from "lucide-react";

interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  badge?: string;
  icon?: React.ReactNode;
  className?: string;
}

function getDefaultBadgeIcon(badge: string, isDark: boolean) {
  const iconClass = cn("h-3.5 w-3.5 shrink-0", isDark ? "text-emerald-300" : "text-[#0D4E3A]");
  const lower = badge.toLowerCase();

  if (lower.includes("step") || lower.includes("process") || lower.includes("how it works")) {
    return <ListOrdered className={iconClass} />;
  }
  if (lower.includes("visibility") || lower.includes("tracking") || lower.includes("order")) {
    return <Eye className={iconClass} />;
  }
  if (
    lower.includes("showcase") ||
    lower.includes("mobile") ||
    lower.includes("pwa") ||
    lower.includes("app")
  ) {
    return <Smartphone className={iconClass} />;
  }
  if (lower.includes("faq") || lower.includes("question")) {
    return <HelpCircle className={iconClass} />;
  }
  if (lower.includes("family") || lower.includes("care")) {
    return <Users className={iconClass} />;
  }
  if (lower.includes("module") || lower.includes("platform")) {
    return <Layers className={iconClass} />;
  }
  if (lower.includes("enterprise") || lower.includes("architecture")) {
    return <Building2 className={iconClass} />;
  }
  if (lower.includes("trust") || lower.includes("safety") || lower.includes("shield")) {
    return <ShieldCheck className={iconClass} />;
  }
  return <HeartPulse className={iconClass} />;
}

export function SectionHeading({
  title,
  description,
  align = "left",
  tone = "light",
  badge,
  icon,
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "space-y-4",
        isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-medium",
            isDark
              ? "bg-white/10 text-emerald-100 border border-white/15"
              : "bg-[#E8F5E9] text-[#0D4E3A] border border-[#0D4E3A]/15"
          )}
        >
          {icon ? (
            React.isValidElement(icon) ? (
              React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
                className: cn(
                  "h-3.5 w-3.5 shrink-0",
                  isDark ? "text-emerald-300" : "text-[#0D4E3A]",
                  (icon.props as { className?: string })?.className
                ),
              })
            ) : (
              icon
            )
          ) : (
            getDefaultBadgeIcon(badge, isDark)
          )}
          <span>{badge}</span>
        </div>
      )}
      <h2
        className={cn(
          "text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.025em] leading-[1.12]",
          isDark ? "text-white" : "text-[#0F172A]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-sm sm:text-base lg:text-lg leading-relaxed",
            isDark ? "text-emerald-100/80" : "text-[#64748B]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

