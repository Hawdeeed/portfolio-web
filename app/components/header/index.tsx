"use client";
import { IMAGES } from "@/share/assets";
import { Quicklinks } from "@/share/data";
import { ROUTES } from "@/share/routes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "../icons";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  // split into left and right
  const mid = Math.ceil(Quicklinks.length / 2);
  const leftItems = Quicklinks.slice(0, mid);
  const rightItems = Quicklinks.slice(mid);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setShowDropdown(false);
  };

  const renderItems = (items: typeof Quicklinks, mobile = false) =>
    items.map((item, index) => (
      <li key={index}>
        <button
          onClick={() => scrollToSection(item.id)}
          className={`font-semibold cursor-pointer
            hover:text-[#ff004f]
            ${mobile ? "text-black w-full text-left p-2" : "text-white"}
          `}
        >
          {item.name}
        </button>
      </li>
    ));

  return (
    <header className="bg-bg-dark">
      <nav className="flex items-center justify-between max-w-[1500px] mx-auto px-6 py-6">
        {/* LEFT */}
        <ul className="hidden lg:flex gap-10 flex-1 justify-end text-white">
          {renderItems(leftItems)}
        </ul>

        {/* CENTER LOGO */}
        <div className="flex justify-center flex-shrink-0 sm:px-8">
          <Link href={ROUTES.home}>
            <Image
              src={IMAGES.logo}
              alt="logo"
              width={100}
              height={100}
              className="h-16 sm:h-20 w-auto"
              priority
            />
          </Link>
        </div>

        {/* RIGHT */}
        <ul className="hidden lg:flex gap-10 flex-1 justify-start text-white">
          {renderItems(rightItems)}
        </ul>

        {/* MOBILE */}
        <div className="lg:hidden ml-auto">
          <button onClick={() => setShowDropdown(!showDropdown)}>
            <Menu className="w-8 h-8 text-white" />
          </button>

          {showDropdown && (
            <ul className="absolute right-6 mt-4 bg-white rounded-lg shadow-lg w-52 p-2">
              {renderItems(Quicklinks, true)}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
