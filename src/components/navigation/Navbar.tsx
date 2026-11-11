"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { PRIMARY_NAV_LINKS, PLAY_STORE_URL } from "@/data/navigation";
import { PilldoorLogo } from "@/components/ui/PilldoorLogo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-300",
        isScrolled || mobileOpen
          ? "bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-[0_2px_16px_rgba(15,23,42,0.04)]"
          : "bg-[#F8FAFC]/70 backdrop-blur-xs border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-18 max-w-[1360px] items-center justify-between px-4 sm:px-8 lg:px-10">
        <Link href="/" aria-label="Pilldoor Home" className="shrink-0">
          <PilldoorLogo size="md" />
        </Link>

        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1.5">
          {PRIMARY_NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[#E8F5E9] text-[#0D4E3A] font-semibold"
                    : "text-[#0F172A]/80 hover:bg-[#F1F5F9] hover:text-[#0D4E3A]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[#0D4E3A] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#072C21] transition-all shadow-sm hover:shadow inline-flex items-center gap-2"
          >
            <Image
              src="/icons/playstore-icon-512.png"
              alt="Google Play icon"
              width={18}
              height={18}
              className="rounded shrink-0"
            />
            <span>Download App</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation-drawer"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white text-[#0F172A] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden border-t border-[#E2E8F0] bg-white px-5 py-6 shadow-xl max-h-[calc(100vh-4.5rem)] overflow-y-auto overscroll-contain"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col space-y-1.5">
            {PRIMARY_NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    isActive
                      ? "bg-[#E8F5E9] text-[#0D4E3A] font-semibold"
                      : "text-[#0F172A] hover:bg-[#F8FAFC]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-5 pt-5 border-t border-[#E2E8F0] flex flex-col gap-3">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0D4E3A] px-4 py-3.5 text-center text-sm font-semibold text-white hover:bg-[#072C21] transition-colors shadow-sm"
            >
              <Image
                src="/icons/playstore-icon-512.png"
                alt="Google Play"
                width={20}
                height={20}
                className="rounded shrink-0"
              />
              <span>Get it on Google Play</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

