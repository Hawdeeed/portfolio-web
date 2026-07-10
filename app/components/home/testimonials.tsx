"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Quote, Star } from "lucide-react";
import { GradientButton } from "@/app/components/button";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { SITE } from "@/share/config";
import { TESTIMONIALS } from "@/share/data";
import type { Testimonial } from "@/share/types";

function TestimonialCard({ client }: { client: Testimonial }) {
  return (
    <div className="mb-6 break-inside-avoid rounded-3xl border border-white/[0.08] bg-card/50 p-6 transition-colors hover:border-white/20">
      <div className="flex items-center justify-between">
        <Quote className="h-7 w-7 text-accent-indigo/60" />
        <div className="flex gap-0.5">
          {Array.from({ length: client.rating }).map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-amber-300 text-amber-300"
            />
          ))}
        </div>
      </div>

      <div className="mt-4 space-y-4">
        {client.reviews.map((text, i) => (
          <blockquote
            key={i}
            className="text-sm leading-relaxed text-white/70"
          >
            &ldquo;{text}&rdquo;
          </blockquote>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">
        <span className="font-display text-sm font-semibold text-white">
          {client.clientName}
        </span>
        {client.platformLink ? (
          <a
            href={client.platformLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-accent-cyan hover:text-white"
          >
            {client.platform} <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ) : (
          <span className="text-xs text-white/40">{client.platform}</span>
        )}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients"
          highlight="say"
          description="A selection of reviews from clients I've worked with on Fiverr — from custom AI pipelines and LoRA training to full-stack web builds."
        />

        {/* Masonry wall — handles long & short reviews gracefully */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3"
        >
          {TESTIMONIALS.map((client) => (
            <TestimonialCard key={client.clientName} client={client} />
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <GradientButton href={SITE.fiverr} external variant="secondary">
            View all reviews on Fiverr <ArrowUpRight className="h-4 w-4" />
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
