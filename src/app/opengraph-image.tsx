import { ImageResponse } from "next/og";

export const alt = "Pilldoor — Your Medicines. Your Family. One Simple App.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          backgroundColor: "#072C21",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(16, 185, 129, 0.25) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(13, 78, 58, 0.6) 0%, transparent 50%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                backgroundColor: "#10B981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#072C21",
                fontSize: "32px",
                fontWeight: 900,
              }}
            >
              +
            </div>
            <span style={{ fontSize: "36px", fontWeight: 800, letterSpacing: "-1px" }}>
              pilldoor
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 20px",
              borderRadius: "999px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              fontSize: "14px",
              fontWeight: 700,
              color: "#10B981",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Family Medicine Delivery
          </div>
        </div>

        {/* Center Main Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "64px",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-2px",
            }}
          >
            <span>Your Medicines. Your Family.</span>
            <span>One Simple App.</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "22px",
              color: "#A7F3D0",
              fontWeight: 600,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            YOUR HEALTH, ON TIME, EVERY TIME
          </div>
        </div>

        {/* Bottom Highlights */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          <div style={{ display: "flex", gap: "32px", fontSize: "16px", color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>
            <span>• 100% Genuine Pharmacy Stock</span>
            <span>• Pharmacist-Reviewed Prescriptions</span>
            <span>• 4-Digit OTP Delivery Verification</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", fontSize: "16px", color: "#10B981", fontWeight: 700 }}>
            pilldoor.in
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
