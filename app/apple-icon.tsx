import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default async function AppleIcon() {
  const iconBuffer = await readFile(path.join(process.cwd(), "public", "tradeorbit-icon.png"));
  const iconSrc = `data:image/png;base64,${iconBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 42,
          background: "radial-gradient(circle at 30% 22%, #3a2418 0%, #1c1210 55%, #0c0806 100%)",
          boxShadow: "inset 0 0 0 2px rgba(242, 193, 78, 0.4)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- satori requires a raw <img>, next/image can't run inside ImageResponse */}
        <img
          src={iconSrc}
          alt=""
          width={132}
          height={132}
          style={{ filter: "drop-shadow(0 0 16px rgba(242, 193, 78, 0.75))" }}
        />
      </div>
    ),
    size
  );
}
