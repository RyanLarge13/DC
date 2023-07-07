"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

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
      {session?.user ? <p>{session?.user.name}</p> : <p>Dev Commerce</p>}
      <div className="p-3">
        {session?.user ? (
          <div>
            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={30}
                height={30}
                className="rounded-full"
                alt="profile"
              />
            </Link>
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
    </motion.nav>
  );
};

export default Nav;
