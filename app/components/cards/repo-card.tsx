"use client";

import { motion } from "framer-motion";
import { CircleDot, GitFork, Star } from "lucide-react";
import { formatCompact } from "@/lib/utils";
import type { GitHubRepo } from "@/share/types";

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3776AB",
  "C++": "#F34B7D",
  HTML: "#E34C26",
  CSS: "#563D7C",
  Java: "#B07219",
  Shell: "#89E051",
};

function relativeTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / 86_400_000);
  if (days < 1) return "today";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

export function RepoCard({ repo }: { repo: GitHubRepo }) {
  return (
    <motion.a
      href={repo.htmlUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-card/50 p-5 transition-colors hover:border-white/20"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="line-clamp-1 font-mono text-sm font-semibold text-white group-hover:text-gradient">
          {repo.name}
        </h3>
        <span className="shrink-0 text-xs text-white/35">
          {relativeTime(repo.updatedAt)}
        </span>
      </div>

      <p className="mt-2 line-clamp-2 min-h-[2.5rem] text-sm text-white/55">
        {repo.description ?? "No description provided."}
      </p>

      {repo.topics.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {repo.topics.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full bg-accent-indigo/10 px-2 py-0.5 text-[10px] font-medium text-accent-cyan"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex items-center gap-4 pt-4 text-xs text-white/50">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{
                backgroundColor: LANGUAGE_COLORS[repo.language] ?? "#8B949E",
              }}
            />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5" /> {formatCompact(repo.stars)}
        </span>
        <span className="flex items-center gap-1">
          <GitFork className="h-3.5 w-3.5" /> {formatCompact(repo.forks)}
        </span>
        {repo.openIssues > 0 && (
          <span className="flex items-center gap-1">
            <CircleDot className="h-3.5 w-3.5" /> {repo.openIssues}
          </span>
        )}
      </div>
    </motion.a>
  );
}
