import { ImageResponse } from "next/og";

export const alt = "Wakasub — The Rewards Hub of Nigeria";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #0a1020 0%, #12244d 55%, #1b3a8a 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              background: "#2f6bed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 38,
              fontWeight: 800,
            }}
          >
            W
          </div>
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>Wakasub</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 74, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, maxWidth: 960 }}>
            Reward your people. Resell at the best rates.
          </div>
          <div style={{ fontSize: 34, color: "#aebfe6", maxWidth: 900 }}>
            Airtime, data & cash in seconds — and Nigeria&apos;s best VTU reseller pricing.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, fontSize: 26, color: "#cdd9f5" }}>
          {["Airtime", "Data", "Cable TV", "Electricity", "Cash"].map((t) => (
            <div
              key={t}
              style={{
                padding: "10px 22px",
                border: "1px solid rgba(255,255,255,0.22)",
                background: "rgba(255,255,255,0.06)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
