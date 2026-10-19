import type { LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */
export interface NavLink {
  name: string;
  id: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

/* ------------------------------------------------------------------ */
/* About / stats                                                       */
/* ------------------------------------------------------------------ */
export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon: LucideIcon;
}

export interface QuickFact {
  label: string;
  value: string;
  icon: LucideIcon;
}

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */
export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  accent: string; // tailwind gradient stops, e.g. "from-indigo-500 to-purple-500"
  skills: string[];
}

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */
export type ProjectCategory = "Full Stack" | "AI / Gen AI" | "Frontend" | "Systems";
export type ProjectStatus = "Live" | "MVP" | "Completed" | "In Progress";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  year: string;
  image?: string;
  features: string[];
  challenge?: string;
  solution?: string;
  techStack: string[];
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

/* Client testimonials / reviews */
export interface Testimonial {
  clientName: string;
  platform: string;
  platformLink?: string;
  rating: number;
  reviews: string[];
}

/* AI / ComfyUI workflow showcase */
export interface AiWorkflow {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

/* ------------------------------------------------------------------ */
/* Education / certificates / achievements                             */
/* ------------------------------------------------------------------ */
export interface EducationItem {
  institution: string;
  degree: string;
  period?: string;
  location: string;
  grade?: string;
  coursework: string[];
}

export interface Certificate {
  image: string;
  title: string;
  issuer: string;
  description: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: LucideIcon;
}

/* ------------------------------------------------------------------ */
/* GitHub                                                              */
/* ------------------------------------------------------------------ */
export interface GitHubProfile {
  login: string;
  name: string | null;
  avatarUrl: string;
  bio: string | null;
  followers: number;
  following: number;
  publicRepos: number;
  createdAt: string;
  htmlUrl: string;
  location: string | null;
  company: string | null;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  forks: number;
  watchers: number;
  openIssues: number;
  topics: string[];
  updatedAt: string;
  createdAt: string;
  isFork: boolean;
  isArchived: boolean;
}

export interface LanguageStat {
  name: string;
  count: number;
  percentage: number;
  color: string;
}

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionDay[][];
}

export interface GitHubData {
  profile: GitHubProfile;
  repos: GitHubRepo[];
  topRepos: GitHubRepo[];
  languages: LanguageStat[];
  totals: {
    stars: number;
    forks: number;
    repos: number;
    yearsOnGitHub: number;
  };
  contributions: ContributionCalendar | null;
  fetchedAt: string;
}
