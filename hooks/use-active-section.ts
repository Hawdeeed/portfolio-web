"use client";

import { useEffect, useState } from "react";
import type { SectionId } from "@/share/routes";

/** Scroll-spy: returns the id of the section currently in view. */
export function useActiveSection(ids: readonly SectionId[]): SectionId {
  const [active, setActive] = useState<SectionId>(ids[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visible = new Map<string, number>();

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          visible.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
          // pick the most-visible section
          let best: SectionId = ids[0];
          let bestRatio = -1;
          for (const candidate of ids) {
            const ratio = visible.get(candidate) ?? 0;
            if (ratio > bestRatio) {
              bestRatio = ratio;
              best = candidate;
            }
          }
          if (bestRatio > 0) setActive(best);
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}
