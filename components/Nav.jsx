"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { MdCircleNotifications } from "react-icons/md";
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
      className="fixed flex justify-between items-center top-0 right-0 left-0 shadow-md bg-white bg-opacity-10 backdrop-blur-sm z-[999]"
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
      <div className="p-3 flex justify-center items-center">
        <div className="mr-10 hidden md:block">
          <ul className="flex justify-start item-center text-xs gap-x-5 whitespace-nowrap">
            <li>Home</li>
            <li>Services</li>
            <li>About DC</li>
            <li>Contect</li>
            <li>Careers</li>
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
              className="rounded-full cursor-pointer"
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
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ x: 50, opacity: 0 }}
            className="fixed top-[110%] right-2 p-2 rounded-md shadow-md bg-white"
          >
            <div className="flex justify-between items-center">
              <Link href="/">
                <Image
                  src="/assets/logo.svg"
                  alt="logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </Link>
              <MdCircleNotifications className="text-2xl cursor-pointer text-purple-500" />
            </div>
            <div>
              <Link href="/profile">
                <Button text="profile" click={null} params={null} classes="" />
              </Link>
              <Link href="/bookings">
                <Button text="orders" click={null} params={null} classes="" />
              </Link>
              <Link href="/dashboard">
                <Button
                  text="dashboard"
                  click={null}
                  params={null}
                  classes=""
                />
              </Link>
              <div className="flex justify-between items-center">
                <Link href="/book">
                  <Button
                    text="New Service"
                    click={null}
                    params={null}
                    classes="text-xs"
                  />
                </Link>
                <Link href="/something">
                  <Button
                    text="New Product"
                    click={null}
                    params={null}
                    classes="text-xs"
                  />
                </Link>
              </div>
              <Link href="/cart">
                <Button
                  text="View Your Cart"
                  click={null}
                  params={null}
                  classes=""
                />
              </Link>
            </div>
            <div className="flex p-2 justify-between items-center text-xs md:hidden">
              <ul className="whitespace-nowrap">
                <li>Home</li>
                <li className="my-2">Services</li>
                <li>About DC</li>
              </ul>
              <ul className="whitespace-nowrap">
                <li>Contect</li>
                <li className="my-2">Careers</li>
                {session?.user && (
                  <button onClick={() => signOut()}>Logout</button>
                )}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Nav;
