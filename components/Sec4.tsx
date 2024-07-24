import Image from "next/image";
import React from "react";
import Sec4Img from "../public/assets/sec4Img.svg";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoElectron } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { SiUnrealengine } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { MdMore } from "react-icons/md";

const Sec4 = () => {
  return (
    <section className="flex min-h-screen flex-col-reverse items-center justify-center gap-x-20 py-20 xl:flex-row xl:py-0">
      <div className="flex-1 px-10 md:px-0">
        <h2 className="mt-10 max-w-[600px] text-4xl font-bold leading-[1.5em] xl:mt-5">
          Searching For A Helping Hand?
        </h2>
        <p className="max-w-[500px]">
          We can lend you help by providing you with the development tools,
          experience and trust to take care of your projects and send them sky
          rocketing to the finish line
        </p>
        <ul className="mt-10 grid grid-cols-2 place-items-start">
          <li className="my-5 flex items-center justify-start gap-x-5">
            <FaReact />
            <p>React</p>
          </li>
          <li className="my-5 flex items-center justify-start gap-x-5">
            <IoLogoElectron />
            <p>Electron</p>
          </li>
          <li className="my-5 flex items-center justify-start gap-x-5">
            <FaNodeJs />
            <p>Node.js</p>
          </li>
          <li className="my-5 flex items-center justify-start gap-x-5">
            <TbBrandReactNative />
            <p>React Native</p>
          </li>
          <li className="my-5 flex items-center justify-start gap-x-5">
            <SiUnrealengine />
            <p>Unreal Engine</p>
          </li>
          <li className="my-5 flex items-center justify-start gap-x-5">
            <BiLogoPostgresql />
            <p>Postgres</p>
          </li>
          <li className="my-5 flex items-center justify-start gap-x-5">
            <MdMore />
            <p>And Many More</p>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Image
          src={Sec4Img}
          alt="phone"
          className="h-80 w-80 object-contain lg:h-[900px] lg:w-[1000px]"
        />
      </div>
    </section>
  );
};

export default Sec4;
