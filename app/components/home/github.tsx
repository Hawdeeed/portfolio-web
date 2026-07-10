"use client";

import {
  AlertTriangle,
  CalendarClock,
  Github,
  Users,
} from "lucide-react";
import Image from "next/image";
import { GradientButton } from "@/app/components/button";
import { ContributionHeatmap } from "@/app/components/github/heatmap";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { Reveal } from "@/app/components/ui/motion-primitives";
import { useGitHub } from "@/hooks/use-github";
import { cn } from "@/lib/utils";
import { SITE } from "@/share/config";
import type { GitHubData } from "@/share/types";

/* ------------------------------------------------------------------ */
/* Skeleton                                                            */
/* ------------------------------------------------------------------ */
function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-2xl border border-white/[0.06] bg-white/[0.03]",
        className,
      )}
    />
  );
}

function LoadingState() {
  return (
    <div className="mt-16 space-y-6">
      <Skeleton className="h-64" />
      <Skeleton className="h-40" />
    </div>
  );
}

function ErrorState({ message }: { message: string }) {
  return (
    <div className="mx-auto mt-16 flex max-w-md flex-col items-center rounded-3xl border border-white/[0.08] bg-card/50 p-10 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
        <AlertTriangle className="h-7 w-7" />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold text-white">
        Couldn&apos;t load live GitHub data
      </h3>
      <p className="mt-2 text-sm text-white/50">{message}</p>
      <p className="mt-1 text-xs text-white/35">
        This is usually a temporary rate-limit. Visit the profile directly:
      </p>
      <GradientButton href={SITE.github} external variant="secondary" className="mt-5">
        <Github className="h-4 w-4" /> @{SITE.githubUsername}
      </GradientButton>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */
function GitHubContent({ data }: { data: GitHubData }) {
  return (
    <div className="mt-16 space-y-8">
      {/* Profile */}
      <Reveal>
        <div className="flex flex-col rounded-3xl border border-white/[0.08] bg-card/50 p-7">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-2xl ring-2 ring-accent-indigo/40">
              <Image
                src={data.profile.avatarUrl}
                alt={data.profile.name ?? data.profile.login}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white">
                {data.profile.name ?? data.profile.login}
              </h3>
              <a
                href={data.profile.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-accent-cyan hover:text-white"
              >
                @{data.profile.login}
              </a>
            </div>
          </div>

          {data.profile.bio && (
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {data.profile.bio}
            </p>
          )}

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/55">
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-white/40" />
              <strong className="text-white">{data.profile.followers}</strong>{" "}
              followers
            </span>
            <span className="flex items-center gap-1.5">
              <strong className="text-white">{data.profile.following}</strong>{" "}
              following
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarClock className="h-4 w-4 text-white/40" />
              {data.totals.yearsOnGitHub}+ yrs on GitHub
            </span>
          </div>

          <GradientButton
            href={data.profile.htmlUrl}
            external
            variant="secondary"
            size="sm"
            className="mt-6 w-fit"
          >
            <Github className="h-4 w-4" /> View full profile
          </GradientButton>
        </div>
      </Reveal>

      {/* Heatmap */}
      <Reveal delay={0.1}>
        <ContributionHeatmap data={data.contributions} />
      </Reveal>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */
export default function GitHubSection() {
  const state = useGitHub();

  return (
    <section id="github" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="Open Source"
          title="Live from"
          highlight="GitHub"
          description="Fetched live from the GitHub API — my profile and contribution activity over the past year."
        />

        {state.status === "loading" && <LoadingState />}
        {state.status === "error" && <ErrorState message={state.error} />}
        {state.status === "success" && <GitHubContent data={state.data} />}
      </div>
    </section>
  );
}
