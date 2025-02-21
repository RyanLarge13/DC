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
          <div className="fixed right-5 top-5 z-[998] flex flex-col overflow-hidden rounded-md bg-black bg-opacity-80 shadow-lg shadow-slate-700 backdrop-blur-sm">
            <a
              href="/profile"
              className="hover:bg-gradient-t-tr bg-transparent px-5 py-3 text-center duration-200 hover:bg-gradient-to-tr hover:from-orange-500 hover:to-pink-500"
            >
              Profile
            </a>
            <a
              href="/profile"
              className="hover:bg-gradient-t-tr bg-transparent px-5 py-3 text-center duration-200 hover:bg-gradient-to-tr hover:from-orange-500 hover:to-pink-500"
            >
              Manage Account
            </a>
            <a
              href="/profile"
              className="hover:bg-gradient-t-tr bg-transparent px-5 py-3 text-center duration-200 hover:bg-gradient-to-tr hover:from-orange-500 hover:to-pink-500"
            >
              Logout
            </a>
            <button
              onClick={() => setShowMenu(false)}
              className="hover:bg-gradient-t-tr bg-transparent px-5 py-3 duration-200 hover:bg-gradient-to-tr hover:from-orange-500 hover:to-pink-500"
            >
              Close
            </button>
          </div>
        </>
      ) : null}
    </>
  );
};

export default UserButton;
