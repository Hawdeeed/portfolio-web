"use client";
import { PROJECTS } from "@/share/data";
import { useRef } from "react";
import ImageCard from "../cards/image-card";
import { ArrowLeft, ArrowRight } from "../icons";
import Heading from "../typography/heading";

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <section className="bg-white" id="projects">
      <div className="relative  py-10 xl:pb-20 max-w-[1500px] mx-auto">
        <div className="flex md:flex-row flex-col md:justify-between md:items-center items-start px-6 sm:px-14 xl:px-24">
          <Heading
            text="My Latest"
            coloredText="Projects"
            onDarkBackground={false}
          />
          {PROJECTS.length > 2 && (
            <div className="flex gap-6 md:mt-0 mt-6">
              <div onClick={() => handleScroll(-400)}>
                <ArrowLeft className="bg-[#ff004f] rounded-full p-5 md:w-16 md:h-16 w-14 h-14 text-white cursor-pointer" />
              </div>
              <div onClick={() => handleScroll(400)}>
                <ArrowRight className="bg-[#ff004f] rounded-full p-5 md:w-16 md:h-16 w-14 h-14 text-white cursor-pointer" />
              </div>
            </div>
          )}
        </div>
        <div
          className="px-6 sm:px-14 xl:px-24 pt-8 sm:pt-10 pb-16 overflow-x-auto whitespace-nowrap flex gap-6 sm:gap-8 md:gap-10 no-scrollbar"
          ref={scrollContainerRef}
        >
         {PROJECTS.map((project: Project, index: number) => {
  return (
    <ImageCard
      key={index}
      imageUrl={project.imageUrl}
      title={project.title}
      description={project.description}
      skills={project.skills}
      sourceCodeUrl={project.sourceCodeUrl}
    />
  );
})}

        </div>
      </div>
    </section>
  );
};

export default Projects;
