import React from "react";
import Image from "next/image";
import Logo from "../public/assets/logo.svg";

const Navigation = (): JSX.Element => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-40 hidden items-center justify-between bg-black bg-opacity-10 py-4 shadow-md backdrop-blur-sm md:flex md:px-40 lg:px-80">
      <Image src={Logo} alt="logo" className="" width={30} height={30} />
      <ul className="flex items-center justify-end gap-x-10">
        <li>About</li>
        <li>Products</li>
        <li>Pricing</li>
        <li>Blog</li>
        <li>Jobs</li>
        <li>More</li>
      </ul>
    </nav>
  );
};
export default Navigation;
