"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { seededRandom } from "@/lib/utils";

/** Soft animated aurora blobs — the ambient backdrop behind the whole page. */
export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <div className="absolute -left-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-accent-indigo/20 blur-[130px] animate-aurora" />
      <div className="absolute right-[-10rem] top-20 h-[32rem] w-[32rem] rounded-full bg-accent-purple/20 blur-[130px] animate-aurora [animation-delay:-6s]" />
      <div className="absolute bottom-[-12rem] left-1/3 h-[34rem] w-[34rem] rounded-full bg-accent-cyan/10 blur-[140px] animate-aurora [animation-delay:-12s]" />
    </div>
  );
}

/** Lightweight floating particle field — deterministic (SSR-safe). */
export function ParticleField({
  count = 26,
  className,
}: {
  count?: number;
  className?: string;
}) {
  const rand = seededRandom(42);
  const particles = Array.from({ length: count }, () => ({
    x: rand() * 100,
    y: rand() * 100,
    size: rand() * 2.5 + 1,
    duration: rand() * 8 + 6,
    delay: rand() * 5,
    opacity: rand() * 0.4 + 0.15,
  }));

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 -z-10", className)}
      aria-hidden
    >
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{ y: [0, -24, 0], opacity: [p.opacity, p.opacity * 2, p.opacity] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/** Faded grid overlay for section backdrops. */
export function GridBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 -z-10 bg-grid", className)}
      aria-hidden
    />
  );
}
