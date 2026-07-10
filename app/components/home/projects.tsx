"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  FeaturedProject,
  ProjectCard,
} from "@/app/components/cards/project-card";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { PROJECTS } from "@/share/data";
import type { ProjectCategory } from "@/share/types";

const FILTERS: ("All" | ProjectCategory)[] = [
  "All",
  "AI / Gen AI",
  "Full Stack",
];

export default function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const featured = useMemo(() => PROJECTS.filter((p) => p.featured), []);
  const rest = useMemo(() => PROJECTS.filter((p) => !p.featured), []);

  const filteredRest = useMemo(
    () =>
      filter === "All" ? rest : rest.filter((p) => p.category === filter),
    [filter, rest],
  );

  return (
    <section id="projects" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects I'm"
          highlight="proud of"
          description="A mix of AI-native products and production web applications — each one an exercise in clean architecture and considered UX."
        />

        {/* Featured showcase */}
        <div className="mt-16 space-y-8">
          {featured.map((project) => (
            <FeaturedProject key={project.slug} project={project} />
          ))}
        </div>

        {/* Filter + grid */}
        <div className="mt-20">
          <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  filter === f
                    ? "text-white"
                    : "text-white/50 hover:text-white/80",
                )}
              >
                {filter === f && (
                  <motion.span
                    layoutId="project-filter"
                    className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.06]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {f}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredRest.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
