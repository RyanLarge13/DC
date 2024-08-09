import React from "react";
import Image from "next/image";
import NoneFound from "@/public/assets/none-found.svg";

const CannotFind = ({
  Text,
  link,
}: {
  Text: React.ReactElement;
  link: { href: string; txt: string };
}) => {
  return (
    <>
      <Image
        src={NoneFound}
        alt="nothing to show"
        className="mt-20 object-contain"
      />
      {Text}
      <a
        href={link.href}
        className="to-cyan-500px-5 mt-10 block rounded-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 px-10 py-3"
      >
        {link.txt}
      </a>
    </>
  );
};

export default CannotFind;
