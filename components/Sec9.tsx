import React from "react";
import Image from "next/image";
import Hearts from "../public/assets/hearts.svg";

const Sec9 = () => {
  return (
    <section className="flex flex-col items-center justify-start py-20">
      <Image src={Hearts} alt="tools logo" width={300} height={150} />
      <p className="mt-20 font-bold text-fuchsia-500">
        Because we believe in good business
      </p>
      <h2 className="my-5 text-center text-4xl font-bold leading-[1.5em]">
        No Long Term Contracts
      </h2>
      <p className="max-w-[600px] px-5 text-center md:px-0">
        Our business model and pricing are simple: you pay a monthly development
        subscription fee based on how many developers you need. Protect your
        cash flow now and always. Try us without long-term commitment. See how
        we help you save money.
      </p>
    </section>
  );
};

export default Sec9;
