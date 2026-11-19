import { ImageResponse } from "next/og";

export const alt = "SPIRARE. Respirar mejor empieza aquí.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#00455A",
          color: "#FFFFFF",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, color: "#FF6D2D" }}>spirare</div>
        <div style={{ marginTop: 20, fontSize: 72, lineHeight: 1, maxWidth: 800 }}>
          Respirar mejor empieza aquí.
        </div>
      </div>
    ),
    { ...size },
  );
}
