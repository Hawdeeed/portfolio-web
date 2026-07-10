import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Small eyebrow label above section headings. */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/70 backdrop-blur",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
      {children}
    </span>
  );
}

export function Heading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "font-display font-bold tracking-tight text-white",
        Tag === "h1" && "text-4xl sm:text-6xl lg:text-7xl",
        Tag === "h2" && "text-3xl sm:text-4xl lg:text-5xl",
        Tag === "h3" && "text-xl sm:text-2xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Text({
  children,
  className,
  muted = true,
}: {
  children: ReactNode;
  className?: string;
  muted?: boolean;
}) {
  return (
    <p
      className={cn(
        "text-base leading-relaxed sm:text-lg",
        muted ? "text-white/60" : "text-white/85",
        className,
      )}
    >
      {children}
    </p>
  );
}
