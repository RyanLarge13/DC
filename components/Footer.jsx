import Image from "next/image";
import { BsGithub, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import footerLinks from "@/constants/footerLinks";

const Footer = () => {
  return (
    <div className="mt-20 mb-5 p-5">
      <ul className="grid grid-cols-2 place-items-center lg:mx-60">
        {footerLinks.map((link) => (
          <a key={link.text} href={link.href} className="my-2">
            {link.text}
          </a>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-10 mx-10 text-lg lg:my-20 lg:justify-center lg:gap-x-10">
        <a href="https://github.com/RyanLarge13/">
          <BsGithub />
        </a>
        <a href="https://github.com/RyanLarge13/">
          <BsFacebook />
        </a>
        <a href="https://github.com/RyanLarge13/">
          <BsTwitter />
        </a>
        <a href="https://github.com/RyanLarge13/">
          <BsLinkedin />
        </a>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Image
          src="./assets/logo.svg"
          alt="logo"
          width={50}
          height={50}
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default Footer;
