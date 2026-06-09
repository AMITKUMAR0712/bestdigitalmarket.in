import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = "Website Development, Software and Digital Marketing Company Delhi NCR";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          color: "white",
          background: "linear-gradient(135deg,#020617 0%,#071233 45%,#2e1065 100%)",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, color: "#67e8f9", textTransform: "uppercase" }}>
          {siteConfig.name}
        </div>
        <div style={{ marginTop: 28, maxWidth: 900, fontSize: 76, fontWeight: 900, lineHeight: 0.95 }}>
          Website, Software & Digital Marketing Services
        </div>
        <div style={{ marginTop: 32, fontSize: 30, color: "#cbd5e1" }}>
          Website Development • Software • SEO • Google Ads • Lead Generation
        </div>
      </div>
    ),
    size
  );
}
