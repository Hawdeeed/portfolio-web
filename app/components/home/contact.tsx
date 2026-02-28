"use client";

import { IMAGES } from "@/share/assets";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden min-h-screen">
      {/* Background Image */}
      <Image
        src={IMAGES.contact.contactBackground}
        alt="Contact Background"
        fill
        priority
        className="object-cover -z-10"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#020617]/80 -z-10" />

      <div className="relative max-w-[1500px] mx-auto px-6 sm:px-14 xl:px-24 py-20">
        {/* Heading */}
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-16">
          Contact Us
        </h1>

        {/* Form */}
        <form className="grid md:grid-cols-2 gap-x-20 gap-y-10">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-gray-300 mb-3">Name*</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 text-white placeholder-gray-400"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-300 mb-3">Email*</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 text-white placeholder-gray-400"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-gray-300 mb-3">Phone</label>
            <input
              type="text"
              placeholder="Enter your phone"
              className="bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 text-white placeholder-gray-400"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-gray-300 mb-3">Message*</label>
            <textarea
              rows={1}
              placeholder="Enter your message"
              className="bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 text-white placeholder-gray-400 resize-none"
            />
          </div>

          {/* Privacy Text */}
          <div className="md:col-span-2 text-gray-400 text-sm mt-6">
            We will process your personal information in accordance with our
            <span className="underline cursor-pointer ml-1">
              Privacy Policy
            </span>
            .
          </div>

          {/* Checkbox */}
          <div className="md:col-span-2 flex items-center gap-3 text-gray-300 text-sm">
            <input
              type="checkbox"
              className="w-4 h-4 bg-transparent border border-gray-500"
            />
            <span>
              I would like to be contacted with news and updates about your
              events and services.
            </span>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 mt-6">
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-600 transition px-10 py-4 rounded-lg text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
