"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";
import navLinks from "@/constants/navLinks";
import Logo from "./Logo";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <button onClick={() => setShowNav((prev) => !prev)}>
        <BiMenuAltRight className="text-2xl" />
      </button>
      {showNav && (
        <motion.nav
          initial={{
            opacity: 0,
            y: -5,
          }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed z-10 top-20 right-5 rounded-md bg-white shadow-lg p-3"
        >
          <Logo w={25} h={25} />
          <ul className="mt-5">
            {navLinks.map((link, index) => (
              <li key={index} className="border-b border-b-slate-300">
                <a
                  href={link.href}
                  className="hover:text-amber-600 duration-200 py-5 w-40 inline-block"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </>
  );
};

export default Nav;
