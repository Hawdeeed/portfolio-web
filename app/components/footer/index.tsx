"use client";

import { GradientButton } from "@/app/components/button";
import { Reveal } from "@/app/components/ui/motion-primitives";
import { scrollToId } from "@/lib/utils";
import { SITE } from "@/share/config";
import { NAV_LINKS, SOCIAL_LINKS } from "@/share/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-surface/40">
      <div className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-48 bg-gradient-radial from-accent-indigo/10 to-transparent blur-2xl" />

      <div className="container-px py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand + CTA */}
          <Reveal className="max-w-sm">
            <button
              onClick={() => scrollToId("home")}
              className="flex items-center gap-2.5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand font-display text-sm font-bold text-white shadow-glow">
                HA
              </span>
              <span className="font-display text-lg font-semibold text-white">
                Hadeed Ahmed
              </span>
            </button>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Full Stack Developer & Gen AI Engineer building intelligent,
              production-grade products. Open to freelance work and full-time
              roles.
            </p>
            <GradientButton href={`mailto:${SITE.email}`} className="mt-6" size="sm">
              Let&apos;s work together
            </GradientButton>
          </Reveal>

          {/* Nav */}
          <Reveal delay={0.1}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Navigate
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToId(link.id)}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Socials */}
          <Reveal delay={0.2}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Connect
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition-all hover:-translate-y-1 hover:border-white/25 hover:text-white hover:shadow-glow"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>
            <p className="mt-6 text-sm text-white/45">{SITE.location}</p>
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm text-white/55 transition-colors hover:text-white"
            >
              {SITE.email}
            </a>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {year} Hadeed Ahmed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
