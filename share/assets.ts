import { ASSETS_BASE_URL } from "./config";

/** Central registry of static assets shipped in /public.
 *  Reused from the previous portfolio's curated asset set. */
export const IMAGES = {
  logo: `${ASSETS_BASE_URL}/logo.jpg`,
  portrait: `${ASSETS_BASE_URL}/my-picture.jpg`,
  portraitCartoon: `${ASSETS_BASE_URL}/my-picture-cartoon.jpg`,
  resume: `${ASSETS_BASE_URL}/my-resume.pdf`,
  introVideo: `${ASSETS_BASE_URL}/video-introduction/introduction.mp4`,
  introVideoPoster: `${ASSETS_BASE_URL}/video-introduction/introduction-poster.jpg`,

  projects: {
    scenarix: `${ASSETS_BASE_URL}/projects/web-projects/scenarix.png`,
    envision: `${ASSETS_BASE_URL}/projects/web-projects/envision.png`,
    kitchen: `${ASSETS_BASE_URL}/projects/web-projects/custom-kitchen-cabinets.png`,
  },

  workflows: {
    fluxLora: `${ASSETS_BASE_URL}/projects/comfyui-workflows/flux-trained-lora.png`,
    skinMasking: `${ASSETS_BASE_URL}/projects/comfyui-workflows/skin-masking.png`,
    wanVideo: `${ASSETS_BASE_URL}/projects/comfyui-workflows/wan2.2-video-generation.png`,
  },

  certificates: {
    huawei: `${ASSETS_BASE_URL}/certificates/huawei.jpg`,
    deans: `${ASSETS_BASE_URL}/certificates/deans.jpg`,
    hackerrank: `${ASSETS_BASE_URL}/certificates/hackerrank.jpg`,
    softec23: `${ASSETS_BASE_URL}/certificates/softec23.jpg`,
    nascon24: `${ASSETS_BASE_URL}/certificates/nascon24.jpg`,
    microsoftAi: `${ASSETS_BASE_URL}/certificates/microsoft-AIconcepts.png`,
  },
} as const;
