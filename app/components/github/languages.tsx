"use client";

import { motion } from "framer-motion";
import type { LanguageStat } from "@/share/types";

/** Animated language distribution — a stacked bar plus per-language rows. */
export function LanguageChart({ languages }: { languages: LanguageStat[] }) {
  if (languages.length === 0) {
    return (
      <p className="text-sm text-white/45">No language data available.</p>
    );
  }

  const total = languages.reduce((sum, l) => sum + l.count, 0) || 1;

  return (
    <div>
      {/* Stacked bar */}
      <div className="flex h-3 w-full overflow-hidden rounded-full bg-white/5">
        {languages.map((lang, i) => (
          <motion.div
            key={lang.name}
            initial={{ width: 0 }}
            whileInView={{ width: `${(lang.count / total) * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            style={{ backgroundColor: lang.color }}
            title={`${lang.name} · ${lang.percentage}%`}
          />
        ))}
      </div>

      {/* Rows */}
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {languages.map((lang, i) => (
          <motion.div
            key={lang.name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-2.5"
          >
            <span
              className="h-3 w-3 shrink-0 rounded-full"
              style={{ backgroundColor: lang.color }}
            />
            <span className="text-sm text-white/75">{lang.name}</span>
            <span className="ml-auto font-mono text-xs text-white/40">
              {lang.percentage}%
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
