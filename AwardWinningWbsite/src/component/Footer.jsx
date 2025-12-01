import React from "react";
import { FaDiscord, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";


const links =[
    {
        href:'https://discord.com',icon:<FaDiscord/>
    },{
        href:'https://twitter.com',icon:<FaTwitter/>
    },{
        href:'https://youtube.com',icon:<FaYoutube/>
    },{
        href:'https://discord.com',icon:<FaGithub/>
    }
]
const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Nova 2024. All rights reserved
        </p>
        <div className="flex items-center justify-center gap-6 md:justify-start">
          {links.map((link) => (
            <a
              href={link.href}
              key={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-black transition-transform duration-300 ease-out hover:-translate-y-1 hover:text-white md:text-3xl"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
