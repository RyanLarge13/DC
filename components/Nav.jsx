"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";
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
          <ul className="grid grid-cols-2 gap-y-2 gap-x-5 place-items-start mt-5">
            <li>
              <a href="/products" className="hover:text-amber-600 duration-200">
                Products
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-amber-600 duration-200">
                Services
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-amber-600 duration-200">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-amber-600 duration-200">
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/termsofservice"
                className="hover:text-amber-600 duration-200"
              >
                Terms Of Service
              </a>
            </li>
            <li>
              <a
                href="/privacypolicy"
                className="hover:text-amber-600 duration-200"
              >
                Prvacy Policy
              </a>
            </li>
          </ul>
        </motion.nav>
      )}
    </>
  );
};

export default Nav;
