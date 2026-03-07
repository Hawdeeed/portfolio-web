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
  const [organization, setOrganization] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          organization,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess("Message sent successfully!");
        setTimeout(() => setSuccess(""), 4000);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setError("Something went wrong.");
      }
    } catch (err) {
      setError("Failed to send message.");
    }

    setLoading(false);
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

        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-10">
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
            <Input
              type="text"
              label="Organization"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              placeholder="Enter your organization"
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
          </div>

          <div className="mt-6 w-[50%] pt-6">
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}

            <div className="pt-2">
              <Button
                type="submit"
                text={loading ? "Sending..." : "Send Message"}
                disabled={
                  loading ||
                  name.trim() === "" ||
                  email.trim() === "" ||
                  message.trim() === ""
                }
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
