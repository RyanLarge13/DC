import Image from "next/image";
import React from "react";
import Logo from "@/public/assets/logo.svg";

const Menu = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-[999] flex items-center justify-between bg-black bg-opacity-20 p-3 shadow-xl backdrop-blur-sm">
      <a href="/">
        <Image src={Logo} alt="logo" className="aspect-square w-8 rounded-sm" />
      </a>
      <a
        href="/sign-in"
        className="block rounded-sm bg-gradient-to-tr from-purple-500 to-orange-500 px-5 py-2 text-sm font-semibold"
      >
        Sign In
      </a>
    </div>
  );
};

export default Menu;
