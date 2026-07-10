"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { GradientButton } from "@/app/components/button";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn, scrollToId } from "@/lib/utils";
import { SITE } from "@/share/config";
import { NAV_LINKS } from "@/share/data";
import { SECTIONS } from "@/share/routes";

const NAV_IDS = SECTIONS;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const active = useActiveSection(NAV_IDS);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  function go(id: string) {
    setOpen(false);
    scrollToId(id);
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          className={cn(
            "flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5",
            scrolled
              ? "glass-strong shadow-card"
              : "border border-transparent bg-transparent",
          )}
        >
          {/* Logo */}
          <button
            onClick={() => go("home")}
            className="group flex items-center gap-2.5"
            aria-label="Go to top"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand font-display text-sm font-bold text-white shadow-glow">
              HA
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-tight text-white sm:block">
              Hadeed Ahmed
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <button
                    onClick={() => go(link.id)}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                      isActive ? "text-white" : "text-white/55 hover:text-white",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.06]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <GradientButton
              href={SITE.resume}
              external
              size="sm"
              variant="primary"
              className="hidden sm:inline-flex"
            >
              Resume
            </GradientButton>

            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-4 top-24 rounded-3xl glass-strong p-4"
            >
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <button
                      onClick={() => go(link.id)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium transition-colors",
                        active === link.id
                          ? "bg-white/[0.06] text-white"
                          : "text-white/60 hover:bg-white/5 hover:text-white",
                      )}
                    >
                      {link.name}
                      <span className="text-xs text-white/30">
                        0{i + 1}
                      </span>
                    </button>
                  </motion.li>
                ))}
              </ul>
              <GradientButton
                href={SITE.resume}
                external
                className="mt-3 w-full"
              >
                Download Resume
              </GradientButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
