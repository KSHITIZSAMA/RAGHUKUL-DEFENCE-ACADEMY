"use client";

import { useEffect, useRef, useState } from "react";

// Maximum distance from center of circle to center of ball (Circle radius = 28px, Ball radius = 8px)
const MAX_BOUND = 18;

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isClickableHovered, setIsClickableHovered] = useState(false);
  const [isHeadingHovered, setIsHeadingHovered] = useState(false);

  const ballRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const circlePos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      const target = e.target as HTMLElement | null;

      // Detect clickable elements (buttons, links, inputs, cards)
      const isClickable = !!(
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.tagName === "INPUT" ||
          target.closest("button") ||
          target.closest("a") ||
          target.closest("input") ||
          target.classList.contains("cursor-pointer") ||
          target.getAttribute("role") === "button")
      );

      // Detect headings
      const isHeading = !!(
        target &&
        (target.tagName === "H1" ||
          target.tagName === "H2" ||
          target.tagName === "H3" ||
          target.tagName === "H4" ||
          target.tagName === "H5" ||
          target.tagName === "H6" ||
          target.closest("h1, h2, h3, h4, h5, h6, .display, .font-display"))
      );

      setIsClickableHovered(isClickable);
      setIsHeadingHovered(!isClickable && isHeading);
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;

    const animate = () => {
      const mx = mousePos.current.x;
      const my = mousePos.current.y;

      let cx = circlePos.current.x;
      let cy = circlePos.current.y;

      if (cx === -100 && cy === -100) {
        cx = mx;
        cy = my;
      }

      // Smoothly move outer circle towards mouse
      cx += (mx - cx) * 0.22;
      cy += (my - cy) * 0.22;

      circlePos.current = { x: cx, y: cy };

      // Calculate ball offset relative to circle center
      const dx = mx - cx;
      const dy = my - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let bx = mx;
      let by = my;

      // Strictly clamp inner ball inside outer circle boundary
      if (dist > MAX_BOUND) {
        bx = cx + (dx / dist) * MAX_BOUND;
        by = cy + (dy / dist) * MAX_BOUND;
      }

      if (ballRef.current) {
        ballRef.current.style.transform = `translate3d(${bx}px, ${by}px, 0) translate(-50%, -50%)`;
      }

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden lg:block">
      {/* Outer Circle Component */}
      <div
        ref={circleRef}
        className={`pointer-events-none fixed top-0 left-0 w-14 h-14 rounded-full border-2 transition-colors duration-200 ${isClickableHovered
            ? "border-[#FF6600] bg-[#FF6600]/15 shadow-[0_0_22px_rgba(255,102,0,0.45)]"
            : isHeadingHovered
              ? "border-[#C98E2A] bg-[#C98E2A]/10 shadow-[0_0_16px_rgba(201,142,42,0.3)]"
              : "border-[#3F4632]/80 bg-[#3F4632]/5 shadow-[0_0_12px_rgba(63,70,50,0.15)]"
          }`}
      />

      {/* Inner Ball Component - Mathematically Clamped Inside Circle */}
      <div
        ref={ballRef}
        className={`pointer-events-none fixed top-0 left-0 w-4 h-4 rounded-full transition-all duration-200 ${isClickableHovered
            ? "bg-[#FF6600] filter blur-[0.5px] opacity-100 shadow-[0_0_16px_#FF6600]"
            : isHeadingHovered
              ? "bg-[#C98E2A] filter blur-[0.5px] opacity-100 shadow-[0_0_14px_#C98E2A]"
              : "bg-[#3F4632] filter blur-[2px] backdrop-blur-sm opacity-90 shadow-[0_0_10px_#3F4632]"
          }`}
      />
    </div>
  );
}
