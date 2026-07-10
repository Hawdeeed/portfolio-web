"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ContributionCalendar } from "@/share/types";

const LEVEL_COLORS = [
  "bg-white/[0.04]",
  "bg-emerald-900/70",
  "bg-emerald-700/80",
  "bg-emerald-500/90",
  "bg-emerald-400",
];

export function ContributionHeatmap({
  data,
}: {
  data: ContributionCalendar | null;
}) {
  const [hover, setHover] = useState<string | null>(null);

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-12 text-center">
        <p className="text-sm font-medium text-white/70">
          Contribution graph unavailable
        </p>
        <p className="mt-1 max-w-md text-xs text-white/40">
          The live GitHub contribution calendar requires a personal access token
          on the server (GraphQL API). All other GitHub stats are live.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-card/50 p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-medium text-white/75">
          <span className="text-gradient font-semibold">
            {data.totalContributions.toLocaleString()}
          </span>{" "}
          contributions in the last year
        </p>
        <div className="hidden items-center gap-1.5 text-xs text-white/40 sm:flex">
          Less
          {LEVEL_COLORS.map((c, i) => (
            <span key={i} className={cn("h-2.5 w-2.5 rounded-sm", c)} />
          ))}
          More
        </div>
      </div>

      <div className="no-scrollbar overflow-x-auto">
        <div className="flex gap-[3px]">
          {data.weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((day) => (
                <motion.div
                  key={day.date}
                  initial={{ opacity: 0, scale: 0.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: Math.min(wi * 0.006, 0.4) }}
                  onMouseEnter={() =>
                    setHover(`${day.count} on ${day.date}`)
                  }
                  onMouseLeave={() => setHover(null)}
                  className={cn(
                    "h-2.5 w-2.5 rounded-sm transition-transform hover:scale-125 hover:ring-1 hover:ring-white/40",
                    LEVEL_COLORS[day.level],
                  )}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 h-4 text-xs text-white/50">
        {hover ?? ""}
      </div>
    </div>
  );
}
