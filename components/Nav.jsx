"use client";

import { useState, useEffect } from "react";
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
    <nav className="fixed flex justify-between items-center top-0 right-0 left-0 shadow-sm backdrop-blur-sm">
      <div className="p-3">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={30}
            height={30}
            className="object-contain"
          />
        </Link>
      </div>
      <div className="p-3">
        {session?.user ? (
          <div></div>
        ) : (
          <div>
            {providers &&
              Object.values(providers).map((provider) => (
                <Button
                  text="signin"
                  key={provider.name}
                  click={signIn(provider.id)}
                  classes=""
                />
              ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
