"use client";

import { IMAGES } from "@/share/assets";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../button";
import Heading from "../typography/heading";
import Text from "../typography/text";

export const About = () => {
  const [showCartoon, setShowCartoon] = useState(false);

  // Auto-transform effect
  useEffect(() => {
    const timer1 = setTimeout(() => setShowCartoon(true), 1000);
    const timer2 = setTimeout(() => setShowCartoon(false), 3000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Download CV
  const onButtonClick = () => {
    const pdfUrl = "about-us/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Hadeed-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className={`bg-bg-dark px-6 sm:px-14 xl:px-24 py-6
        }`}
      id="about"
    >
      <div className="flex flex-col lg:flex-row justify-center items-center min-h-[540px]">
        {/* Left Content */}
        <div className=" flex-1 flex flex-col justify-center gap-4 pr-0 lg:pr-8 mb-6 lg:mb-0">
          <div>
            <Text className="text-white pl-1">Hi I am</Text>
            <Heading text="Hadeed Ahmed" />
            <Heading
              className="text-[30px]"
              coloredText="Full Stack Web Developer & AI Artist"
            />
          </div>

          <Text className="text-white pl-1">
            I develop scalable, high-performance web applications using React,
            Next.js, Redux, and Django, with expertise in modern API-driven
            architectures and efficient backend systems. I build responsive,
            reliable, and user-focused applications with a strong emphasis on
            clean code, performance, and long-term maintainability. I also
            design advanced AI-powered image and video generation workflows
            using ComfyUI and creative automation tools to create intelligent,
            automated solutions. I am dedicated to delivering high-quality work,
            paying close attention to detail, performance, and user experience,
            while ensuring complete client satisfaction through reliable,
            production-ready digital products.
          </Text>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              text="Download CV"
              className="bg-[#ff004f] text-lg font-semibold w-full py-2 sm:w-[150px] text-white rounded-lg"
              onClick={onButtonClick}
            />
            {/* <Button
              text="Hire me"
              className="text-[#ff004f] bg-white text-lg font-semibold py-2 w-full sm:w-[150px] rounded-lg"
            /> */}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-[310px]  sm:w-[400px] lg:w-[400px] rounded-lg flex-shrink-0 relative overflow-hidden group cursor-pointer h-[350px] sm:h-[450px] lg:min-h-[500px]">
          {/* Original Image */}
          <Image
            src={IMAGES.hadeed}
            alt="Hadeed Ahmed"
            fill
            className={`object-cover transition-all duration-700 ease-in-out 
            ${showCartoon ? "opacity-0 scale-105" : "opacity-100 scale-100"} 
            group-hover:opacity-0 group-hover:scale-110`}
            priority
          />

          {/* Cartoon Image */}
          <Image
            src={IMAGES.hadeedCartoon}
            alt="Hadeed Cartoon Version"
            fill
            className={`object-cover transition-all duration-700 ease-in-out 
            ${showCartoon ? "opacity-100 scale-105 drop-shadow-[0_0_25px_rgba(255,0,79,0.6)]" : "opacity-0 scale-100"} 
            group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_35px_rgba(255,0,79,0.7)]`}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
