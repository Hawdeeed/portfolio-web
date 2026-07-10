"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { GradientButton } from "@/app/components/button";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { AuroraBackground } from "@/app/components/ui/backgrounds";
import { FieldError, Input, Label, Textarea } from "@/app/components/ui/form";
import { Reveal } from "@/app/components/ui/motion-primitives";
import { CONTACT_INFO } from "@/share/data";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  subject: z.string().max(120).optional(),
  message: z.string().min(10, "Message should be at least 10 characters."),
});

type FormValues = z.infer<typeof schema>;

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error();
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <section id="contact" className="section overflow-hidden">
      <AuroraBackground />
      <div className="container-px">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build"
          highlight="something great"
          description="Have a project, a role, or an idea in mind? I'm always open to a conversation. Drop me a message and I'll get back to you."
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Info panel */}
          <Reveal className="flex flex-col gap-4">
            <div className="rounded-3xl border border-white/[0.08] bg-card/50 p-7">
              <h3 className="font-display text-xl font-bold text-white">
                Get in touch
              </h3>
              <p className="mt-2 text-sm text-white/55">
                Prefer a direct line? Reach me through any of these.
              </p>

              <div className="mt-6 space-y-3">
                {CONTACT_INFO.map((info) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-cyan">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs text-white/40">{info.label}</p>
                        <p className="truncate text-sm font-medium text-white">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );
                  return info.href ? (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="block rounded-xl p-1 transition-colors hover:bg-white/[0.03]"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={info.label} className="p-1">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.04] p-6">
              <p className="flex items-center gap-2 text-sm font-semibold text-emerald-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Available for new opportunities
              </p>
              <p className="mt-2 text-sm text-white/55">
                Open to freelance projects and full-time roles in full-stack &
                AI engineering.
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-3xl border border-white/[0.08] bg-card/50 p-7"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    {...register("name")}
                    aria-invalid={!!errors.name}
                  />
                  <FieldError message={errors.name?.message} />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    {...register("email")}
                    aria-invalid={!!errors.email}
                  />
                  <FieldError message={errors.email?.message} />
                </div>
              </div>

              <div className="mt-5">
                <Label htmlFor="subject">Subject (optional)</Label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  {...register("subject")}
                />
              </div>

              <div className="mt-5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or role…"
                  {...register("message")}
                  aria-invalid={!!errors.message}
                />
                <FieldError message={errors.message?.message} />
              </div>

              <div className="mt-6 flex items-center gap-4">
                <GradientButton
                  type="submit"
                  size="lg"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send message
                    </>
                  )}
                </GradientButton>

                {status === "success" && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-1.5 text-sm font-medium text-emerald-300"
                  >
                    <CheckCircle2 className="h-4 w-4" /> Message sent!
                  </motion.span>
                )}
                {status === "error" && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-sm font-medium text-red-400"
                  >
                    Something went wrong. Try email instead.
                  </motion.span>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
