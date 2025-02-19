"use client";

import React, { useState } from "react";

import Backdrop from "./Backdrop";

const UserButton = ({ user }: { user: { username: string } }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowMenu((prev) => !prev)}
        className="flex h-8 w-8 items-center justify-center rounded-full shadow-md outline outline-1 outline-slate-700"
      >
        <p>{user.username[0].toUpperCase() || "U"}</p>
      </button>
      {showMenu ? (
        <>
          <Backdrop click={() => setShowMenu(false)} />
          <div className="fixed right-5 top-5 z-[998] flex flex-col rounded-md bg-black shadow-lg shadow-slate-700">
            <a
              href="/profile"
              className="border-b border-b-orange-500 bg-transparent px-5 py-3 duration-200 hover:bg-[#111]"
            >
              Profile
            </a>
            <a
              href="/profile"
              className="border-b border-b-orange-500 bg-transparent px-5 py-3 duration-200 hover:bg-[#111]"
            >
              Manage Account
            </a>
            <a
              href="/profile"
              className="border-b border-b-orange-500 bg-transparent px-5 py-3 duration-200 hover:bg-[#111]"
            >
              Logout
            </a>
          </div>
        </>
      ) : null}
    </>
  );
};

export default UserButton;
