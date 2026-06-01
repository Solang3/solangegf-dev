import { ImageResponse } from "next/og";

export const alt = "Solange Gonzalez — Full-Stack + AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#f4f4f1",
          color: "#101012",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* balloon color motif (no blur in Satori — soft radial gradients instead) */}
        <div style={{ position: "absolute", top: -120, right: -60, width: 520, height: 520, borderRadius: "50%", backgroundImage: "radial-gradient(circle at 50% 50%, #4f46e5 0%, rgba(79,70,229,0) 68%)" }} />
        <div style={{ position: "absolute", top: 40, right: 160, width: 460, height: 460, borderRadius: "50%", backgroundImage: "radial-gradient(circle at 50% 50%, #db2777 0%, rgba(219,39,119,0) 66%)" }} />
        <div style={{ position: "absolute", bottom: -160, right: 120, width: 420, height: 420, borderRadius: "50%", backgroundImage: "radial-gradient(circle at 50% 50%, #06b6d4 0%, rgba(6,182,212,0) 66%)" }} />

        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 8,
            color: "#76756f",
            fontFamily: "monospace",
          }}
        >
          INDEPENDENT FULL-STACK + AI ENGINEER
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 132, fontWeight: 700, lineHeight: 1, letterSpacing: -3 }}>
            Solange Gonzalez
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 34, color: "#101012" }}>
            From zero to live — web · e-commerce · AI · hosting.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 22,
              letterSpacing: 6,
              color: "#76756f",
              fontFamily: "monospace",
            }}
          >
            BUENOS AIRES · 20+ YRS · HTML SINCE 1994
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
