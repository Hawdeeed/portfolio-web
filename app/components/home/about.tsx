"use client";

import { IMAGES } from "@/share/assets";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../button";
import Heading from "../typography/heading";
import Text from "../typography/text";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCartoon, setShowCartoon] = useState(false); // controls auto-transform

  // Fade-in effect for section
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-transform effect
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowCartoon(true);
    }, 1500);

    const timer2 = setTimeout(() => {
      setShowCartoon(false);
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Download CV function
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
      className={`bg-bg-dark border-2 flex flex-row px-6 sm:px-14 xl:px-24 border-white h-[600px] py-6 transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      id="about"
    >
      {/* Left content */}
      <div className="border-2 border-white h-full w-[65%] flex flex-col gap-4 pr-8">
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

        <div className="flex flex-row gap-4">
          <Button
            text="Download CV"
            className="bg-[#ff004f] text-lg font-semibold w-[150px] text-white"
            onClick={onButtonClick}
          />
          <Button
            text="Hire me"
            className="text-[#ff004f] bg-white text-lg font-semibold py-2 w-[150px]"
          />
        </div>
      </div>

      {/* Right image */}
      <div className="border-2 border-white h-full w-[35%] relative overflow-hidden group cursor-pointer">
        {/* Original Image */}
        <Image
          src={IMAGES.hadeed}
          alt="Hadeed Ahmed"
          fill
          className={`object-cover transition-opacity duration-700 ${
            showCartoon ? "opacity-0" : "opacity-100"
          } group-hover:opacity-0`}
          priority
        />

        {/* Cartoon Image */}
        <Image
          src={IMAGES.hadeedCartoon}
          alt="Hadeed Cartoon Version"
          fill
          className={`object-cover transition-opacity duration-700 ${
            showCartoon ? "opacity-100" : "opacity-0"
          } group-hover:opacity-100`}
        />

        {/* Subtle Branding Text
        <div className="absolute bottom-4 left-4 bg-black/60 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          Code meets AI 🚀
        </div> */}
      </div>
    </section>
  );
};

export default About;
