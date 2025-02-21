import Image from "next/image";
import React from "react";

import NoneFound from "@/public/assets/none-found.svg";

const CannotFind = ({
  Text,
  link,
}: {
  Text: React.ReactElement;
  link: { href: string; txt: string };
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={NoneFound}
        alt="nothing to show"
        className="mt-20 object-contain"
      />
      {Text}
      <a
        href={link.href}
        className="to-cyan-500px-5 mt-10 block min-w-full max-w-[300px] rounded-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 px-10 py-3 text-sm"
      >
        {link.txt}
      </a>
    </div>
  );
};

export default CannotFind;
