"use client";

export function GradientBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      {/* 21st.dev Multi-stop Linear Gradient Layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#EBF9FF",
          backgroundImage:
            "linear-gradient(0deg, #EBF9FF 38%, #57D2F4 61%, #1B6AA7 81%, #031C26 97%)",
        }}
      />

      {/* 21st.dev Grain Noise SVG Overlay */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.11,
          mixBlendMode: "overlay",
        }}
      >
        <filter id="grain-9204599f">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-9204599f)" />
      </svg>
    </div>
  );
}
