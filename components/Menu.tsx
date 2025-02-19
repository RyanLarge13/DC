import { cookies } from "next/headers";
import Image from "next/image";
import React from "react";

import Logo from "@/public/assets/logo.svg";

import UserButton from "./UserButton";

const Menu = () => {
  let user = null;

  try {
    const cookieStore = cookies();
    const storedUser = cookieStore.get("user");
    if (!storedUser) {
      user = null;
    } else {
      user = JSON.parse(storedUser?.value);
    }
  } catch (err) {
    console.log("Error parsing cookie user in Menu");
    user = null;
  }

  return (
    <div className="fixed left-0 right-0 top-0 z-[999] flex items-center justify-between bg-black bg-opacity-20 p-3 shadow-xl backdrop-blur-sm">
      <a href="/">
        <Image src={Logo} alt="logo" className="aspect-square w-8 rounded-sm" />
      </a>
      {!user ? (
        <a
          href="/sign-in"
          className="block rounded-sm bg-gradient-to-tr from-purple-500 to-orange-500 px-5 py-2 text-sm font-semibold"
        >
          Sign In
        </a>
      ) : (
        <UserButton user={user} />
      )}
    </div>
  );
};

export default Menu;
