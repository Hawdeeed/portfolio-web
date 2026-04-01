import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Footer } from "./components/footer";
import Header from "./components/header";
import { Providers } from "./components/providers";
import "./globals.css";

const DMSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hadeed Ahmed | Web & AI Developer",
  description:
    "Hadeed Ahmed is an AI Developer and Web Developer speiclized in full stack web development, Machine Learning, and AI-powered applications. Explore projects like AI chatbots, story-to-movie generator, and freelancing platform.",
  keywords: [
    "Hadeed Ahmed",
    "AI Developer Pakistan",
    "Next.js Developer Portfolio",
    "Machine Learning Projects",
    "AI Chatbot Developer",
    "Freelance Web Developer",
  ],
  verification: {
    google: "cfcQM91KUb4sxyvcPO5eQmp5irPBJKGjDVD7txzIXwQ", // paste ONLY the content value here
  },
  authors: [{ name: "Hadeed Ahmed" }],
  creator: "Hadeed Ahmed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={DMSans.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
