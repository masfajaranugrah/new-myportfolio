"use client";
import Link from "next/link";
import { NextPage } from "next";
import { AuroraText } from "../aurora-text";
import Image from "next/image";
import { SocialImageConstants } from "@/constants/social-image-constants";

const Footer: NextPage = ({}) => {
  const links = [
    {
      title: "Service",
      subtitles: [
        {
          name: "Website Developtment",
          url: "",
        },
        {
          name: "Frontend Developtment",
          url: "",
        },
        {
          name: "Backend Developtment",
          url: "",
        },
      ],
    },
    {
      title: "Contact Me",
      subtitles: [
        {
          name: "Wa:  087836167585",
         },
        {
          name: "Email: fajaranugrahmr@gmail.com",
         },
        
  
      ],
    },
    // {
    //   title: "Overlogic",
    //   subtitles: [
    //     {
    //       name: "Websites",
    //       url: "/",
    //     },
    //     {
    //       name: "Instagram",
    //       url: "https://www.instagram.com/overlogic.id/",
    //     },
    //     {
    //       name: "Linkedin",
    //       url: "https://www.linkedin.com/in/overlogic",
    //     },
    //     // { name: "Discord", url: "https://discord.com/app" },
    //   ],
    // },
    // {
    //   title: "Domain",
    //   subtitles: [
    //     {
    //       name: "josumaru.my.id",
    //       url: "https://josumaru.my.id",
    //     },
    //     {
    //       name: "raijin.josumaru.my.id",
    //       url: "https://raijin.josumaru.my.id/api/anime/ongoing/1",
    //     },
    //     {
    //       name: "vido.josumaru.my.id",
    //       url: "https://vido.josumaru.my.id",
    //     },
    //     {
    //       name: "hpc.josumaru.my.id",
    //       url: "https://hpc.josumaru.my.id",
    //     },
    //     {
    //       name: "anime.josumaru.my.id",
    //       url: "https://anime.josumaru.my.id",
    //     },
    //   ],
    // },
  ];
  return (
    <footer className="mt-20 overflow-hidden flex items-center justify-center">
      <div className="container mx-3">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <h2 className="text-lg font-bold">FAJAR ANUGRAH</h2>
            </Link>

            <h1 className="dark:text-gray-300 mb-10">
              Build by{" "}
              <span className="text-[#039ee4]">
                <Link href="https://instagram.com/fajaranugrahdev">@fajaranugrahdev</Link>
              </span>
            </h1>
            <div className="flex gap-2 h-10 mt-5">
              {SocialImageConstants.map((social, index) => (
                <Link
                  href={social.url}
                  target="_blank"
                  key={index}
                  className={`duration-200 hover:pt-2`}
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    className="dark:invert"
                  />
                </Link>
              ))}
            </div>
            <p className="dark:text-gray-400 mt-5">
              © {new Date().getFullYear()} Fajar anugrah. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {links.map((link, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-4">{link.title}</h3>
                <ul className="space-y-2">
                  {link.subtitles.map((subtitle, index) => (
                    <li key={index}>
                    
                       
                        {subtitle.name}
                      
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className=" w-full flex mt-4 items-center justify-center">
          <h1 className="text-center text-3xl md:text-5xl lg:text-[10rem] font-bold">
            <AuroraText>FAJAR ANUGRAH</AuroraText>
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
