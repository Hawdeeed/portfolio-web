/** Base URL for static assets in /public. Kept centralised so a CDN prefix
 *  can be swapped in later without touching every asset reference. */
export const ASSETS_BASE_URL = "";

export const SITE = {
  name: "Hadeed Ahmed",
  title: "Hadeed Ahmed — Full Stack Developer & Gen AI Engineer",
  shortTitle: "Hadeed Ahmed",
  description:
    "Hadeed Ahmed is a Full Stack Developer and Generative AI Engineer specialising in React, Next.js, TypeScript, Django and AI-powered products — from LLM agents and RAG to ComfyUI image/video pipelines.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://hadeedahmed.vercel.app",
  email: "hadeeda980@gmail.com",
  phone: "+92 305 4827267",
  location: "Lahore, Pakistan",
  github: "https://github.com/Hawdeeed",
  githubUsername: "Hawdeeed",
  linkedin: "https://www.linkedin.com/in/hadeed-ahmed-27a97a268/",
  fiverr: "https://www.fiverr.com/s/Kelv82Y",
  resume: "/my-resume.pdf",
  ogImage: "/og.png",
} as const;
