import { UserButton } from "@clerk/nextjs";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 flex justify-between items-center p-5 z-20 bg-white bg-opacity-20 backdrop-blur-sm">
      <Logo w={35} h={35} />
      <div className="flex justify-center items-center gap-x-5">
        <UserButton afterSignOutUrl="/" />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
