import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hadeed Ahmed — Portfolio",
    short_name: "Hadeed Ahmed",
    description:
      "Full Stack Developer & Gen AI Engineer — React, Next.js, TypeScript, Django and Generative AI.",
    start_url: "/",
    display: "standalone",
    background_color: "#050816",
    theme_color: "#050816",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
