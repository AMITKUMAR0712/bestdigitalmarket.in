import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 42,
          color: "#f6d37a",
          background: "radial-gradient(circle at 25% 15%, #1f6f68 0%, #071a24 42%, #020617 100%)",
          border: "2px solid rgba(246, 211, 122, 0.55)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 62, fontWeight: 900, letterSpacing: 6, lineHeight: 1 }}>BDM</div>
        <div style={{ marginTop: 10, fontSize: 10, fontWeight: 900, letterSpacing: 3, textTransform: "uppercase" }}>
          Best Digital Market
        </div>
      </div>
    ),
    size
  );
}
