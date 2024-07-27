import About from "./components/home/about";
import Certificates from "./components/home/certificates";
import Education from "./components/home/education";
import Projects from "./components/home/projects";
import Skills from "./components/home/skills";

export default function Home() {
  return (
    <>
      <About />
      <Skills />
      <Education />
      <Projects />
      <Certificates/>
    </>
  );
}
