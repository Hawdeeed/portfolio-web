"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import { TechBadge } from "@/app/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/share/types";

/** One subtle emerald wash behind every project cover — consistent, one-hue. */
const COVER_GRADIENT = "from-emerald-600/20 via-emerald-500/10 to-emerald-400/10";

function coverGradient(_project: Project) {
  return COVER_GRADIENT;
}

/* ------------------------------------------------------------------ */
/* Featured — large showcase                                           */
/* ------------------------------------------------------------------ */
export function FeaturedProject({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="gradient-border group overflow-hidden rounded-3xl"
    >
      <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-card/50">
        {/* Media — full screenshot, never cropped */}
        <div
          className={cn(
            "relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden border-b border-white/[0.06] bg-gradient-to-br",
            coverGradient(project),
          )}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-[1.02] sm:p-6"
            />
          ) : (
            <span className="px-6 text-center font-display text-3xl font-bold text-white/85">
              {project.title}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-7 lg:p-9">
          <div className="flex items-center gap-3 text-xs">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-medium text-accent-cyan">
              {project.category}
            </span>
            <span className="text-white/40">{project.year}</span>
          </div>

          <h3 className="mt-4 font-display text-2xl font-bold text-white lg:text-3xl">
            {project.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-gradient">
            {project.tagline}
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60">
            {project.description}
          </p>

          {project.metrics && (
            <div className="mt-6 grid grid-cols-3 gap-3">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-center"
                >
                  <p className="font-display text-base font-bold text-white">
                    {m.value}
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-wide text-white/40">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <TechBadge key={t}>{t}</TechBadge>
            ))}
          </div>

          {(project.liveUrl || project.githubUrl) && (
            <div className="mt-7 flex flex-wrap items-center gap-5">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan hover:text-white"
                >
                  Live demo <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-white"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* ------------------------------------------------------------------ */
/* Compact — grid card for secondary projects                          */
/* ------------------------------------------------------------------ */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-card/50 transition-colors hover:border-white/20"
    >
      <div
        className={cn(
          "relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden border-b border-white/[0.06] bg-gradient-to-br",
          coverGradient(project),
        )}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <span className="px-4 text-center font-display text-xl font-bold text-white/85">
            {project.title}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs">
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-medium text-accent-cyan">
            {project.category}
          </span>
          <span className="text-white/40">{project.year}</span>
        </div>

        <h3 className="mt-3 font-display text-lg font-semibold text-white">
          {project.title}
        </h3>
        <p className="text-xs font-medium text-gradient">{project.tagline}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/55">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 5).map((t) => (
            <TechBadge key={t}>{t}</TechBadge>
          ))}
        </div>

        {(project.githubUrl || project.liveUrl) && (
          <div className="mt-auto flex items-center gap-4 pt-5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-white"
              >
                <Github className="h-4 w-4" /> Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan hover:text-white"
              >
                Live <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
