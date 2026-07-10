import dynamic from "next/dynamic";
import About from "./components/home/about";
import AiLab from "./components/home/ai-lab";
import Experience from "./components/home/experience";
import Hero from "./components/home/hero";
import Projects from "./components/home/projects";
import Skills from "./components/home/skills";

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
