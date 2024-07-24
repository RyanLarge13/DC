import React from "react";
import Image from "next/image";
import Logo from "../public/assets/logo.svg";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center px-5 py-20 md:px-40 lg:px-80">
      <Image
        src={Logo}
        alt="logo"
        width={50}
        height={50}
        className="object-contain"
      />
      <ul className="mt-10 grid grid-cols-2 place-items-center gap-x-10 gap-y-5 md:items-center md:justify-center md:gap-x-5 lg:flex">
        <li>About</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Careers</li>
        <li>Help</li>
        <li>Services</li>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
      </ul>
      <hr className="my-10 w-full bg-gray-400" />
      <div className="flex flex-col items-center justify-between gap-x-10 gap-y-10 md:flex-row md:gap-y-0">
        <p className="text-sm text-slate-400">
          © 2021 Dev Commerce. All rights reserved
        </p>
        <div className="flex items-center justify-center gap-x-5">
          <a target="_blank" href="https://instagram.com/dc_devcommerce">
            <FaInstagram />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100091095757070"
          >
            <FaFacebook />
          </a>
          <a target="_blank" href="https://twitter.com/ryan_large13">
            <FaTwitter />
          </a>
          <a href="https://youtube.com/RyanLarge13">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
