"use client";

import { useEffect, useState } from "react";

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
      <div className="border-2 border-white h-full w-[65%] flex flex-col">
        <p>Hi I am</p>
        <h1>Hadeed Ahmed</h1>
      </div>
      <div className="border-2 border-white h-full w-[35%] "></div>
    </section>
  );
};

export default About;
