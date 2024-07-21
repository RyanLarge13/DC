import React from "react";
import Image from "next/image";
import HeroImg from "../public/assets/heroImg.svg";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-x-20 py-20 xl:flex-row xl:py-0">
      <div className="flex flex-1 flex-col items-center justify-center px-3 text-center md:block md:px-0 md:text-left">
        <h2 className="max-w-[600px] px-5 text-4xl font-bold leading-[1.5em]">
          Welcome to Dev Commerce Software
        </h2>
        <p className="mt-8 max-w-[600px] px-5">
          My name is Ryan Large, I am an seasoned professional software engineer
          ready to help you build your tech empire!!
        </p>
        <button className="ml-5 mt-10 rounded-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 px-10 py-3 text-white">
          Services
        </button>
      </div>
      <div className="flex-1">
        <Image
          src={HeroImg}
          alt="hero"
          width={1000}
          height={900}
          className="mt-10 h-80 w-80 object-contain md:mt-0 md:h-[900px] md:w-[1000px]"
        />
      </div>
    </section>
  );
};

export default Hero;
