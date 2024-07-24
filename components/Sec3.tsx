import Image from "next/image";
import React from "react";
import Sec3Img from "../public/assets/sec3Img.svg";
import CheckMark from "../public/assets/check-mark.svg";

const Sec3 = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between gap-x-40 py-20 xl:flex-row xl:py-0">
      <div className="flex-1">
        <Image
          src={Sec3Img}
          alt="phone"
          width={1000}
          height={900}
          className="mt-20 h-80 w-80 object-contain md:mt-0 md:h-[900px] md:w-[1000px]"
        />
      </div>
      <div className="mt-10 flex-1 px-10 md:mt-0 md:px-0">
        <h2 className="text-4xl font-bold leading-[1.5em]">
          Building a New Product?
        </h2>
        <p>
          We will help you launch your product with greater value. We{" "}
          <span className="text-fuchsia-500">specialize </span>
          in:
        </p>
        <ul className="mt-10">
          <li className="my-5 flex items-center justify-start gap-x-5">
            <Image src={CheckMark} alt="check" width={30} height={30} />
            <p>Mobile Application Development</p>
          </li>
          <li className="my-5 flex items-center justify-start gap-x-5">
            <Image src={CheckMark} alt="check" width={30} height={30} />
            <p>Web Site Development</p>
          </li>
          <li className="my-5 flex items-center justify-start gap-x-5">
            <Image src={CheckMark} alt="check" width={30} height={30} />
            <p>Server Development</p>
          </li>
          <li className="my-5 flex items-center justify-start gap-x-5">
            <Image src={CheckMark} alt="check" width={30} height={30} />
            <p>Desktop Applications</p>
          </li>
          <li className="my-5 flex items-center justify-start gap-x-5">
            <Image src={CheckMark} alt="check" width={30} height={30} />
            <p>Database Management and Design</p>
          </li>
          <li className="my-5 flex items-center justify-start gap-x-5">
            <Image src={CheckMark} alt="check" width={30} height={30} />
            <p>Game Development</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sec3;
