import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
          color: "#f6d37a",
          background: "radial-gradient(circle at 25% 15%, #1f6f68 0%, #071a24 42%, #020617 100%)",
          border: "1px solid rgba(246, 211, 122, 0.55)",
          fontFamily: "Georgia, serif",
          fontSize: 22,
          fontWeight: 900,
          letterSpacing: 2,
        }}
      >
        BDM
      </div>
    ),
    size
  );
}
