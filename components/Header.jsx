import { UserButton } from "@clerk/nextjs";
import DCLogo from "/public/assets/logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 flex justify-between items-center p-3">
      <a href="/">
        <Image src={DCLogo} alt="logo" height={35} width={35} />
      </a>
      <div>
        <a
          href="/signup"
          className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-300 to-pink-400 text-white"
        >
          Sign In
        </a>
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
};

export default Header;
