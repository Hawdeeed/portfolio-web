"use client";

import { useEffect, useState } from "react";
import Heading from "../typography/heading";
import Text from "../typography/text";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      className={`bg-bg-dark border-2 flex flex-row px-6 sm:px-14 xl:px-24 border-white h-[600px] py-6 transition-opacity duration-1000 ease-in-out  ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      id="about"
    >
      <div className="border-2 border-white h-full w-[65%] flex flex-col gap-4">
        <div>
          <Text className="text-white">Hi I am</Text>
          <Heading text="Hadeed Ahmed" />
          <Heading
            className="text-[30px]"
            coloredText="Full Stack Web Developer & AI Artist"
          />
        </div>
        <Text className="text-white">
          I develop scalable, high-performance web applications using React,
          Next.js, Redux, and Django, with expertise in modern API-driven
          architectures and efficient backend systems. I build responsive,
          reliable, and user-focused applications with a strong emphasis on
          clean code, performance, and long-term maintainability. I also design
          advanced AI-powered image and video generation workflows using ComfyUI
          and creative automation tools to create intelligent, automated
          solutions. I am dedicated to delivering high-quality work, paying
          close attention to detail, performance, and user experience, while
          ensuring complete client satisfaction through reliable,
          production-ready digital products.
        </Text>
      </div>
      <div className="border-2 border-white h-full w-[35%] "></div>
    </section>
  );
};

export default About;
