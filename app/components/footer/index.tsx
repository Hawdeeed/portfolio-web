"use client";
import { IMAGES } from "@/share/assets";
import { FOOTER_ITEMS } from "@/share/data";
import { ROUTES } from "@/share/routes";
import Image from "next/image";
import Link from "next/link";
import { InputHTMLAttributes, useState } from "react";
import Button from "../button";
import { Email } from "../icons";

interface FooterInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onSend: () => void;
}

const FooterInput: React.FC<FooterInputProps> = ({ onSend, ...props }) => {
  return (
    <div className="flex justify-center items-center gap-2 px-1 xl:px-1.5 bg-gray-800 rounded-lg w-fit">
      <Email className="w-5 xl:w-6 h-5 xl:h-6 ml-2" />
      <input
        id="email"
        autoComplete="off"
        type="email"
        placeholder="name@domain.com"
        className="bg-transparent h-full xl:min-w-[220px] py-3 xl:py-4 outline-none text-white text-sm xl:text-base"
        {...props}
      />
      <Button
        text="Send"
        className="bg-primary-gradient px-6 xl:px-10 py-2 xl:py-2.5 text-white text-xs xl:text-sm"
        onClick={onSend}
      />
    </div>
  );
};

const Footer = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <footer id="footer" className="bg-bg-dark">
      <div className="bg-bg-dark flex flex-col lg:flex-row gap-10 lg:gap-0 py-16 px-6 sm:px-14 xl:px-24 max-w-[1500px] mx-auto">
        <div className="w-full lg:w-[30%] xl:w-[20%] flex flex-col gap-4 lg:gap-6 xl:min-w-[360px]">
          <Link href={ROUTES.home} className="w-fit">
            <Image
              src={IMAGES.logo}
              alt="logo"
              width={100}
              height={100}
              loading="eager"
              priority
              className="w-40 xl:w-52 h-8 pr-3"
            />
          </Link>
          <div className="w-fit text-white text-lg xl:text-xl leading-[23px] font-extralight flex flex-col gap-1">
            <Link href={FOOTER_ITEMS.email.href} className="hover:underline">
              {FOOTER_ITEMS.email.value}
            </Link>
            <p>Phone: {FOOTER_ITEMS.phone}</p>
          </div>
          <div className="w-fit flex gap-3">
            {FOOTER_ITEMS.socials.map((social: SocialItem, index: number) => (
              <Link key={index} href={social.href} target="_blank">
                <Image
                  src={social.icon}
                  alt="social"
                  width={30}
                  height={30}
                  loading="eager"
                  priority
                  className="w-5 h-5"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-[70%] xl:w-[80%]">
          <div className="w-full mx-auto flex flex-col md:flex-row justify-between gap-10">
            {FOOTER_ITEMS.linkItems.map((item: LinkItem, index: number) => (
              <div key={index} className="flex flex-col gap-4">
                <h3 className="text-white text-lg xl:text-xl leading-[23px] font-semibold">
                  {item.name}
                </h3>
                <ul className="flex flex-col gap-2 text-white text-base xl:text-lg leading-[18px] font-light">
                  {item.links.map(
                    (
                      link: {
                        name: string;
                        href: string;
                      },
                      index: number,
                    ) => (
                      <li key={index}>
                        <Link href={link.href} className="hover:underline">
                          {link.name}
                        </Link>
                      </li>
                    ),
                  )}
                  {item.name === "Subscribe" && (
                    <li>
                      <FooterInput
                        onSend={() => {}}
                        value={email}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>,
                        ) => setEmail(event.target.value)}
                      />
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
