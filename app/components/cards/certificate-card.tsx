"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import type { Certificate } from "@/share/types";

export function CertificateCard({ cert }: { cert: Certificate }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-card/50 transition-colors hover:border-white/20"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-white/[0.02]">
        <Image
          src={cert.image}
          alt={cert.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2">
          <BadgeCheck className="h-4 w-4 text-accent-cyan" />
          <span className="text-xs font-medium text-white/45">{cert.issuer}</span>
        </div>
        <h3 className="mt-2 font-display text-base font-semibold text-white">
          {cert.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/55">
          {cert.description}
        </p>
      </div>
    </motion.div>
  );
}
