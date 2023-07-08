"use client";

import { MdCircleNotifications } from "react-icons/md";
import { motion } from "framer-motion";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

const Menu = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
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
          <Button text="Profile" click={null} params={null} classes="" />
        </Link>
        <Link href="/bookings">
          <Button text="Orders" click={null} params={null} classes="" />
        </Link>
        <Link href="/dashboard">
          <Button text="Dashboard" click={null} params={null} classes="" />
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
          <Button text="View Your Cart" click={null} params={null} classes="" />
        </Link>
      </div>
      <div className="flex p-2 justify-between items-center text-xs md:hidden">
        <ul className="whitespace-nowrap">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="my-2">
            <Link href="services">Services</Link>
          </li>
          <li>
            <Link href="/about">About DC</Link>
          </li>
        </ul>
        <ul className="whitespace-nowrap">
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li className="my-2">Careers</li>
          {session?.user && (
            <button
              onClick={() => {
                signOut();
                router.push("/");
              }}
            >
              Logout
            </button>
          )}
        </ul>
      </div>
    </motion.div>
  );
};

export default Menu;
