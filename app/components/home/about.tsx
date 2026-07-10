"use client";

import Image from "next/image";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { SpotlightCard } from "@/app/components/ui/spotlight-card";
import { IntroVideo } from "@/app/components/ui/intro-video";
import { Counter } from "@/app/components/ui/counter";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/app/components/ui/motion-primitives";
import { ABOUT_PARAGRAPHS, QUICK_FACTS, STATS } from "@/share/data";
import { IMAGES } from "@/share/assets";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering products at the"
          highlight="intersection of web & AI"
          description="A quick introduction to who I am, what I build, and how I think about software."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* Portrait card */}
          <Reveal>
            <div className="gradient-border relative overflow-hidden rounded-3xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src={IMAGES.portraitCartoon}
                  alt="Hadeed Ahmed"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-display text-xl font-semibold text-white">
                    Hadeed Ahmed
                  </p>
                  <p className="text-sm text-white/60">
                    Full Stack Developer & Gen AI Engineer
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy + facts */}
          <div className="flex flex-col justify-center">
            <StaggerGroup className="space-y-5">
              {ABOUT_PARAGRAPHS.map((para, i) => (
                <StaggerItem key={i}>
                  <p className="text-base leading-relaxed text-white/65 sm:text-lg">
                    {para}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <StaggerGroup className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {QUICK_FACTS.map((fact) => {
                const Icon = fact.icon;
                return (
                  <StaggerItem key={fact.label}>
                    <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/5 bg-accent-indigo/10 text-accent-cyan">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs text-white/45">{fact.label}</p>
                        <p className="truncate text-sm font-medium text-white">
                          {fact.value}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>
        </div>

        {/* Intro video */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <IntroVideo />
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
              Introduction
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
              Rather watch than read?
            </h3>
            <p className="mt-3 text-base leading-relaxed text-white/60">
              Here&apos;s a short personal introduction — who I am, what I love
              building, and how I can help your team ship intelligent products.
              Press play and let&apos;s get acquainted.
            </p>
          </div>
        </div>

        {/* Stats */}
        <StaggerGroup className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <StaggerItem key={stat.label}>
                <SpotlightCard className="h-full p-6">
                  <Icon className="h-6 w-6 text-accent-purple" />
                  <p className="mt-4 font-display text-4xl font-bold text-white">
                    <Counter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </p>
                  <p className="mt-1 text-sm text-white/50">{stat.label}</p>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
