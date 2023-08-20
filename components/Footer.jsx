"use client";

import Link from "next/link";
import Image from "next/image";
import { BsGithub, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import footerLinks from "@/constants/footerLinks";

const Footer = () => {
  return (
    <div className="mt-20 mb-5 p-5">
      <ul className="grid grid-cols-2 place-items-center">
        {footerLinks.map((link) => (
          <Link key={link.text} href={link.href} className="my-2">
            {link.text}
          </Link>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-10 mx-10">
        <Link href="https://github.com/RyanLarge13/">
          <BsGithub />
        </Link>
        <Link href="https://github.com/RyanLarge13/">
          <BsFacebook />
        </Link>
        <Link href="https://github.com/RyanLarge13/">
          <BsTwitter />
        </Link>
        <Link href="https://github.com/RyanLarge13/">
          <BsLinkedin />
        </Link>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Image
          src="./assets/logo.svg"
          alt="logo"
          width={50}
          height={50}
          className="rounded-md"
          onClick={() => window.scrollTo(0,0)}
        />
      </div>
    </div>
  );
};

export default Footer;
