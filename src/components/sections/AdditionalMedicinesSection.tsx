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
  ArrowRight,
  ArrowLeft,
  Banknote,
  CreditCard,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { OTC_MEDICINES, type OtcMedicineItem } from "@/data/otcMedicines";

type PanelStep = "cart" | "checkout" | "confirmed";
type PaymentMethod = "cod" | "online";

interface ConfirmedOrderResult {
  order_id: string;
  order_number: string;
  status: string;
  order_origin: string;
  total_amount: number;
  payment_method: string;
  payment_status: string;
  created_at: string;
}

interface RazorpayCheckoutResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill?: {
    name?: string;
    contact?: string;
    email?: string;
  };
  theme?: {
    color?: string;
  };
  handler: (response: RazorpayCheckoutResponse) => void;
  modal?: {
    ondismiss?: () => void;
  };
}

declare global {
  interface Window {
    Razorpay?: new (options: RazorpayOptions) => { open: () => void };
  }
}

function loadRazorpayCheckoutScript(): Promise<boolean> {
  if (typeof window === "undefined") return Promise.resolve(false);
  if (window.Razorpay) return Promise.resolve(true);

  return new Promise((resolve) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
    );
    if (existing) {
      existing.addEventListener("load", () => resolve(true), { once: true });
      existing.addEventListener("error", () => resolve(false), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export function AdditionalMedicinesSection() {
  const [cart, setCart] = useState<Record<string, number>>({
    "ors-sachet": 1,
  });
  const [panelStep, setPanelStep] = useState<PanelStep>("cart");

  // Checkout form fields
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("cod");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [confirmedOrder, setConfirmedOrder] = useState<ConfirmedOrderResult | null>(null);
  const [idempotencyKey, setIdempotencyKey] = useState<string>(() =>
    `web-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  );

  const updateQuantity = (id: string, delta: number) => {
    setSubmitError(null);
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
    setSubmitError(null);
    setPanelStep("cart");
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

  const submitFinalOrder = async (
    method: PaymentMethod,
    razorpayProof?: RazorpayCheckoutResponse
  ) => {
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customer_name: customerName.trim(),
        customer_phone: customerPhone.trim(),
        customer_email: customerEmail.trim() || undefined,
        delivery_address: {
          address_line1: addressLine1.trim(),
          address_line2: addressLine2.trim() || undefined,
          city: city.trim(),
          state: stateName.trim(),
          postal_code: postalCode.trim(),
        },
        items: cartItems.map((item) => ({
          product_id: item.id,
          quantity: item.quantity,
        })),
        payment_method: method,
        notes: notes.trim() || undefined,
        idempotency_key: idempotencyKey,
        ...(razorpayProof ?? {}),
      }),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data?.error || "Unable to place order. Please try again.");
    }

    setConfirmedOrder(data as ConfirmedOrderResult);
    setCart({});
    setPanelStep("confirmed");
    setIdempotencyKey(`web-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`);
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      setSubmitError("Your cart is empty.");
      return;
    }

    setSubmitError(null);

    if (customerName.trim().length < 2) {
      setSubmitError("Please enter your full name.");
      return;
    }
    if (customerPhone.replace(/\D/g, "").length < 7) {
      setSubmitError("Please enter a valid mobile number.");
      return;
    }
    if (
      addressLine1.trim().length < 3 ||
      city.trim().length < 2 ||
      stateName.trim().length < 2 ||
      postalCode.trim().length < 4
    ) {
      setSubmitError("Please complete your delivery address (street, city, state, pincode).");
      return;
    }

    setIsSubmitting(true);
    try {
      if (paymentMethod === "cod") {
        await submitFinalOrder("cod");
        setIsSubmitting(false);
        return;
      }

      // Optional Razorpay online payment gateway flow
      const initRes = await fetch("/api/orders/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: customerName.trim(),
          customer_phone: customerPhone.trim(),
          items: cartItems.map((item) => ({
            product_id: item.id,
            quantity: item.quantity,
          })),
        }),
      });

      const initData = await initRes.json().catch(() => ({}));
      if (!initRes.ok) {
        throw new Error(
          initData?.error ||
            "Online payment gateway is currently unavailable. Please choose Cash on Delivery."
        );
      }

      const loaded = await loadRazorpayCheckoutScript();
      if (!loaded || !window.Razorpay) {
        throw new Error(
          "Could not load Razorpay checkout. Please use Cash on Delivery instead."
        );
      }

      const rzp = new window.Razorpay({
        key: initData.key_id,
        amount: initData.amount_paise,
        currency: initData.currency || "INR",
        name: "Pilldoor Healthcare",
        description: `OTC Order (${totalItemsCount} items)`,
        order_id: initData.razorpay_order_id,
        prefill: {
          name: customerName.trim(),
          contact: customerPhone.trim(),
          email: customerEmail.trim() || undefined,
        },
        theme: { color: "#0D4E3A" },
        handler: async (paymentResp) => {
          try {
            await submitFinalOrder("online", paymentResp);
          } catch (err) {
            setSubmitError(
              err instanceof Error ? err.message : "Payment verification failed."
            );
          } finally {
            setIsSubmitting(false);
          }
        },
        modal: {
          ondismiss: () => {
            setIsSubmitting(false);
            setSubmitError("Payment cancelled. You can retry or switch to Cash on Delivery.");
          },
        },
      });
      rzp.open();
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Unable to complete your order."
      );
      setIsSubmitting(false);
    }
  };

  const handleStartNewOrder = () => {
    setConfirmedOrder(null);
    setSubmitError(null);
    setNotes("");
    setPanelStep("cart");
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
            <span className="text-[#0D4E3A]">order straight to your door.</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#64748B] leading-relaxed">
            Browse 7 common over-the-counter healthcare items available without a prescription. Add to cart and book immediately with Cash on Delivery or online payment.
          </p>
        </div>

        {/* Add-to-Cart & Booking Shell */}
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
              {totalItemsCount > 0 && panelStep !== "confirmed" && (
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

          {/* Main Add-to-Cart Screen Content: 7 Medicine Boxes + Cart / Checkout Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-6 lg:p-8 items-start">
            {/* Left: 7 Medicine Boxes */}
            <div className="lg:col-span-7 xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {OTC_MEDICINES.map((medicine) => (
                <MedicineBoxCard
                  key={medicine.id}
                  medicine={medicine}
                  quantity={cart[medicine.id] ?? 0}
                  onIncrement={() => {
                    if (panelStep === "confirmed") setPanelStep("cart");
                    updateQuantity(medicine.id, 1);
                  }}
                  onDecrement={() => updateQuantity(medicine.id, -1)}
                />
              ))}
            </div>

            {/* Right: Cart Summary / Checkout Booking / Order Confirmed Panel */}
            <aside
              aria-label="Cart and Order Booking"
              className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm space-y-4"
            >
              {panelStep === "confirmed" && confirmedOrder ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-[#E2E8F0] pb-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F5E9] text-[#0D4E3A]">
                      <CheckCircle2 className="h-5 w-5 text-[#10B981]" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#0F172A]">
                        Order Booked!
                      </h4>
                      <p className="text-xs text-[#64748B]">
                        Sent to Pilldoor Website Orders desk
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#10B981]/30 bg-[#E8F5E9]/70 p-4 space-y-2.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[#64748B]">Order Number</span>
                      <span className="font-mono font-bold text-[#072C21]">
                        {confirmedOrder.order_number}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#64748B]">Order Status</span>
                      <span className="inline-flex items-center rounded-full bg-white px-2 py-0.5 font-semibold text-[#0D4E3A] capitalize">
                        {confirmedOrder.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#64748B]">Payment</span>
                      <span className="font-semibold text-[#0F172A]">
                        {confirmedOrder.payment_method === "cod"
                          ? "Cash on Delivery (Due on arrival)"
                          : `Online (${confirmedOrder.payment_status})`}
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-t border-[#10B981]/20 pt-2 text-sm font-extrabold text-[#0F172A]">
                      <span>Total Amount</span>
                      <span className="text-[#0D4E3A] tabular-nums">
                        ₹{confirmedOrder.total_amount.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#64748B] leading-relaxed">
                    A partner pharmacy will pack your sealed order shortly. Keep your phone handy for your 4-digit delivery OTP when the rider arrives.
                  </p>

                  <button
                    type="button"
                    onClick={handleStartNewOrder}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D4E3A] px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#072C21] transition-colors cursor-pointer"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    <span>Book Another Order</span>
                  </button>
                </div>
              ) : panelStep === "checkout" && cartItems.length > 0 ? (
                <form onSubmit={handlePlaceOrder} className="space-y-3.5" noValidate>
                  <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitError(null);
                        setPanelStep("cart");
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0D4E3A] hover:underline cursor-pointer"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" />
                      <span>Back to Cart</span>
                    </button>
                    <span className="text-xs font-bold text-[#0F172A] tabular-nums">
                      {totalItemsCount} {totalItemsCount === 1 ? "item" : "items"} &bull; ₹{subtotal.toFixed(2)}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A]">
                      Delivery &amp; Payment Details
                    </h4>
                    <p className="text-[11px] text-[#64748B]">
                      Complete below to send your order straight to Pilldoor dispatch.
                    </p>
                  </div>

                  {submitError && (
                    <div
                      role="alert"
                      className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-2.5 text-xs text-red-700"
                    >
                      <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#0F172A] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="e.g. Rahul Nair"
                        className="w-full rounded-lg border border-[#CBD5E1] bg-white px-2.5 py-2 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#0D4E3A] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-[#0F172A] mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-lg border border-[#CBD5E1] bg-white px-2.5 py-2 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#0D4E3A] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#0F172A] mb-1">
                      Email (optional)
                    </label>
                    <input
                      type="email"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-[#CBD5E1] bg-white px-2.5 py-2 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#0D4E3A] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#0F172A] mb-1">
                      House / Flat &amp; Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={addressLine1}
                      onChange={(e) => setAddressLine1(e.target.value)}
                      placeholder="Flat 4B, Green Valley Residency"
                      className="w-full rounded-lg border border-[#CBD5E1] bg-white px-2.5 py-2 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#0D4E3A] focus:outline-none"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      value={addressLine2}
                      onChange={(e) => setAddressLine2(e.target.value)}
                      placeholder="Landmark / Area (optional)"
                      aria-label="Landmark or Area"
                      className="w-full rounded-lg border border-[#CBD5E1] bg-white px-2.5 py-2 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#0D4E3A] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#0F172A] mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Kochi"
                        className="w-full rounded-lg border border-[#CBD5E1] bg-white px-2.5 py-2 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#0D4E3A] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-[#0F172A] mb-1">
                        State *
                      </label>
                      <input
                        type="text"
                        required
                        value={stateName}
                        onChange={(e) => setStateName(e.target.value)}
                        placeholder="Kerala"
                        className="w-full rounded-lg border border-[#CBD5E1] bg-white px-2.5 py-2 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#0D4E3A] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-[#0F172A] mb-1">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        required
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        placeholder="682001"
                        className="w-full rounded-lg border border-[#CBD5E1] bg-white px-2.5 py-2 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#0D4E3A] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Delivery note (optional, e.g. Call on arrival)"
                      aria-label="Delivery note"
                      className="w-full rounded-lg border border-[#CBD5E1] bg-white px-2.5 py-2 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#0D4E3A] focus:outline-none"
                    />
                  </div>

                  {/* Payment Method Selector */}
                  <div className="space-y-2 pt-1">
                    <span className="block text-[11px] font-semibold text-[#0F172A]">
                      Payment Method
                    </span>

                    <button
                      type="button"
                      onClick={() => {
                        setPaymentMethod("cod");
                        setSubmitError(null);
                      }}
                      className={`w-full flex items-center gap-2.5 rounded-xl border p-2.5 text-left transition-all cursor-pointer ${
                        paymentMethod === "cod"
                          ? "border-[#0D4E3A] bg-[#E8F5E9]/70 ring-1 ring-[#0D4E3A]/20"
                          : "border-[#E2E8F0] bg-white hover:border-[#CBD5E1]"
                      }`}
                    >
                      <Banknote className="h-4 w-4 shrink-0 text-[#0D4E3A]" />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-[#0F172A]">
                          Cash on Delivery
                        </p>
                        <p className="text-[11px] text-[#64748B]">
                          Pay via cash or rider UPI QR upon arrival
                        </p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setPaymentMethod("online");
                        setSubmitError(null);
                      }}
                      className={`w-full flex items-center gap-2.5 rounded-xl border p-2.5 text-left transition-all cursor-pointer ${
                        paymentMethod === "online"
                          ? "border-[#0D4E3A] bg-[#E8F5E9]/70 ring-1 ring-[#0D4E3A]/20"
                          : "border-[#E2E8F0] bg-white hover:border-[#CBD5E1]"
                      }`}
                    >
                      <CreditCard className="h-4 w-4 shrink-0 text-[#0D4E3A]" />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-[#0F172A]">
                          Pay Online (Optional Gateway)
                        </p>
                        <p className="text-[11px] text-[#64748B]">
                          UPI, Cards &amp; Netbanking via Razorpay
                        </p>
                      </div>
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D4E3A] px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#072C21] disabled:opacity-60 transition-colors cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>
                          {paymentMethod === "online"
                            ? "Opening Payment Gateway..."
                            : "Booking Order..."}
                        </span>
                      </>
                    ) : (
                      <>
                        <span>
                          {paymentMethod === "online"
                            ? `Pay ₹${subtotal.toFixed(2)} & Book Order`
                            : `Confirm COD Order • ₹${subtotal.toFixed(2)}`}
                        </span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <>
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
                        Tap &ldquo;Add to Cart&rdquo; on any of the 7 OTC medicine boxes to start booking your order.
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

                      <button
                        type="button"
                        onClick={() => {
                          setSubmitError(null);
                          setPanelStep("checkout");
                        }}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D4E3A] px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#072C21] transition-colors cursor-pointer"
                      >
                        <span>Proceed to Book Order &bull; ₹{subtotal.toFixed(2)}</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </>
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
