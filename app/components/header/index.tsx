"use client";
import { IMAGES } from "@/share/assets";
import { HEADER_ITEMS } from "@/share/data";
import { ROUTES } from "@/share/routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "../icons";

const Header = () => {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    if (showDropdown) {
      const links = document.querySelectorAll(".dropdown-content a");
      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const id = (link as HTMLAnchorElement).getAttribute("href")?.substring(1);
          if (id) {
            handleScroll(id);
          }
        });
      });
    }
  }, [showDropdown]);

  const renderHeaderItems = (dropdown: boolean = false) => {
    return HEADER_ITEMS.map((item: HeaderItem, index: number) => (
      <li key={index} className="w-full">
        <Link href={ROUTES[item.name.toLowerCase() as keyof typeof ROUTES]}>
          <p
            className={`${dropdown ? "w-full p-1.5 rounded-lg cursor-pointer hover:bg-[#ff004f] hover:text-white text-sm font-semibold" : "hover:text-[#ff004f] font-semibold"} ${pathname === ROUTES[item.name.toLowerCase() as keyof typeof ROUTES] && "text-[#ff004f]"}`}
          >
            {item.name}
          </p>
        </Link>
      </li>
    ));
  };

  const renderAdditionalItems = (dropdown: boolean = false) => {
    const items = ["About", "Skills", "Education", "Projects", "Certificates"];
    return items.map((item, index) => (
      <li key={index} className="w-full">
        <a href={`#${item.toLowerCase()}`} onClick={() => setShowDropdown(false)}>
          <p
            className={`${dropdown ? "w-full p-1.5 rounded-lg cursor-pointer hover:bg-[#ff004f] hover:text-white text-sm font-semibold" : "hover:text-[#ff004f] font-semibold"} ${pathname === ROUTES[item.toLowerCase() as keyof typeof ROUTES] && "text-[#ff004f]"}`}
          >
            {item}
          </p>
        </a>
      </li>
    ));
  };

  return (
    <header className="bg-bg-dark">
      <nav className="bg-bg-dark flex justify-between items-center py-6 sm:py-8 xl:py-10 px-6 sm:px-14 xl:px-24 max-w-[1500px] mx-auto">
        <Link href={ROUTES.home}>
          <Image
            src={IMAGES.logo}
            alt="logo"
            width={100}
            height={100}
            loading="eager"
            priority
            className="w-44 xl:w-52 h-8"
          />
        </Link>
        <ul className="hidden lg:flex gap-20 text-white text-base xl:text-lg font-semibold">
          {renderHeaderItems()}
          {renderAdditionalItems()}
        </ul>
        <div className="lg:hidden dropdown dropdown-end">
          <div
            tabIndex={0}
            className="btn btn-circle btn-ghost"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <Menu className="text-white w-8 h-8" />
          </div>
          {showDropdown && (
            <ul
              tabIndex={0}
              className="dropdown-content mt-1 z-[1] p-2 shadow bg-white text-black rounded-box w-52"
            >
              {renderHeaderItems(true)}
              {renderAdditionalItems(true)}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
