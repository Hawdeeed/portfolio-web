import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Footer } from "./components/footer";
import Header from "./components/header";
import { Providers } from "./components/providers";
import { BackToTop, ScrollProgress } from "./components/ui/scroll-progress";
import { SITE } from "@/share/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050816",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: "%s | Hadeed Ahmed",
  },
  description: SITE.description,
  keywords: [
    "Hadeed Ahmed",
    "Full Stack Developer",
    "Gen AI Engineer",
    "Generative AI Developer",
    "Next.js Developer",
    "React Developer Pakistan",
    "AI Engineer Lahore",
    "LLM Developer",
    "ComfyUI",
    "Stable Diffusion Developer",
    "Django Developer",
    "TypeScript Developer",
  ],
  authors: [{ name: "Hadeed Ahmed", url: SITE.url }],
  creator: "Hadeed Ahmed",
  publisher: "Hadeed Ahmed",
  alternates: { canonical: SITE.url },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    title: SITE.title,
    description: SITE.description,
    siteName: "Hadeed Ahmed — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    creator: "@Hawdeeed",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "cfcQM91KUb4sxyvcPO5eQmp5irPBJKGjDVD7txzIXwQ",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.webmanifest",
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hadeed Ahmed",
  jobTitle: "Full Stack Developer & Gen AI Engineer",
  url: SITE.url,
  email: `mailto:${SITE.email}`,
  image: `${SITE.url}/my-picture.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "Pakistan",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "FAST — National University of Computer and Emerging Sciences",
  },
  sameAs: [SITE.github, SITE.linkedin],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Django",
    "FastAPI",
    "Generative AI",
    "Large Language Models",
    "ComfyUI",
    "Stable Diffusion",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
