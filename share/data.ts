import {
  Award,
  Boxes,
  Braces,
  Brain,
  Briefcase,
  Cloud,
  Code2,
  Cpu,
  Database,
  FolderGit2,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Medal,
  Rocket,
  Server,
  Sparkles,
  Star,
  Terminal,
  Users,
  Wrench,
} from "lucide-react";
import { SiFiverr } from "react-icons/si";
import { IMAGES } from "./assets";
import { SITE } from "./config";
import type {
  Achievement,
  AiWorkflow,
  Certificate,
  EducationItem,
  ExperienceItem,
  NavLink,
  Project,
  QuickFact,
  SkillCategory,
  SocialLink,
  Stat,
  Testimonial,
} from "./types";

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */
export const NAV_LINKS: NavLink[] = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "AI Lab", id: "ai" },
  { name: "Testimonials", id: "testimonials" },
  { name: "GitHub", id: "github" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", href: SITE.github, icon: Github },
  { name: "LinkedIn", href: SITE.linkedin, icon: Linkedin },
  { name: "Fiverr", href: SITE.fiverr, icon: SiFiverr as unknown as SocialLink["icon"] },
  { name: "Email", href: `mailto:${SITE.email}`, icon: Mail },
];

/* ------------------------------------------------------------------ */
/* Hero / About                                                        */
/* ------------------------------------------------------------------ */
export const HERO = {
  name: "Hadeed Ahmed",
  roles: [
    "Full Stack Developer",
    "Gen AI Engineer",
    "React & Next.js Specialist",
    "LLM & ComfyUI Builder",
  ],
  headline: "I build intelligent, production-grade products for the web.",
  subheadline:
    "Full Stack Developer & Generative AI Engineer crafting scalable React / Next.js applications and AI-powered pipelines — from LLM agents and structured outputs to ComfyUI image & video generation.",
};

export const ABOUT_PARAGRAPHS: string[] = [
  "I'm Hadeed Ahmed — a Full Stack Developer and Generative AI Engineer based in Lahore, Pakistan. I specialise in React, Next.js, Redux and API-driven frontend architectures, backed by robust backends in Django, FastAPI and Node.js.",
  "Beyond conventional web development, I design AI-powered image and video generation workflows using ComfyUI, LoRA training, Stable Diffusion and modern LLM tooling — wiring structured outputs, function calling and multi-model pipelines into real products.",
  "My focus is always the same: clean code, measurable performance, and pragmatic problem-solving that ships. I care about the details that make software feel fast, considered and reliable.",
];

export const STATS: Stat[] = [
  { label: "Years Building", value: 4, suffix: "+", icon: Rocket },
  { label: "Projects Shipped", value: 15, suffix: "+", icon: FolderGit2 },
  { label: "Technologies", value: 25, suffix: "+", icon: Layers },
  { label: "AI Pipelines", value: 8, suffix: "+", icon: Brain },
];

export const QUICK_FACTS: QuickFact[] = [
  { label: "Location", value: "Lahore, Pakistan", icon: MapPin },
  { label: "Experience", value: "Full Stack + Gen AI", icon: Briefcase },
  { label: "Education", value: "BS Computer Science, FAST-NUCES", icon: GraduationCap },
  { label: "Focus", value: "AI-Powered Web Products", icon: Sparkles },
];

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    accent: "from-indigo-500 to-blue-500",
    skills: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    icon: Server,
    accent: "from-violet-500 to-purple-500",
    skills: ["Django", "FastAPI", "Flask", "Node.js", "REST APIs", "JWT Auth", "WebSockets"],
  },
  {
    title: "AI & Generative",
    icon: Brain,
    accent: "from-fuchsia-500 to-pink-500",
    skills: ["LLM Integration", "Function Calling", "Structured Outputs", "RAG", "ComfyUI", "LoRA Training", "Stable Diffusion", "Prompt Engineering"],
  },
  {
    title: "Databases",
    icon: Database,
    accent: "from-cyan-500 to-teal-500",
    skills: ["PostgreSQL", "Supabase", "MongoDB", "Firebase", "SQL", "Row-Level Security"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    accent: "from-sky-500 to-indigo-500",
    skills: ["Docker", "Vercel", "Cloud Deployment", "GPU Utilization", "Cloud Storage", "CI/CD"],
  },
  {
    title: "Languages",
    icon: Braces,
    accent: "from-amber-500 to-orange-500",
    skills: ["Python", "TypeScript", "JavaScript", "C++"],
  },
  {
    title: "Tools & Automation",
    icon: Wrench,
    accent: "from-emerald-500 to-green-500",
    skills: ["Git & GitHub", "ComfyUI", "n8n", "fal.ai", "OpenAI API", "React Query"],
  },
  {
    title: "Foundations",
    icon: Cpu,
    accent: "from-rose-500 to-red-500",
    skills: ["Data Structures & Algorithms", "OOP", "Applied ML", "MLOps", "Digital Image Processing"],
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */
export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Technier",
    role: "Software Engineer",
    period: "Apr 2026 — Present",
    location: "Lahore · Remote",
    current: true,
    description:
      "Working on diverse software development projects involving healthcare solutions, AI-powered applications, and web development across different technology stacks while directly interfacing with clients.",
    achievements: [
      "Developing and maintaining full-stack web applications, integrating APIs, and collaborating on frontend and backend development.",
      "Building AI-powered applications, integrating AI models, and creating automated workflows aligned with business needs.",
      "Communicating directly with clients to analyze requirements, discuss project progress, and deliver tailored solutions.",
      "Contributing to healthcare software projects and adapting flexibly across diverse modern technology stacks.",
      "Driving troubleshooting, performance optimization, and shipping reliable production features.",
    ],
    technologies: ["React", "Next.js", "Python", "FastAPI", "AI Integration", "Automation", "REST APIs"],
  },
  {
    company: "GrootCore Systems",
    role: "Web Developer",
    period: "Jul 2023 — Aug 2026",
    location: "Lahore · Remote",
    description:
      "Developed, enhanced, and maintained responsive web applications using React.js and Next.js, focusing on creating user-friendly interfaces and delivering smooth experiences across different devices.",
    achievements: [
      "Developed, enhanced, and maintained responsive web applications using React.js and Next.js.",
      "Integrated REST APIs and third-party platform services, managing application state and dynamic data flows.",
      "Improved frontend performance, optimized code splitting, and enhanced UI responsiveness across devices.",
      "Collaborated closely with designers, backend developers, and QA teams to troubleshoot technical issues and ensure quality.",
      "Implemented client requirements, responsive layouts, and UI enhancements while maintaining clean, reusable code.",
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "REST APIs"],
  },
  {
    company: "Code Cross",
    role: "Backend Developer",
    period: "Sep 2025 — Feb 2026",
    location: "Remote",
    description:
      "Developed and maintained backend services using Django and Python, managing database operations and optimizing data handling.",
    achievements: [
      "Developed and maintained backend services and secure API endpoints using Django and Python.",
      "Managed database operations and optimized query performance for efficient, scalable data handling.",
      "Collaborated with frontend teams to ensure secure, seamless, and well-documented API integration.",
      "Implemented authentication mechanisms, data validation, and robust error-handling standards.",
    ],
    technologies: ["Django", "Python", "PostgreSQL", "REST APIs", "JWT Auth"],
  },
  {
    company: "DevsSpace",
    role: "Associate Software Engineer",
    period: "Jul 2022 — Jan 2023",
    location: "Lahore · Remote",
    description:
      "Contributed to the development and maintenance of web applications using React.js, Next.js, and JavaScript, collaborating with senior developers on frontend and backend features.",
    achievements: [
      "Contributed to building and maintaining responsive web applications using React.js, Next.js, and JavaScript.",
      "Collaborated with senior developers to implement new features, build UI components, and integrate REST APIs.",
      "Assisted with backend services, database integration, and Git-based version control workflows.",
      "Troubleshot bugs and bottlenecks to improve application reliability and performance.",
      "Participated in peer code reviews and team technical discussions to deliver maintainable solutions.",
    ],
    technologies: ["React.js", "Next.js", "JavaScript", "REST APIs", "Git", "SQL"],
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */
export const PROJECTS: Project[] = [
  {
    slug: "scenarix",
    title: "Scenarix",
    tagline: "AI Ad Storyboard & Video Generation Platform",
    description:
      "Turns a one-line product brief into a complete, story-consistent advertisement — scenes with visuals, on-screen copy and voiceover, then AI-generated images and videos per scene. Built on an async FastAPI backend orchestrating OpenAI + fal.ai, a Supabase (Postgres + Auth + Storage) layer secured by Row-Level Security, and a Next.js 16 / React 19 app with a node-based workflow canvas.",
    category: "AI / Gen AI",
    status: "Live",
    year: "2025",
    image: IMAGES.projects.scenarix,
    features: [
      "Brief → sequential, narrative-consistent storyboard via OpenAI Structured Outputs",
      "Conversational revision of the whole arc or a single scene without drift",
      "Product-consistent image generation (fal.ai nano-banana-pro) with OpenAI fallback",
      "Image-to-video ad footage via fal.ai Kling O3, generated in parallel",
      "Node-based workflow UI (@xyflow/react) with per-node status and logs",
      "Full audit trail: project, scene and image-generation history",
    ],
    challenge:
      "Keeping a multi-scene ad coherent while letting users edit any single scene — without the LLM silently rewriting the rest — and enforcing strict per-user data isolation.",
    solution:
      "Structured JSON-Schema outputs re-validated with Pydantic, single-scene edits merged back over originals so untouched scenes are byte-for-byte stable, and Postgres Row-Level Security with per-request user-scoped Supabase clients for security by construction.",
    techStack: ["FastAPI", "Next.js 16", "React 19", "Supabase", "OpenAI", "fal.ai", "React Query", "Tailwind CSS", "Pydantic v2"],
    metrics: [
      { label: "AI Models Orchestrated", value: "4+" },
      { label: "Scenes / Ad", value: "1–20" },
      { label: "Security", value: "RLS + JWT" },
    ],
    featured: true,
  },
  {
    slug: "envision",
    title: "Envision",
    tagline: "AI-Powered Text-to-Movie Creator",
    description:
      "A guided, wizard-style web app that turns a single text prompt into a short, multi-scene AI-generated movie. It drafts a scene-by-scene script, generates a still for each scene, animates each still into a clip, and stitches everything into one downloadable film — with real JWT authentication, protected routing and a clean dark design system.",
    category: "AI / Gen AI",
    status: "MVP",
    year: "2025",
    image: IMAGES.projects.envision,
    features: [
      "Linear creative pipeline: prompt → characters & scenes → script → images → video → final movie",
      "Structured, editable scene-by-scene script with natural-language re-editing",
      "JWT auth against a Djoser/DRF backend with silent token refresh",
      "Redux Toolkit for global auth state, React Context for the creative flow",
      "Reusable shadcn/ui + Radix component system, considered loading & empty states",
    ],
    challenge:
      "Delivering a multi-step, stateful creative product where a session survives refreshes and expired tokens never interrupt the flow.",
    solution:
      "A custom axios interceptor transparently refreshes bearer tokens on 401 and retries the original request, with redux-persist keeping the session alive — separating global auth (Redux) from ephemeral workflow state (Context).",
    techStack: ["Next.js 15", "React 19", "TypeScript", "Redux Toolkit", "shadcn/ui", "Framer Motion", "Django REST", "Axios"],
    metrics: [
      { label: "Pipeline Stages", value: "4" },
      { label: "Auth", value: "JWT + Refresh" },
      { label: "Type Safety", value: "End-to-end" },
    ],
    featured: true,
  },
  {
    slug: "luxe-kitchen-cabinets",
    title: "Luxe Kitchen Cabinets",
    tagline: "SEO-Optimised Custom Cabinetry Website (Calgary)",
    description:
      "A modern, conversion-focused marketing website for a Calgary custom cabinetry company with 13+ years of experience. Ten-plus service landing pages driven by a shared, data-driven component architecture, with local SEO, lead capture and a fully responsive, animated experience.",
    category: "Full Stack",
    status: "Live",
    year: "2024",
    image: IMAGES.projects.kitchen,
    features: [
      "10+ service landing pages from a single content-driven data layer",
      "Animated typewriter hero cycling through service keywords",
      "Project gallery of 20+ real installations with reusable cards",
      "EmailJS lead capture + embedded Google Maps location",
      "Per-route dynamic SEO titles and Open Graph tags, mobile-first design",
    ],
    challenge:
      "Scaling to many near-identical service pages without duplicating markup or drowning in per-page maintenance.",
    solution:
      "Centralised all copy, reviews, team and gallery data in a single share/data.ts layer; pages compose reusable components fed by that data, so content edits rarely touch components.",
    techStack: ["Next.js 15", "React 18", "TypeScript", "Tailwind CSS", "EmailJS", "Vercel Analytics"],
    githubUrl: "https://github.com/Hawdeeed/Luxe-Kitchen-Cabinets-Website",
    metrics: [
      { label: "Service Pages", value: "10+" },
      { label: "Gallery Items", value: "20+" },
      { label: "Architecture", value: "Data-driven" },
    ],
    featured: true,
  },
  {
    slug: "gigo-freelancing",
    title: "GIGO — Freelancing Platform",
    tagline: "Full-Stack Marketplace with a Real-Time AI Chatbot",
    description:
      "A full-stack freelancing platform connecting clients with freelancers across services like web and app development. A real-time AI chatbot handles user queries, assists with dispute resolution and guides interactions, on top of a scalable backend for users, gigs and transactions.",
    category: "Full Stack",
    status: "Completed",
    year: "2024",
    features: [
      "Client ↔ freelancer marketplace across multiple service categories",
      "Real-time AI chatbot for support, dispute resolution and guided interactions",
      "Firebase authentication and real-time data handling",
      "Scalable data model for users, gigs and transactions",
      "Responsive, dynamic UI with smooth UX",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Firebase", "AI Chatbot"],
    githubUrl: "https://github.com/Hawdeeed/GIGO-Freelancing-Website",
    metrics: [
      { label: "Type", value: "Marketplace" },
      { label: "AI", value: "Realtime Chatbot" },
    ],
  },
  {
    slug: "virtual-fashion-store",
    title: "AI Virtual Fashion Store",
    tagline: "Generative Virtual Try-On Experience",
    description:
      "An AI-powered virtual fashion store with virtual try-on: users upload clothing images and visualise them on AI-generated models. Built with generative AI and image-processing techniques for realistic outfit rendering, with backend services handling uploads and GPU-accelerated processing pipelines.",
    category: "AI / Gen AI",
    status: "Completed",
    year: "2025",
    features: [
      "Virtual try-on — visualise uploaded clothing on AI-generated models",
      "Generative AI + image processing for realistic outfit rendering",
      "Focus on visual accuracy, alignment and garment fitting",
      "Backend pipeline for image uploads and GPU-accelerated processing",
      "Intuitive interface simulating a real online shopping experience",
    ],
    techStack: ["Next.js", "Generative AI", "Nano Banana", "Cloud Storage", "GPU Compute"],
    metrics: [
      { label: "Feature", value: "Virtual Try-On" },
      { label: "Compute", value: "GPU Pipelines" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Testimonials — client reviews                                       */
/* ------------------------------------------------------------------ */
export const TESTIMONIALS: Testimonial[] = [
  {
    clientName: "mohammadali98",
    platform: "Fiverr",
    platformLink: "https://www.fiverr.com/s/0b3lGQa",
    rating: 5,
    reviews: [
      "I've been working with Hadeed for 6+ months and can confidently say he's the best in the market. He's built custom LoRAs and other advanced AI solutions for my brand, and every project has exceeded expectations. He's not just a developer, he's a creative technologist: share the vision, and he delivers something no one else has. His attention to detail is unmatched, and he knows how to turn ideas into real, high-performing results. I've worked with many AI pros, but Hadeed consistently brings the smartest solutions and the strongest outcomes — his work helped drive a 10x lift in sales for us. If you want excellence and someone to solve your problem, hire Hadeed.",
    ],
  },
  {
    clientName: "balispell",
    platform: "Fiverr",
    platformLink: "https://www.fiverr.com/s/0b3lGQa",
    rating: 5,
    reviews: [
      "Perfect outcome. Delivered exactly what I needed, when I needed. Great communication. Will use again for sure.",
      "My second time working with this vendor, and what a joy again. Great communication, excellent delivery. Will come back again and again.",
      "Another great delivery. Did everything I asked and more. Great after service. Perfect communication.",
    ],
  },
  {
    clientName: "killtherobot",
    platform: "Fiverr",
    platformLink: "https://www.fiverr.com/s/0b3lGQa",
    rating: 5,
    reviews: [
      "The best to work with on Fiverr. Game changer !!",
      "Incredible work as always!",
      "Amazing work !",
      "Amazing as always",
      "My only go-to on Fiverr. The best!",
      "Amazing work, super fast",
    ],
  },
  {
    clientName: "Jammes07",
    platform: "Fiverr",
    platformLink: "https://www.fiverr.com/s/0b3lGQa",
    rating: 5,
    reviews: [
      "Had a good time with him, understood my requirements and gave me quality work in less time. Will suggest him to everyone for sure!! Thank you.",
    ],
  },
  {
    clientName: "alx_hunter",
    platform: "Fiverr",
    platformLink: "https://www.fiverr.com/s/0b3lGQa",
    rating: 5,
    reviews: [
      "This guy is exceptional, delivered high quality work and good in communication. Would love to work with him again!",
    ],
  },
  {
    clientName: "william_034",
    platform: "Fiverr",
    platformLink: "https://www.fiverr.com/s/0b3lGQa",
    rating: 5,
    reviews: [
      "Excellent person he is, knows how to handle problems, a good communicator as well. Gave me high resolution AI images as per what I need. This guy is a beast!!",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* AI Lab — ComfyUI workflows                                          */
/* ------------------------------------------------------------------ */
export const AI_WORKFLOWS: AiWorkflow[] = [
  {
    title: "Custom LoRA Training — FLUX",
    description:
      "Trained bespoke FLUX LoRAs to lock in a consistent subject or style, then wired them into ComfyUI graphs for controllable, high-fidelity character-consistent generation.",
    image: IMAGES.workflows.fluxLora,
    tags: ["FLUX", "LoRA Training", "ComfyUI", "Character Consistency"],
  },
  {
    title: "Skin Masking & Detailing",
    description:
      "A segmentation and masking pipeline that isolates skin regions for targeted refinement — clean detailing and retouching without touching the rest of the composition.",
    image: IMAGES.workflows.skinMasking,
    tags: ["Segmentation", "Masking", "Image Processing", "ComfyUI"],
  },
  {
    title: "WAN 2.2 Image-to-Video",
    description:
      "An image-to-video workflow using WAN 2.2 that animates stills into short, coherent clips — the motion backbone behind the story-to-movie generation pipeline.",
    image: IMAGES.workflows.wanVideo,
    tags: ["WAN 2.2", "Image-to-Video", "Animation", "ComfyUI"],
  },
];

export const AI_CAPABILITIES: string[] = [
  "LLM Integration & Function Calling",
  "Structured Outputs (JSON Schema)",
  "Retrieval-Augmented Generation (RAG)",
  "Multi-Model Orchestration",
  "Prompt Engineering",
  "LoRA Training & Fine-tuning",
  "Stable Diffusion & FLUX",
  "Image-to-Video Pipelines",
  "ComfyUI Workflow Design",
  "AI Agents & Automation (n8n)",
];

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */
export const EDUCATION: EducationItem[] = [
  {
    institution: "FAST — National University of Computer and Emerging Sciences",
    degree: "Bachelor's in Computer Science",
    location: "Lahore, Pakistan",
    grade: "CGPA 3.13 / 4.0",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Artificial Intelligence",
      "Applied Machine Learning",
      "MLOps",
      "Generative AI",
      "Digital Image Processing",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Certificates                                                        */
/* ------------------------------------------------------------------ */
export const CERTIFICATES: Certificate[] = [
  {
    image: IMAGES.certificates.huawei,
    title: "Huawei Cloud Service Certification",
    issuer: "Huawei",
    description:
      "Micro-certification demonstrating proficiency in cloud computing technologies through Huawei's Cloud Service Computing program.",
  },
  {
    image: IMAGES.certificates.microsoftAi,
    title: "Fundamental AI Concepts",
    issuer: "Microsoft",
    description:
      "Certified on the foundational concepts of Artificial Intelligence — applications, workloads and responsible-AI considerations.",
  },
  {
    image: IMAGES.certificates.deans,
    title: "Dean's List — Academic Excellence",
    issuer: "FAST-NUCES",
    description:
      "Academic recognition and placement on the Dean's List for outstanding results in the Fall 2022 semester.",
  },
  {
    image: IMAGES.certificates.hackerrank,
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    description:
      "Certified after testing SQL and relational-database skills on HackerRank's assessment platform.",
  },
  {
    image: IMAGES.certificates.softec23,
    title: "SOFTEC 2023 — Organiser",
    issuer: "FAST-NUCES",
    description:
      "Recognised for helping organise SOFTEC, one of Pakistan's largest student tech events, held at FAST-NUCES Lahore.",
  },
  {
    image: IMAGES.certificates.nascon24,
    title: "NASCON 2024 — Web Development",
    issuer: "FAST-NUCES Islamabad",
    description:
      "Certified for competing as a team in the Web Development competition at NASCON, FAST-NUCES Islamabad.",
  },
];

/* ------------------------------------------------------------------ */
/* Achievements & leadership                                           */
/* ------------------------------------------------------------------ */
export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Dean's List — Academic Recognition",
    description: "FAST-NUCES, Fall 2022 — awarded for exceptional academic performance.",
    icon: Medal,
  },
  {
    title: "Exceptional Volunteer — SOFTEC 2023",
    description: "Recognised for outstanding contribution organising Pakistan's largest tech event.",
    icon: Award,
  },
  {
    title: "IEEE Student Member",
    description: "Active IEEE member since 2024; served as Treasurer for IEEE NUCES Lahore.",
    icon: Users,
  },
  {
    title: "Deputy Head — Infrastructure, SOFTEC",
    description: "Led technical event organisation and managed the infrastructure team at FAST-NUCES.",
    icon: Boxes,
  },
];

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */
export const CONTACT_INFO = [
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, icon: Mail },
  { label: "GitHub", value: "@Hawdeeed", href: SITE.github, icon: Github },
  { label: "LinkedIn", value: "Hadeed Ahmed", href: SITE.linkedin, icon: Linkedin },
  { label: "Location", value: SITE.location, href: undefined, icon: MapPin },
] as const;

/* Marquee tech row (hero social proof strip) */
export const MARQUEE_TECH: string[] = [
  "React", "Next.js", "TypeScript", "Python", "Django", "FastAPI", "Tailwind CSS",
  "Framer Motion", "PostgreSQL", "Supabase", "MongoDB", "Docker", "OpenAI",
  "ComfyUI", "Stable Diffusion", "Node.js", "Redux", "Vercel",
];

export const ICONS = { Star, Github, Terminal, Sparkles } as const;
