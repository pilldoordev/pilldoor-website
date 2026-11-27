import { NextResponse } from "next/server";
import {
  buildPharmaBackendHeaders,
  getPharmaBackendBaseUrl,
  resolveCatalogItems,
} from "@/lib/websiteOrderProxy";

interface WebsiteOrderRequestBody {
  customer_name?: string;
  customer_phone?: string;
  customer_email?: string;
  delivery_address?: {
    address_line1?: string;
    address_line2?: string;
    city?: string;
    state?: string;
    postal_code?: string;
  };
  items?: unknown;
  payment_method?: string;
  notes?: string;
  idempotency_key?: string;
  razorpay_order_id?: string;
  razorpay_payment_id?: string;
  razorpay_signature?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as WebsiteOrderRequestBody;

    const customerName = (body.customer_name ?? "").trim();
    const customerPhone = (body.customer_phone ?? "").trim();
    const customerEmail = (body.customer_email ?? "").trim();
    const addressLine1 = (body.delivery_address?.address_line1 ?? "").trim();
    const addressLine2 = (body.delivery_address?.address_line2 ?? "").trim();
    const city = (body.delivery_address?.city ?? "").trim();
    const state = (body.delivery_address?.state ?? "").trim();
    const postalCode = (body.delivery_address?.postal_code ?? "").trim();
    const paymentMethod = (body.payment_method ?? "cod").trim().toLowerCase();

    if (customerName.length < 2) {
      return NextResponse.json(
        { error: "Please enter your full name (at least 2 characters)." },
        { status: 400 }
      );
    }

    if (customerPhone.replace(/\D/g, "").length < 7) {
      return NextResponse.json(
        { error: "Please enter a valid mobile number for delivery OTP updates." },
        { status: 400 }
      );
    }

    if (addressLine1.length < 3 || city.length < 2 || state.length < 2 || postalCode.length < 4) {
      return NextResponse.json(
        { error: "Please complete your full delivery address (street, city, state, and pincode)." },
        { status: 400 }
      );
    }

    if (paymentMethod !== "cod" && paymentMethod !== "online") {
      return NextResponse.json(
        { error: "Invalid payment method. Choose Cash on Delivery or Online Payment." },
        { status: 400 }
      );
    }

    const { items: resolvedItems, error: itemError } = resolveCatalogItems(body.items);
    if (itemError) {
      return NextResponse.json({ error: itemError }, { status: 400 });
    }

    const backendUrl = getPharmaBackendBaseUrl();
    if (!backendUrl) {
      return NextResponse.json(
        { error: "Order service is not configured (PHARMA_BACKEND_URL missing)." },
        { status: 503 }
      );
    }

    const upstreamRes = await fetch(`${backendUrl}/api/v1/orders/website`, {
      method: "POST",
      headers: buildPharmaBackendHeaders(),
      body: JSON.stringify({
        customer_name: customerName,
        customer_phone: customerPhone,
        customer_email: customerEmail || undefined,
        delivery_address: {
          address_line1: addressLine1,
          address_line2: addressLine2 || undefined,
          city,
          state,
          postal_code: postalCode,
        },
        items: resolvedItems,
        payment_method: paymentMethod,
        notes: (body.notes ?? "").trim() || undefined,
        idempotency_key: (body.idempotency_key ?? "").trim() || undefined,
        razorpay_order_id: body.razorpay_order_id || undefined,
        razorpay_payment_id: body.razorpay_payment_id || undefined,
        razorpay_signature: body.razorpay_signature || undefined,
      }),
      signal: AbortSignal.timeout(15000),
    });

    const upstreamData = await upstreamRes.json().catch(() => ({}));
    if (!upstreamRes.ok) {
      const detail =
        typeof upstreamData?.detail === "string"
          ? upstreamData.detail
          : "Unable to place website order right now.";
      return NextResponse.json(
        { error: detail },
        { status: upstreamRes.status >= 400 && upstreamRes.status < 600 ? upstreamRes.status : 502 }
      );
    }

    return NextResponse.json(upstreamData, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Website order intake error:", message);
    return NextResponse.json(
      { error: "Could not reach the Pilldoor order desk. Please try again." },
      { status: 502 }
    );
  }
}
