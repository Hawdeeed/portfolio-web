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
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${name}`;

    const body = `
You received a new message from your portfolio website.

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
    `;

    const mailtoLink = `mailto:hadeeda980@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    // Show success message
    setSuccess(true);

    // Clear form
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");

    // Hide message after 4 sec
    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  return (
    <section id="contact" className="relative overflow-hidden min-h-screen">
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

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-x-20 gap-y-10"
        >
          <Input
            type="text"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            className="bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 text-white placeholder-gray-400"
          />

          <Input
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 text-white placeholder-gray-400"
          />

          <Input
            type="text"
            label="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone"
            className="bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 text-white placeholder-gray-400"
          />

          <Textarea
            label="Message"
            required
            rows={1}
            value={message}
            onChange={(value) => setMessage(value)}
            placeholder="Enter your message"
            className="bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 text-white placeholder-gray-400 resize-none"
          />

          <div className="mt-6 w-full">
            {/* {success && ( */}
            <span className="text-red-500 font-medium">
              Currently disabled feature!
            </span>
            {/* )} */}

            <div className="pt-2">
              <Button
                type="submit"
                text="Submit"
                disabled
                className="w-full sm:w-[60%] py-3 bg-[#ff004f] text-white disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
