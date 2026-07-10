"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MapPin } from "lucide-react";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { Reveal } from "@/app/components/ui/motion-primitives";
import { TechBadge } from "@/app/components/ui/badge";
import { EXPERIENCE } from "@/share/data";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="Career"
          title="Professional"
          highlight="experience"
          description="Roles where I've shipped real products — from client-facing web apps to secure backend services and AI pipelines."
        />

        <div className="relative mt-16 max-w-3xl lg:mx-auto">
          {/* vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent-indigo/60 via-accent-purple/30 to-transparent md:left-1/2" />

          <div className="space-y-10">
            {EXPERIENCE.map((exp, i) => {
              const alignRight = i % 2 === 1;
              return (
                <Reveal
                  key={exp.company}
                  className="relative pl-12 md:pl-0"
                  delay={i * 0.05}
                >
                  {/* node */}
                  <span className="absolute left-4 top-2 z-10 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center md:left-1/2">
                    <span className="absolute h-3.5 w-3.5 rounded-full bg-gradient-brand shadow-glow" />
                    {exp.current && (
                      <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-accent-cyan/60" />
                    )}
                  </span>

                  <div
                    className={`md:w-[calc(50%-2rem)] ${
                      alignRight ? "md:ml-auto" : ""
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      className="group rounded-2xl border border-white/[0.08] bg-card/50 p-6 transition-colors hover:border-white/20"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-accent-indigo/15 px-3 py-1 text-xs font-medium text-accent-cyan">
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            Current
                          </span>
                        )}
                      </div>

                      <h3 className="mt-3 font-display text-xl font-semibold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-gradient">
                        {exp.company}
                      </p>
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-white/45">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </p>

                      <p className="mt-4 text-sm leading-relaxed text-white/60">
                        {exp.description}
                      </p>

                      <ul className="mt-4 space-y-2">
                        {exp.achievements.map((a) => (
                          <li
                            key={a}
                            className="flex gap-2.5 text-sm text-white/60"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-purple" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {exp.technologies.map((t) => (
                          <TechBadge key={t}>{t}</TechBadge>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
