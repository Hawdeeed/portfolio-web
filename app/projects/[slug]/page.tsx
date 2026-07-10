import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  Lightbulb,
  ListChecks,
  Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GradientButton } from "@/app/components/button";
import { TechBadge } from "@/app/components/ui/badge";
import { Reveal } from "@/app/components/ui/motion-primitives";
import { cn } from "@/lib/utils";
import { SITE } from "@/share/config";
import { PROJECTS } from "@/share/data";
import type { Project } from "@/share/types";

const CATEGORY_GRADIENT: Record<string, string> = {
  "AI / Gen AI": "from-fuchsia-600/30 via-purple-600/20 to-cyan-500/20",
  "Full Stack": "from-indigo-600/30 via-blue-600/20 to-sky-500/20",
  Frontend: "from-sky-600/30 via-indigo-600/20 to-purple-500/20",
  Systems: "from-amber-600/30 via-orange-600/20 to-rose-500/20",
};

function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

/* Pre-render every project at build time. */
export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  const title = `${project.title} — ${project.tagline}`;
  const description = project.description.slice(0, 155);
  const url = `${SITE.url}/projects/${project.slug}`;

  return {
    title: `${project.title} — Case Study`,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      images: project.image ? [{ url: project.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/* ------------------------------------------------------------------ */
/* Detail block — Features / Challenge / Solution                      */
/* ------------------------------------------------------------------ */
function DetailBlock({
  icon: Icon,
  title,
  color,
  children,
}: {
  icon: typeof Target;
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-card/50 p-6 lg:p-7">
      <p
        className={cn(
          "mb-3 flex items-center gap-2 font-display text-sm font-semibold",
          color,
        )}
      >
        <Icon className="h-4 w-4" />
        {title}
      </p>
      {children}
    </div>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const gradient =
    CATEGORY_GRADIENT[project.category] ?? "from-indigo-600/30 to-cyan-500/20";

  return (
    <article className="section">
      <div className="container-px mx-auto max-w-5xl">
        {/* Back */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/55 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>

        {/* Header */}
        <Reveal className="mt-8">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-medium text-accent-cyan">
              {project.category}
            </span>
            <span className="text-white/40">{project.year}</span>
          </div>

          <h1 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 text-lg font-medium text-gradient">
            {project.tagline}
          </p>
        </Reveal>

        {/* Hero media */}
        <Reveal delay={0.05} className="mt-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/[0.08]">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover object-top"
              />
            ) : (
              <div
                className={cn(
                  "flex h-full w-full items-center justify-center bg-gradient-to-br",
                  gradient,
                )}
              >
                <span className="px-6 text-center font-display text-3xl font-bold text-white/85">
                  {project.title}
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
          </div>
        </Reveal>

        {/* Metrics */}
        {project.metrics && (
          <Reveal delay={0.1} className="mt-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-white/[0.08] bg-card/50 p-5 text-center"
                >
                  <p className="font-display text-xl font-bold text-white lg:text-2xl">
                    {m.value}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-wide text-white/45">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        )}

        {/* Overview */}
        <Reveal delay={0.1} className="mt-12">
          <h2 className="font-display text-xl font-bold text-white">Overview</h2>
          <p className="mt-3 text-base leading-relaxed text-white/65">
            {project.description}
          </p>
        </Reveal>

        {/* Detail blocks */}
        <div className="mt-8 space-y-5">
          <Reveal delay={0.05}>
            <DetailBlock
              icon={ListChecks}
              title="Key Features"
              color="text-accent-cyan"
            >
              <ul className="grid gap-2 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-white/65">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-purple" />
                    {f}
                  </li>
                ))}
              </ul>
            </DetailBlock>
          </Reveal>

          {project.challenge && (
            <Reveal delay={0.05}>
              <DetailBlock icon={Target} title="Challenge" color="text-amber-300">
                <p className="text-sm leading-relaxed text-white/65">
                  {project.challenge}
                </p>
              </DetailBlock>
            </Reveal>
          )}

          {project.solution && (
            <Reveal delay={0.05}>
              <DetailBlock
                icon={Lightbulb}
                title="Solution"
                color="text-emerald-300"
              >
                <p className="text-sm leading-relaxed text-white/65">
                  {project.solution}
                </p>
              </DetailBlock>
            </Reveal>
          )}
        </div>

        {/* Tech stack */}
        <Reveal delay={0.05} className="mt-10">
          <h2 className="font-display text-xl font-bold text-white">
            Tech stack
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <TechBadge key={t}>{t}</TechBadge>
            ))}
          </div>
        </Reveal>

        {/* CTAs */}
        {(project.liveUrl || project.githubUrl) && (
          <Reveal delay={0.05} className="mt-10">
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <GradientButton href={project.liveUrl} external variant="primary">
                  Live demo <ArrowUpRight className="h-4 w-4" />
                </GradientButton>
              )}
              {project.githubUrl && (
                <GradientButton
                  href={project.githubUrl}
                  external
                  variant="secondary"
                >
                  <Github className="h-4 w-4" /> View code
                </GradientButton>
              )}
            </div>
          </Reveal>
        )}

        {/* Footer nav */}
        <div className="mt-16 border-t border-white/[0.08] pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-cyan transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all projects
          </Link>
        </div>
      </div>
    </article>
  );
}
