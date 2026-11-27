import { NextResponse } from "next/server";
import {
  buildPharmaBackendHeaders,
  getPharmaBackendBaseUrl,
  resolveCatalogItems,
} from "@/lib/websiteOrderProxy";

interface RazorpayInitBody {
  customer_name?: string;
  customer_phone?: string;
  items?: unknown;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RazorpayInitBody;
    const customerName = (body.customer_name ?? "").trim();
    const customerPhone = (body.customer_phone ?? "").trim();

    if (customerName.length < 2 || customerPhone.replace(/\D/g, "").length < 7) {
      return NextResponse.json(
        { error: "Please enter your name and mobile number before initiating payment." },
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

    const upstreamRes = await fetch(`${backendUrl}/api/v1/orders/website/razorpay/initiate`, {
      method: "POST",
      headers: buildPharmaBackendHeaders(),
      body: JSON.stringify({
        customer_name: customerName,
        customer_phone: customerPhone,
        items: resolvedItems,
      }),
      signal: AbortSignal.timeout(15000),
    });

    const data = await upstreamRes.json().catch(() => ({}));
    if (!upstreamRes.ok) {
      const detail =
        typeof data?.detail === "string"
          ? data.detail
          : "Online payment gateway is currently unavailable. Please use Cash on Delivery.";
      return NextResponse.json({ error: detail }, { status: upstreamRes.status || 502 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Website Razorpay initiate error:", message);
    return NextResponse.json(
      { error: "Unable to initialize online payment. Please try Cash on Delivery." },
      { status: 502 }
    );
  }
}
