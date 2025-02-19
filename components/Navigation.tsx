import React from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { FaBlog, FaNetworkWired } from "react-icons/fa";
import { IoPricetag } from "react-icons/io5";
import { MdArticle, MdMore, MdSearch } from "react-icons/md";
import Image from "next/image";
import Logo from "../public/assets/logo.svg";

const Navigation = (): JSX.Element => {
  return (
    <nav className="fixed left-0 top-[50%] z-40 translate-y-[-50%] rounded-r-lg bg-black bg-opacity-10 px-2 py-3 shadow-md backdrop-blur-sm">
      {/* <Image src={Logo} alt="logo" className="" width={30} height={30} /> */}
      <ul className="flex flex-col items-center justify-end gap-y-10 text-lg">
        <li>
          <a href="/">
            <Image src={Logo} alt="logo" className="h-5 w-5 object-contain" />
          </a>
        </li>
        <li>
          <a href="/search">
            <MdSearch />
          </a>
        </li>
        <li>
          <a href="/about">
            <MdArticle />
          </a>
        </li>
        <li>
          <a href="/services">
            <AiOutlineProduct />
          </a>
        </li>
        <li>
          <a href="/pricing">
            <IoPricetag />
          </a>
        </li>
        <li>
          <a href="/blog">
            <FaBlog />
          </a>
        </li>
        <li>
          <a href="/projects">
            <FaNetworkWired />
          </a>
        </li>
        <li>
          <a href="/more">
            <MdMore />
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
