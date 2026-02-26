import { IMAGES } from "@/share/assets";
import { FOOTER_ITEMS, Quicklinks } from "@/share/data";
import { ROUTES } from "@/share/routes";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

interface ContactItem {
  icon?: React.ReactNode;
  value: string;
  href?: string;
}

interface GetInTouchItems {
  email: ContactItem;
  location: ContactItem;
}

export const GET_IN_TOUCH: GetInTouchItems = {
  email: {
    icon: <AiOutlineMail />,
    value: "hadeeda980@gmail.com",
    href: "mailto:hadeeda980@gmail.com",
  },
  location: {
    icon: <CiLocationOn />,
    value: "Lahore, Pakistan",
  },
};
export const Footer = () => {
  return (
    <>
      <div className="bg-bg-dark pb-5 pt-10 px-14 flex flex-col items-center gap-3">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 w-full">
          <div className="left flex flex-col gap-4">
            <div className="flex flex-row gap-1 items-center">
              <Link href={ROUTES.home} className="w-fit">
                <Image
                  src={IMAGES.logo}
                  alt="logo"
                  width={100}
                  height={100}
                  loading="eager"
                  priority
                  className="w-auto h-16 lg:h-20 pr-1"
                />
              </Link>
              <h1 className="text-2xl lg:text-3xl font-bold text-[#ff004f]">
                Hadeed Ahmed
              </h1>
            </div>
            <p className="text-sm lg:text-lg w-full max-w-[300px] lg:max-w-[600px] text-white">
              Blending AI innovation with full-stack development to create
              smart, scalable, and impactful digital products that solve
              real-world problems and enhance user experiences.{" "}
            </p>
            <div className="flex flex-row gap-4">
              {FOOTER_ITEMS.socials.map((social: SocialItem, index: number) => (
                <Link key={index} href={social.href} target="_blank">
                  <Image
                    src={social.icon}
                    alt="social"
                    width={30}
                    height={30}
                    loading="eager"
                    priority
                    className="w-6 h-6"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-20">
            <div className="center md:min-w-32">
              <h1 className="font-semibold text-xl text-[#ff004f]">
                Quick Links
              </h1>
              <div className="flex flex-col gap-3 mt-4">
                {Quicklinks.map((item, index) => (
                  <Link
                    key={index}
                    href={`#${item.id}`}
                    className="text-white text-sm lg:text-lg hover:text-[#ff004f] transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="right">
              <h1 className="font-semibold text-xl text-[#ff004f]">
                Get In Touch
              </h1>
              <div className="flex flex-col gap-4 mt-4">
                {Object.values(GET_IN_TOUCH).map((item, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <span className="text-xl text-[#ff004f]">{item.icon}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white text-sm lg:text-lg group-hover:text-white transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white text-sm lg:text-lg">
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="max-w-[700px] h-[1px] bg-white mt-6"></div> */}
        <p className="text-gray-300 text-sm">
          © 2026 Hadeed Ahmed. All rights reserved.
        </p>
      </div>
    </>
  );
};
