"use client";

import { cn } from "@/lib/utils";
import { Eyebrow } from "@/app/components/typography";
import { AnimatedText, Reveal } from "./motion-primitives";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

/** Consistent section header: eyebrow → animated title → description. */
export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>

      <h2 className="max-w-3xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        <AnimatedText text={title} />
        {highlight ? (
          <>
            {" "}
            <span className="text-gradient-animated">
              <AnimatedText text={highlight} delay={0.15} />
            </span>
          </>
        ) : null}
      </h2>

      {description ? (
        <Reveal delay={0.15}>
          <p
            className={cn(
              "max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
