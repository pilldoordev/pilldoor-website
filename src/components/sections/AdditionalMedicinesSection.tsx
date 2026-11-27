"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  CheckCircle2,
  PackageCheck,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";
import { OTC_MEDICINES, type OtcMedicineItem } from "@/data/otcMedicines";

export function AdditionalMedicinesSection() {
  // Pre-seed 1 item or start empty? Starting with 1 ORS + 1 Bandages or empty?
  // Starting with empty cart and allowing quick +1 / Add to Cart keeps quantities clear,
  // while showing per-item qty controls right on each medicine box.
  const [cart, setCart] = useState<Record<string, number>>({
    "ors-sachet": 1,
  });
  const [orderPlacedPreview, setOrderPlacedPreview] = useState(false);

  const updateQuantity = (id: string, delta: number) => {
    setOrderPlacedPreview(false);
    setCart((prev) => {
      const nextQty = Math.max(0, (prev[id] ?? 0) + delta);
      if (nextQty === 0) {
        const rest = { ...prev };
        delete rest[id];
        return rest;
      }
      return { ...prev, [id]: nextQty };
    });
  };

  const clearCart = () => {
    setCart({});
    setOrderPlacedPreview(false);
  };

  const cartItems = useMemo(() => {
    return OTC_MEDICINES.filter((item) => (cart[item.id] ?? 0) > 0).map(
      (item) => ({
        ...item,
        quantity: cart[item.id] ?? 0,
        lineTotal: item.price * (cart[item.id] ?? 0),
      })
    );
  }, [cart]);

  const totalItemsCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.lineTotal, 0),
    [cartItems]
  );

  const handleConfirmPreview = () => {
    if (cartItems.length === 0) return;
    setOrderPlacedPreview(true);
  };

  return (
    <section
      id="additional-medicines"
      aria-labelledby="additional-medicines-heading"
      className="py-10 sm:py-12 lg:py-14 bg-white border-b border-[#E2E8F0] overflow-hidden"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0D4E3A]/15 bg-[#E8F5E9] px-3.5 py-1.5 text-xs font-semibold text-[#0D4E3A] mb-3.5">
            <ShoppingBag className="h-3.5 w-3.5 shrink-0 text-[#0D4E3A]" />
            <span>Additional OTC Medicines &amp; Essentials</span>
          </div>
          <h2
            id="additional-medicines-heading"
            className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#0F172A] mb-3 sm:mb-4 leading-tight"
          >
            Everyday essentials you can{" "}
            <span className="text-[#0D4E3A]">add straight to cart.</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#64748B] leading-relaxed">
            Browse 7 common over-the-counter healthcare and daily wellness items available without a prescription. Pick your quantities and preview your cart right here.
          </p>
        </div>

        {/* Add-to-Cart Screen Shell */}
        <div className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] shadow-[0_12px_40px_rgba(15,23,42,0.06)] overflow-hidden">
          {/* Top App-Style Screen Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white border-b border-[#E2E8F0] px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0D4E3A] text-white shadow-sm">
                <ShoppingCart className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#0F172A]">
                  OTC Quick-Add Catalog
                </h3>
                <p className="text-xs text-[#64748B]">
                  7 non-prescription items • Open-market &amp; pharmacy essentials
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F5E9] px-3 py-1.5 text-xs font-bold text-[#0D4E3A]">
                <PackageCheck className="h-3.5 w-3.5 text-[#10B981]" />
                <span>
                  {totalItemsCount} {totalItemsCount === 1 ? "item" : "items"} in cart
                </span>
              </span>
              {totalItemsCount > 0 && (
                <button
                  type="button"
                  onClick={clearCart}
                  className="inline-flex items-center gap-1 rounded-lg border border-[#E2E8F0] bg-white px-2.5 py-1.5 text-xs font-semibold text-[#64748B] hover:text-red-600 hover:border-red-200 transition-colors cursor-pointer"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  <span>Clear</span>
                </button>
              )}
            </div>
          </div>

          {/* Main Add-to-Cart Screen Content: 7 Medicine Boxes + Cart Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-6 lg:p-8 items-start">
            {/* Left: 7 Medicine Boxes */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {OTC_MEDICINES.map((medicine) => (
                <MedicineBoxCard
                  key={medicine.id}
                  medicine={medicine}
                  quantity={cart[medicine.id] ?? 0}
                  onIncrement={() => updateQuantity(medicine.id, 1)}
                  onDecrement={() => updateQuantity(medicine.id, -1)}
                />
              ))}
            </div>

            {/* Right: Live Add-to-Cart Summary Panel */}
            <aside
              aria-label="Your Cart Summary"
              className="lg:col-span-4 lg:sticky lg:top-24 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3.5">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="h-4.5 w-4.5 text-[#0D4E3A]" />
                  <h4 className="text-base font-bold text-[#0F172A]">
                    Your Cart
                  </h4>
                </div>
                <span className="rounded-full bg-[#F1F5F9] px-2.5 py-0.5 text-xs font-semibold text-[#0F172A]">
                  {totalItemsCount} {totalItemsCount === 1 ? "unit" : "units"}
                </span>
              </div>

              {cartItems.length === 0 ? (
                <div className="py-8 text-center space-y-2">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F1F5F9] text-[#64748B]">
                    <ShoppingBag className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-semibold text-[#0F172A]">
                    Your cart is empty
                  </p>
                  <p className="text-xs text-[#64748B] max-w-[240px] mx-auto">
                    Tap &ldquo;Add to Cart&rdquo; on any of the 7 OTC medicine boxes to preview your order.
                  </p>
                </div>
              ) : (
                <>
                  {/* Selected Items List */}
                  <ul className="divide-y divide-[#F1F5F9] max-h-[300px] overflow-y-auto pr-1">
                    {cartItems.map((item) => (
                      <li
                        key={item.id}
                        className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="relative h-10 w-10 shrink-0 rounded-lg border border-[#E2E8F0] bg-[#F1F8F4] overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.imageAlt}
                              fill
                              sizes="40px"
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-[#0F172A] truncate">
                              {item.name}
                            </p>
                            <p className="text-[11px] text-[#64748B]">
                              ₹{item.price} &times; {item.quantity} ({item.packSize})
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <div className="inline-flex items-center rounded-lg border border-[#E2E8F0] bg-[#F8FAFC]">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, -1)}
                              aria-label={`Decrease quantity of ${item.name}`}
                              className="p-1 text-[#0F172A] hover:text-[#0D4E3A] cursor-pointer"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="px-1.5 text-xs font-bold text-[#0F172A] tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, 1)}
                              aria-label={`Increase quantity of ${item.name}`}
                              className="p-1 text-[#0F172A] hover:text-[#0D4E3A] cursor-pointer"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <span className="text-xs font-bold text-[#0F172A] w-11 text-right tabular-nums">
                            ₹{item.lineTotal}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Bill Summary */}
                  <div className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-3.5 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-[#64748B]">
                      <span>Items Subtotal ({totalItemsCount})</span>
                      <span className="font-semibold text-[#0F172A] tabular-nums">
                        ₹{subtotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[#64748B]">
                      <span>License / Rx Requirement</span>
                      <span className="font-semibold text-[#10B981]">
                        Not Required
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-t border-[#E2E8F0] pt-2 text-sm font-extrabold text-[#0F172A]">
                      <span>Total Amount</span>
                      <span className="text-[#0D4E3A] tabular-nums">
                        ₹{subtotal.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Interactive Confirm Button (No Redirection) */}
                  <button
                    type="button"
                    onClick={handleConfirmPreview}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D4E3A] px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#072C21] transition-colors cursor-pointer"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>Review Cart &bull; ₹{subtotal.toFixed(2)}</span>
                  </button>

                  {orderPlacedPreview && (
                    <div
                      role="status"
                      className="flex items-start gap-2 rounded-xl border border-[#10B981]/40 bg-[#E8F5E9] p-3 text-xs text-[#072C21]"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0D4E3A] mt-0.5" />
                      <span>
                        <strong>{totalItemsCount}</strong>{" "}
                        {totalItemsCount === 1 ? "item" : "items"} ready in your
                        cart (₹{subtotal.toFixed(2)}). You can continue adjusting
                        quantities anytime.
                      </span>
                    </div>
                  )}
                </>
              )}

              <div className="flex items-center gap-2 pt-1 text-[11px] text-[#64748B]">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[#10B981]" />
                <span>
                  100% genuine everyday OTC &amp; wellness essentials sealed by partner pharmacies.
                </span>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

interface MedicineBoxCardProps {
  medicine: OtcMedicineItem;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

function MedicineBoxCard({
  medicine,
  quantity,
  onIncrement,
  onDecrement,
}: MedicineBoxCardProps) {
  const isInCart = quantity > 0;

  return (
    <div
      className={`group flex flex-col justify-between rounded-2xl border p-4 bg-white transition-all duration-200 ${
        isInCart
          ? "border-[#10B981] ring-1 ring-[#10B981]/30 shadow-md"
          : "border-[#E2E8F0] hover:border-[#10B981]/60 hover:shadow-md"
      }`}
    >
      {/* Top Row: Small Medicine Image + Title & Pack Info */}
      <div className="flex items-start gap-3.5">
        <div className="relative h-20 w-20 shrink-0 rounded-xl border border-[#E2E8F0] bg-[#F1F8F4] overflow-hidden">
          <Image
            src={medicine.image}
            alt={medicine.imageAlt}
            fill
            sizes="80px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="inline-flex items-center rounded-md bg-[#E8F5E9] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#0D4E3A]">
              {medicine.category}
            </span>
            <span className="text-[11px] font-medium text-[#64748B]">
              No Rx
            </span>
          </div>

          <h4 className="text-sm sm:text-[15px] font-bold text-[#0F172A] leading-snug">
            {medicine.name}
          </h4>

          <p className="text-xs font-semibold text-[#0D4E3A] mt-0.5">
            {medicine.packSize}
          </p>

          <p className="text-xs text-[#64748B] mt-1 line-clamp-2 leading-relaxed">
            {medicine.description}
          </p>
        </div>
      </div>

      {/* Bottom Row: Price + Quantity & Add-to-Cart Control */}
      <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between gap-3">
        <div>
          <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#64748B]">
            Price
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-extrabold text-[#0F172A] tabular-nums">
              ₹{medicine.price}
            </span>
            <span className="text-[11px] text-[#64748B]">
              / {medicine.defaultPackUnit}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {isInCart ? (
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center rounded-xl border border-[#10B981] bg-[#E8F5E9] p-1">
                <button
                  type="button"
                  onClick={onDecrement}
                  aria-label={`Decrease ${medicine.name} quantity`}
                  className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-[#0D4E3A] shadow-xs hover:bg-[#0D4E3A] hover:text-white transition-colors cursor-pointer"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span
                  aria-label={`Quantity of ${medicine.name}`}
                  className="min-w-[28px] text-center text-xs font-extrabold text-[#072C21] tabular-nums"
                >
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={onIncrement}
                  aria-label={`Increase ${medicine.name} quantity`}
                  className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0D4E3A] text-white shadow-xs hover:bg-[#072C21] transition-colors cursor-pointer"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={onIncrement}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#0D4E3A] px-3.5 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#157356] transition-colors cursor-pointer"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Add to Cart</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
