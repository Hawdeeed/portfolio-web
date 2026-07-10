import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Hadeed Ahmed — Full Stack Developer & Gen AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(1200px 600px at 20% 0%, #1e1b4b 0%, #050816 55%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg,#6366F1,#8B5CF6,#22D3EE)",
              color: "white",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            HA
          </div>
          <div style={{ color: "#94A3B8", fontSize: 28 }}>hadeed.dev</div>
        </div>

        <div
          style={{
            display: "flex",
            color: "white",
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          Hadeed Ahmed
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 44,
            fontWeight: 700,
            background: "linear-gradient(90deg,#818CF8,#A78BFA,#22D3EE)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Full Stack Developer & Gen AI Engineer
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 40,
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          {["React", "Next.js", "TypeScript", "Django", "LLMs", "ComfyUI"].map(
            (t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  padding: "10px 22px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#CBD5E1",
                  fontSize: 26,
                }}
              >
                {t}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    size,
  );
}
