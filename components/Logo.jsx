import DCLogo from "/public/assets/logo.svg";
import Image from "next/image";

const Logo = ({ w, h }) => {
  return (
    <a href="/">
      <Image src={DCLogo} alt="logo" height={w} width={h} />
    </a>
  );
};

export default Logo;
