"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";
import Menu from "@/components/Menu";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [menu, setMenu] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed flex justify-between items-center top-0 right-0 left-0 shadow-md bg-white bg-opacity-10 backdrop-blur-sm z-[999]"
    >
      <div className="p-1 ml-2">
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={40}
            height={40}
            className="object-contain my-2"
          />
        </Link>
      </div>
      <div className="p-3 flex justify-center items-center">
        <div className="mr-10 hidden md:block">
          <ul className="flex justify-start item-center text-xs gap-x-5 whitespace-nowrap">
            <li>
              <Link
                href="/"
                className={`${
                  pathName.startsWith("/") ? "text-pink-300" : "text-black"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`${
                  pathName.startsWith("/services")
                    ? "text-pink-300"
                    : "text-black"
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${
                  pathName.startsWith("/about") ? "text-pink-300" : "text-black"
                }`}
              >
                About DC
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${
                  pathName.startsWith("/contact")
                    ? "text-pink-300"
                    : "text-black"
                }`}
              >
                Connect
              </Link>
            </li>
            {session?.user && <button onClick={() => signOut()}>Logout</button>}
          </ul>
        </div>
        {session?.user ? (
          <div onClick={() => setMenu((prev) => !prev)}>
            <Image
              src={session?.user.image}
              width={30}
              height={30}
              alt="profile"
              className="rounded-full cursor-pointer my-2"
            />
          </div>
        ) : (
          <div className="flex">
            {providers &&
              Object.values(providers).map((provider) => (
                <Button
                  text="Sign in"
                  key={provider.name}
                  click={signIn}
                  params={provider.id}
                  classes="text-sm"
                />
              ))}
          </div>
        )}
      </div>
      <AnimatePresence>{menu && <Menu setMenu={setMenu} />}</AnimatePresence>
    </motion.nav>
  );
};

export default Nav;
