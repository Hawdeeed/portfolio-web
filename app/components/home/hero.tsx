"use client";

import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { GradientButton, MagneticButton } from "@/app/components/button";
import {
  AuroraBackground,
  GridBackground,
  ParticleField,
} from "@/app/components/ui/backgrounds";
import { Marquee } from "@/app/components/ui/marquee";
import { EASE } from "@/app/components/ui/motion-primitives";
import { scrollToId } from "@/lib/utils";
import { SITE } from "@/share/config";
import { HERO, MARQUEE_TECH, SOCIAL_LINKS } from "@/share/data";
import { IMAGES } from "@/share/assets";

/* Rotating role text */
function RotatingRole() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % HERO.roles.length),
      2600,
    );
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-flex h-[1.3em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="whitespace-nowrap text-gradient-animated"
        >
          {HERO.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* Portrait with cursor parallax + floating chips */
function Portrait() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 20,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 20,
  });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function reset() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className="perspective relative mx-auto w-full max-w-[380px] lg:max-w-[440px]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: EASE, delay: 0.3 }}
    >
      {/* Glow ring */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-brand opacity-30 blur-3xl" />

      <div className="gradient-border group relative overflow-hidden rounded-[2rem]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent">
          <Image
            src={IMAGES.portrait}
            alt="Hadeed Ahmed — Full Stack Developer & Gen AI Engineer"
            fill
            priority
            sizes="(max-width: 1024px) 380px, 440px"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
        </div>
      </div>

      {/* Floating chips */}
      <motion.div
        style={{ transform: "translateZ(50px)" }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-6 top-16 hidden rounded-2xl glass-strong px-4 py-3 sm:block"
      >
        <p className="text-xs text-white/50">Currently</p>
        <p className="text-sm font-semibold text-white">Full Stack + AI</p>
      </motion.div>

      <motion.div
        style={{ transform: "translateZ(50px)" }}
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-4 bottom-24 hidden rounded-2xl glass-strong px-4 py-3 sm:block"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand">
            <Sparkles className="h-4 w-4 text-white" />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">Gen AI</p>
            <p className="text-xs text-white/50">LLMs · ComfyUI</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full glass-strong px-5 py-2"
      >
        <span className="flex items-center gap-2 text-sm font-medium text-white">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px] shadow-emerald-400" />
          Available for work
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <AuroraBackground />
      <GridBackground />
      <ParticleField count={22} />

      <div className="container-px grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: copy */}
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for freelance & full-time roles
          </motion.div>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="block"
            >
              Hadeed Ahmed
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
              className="mt-2 block text-2xl font-semibold sm:text-4xl lg:text-5xl"
            >
              <RotatingRole />
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            {HERO.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton>
              <GradientButton size="lg" onClick={() => scrollToId("contact")}>
                <Mail className="h-4 w-4" />
                Get in touch
              </GradientButton>
            </MagneticButton>
            <GradientButton
              href={SITE.resume}
              external
              variant="secondary"
              size="lg"
            >
              <Download className="h-4 w-4" />
              Résumé
            </GradientButton>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-8 flex items-center gap-3"
          >
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/60 transition-all hover:-translate-y-1 hover:border-white/25 hover:text-white hover:shadow-glow"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Right: portrait */}
        <Portrait />
      </div>

      {/* Tech marquee */}
      <div className="absolute inset-x-0 bottom-6 hidden lg:block">
        <Marquee className="py-3">
          {MARQUEE_TECH.map((tech) => (
            <span
              key={tech}
              className="mx-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-1.5 text-sm font-medium text-white/40"
            >
              {tech}
            </span>
          ))}
        </Marquee>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollToId("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 lg:flex"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  );
}
