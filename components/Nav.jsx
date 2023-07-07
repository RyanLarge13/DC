"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [menu, setMenu] = useState(false);

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
      className="fixed flex justify-between items-center top-0 right-0 left-0 shadow-md backdrop-blur-sm"
    >
      <div className="p-1 ml-2">
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </Link>
      </div>
      <p>Dev Commerce</p>
      <div className="p-3">
        {session?.user ? (
          <div onClick={() => setMenu((prev) => !prev)}>
            <Image
              src={session?.user.image}
              width={30}
              height={30}
              className="rounded-full"
              alt="profile"
            />
          </div>
        ) : (
          <div>
            {providers &&
              Object.values(providers).map((provider) => (
                <Button
                  text="Sign in"
                  key={provider.name}
                  click={signIn}
                  params={provider.id}
                  classes=""
                />
              ))}
          </div>
        )}
      </div>
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ x: 50, opacity: 0 }}
            className="fixed top-[110%] right-2 p-2 rounded-md shadow-md"
          >
            <ul>
              <li>
                <Button text="Profile" click={null} params={null} classes="" />
              </li>
              <li>
                <Button
                  text="Purchases"
                  click={null}
                  params={null}
                  classes=""
                />
              </li>
              <li>
                <Button text="Services" click={null} params={null} classes="" />
              </li>
              <li>
                <Button text="Booking" click={null} params={null} classes="" />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Nav;
