import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default async function Icon() {
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
          borderRadius: 16,
          background: "radial-gradient(circle at 30% 22%, #3a2418 0%, #1c1210 55%, #0c0806 100%)",
          boxShadow: "inset 0 0 0 1px rgba(242, 193, 78, 0.4)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- satori requires a raw <img>, next/image can't run inside ImageResponse */}
        <img
          src={iconSrc}
          alt=""
          width={50}
          height={50}
          style={{ filter: "drop-shadow(0 0 8px rgba(242, 193, 78, 0.75))" }}
        />
      </div>
    ),
    size
  );
}
