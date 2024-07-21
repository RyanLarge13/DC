import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import BgGradient from "../public/assets/bg-gradient.svg";

export const metadata: Metadata = {
  title: "Dev Commerce",
  description: "Create the software you dream of!!",
  icons: ["/assets/favicon.ico"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none bottom-0 left-0 z-10 hidden md:fixed"
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
          className="pointer-events-none right-0 top-0 z-10 hidden md:fixed"
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
