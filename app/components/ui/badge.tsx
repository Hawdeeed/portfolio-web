import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Small tech / topic pill. */
export function TechBadge({
  children,
  className,
  active = false,
}: {
  children: ReactNode;
  className?: string;
  active?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium transition-colors",
        active
          ? "border-accent-indigo/50 bg-accent-indigo/15 text-white"
          : "border-white/10 bg-white/[0.04] text-white/65 hover:border-white/20 hover:text-white/90",
        className,
      )}
    >
      {children}
    </span>
  );
}

const STATUS_STYLES: Record<string, string> = {
  Live: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  MVP: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  Completed: "border-sky-400/30 bg-sky-400/10 text-sky-300",
  "In Progress": "border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-300",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
        STATUS_STYLES[status] ?? "border-white/15 bg-white/5 text-white/70",
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
      {status}
    </span>
  );
}
