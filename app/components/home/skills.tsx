"use client";
import { CLIENTS as SKILLS } from "@/share/data";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing after the animation is triggered
          }
        });
      },
      { threshold: 0.3 } // Adjust this threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer && sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const renderSkills = () => {
    return SKILLS.map((skill: Skill, index: number) => (
      <div
        key={index}
        className={`max-w-[1000px] md:w-[60px] sm:w-[40px] w-[35px] flex flex-col items-center mx-1.5 lg:mx-6 sm:mx-2 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-fit md:h-[60px] sm:h-[40px] h-[35px] flex items-center justify-center">
          <Image
            src={skill.logo}
            alt={skill.name}
            width={200}
            height={200}
            className="w-full h-full object-contain"
            loading="eager"
            priority
          />
        </div>
        <p className="text-center lg:text-[17px] md:text-[15px] sm:text-[10px] text-[8px] font-semibold text-white mt-2">
          {skill.name}
        </p>
      </div>
    ));
  };

  return (
    <section
      ref={sectionRef}
      className={`bg-bg-dark pt-8 transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      id="skills"
    >
      <div className="bg-[#ff004f] flex flex-col lg:flex-row justify-center items-center py-8 sm:py-12 max-w-[1500px] mx-auto">
        <div
          className={`w-full lg:w-1/6 px-6 pb-3 lg:px-0 transition-transform duration-1000 ${
            isVisible ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <p className="text-xl xl:text-2xl text-white text-opacity-70">
            My skills
          </p>
          <h2 className="text-2xl xl:text-[30px] xl:leading-[20px] text-white font-extrabold">
            Practiced on
          </h2>
        </div>
        <div className="flex w-full lg:w-3/4 overflow-hidden">
          <div className="flex-shrink-0 flex items-center justify-around whitespace-nowrap animate-marquee w-full">
            {renderSkills()}
          </div>
          <div className="flex-shrink-0 flex items-center justify-around whitespace-nowrap animate-marquee w-full">
            {renderSkills()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;