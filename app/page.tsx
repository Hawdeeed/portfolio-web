import dynamic from "next/dynamic";
import Hero from "./components/home/hero";
import About from "./components/home/about";
import Skills from "./components/home/skills";
import Experience from "./components/home/experience";
import Projects from "./components/home/projects";
import AiLab from "./components/home/ai-lab";

// Below-the-fold sections are code-split to trim the initial bundle.
const Testimonials = dynamic(() => import("./components/home/testimonials"));
const GitHubSection = dynamic(() => import("./components/home/github"));
const Education = dynamic(() => import("./components/home/education"));
const Contact = dynamic(() => import("./components/home/contact"));

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <AiLab />
      <Testimonials />
      <GitHubSection />
      <Education />
      <Contact />
    </>
  );
}
