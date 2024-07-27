"use client";
import { AWARDS, CERTIFICATES } from "@/share/data"; // Make sure you have an AWARDS array in your data
import { useRef, useState } from "react";
import ImageCard from "../cards/image-card";
import { ArrowLeft, ArrowRight } from "../icons";
import Heading from "../typography/heading";

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState("Certificates");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollOffset;
    }
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const items = selectedCategory === "Certificates" ? CERTIFICATES : AWARDS;

  return (
    <section className="bg-white" id="certificates">
      <div className="flex flex-col py-10 xl:pb-20 max-w-[1500px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center px-6 sm:px-14 xl:px-24">
          <Heading
            text="My "
            coloredText="Certifications"
            onDarkBackground={false}
          />
          
          <div className="flex flex-row items-center lg:mt-0 mt-4  ">
          <div> 
          <select
            className="bg-white text-black font-semibold border-2 border-black rounded-lg max-w-[120px] my-3 lg:my-0 lg:mr-20 mr-12"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="Certificates">Certificates</option>
            <option value="Medals">Medals</option>
          </select>
          </div> 
          {CERTIFICATES.length > 2 && (
            <div className="flex gap-6 ">
              <div onClick={() => handleScroll(-400)}>
                <ArrowLeft className="bg-[#ff004f] rounded-full p-5 md:w-16 md:h-16 w-14 h-14 text-white cursor-pointer" />
              </div>
              <div onClick={() => handleScroll(400)}>
                <ArrowRight className="bg-[#ff004f] rounded-full p-5 md:w-16 md:h-16 w-14 h-14 text-white cursor-pointer" />
              </div>
            </div>
          )}
          </div>
        </div>
        <div
          className="px-6 sm:px-14 xl:px-24 pt-8 sm:pt-10 pb-16 overflow-x-auto whitespace-nowrap flex gap-6 sm:gap-8 md:gap-10 no-scrollbar"
          ref={scrollContainerRef}
        >
          {items.map((item, index) => (
            <ImageCard
              key={index}
              imageUrl={item.imageUrl}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
