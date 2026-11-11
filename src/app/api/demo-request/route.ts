import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface EnquiryPayload {
  name?: string;
  email?: string;
  phone?: string;
  organization?: string;
  enquiryType?: string;
  category?: string;
  message?: string;
  details?: {
    city?: string;
    storeCount?: string;
    notes?: string;
  };
  source?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as EnquiryPayload;

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const organization = (body.organization ?? "").trim();
    const enquiryType = (body.enquiryType ?? body.category ?? "general_enquiry").trim();
    
    let message = (body.message ?? "").trim();
    if (!message && body.details) {
      const parts: string[] = [];
      if (body.details.city) parts.push(`City: ${body.details.city}`);
      if (body.details.storeCount) parts.push(`Stores: ${body.details.storeCount}`);
      if (body.details.notes) parts.push(`Notes: ${body.details.notes}`);
      message = parts.join(" | ");
    }
    const source = (body.source ?? "pilldoor-website").trim();

    if (name.length < 2) {
      return NextResponse.json(
        { error: "Please provide your full name (at least 2 characters)." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (phone.replace(/\D/g, "").length < 7) {
      return NextResponse.json(
        { error: "Please provide a valid contact phone number." },
        { status: 400 }
      );
    }

    if (!enquiryType) {
      return NextResponse.json(
        { error: "Please select an enquiry category." },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: "Please share a brief description of your enquiry (at least 10 characters)." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString().replace(/[-:T.]/g, "").slice(0, 14);
    const random = Math.floor(1000 + Math.random() * 9000);
    const externalId = `PILLDOOR-ENQ-${timestamp}-${random}`;

    const osEzoroApiUrl = process.env.OS_EZORO_API_URL;
    const osEzoroApiKey = process.env.EXTERNAL_API_KEY;

    if (!osEzoroApiUrl) {
      console.warn(
        "OS_EZORO_API_URL is unconfigured. Enquiry recorded in standalone mode with externalId:",
        externalId,
        { name, email, phone, organization, enquiryType, source }
      );
      return NextResponse.json({
        success: true,
        externalId,
        message: "Enquiry recorded successfully.",
        standaloneMode: true,
      });
    }

    const upstreamPayload = {
      name,
      email,
      phone,
      company: organization || undefined,
      productInterest: enquiryType,
      message,
      source,
      externalId,
    };

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (osEzoroApiKey) {
      headers["x-api-key"] = osEzoroApiKey;
    }

    const upstreamResponse = await fetch(`${osEzoroApiUrl.replace(/\/$/, "")}/api/enquiries`, {
      method: "POST",
      headers,
      body: JSON.stringify(upstreamPayload),
    });

    if (!upstreamResponse.ok) {
      const errorText = await upstreamResponse.text();
      console.error("Failed to sync Pilldoor enquiry with OS Ezoro:", upstreamResponse.status, errorText);
      return NextResponse.json(
        { error: "Failed to deliver enquiry to the operations desk. Please try again shortly." },
        { status: 502 }
      );
    }

    const responseData = await upstreamResponse.json().catch(() => ({}));
    return NextResponse.json({
      success: true,
      externalId,
      data: responseData,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error processing Pilldoor enquiry:", message);
    return NextResponse.json(
      { error: "Unable to process enquiry right now. Please try again." },
      { status: 500 }
    );
  }
}

