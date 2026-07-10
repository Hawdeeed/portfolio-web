"use client";

import { ReactLenis } from "lenis/react";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";

/** Global providers. Wraps the app in Lenis smooth scrolling, respecting the
 *  user's reduced-motion preference. */
export function Providers({ children }: { children: React.ReactNode }) {
  const reduce = usePrefersReducedMotion();

  if (reduce) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
      }}
    >
      {children}
    </ReactLenis>
  );
}
