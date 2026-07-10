"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import {
  forwardRef,
  useRef,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "text-white shadow-glow hover:shadow-glow-lg bg-gradient-brand bg-[length:200%_auto] hover:bg-[position:100%_0]",
        secondary:
          "border border-white/15 bg-white/[0.03] text-white/90 backdrop-blur hover:border-white/30 hover:bg-white/[0.07]",
        ghost: "text-white/70 hover:bg-white/5 hover:text-white",
        outline:
          "border border-accent-indigo/40 text-white/90 hover:border-accent-indigo hover:bg-accent-indigo/10",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-[52px] px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

interface BaseProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  children: ReactNode;
}

/* ------------------------------------------------------------------ */
/* GradientButton — button or link                                     */
/* ------------------------------------------------------------------ */
interface GradientButtonProps
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> {
  href?: string;
  external?: boolean;
}

export const GradientButton = forwardRef<
  HTMLButtonElement,
  GradientButtonProps
>(function GradientButton(
  { className, variant, size, children, href, external, ...props },
  ref,
) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button ref={ref} className={classes} {...props}>
      {children}
    </button>
  );
});

/* ------------------------------------------------------------------ */
/* MagneticButton — wraps content, follows cursor within a radius      */
/* ------------------------------------------------------------------ */
export function MagneticButton({
  children,
  className,
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}
