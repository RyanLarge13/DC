import "./globals.css";

import Image from "next/image";

import Menu from "@/components/Menu";
import Navigation from "@/components/Navigation";
import Notifications from "@/components/Notifications";

import BgGradient from "../public/assets/bg-gradient.svg";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dev Commerce",
  description: "Create the software you dream of!!",
  icons: ["/assets/logo.svg"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="styled-scrollbar bg-black text-white">
        <Notifications />
        <Menu />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed bottom-0 left-0 z-10"
        >
          <Image
            src={BgGradient}
            alt="gradient"
            width={1000}
            height={1000}
            className="object-contain"
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none fixed right-0 top-0 z-10"
        >
          <Image
            src={BgGradient}
            alt="gradient"
            width={1000}
            height={1000}
            className="object-contain"
          />
        </div>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
