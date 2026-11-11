import { NextResponse } from "next/server";

const UPSTREAM_DELETION_API = "https://pharma.ezoro.in/api/v1/mobile/privacy/request-deletion";

interface DeletionRequestBody {
  name?: string;
  email?: string;
  username?: string;
  notes?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as DeletionRequestBody;

    const name = (body.name ?? "").trim();
    let email = (body.email ?? "").trim();
    const username = (body.username ?? "").trim();
    const notes = (body.notes ?? "").trim();

    if (!name) {
      return NextResponse.json(
        { message: "Full Name is required." },
        { status: 422 }
      );
    }

    if (!username || username.replace(/\D/g, "").length < 7) {
      return NextResponse.json(
        { message: "A valid registered phone number is required." },
        { status: 422 }
      );
    }

    // Email is optional: if provided, validate format; if omitted, generate safe placeholder for upstream schema
    if (email && !email.includes("@")) {
      return NextResponse.json(
        { message: "Please provide a valid email address or leave it blank." },
        { status: 422 }
      );
    }

    if (!email) {
      const digits = username.replace(/\D/g, "") || "user";
      email = `user-${digits}@deletion.pilldoor.in`;
    }

    const upstreamPayload = {
      name,
      email,
      username,
      notes: notes || "Account and personal data deletion request from Pilldoor website",
    };

    const upstreamRes = await fetch(UPSTREAM_DELETION_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(upstreamPayload),
    });

    const responseData = await upstreamRes.json().catch(() => ({}));

    if (!upstreamRes.ok) {
      const errorMessage =
        responseData?.message ||
        responseData?.error?.message ||
        responseData?.detail?.[0]?.msg ||
        "Upstream compliance desk was unable to register the deletion request. Please try again shortly.";

      return NextResponse.json(
        { message: errorMessage, details: responseData },
        { status: upstreamRes.status || 502 }
      );
    }

    return NextResponse.json({
      status: "success",
      message:
        responseData?.message ||
        "Data deletion request received successfully. Our compliance team will process it within 30 days.",
      data: responseData,
    });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    console.error("Failed to forward deletion request:", errMsg);
    return NextResponse.json(
      { message: "A network error occurred while communicating with the privacy desk. Please try again." },
      { status: 500 }
    );
  }
}

