"use client";

import { IMAGES } from "@/share/assets";
import Image from "next/image";
import Heading from "../typography/heading";

export const About = () => {
  const onButtonClick = () => {
    const pdfUrl = "about-us/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Hadeed-resume.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <section className="bg-bg-dark" id="about">
      <div className="flex lg:flex-row flex-col lg:py-10 py-12 lg:justify-center items-center px-6 sm:px-14 xl:px-24 max-w-[1500px] mx-auto">
        <div className="xl:max-w-[600px] lg:max-w-[520px] lg:mr-6">
          <Heading text="Hi, I am " />
          <div className="lg:mt-0 sm:mt-[-8px]">
            <Heading coloredText="Hadeed Ahmed" />
          </div>
          <p className="text-white mt-6 text-[18px]">
            A passionate computer science student with a keen interest in software development and data science. I enjoy solving complex problems through coding and continually seek opportunities to learn and grow in the tech field. With a strong foundation in various programming languages and frameworks, I build efficient, scalable, and user-friendly applications. I am fascinated by AI/ML and believe in the power of collaboration and open-source contributions. My goal is to leverage my skills to make a meaningful impact in the tech industry, striving for excellence and embracing new challenges along the way.
          </p>
          <div className="mt-6">
            <button
              onClick={onButtonClick}
              className="bg-[#ff004f]  text-white font-bold py-3 px-4 rounded"
            >
              Download CV
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[80%] md:max-w-[650px] lg:my-0 mt-8">
          <Image
            src={IMAGES.hadeed}
            alt="Home Page Image"
            width={200}
            height={200}
            loading="eager"
            priority
            className="mx-auto md:mx-0 w-full h-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;