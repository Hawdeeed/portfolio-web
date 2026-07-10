"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { Marquee } from "@/app/components/ui/marquee";
import {
  StaggerGroup,
  StaggerItem,
} from "@/app/components/ui/motion-primitives";
import { GridBackground } from "@/app/components/ui/backgrounds";
import { cn } from "@/lib/utils";
import { MARQUEE_TECH, SKILL_CATEGORIES } from "@/share/data";

export default function Skills() {
  return (
    <section id="skills" className="section overflow-hidden">
      <GridBackground className="opacity-60" />
      <div className="container-px">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Skills &"
          highlight="capabilities"
          description="A versatile toolkit spanning modern frontend, robust backends, and the full generative-AI stack."
        />

        <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <StaggerItem key={cat.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-card/50 p-6"
                >
                  {/* accent glow */}
                  <div
                    className={cn(
                      "absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40",
                      cat.accent,
                    )}
                  />

                  <span
                    className={cn(
                      "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg",
                      cat.accent,
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </span>

                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {cat.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-white/65 transition-colors group-hover:border-white/15 group-hover:text-white/85"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>

      {/* Tech marquee band */}
      <div className="mt-16 space-y-4">
        <Marquee>
          {MARQUEE_TECH.map((t) => (
            <span
              key={t}
              className="mx-1 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-2.5 font-display text-lg font-medium text-white/30"
            >
              {t}
            </span>
          ))}
        </Marquee>
        <Marquee reverse>
          {[...MARQUEE_TECH].reverse().map((t) => (
            <span
              key={t}
              className="mx-1 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-2.5 font-display text-lg font-medium text-white/20"
            >
              {t}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
