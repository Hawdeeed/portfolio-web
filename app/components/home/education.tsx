"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { CertificateCard } from "@/app/components/cards/certificate-card";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { GridBackground } from "@/app/components/ui/backgrounds";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/app/components/ui/motion-primitives";
import { TechBadge } from "@/app/components/ui/badge";
import { ACHIEVEMENTS, CERTIFICATES, EDUCATION } from "@/share/data";

export default function Education() {
  return (
    <section id="education" className="section overflow-hidden">
      <GridBackground className="opacity-50" />
      <div className="container-px">
        <SectionHeading
          eyebrow="Background"
          title="Education, honours &"
          highlight="certifications"
          description="My academic foundation, the recognitions I've earned, and the credentials that back my skills."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Education */}
          <Reveal>
            {EDUCATION.map((edu) => (
              <div
                key={edu.institution}
                className="gradient-border h-full overflow-hidden rounded-3xl"
              >
                <div className="h-full rounded-3xl border border-white/[0.08] bg-card/50 p-7">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-white/60">{edu.institution}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
                    {edu.period && (
                      <span className="rounded-full bg-accent-indigo/15 px-3 py-1 font-medium text-accent-cyan">
                        {edu.period}
                      </span>
                    )}
                    <span className="text-white/50">{edu.location}</span>
                    {edu.grade && (
                      <span className="rounded-full bg-emerald-400/10 px-3 py-1 font-medium text-emerald-300">
                        {edu.grade}
                      </span>
                    )}
                  </div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-white/40">
                    Key coursework
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {edu.coursework.map((c) => (
                      <TechBadge key={c}>{c}</TechBadge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Reveal>

          {/* Achievements */}
          <StaggerGroup className="grid gap-4">
            {ACHIEVEMENTS.map((ach) => {
              const Icon = ach.icon;
              return (
                <StaggerItem key={ach.title}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="flex gap-4 rounded-2xl border border-white/[0.08] bg-card/50 p-5 transition-colors hover:border-white/20"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="font-display text-sm font-semibold text-white">
                        {ach.title}
                      </h4>
                      <p className="mt-1 text-sm text-white/55">
                        {ach.description}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>

        {/* Certificates */}
        <div className="mt-14">
          <Reveal>
            <h3 className="mb-6 text-center font-display text-xl font-semibold text-white sm:text-left">
              Certifications
            </h3>
          </Reveal>
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATES.map((cert) => (
              <StaggerItem key={cert.title}>
                <CertificateCard cert={cert} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
