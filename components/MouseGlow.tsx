"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const canAnimate = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );

    if (!glow || !canAnimate.matches) {
      return;
    }

    let frameId = 0;

    function handleMouseMove(event: MouseEvent) {
      // Update the glow at most once per frame, without re-rendering React.
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        if (glow) {
          glow.style.transform = `translate(${event.clientX - 250}px, ${event.clientY - 250}px)`;
          glow.style.opacity = "1";
        }
      });
    }

    function hideGlow() {
      cancelAnimationFrame(frameId);
      if (glow) {
        glow.style.opacity = "0";
      }
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("blur", hideGlow);
    document.documentElement.addEventListener("mouseleave", hideGlow);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("blur", hideGlow);
      document.documentElement.removeEventListener("mouseleave", hideGlow);
    };
  }, []);

  return <div ref={glowRef} className="mouse-glow" aria-hidden="true" />;
}
