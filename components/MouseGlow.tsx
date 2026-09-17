// Browser events and React effects need a client component.
"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
  // A ref stores the actual HTML element without triggering renders when it changes.
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    // Enable this only for a mouse-like pointer and users who allow motion.
    const canAnimate = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );

    if (!glow || !canAnimate.matches) {
      return;
    }

    // Keep the pending frame ID so a newer mouse event can replace it.
    let frameId = 0;

    function handleMouseMove(event: MouseEvent) {
      // Update the glow at most once per frame, without re-rendering React.
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        if (glow) {
          // clientX/Y are viewport coordinates. Subtract half the 500px glow
          // so its centre, rather than its top-left corner, follows the mouse.
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

    // Cleanup runs when this component leaves the page, preventing duplicate listeners.
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("blur", hideGlow);
      document.documentElement.removeEventListener("mouseleave", hideGlow);
    };
  }, []); // An empty dependency list sets this up on mount, not on each render.

  // Decorative only: ignore mouse clicks and hide it from screen readers.
  return <div ref={glowRef} className="mouse-glow" aria-hidden="true" />;
}
