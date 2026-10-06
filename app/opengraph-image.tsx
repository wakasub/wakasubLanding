import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Wakasub — The Rewards Hub of Nigeria";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public", "waka 512.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "70px 80px",
          background: "linear-gradient(135deg, #ffffff 0%, #eef4ff 100%)",
          color: "#0a1020",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 680 }}>
          <div style={{ fontSize: 34, fontWeight: 700, color: "#0b4fd6", letterSpacing: -0.5 }}>
            wakasub.com
          </div>
          <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1.04, letterSpacing: -2.5 }}>
            The Rewards Hub of Nigeria
          </div>
          <div style={{ fontSize: 32, color: "#44506b", lineHeight: 1.3 }}>
            Send airtime, data and cash to your people in seconds. One link, instant delivery.
          </div>
        </div>
        <div
          style={{
            width: 360,
            height: 360,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff",
            boxShadow: "0 30px 80px rgba(11,79,214,0.25)",
            borderRadius: 72,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={300} height={300} alt="" />
        </div>
      </div>
    ),
    { ...size },
  );
}
