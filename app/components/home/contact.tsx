"use client";

import { IMAGES } from "@/share/assets";
import Image from "next/image";
import { useState } from "react";
import Button from "../button";
import Input from "../input";
import Textarea from "../text-area";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <section id="contact" className="relative overflow-hidden min-h-[80%]">
      <Image
        src={IMAGES.contact.contactBackground}
        alt="Contact Background"
        fill
        priority
        className="object-cover -z-10"
      />

      <div className="absolute inset-0 bg-[#020617]/80 -z-10" />

      <div className="relative max-w-[1500px] mx-auto px-6 sm:px-14 xl:px-24 py-20">
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-16">
          Contact Me
        </h1>
        <form className="grid md:grid-cols-2 gap-x-20 gap-y-10">
          <div className="flex flex-col">
            <Input
              type="text"
              label="Name"
              placeholder="Enter your name"
              required
              className="bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 text-white placeholder-gray-400"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <Input
              type="email"
              label="Email"
              required
              placeholder="Enter your email"
              className="bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 text-white placeholder-gray-400"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <Input
              type="text"
              label="Phone"
              placeholder="Enter your phone"
              className="bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 text-white placeholder-gray-400"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <Textarea
              label="Message"
              rows={1}
              value={message}
              onChange={(value) => setMessage(value)}
              placeholder="Enter your message"
              className="bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 text-white placeholder-gray-400 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 mt-6">
            <Button
              text="Submit"
              className="w-full sm:min-w-[30%] py-3 bg-[#ff004f] text-white"
              disabled={!name || !email}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
