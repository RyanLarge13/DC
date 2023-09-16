"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, getProviders } from "next-auth/react";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
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
      className="pr-3 fixed flex justify-between items-center top-0 right-0 left-0 bg-white bg-opacity-10 backdrop-blur-sm z-[999]"
    >
      <div className="p-1">
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={50}
            height={50}
            className="object-contain my-2"
          />
        </Link>
      </div>
      <div>
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
          <div className="flex justify-center items-center gap-x-5">
            <div onClick={() => setMenu((prev) => !prev)}>
              <Button
                text="Menu"
                key={1}
                click={null}
                params={null}
                classes="text-sm"
              />
            </div>
          </div>
        )}
      </div>
      <AnimatePresence>{menu && <Menu setMenu={setMenu} providers={providers} />}</AnimatePresence>
    </motion.nav>
  );
};

export default Nav;
