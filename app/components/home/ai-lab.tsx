"use client";

import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Cpu, Sparkles } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { AuroraBackground } from "@/app/components/ui/backgrounds";
import { Reveal } from "@/app/components/ui/motion-primitives";
import { cn } from "@/lib/utils";
import { AI_CAPABILITIES, AI_WORKFLOWS } from "@/share/data";

export default function AiLab() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  const scrollTo = useCallback(
    (i: number) => embla?.scrollTo(i),
    [embla],
  );

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  return (
    <section id="ai" className="section overflow-hidden">
      <AuroraBackground />
      <div className="container-px">
        <SectionHeading
          eyebrow="AI Lab"
          title="Generative AI"
          highlight="workflows & pipelines"
          description="Beyond web apps — I design ComfyUI pipelines for image and video generation: LoRA training, segmentation, and image-to-video animation."
        />

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]">
          {/* Carousel */}
          <div className="min-w-0">
            <div className="gradient-border overflow-hidden rounded-3xl">
              <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
                <div className="flex items-stretch">
                  {AI_WORKFLOWS.map((wf) => (
                    <div
                      key={wf.title}
                      className="flex min-w-0 flex-[0_0_100%] flex-col bg-card"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={wf.image}
                          alt={wf.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col border-t border-white/[0.06] p-5 sm:p-6">
                        <div className="mb-3 flex flex-wrap gap-2">
                          {wf.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-white/70"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                          {wf.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                          {wf.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* controls */}
            <div className="mt-5 flex items-center justify-between">
              <div className="flex gap-2">
                {AI_WORKFLOWS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      selected === i
                        ? "w-8 bg-gradient-brand"
                        : "w-2 bg-white/20 hover:bg-white/40",
                    )}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => embla?.scrollPrev()}
                  aria-label="Previous"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-colors hover:border-white/25 hover:text-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => embla?.scrollNext()}
                  aria-label="Next"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-colors hover:border-white/25 hover:text-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <Reveal delay={0.1} className="min-w-0">
            <div className="rounded-3xl border border-white/[0.08] bg-card/50 p-6 sm:p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
                <Cpu className="h-6 w-6 text-white" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-white">
                AI Capabilities
              </h3>
              <p className="mt-2 text-sm text-white/55">
                The generative & LLM techniques I bring into production products.
              </p>

              <ul className="mt-6 space-y-2.5">
                {AI_CAPABILITIES.map((cap, i) => (
                  <motion.li
                    key={cap}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 text-sm text-white/70"
                  >
                    <Sparkles className="h-4 w-4 shrink-0 text-accent-cyan" />
                    {cap}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
