"use client";

import { motion } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { IMAGES } from "@/share/assets";

/** Cinematic inline intro-video player with a poster + custom play overlay.
 *  Uses the transcoded H.264 MP4 (browser-safe) with a poster fallback. */
export function IntroVideo({ className }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);

  function toggle() {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
      setStarted(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  function toggleMute() {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn("gradient-border group overflow-hidden rounded-3xl", className)}
    >
      <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-black">
        <video
          ref={ref}
          className="h-full w-full object-cover"
          poster={IMAGES.introVideoPoster}
          playsInline
          preload="none"
          onEnded={() => setPlaying(false)}
          onClick={toggle}
        >
          <source src={IMAGES.introVideo} type="video/mp4" />
        </video>

        {/* Poster overlay (before first play) */}
        {!started && (
          <button
            onClick={toggle}
            aria-label="Play introduction video"
            className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-background/70 via-background/20 to-background/30"
          >
            <span className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
              Video Introduction
            </span>
            <motion.span
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-brand shadow-glow-lg"
            >
              <span className="absolute h-20 w-20 animate-ping rounded-full bg-accent-indigo/30" />
              <Play className="ml-1 h-8 w-8 fill-white text-white" />
            </motion.span>
            <p className="mt-5 font-display text-lg font-semibold text-white">
              Meet Hadeed — in 24 seconds
            </p>
            <p className="mt-1 text-sm text-white/55">
              A quick personal introduction
            </p>
          </button>
        )}

        {/* Controls (after start) */}
        {started && (
          <div className="pointer-events-none absolute inset-0 flex items-end justify-between p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <button
              onClick={toggle}
              aria-label={playing ? "Pause" : "Play"}
              className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full glass-strong text-white"
            >
              {playing ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="ml-0.5 h-5 w-5 fill-white" />
              )}
            </button>
            <button
              onClick={toggleMute}
              aria-label={muted ? "Unmute" : "Mute"}
              className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full glass-strong text-white"
            >
              {muted ? (
                <VolumeX className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
