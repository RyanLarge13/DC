import Logo from "./Logo";
import DCLogo from "../public/assets/index,js";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0">
      <Logo />
      <a href="/">
        <Image src={DCLogo} alt="logo" height={35} width={35} />
      </a>
    </header>
  );
};

export default Header;
