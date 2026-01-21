"use client";

import { IMAGES } from "@/share/assets";
import Image from "next/image";
import { useEffect, useState } from "react";
import Heading from "../typography/heading";

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
      className={`bg-bg-dark transition-opacity duration-1000 ease-in-out  ${isVisible ? "opacity-100" : "opacity-0"
        }`}
      id="about"
    >
      <div
        className="flex lg:flex-row flex-col  lg:py-10 py-12 lg:justify-center items-center px-6 sm:px-14 xl:px-24 max-w-[1500px] mx-auto"
      >
        <div
          className={`xl:max-w-[600px] lg:max-w-[520px] lg:mr-6 transition-transform duration-1000 ease-in-out ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
        >
          <Heading text="Hi, I am " />
          <div className="lg:mt-0 sm:mt-[-8px]">
            <Heading coloredText="Hadeed Ahmed" />
          </div>
          <p className="text-white mt-6 text-[18px]">
            Full Stack Developer with expertise in React, Next.js, Redux, and API driven frontend architectures,
            combined with backend development using Django. I also specialize in AI-powered image and video
            generation workflows using ComfyUI and related tools. Experienced in building responsive, scalable
            applications and integrating AI systems into real-world products. Strong focus on clean code,
            performance, and practical problem-solving.
          </p>
          <div className="mt-6">
            <button
              onClick={onButtonClick}
              className="bg-[#ff004f] text-white font-bold py-3 px-4 rounded"
            >
              Download CV
            </button>
          </div>
        </div>
        <div
          className={`w-full lg:w-[80%] md:max-w-[650px] lg:my-0 mt-8 transition-transform duration-1000 ease-in-out ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
        >
          <Image
            src={IMAGES.hadeed}
            alt="Home Page Image"
            width={200}
            height={200}
            loading="eager"
            priority
            className="mx-auto md:mx-0 w-fit h-fit rounded-2xl border-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
