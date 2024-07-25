import React from "react";
import Image from "next/image";
import Hr from "@/public/assets/hr.svg";
import Check from "@/public/assets/check-mark.svg";

const Sec2 = () => {
  return (
    <section className="min-h-screen px-10 py-20 text-center md:px-40 lg:px-80">
      <div className="flex flex-col">
        <div className="my-1 flex w-full flex-col items-center justify-center rounded-md bg-black p-5 shadow-lg shadow-slate-950">
          <h3>Personal Portfolio</h3>
          <p className="w-min rounded-lg bg-white px-5 py-2 text-black">FREE</p>
          <p className="text-3xl font-bold">$0</p>
          <div className="">
            <div className="flex items-center justify-between gap-x-2">
              <Image src={Check} alt="check mark" className="w-5" />
              <p>Free Portfolio Template</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <main>
      <section className="min-h-screen px-10 py-20 text-center md:px-40 lg:px-80">
        <h2 className="mt-10 px-5 text-4xl font-bold">Pricing & Plans</h2>
        <Image src={Hr} alt="horizontal" className="mx-auto my-10 w-20" />
        <p className="px-5">
          Our Pricing plans are straight forward! Every project depending on
          type has a base price and after an in-depth discussion, an estimated
          quote is given to you for completely free. No Charges until the actual
          building process begins!
        </p>
        <h3 className="mt-20 px-5 text-2xl font-bold">
          <span className="bg-gradient-to-tr from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            No
          </span>{" "}
          Commitment
        </h3>
        <h3 className="mt-5 px-5 text-2xl font-bold">
          {" "}
          <span className="bg-gradient-to-tr from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            No
          </span>{" "}
          Contracts
        </h3>
        <h3 className="mt-5 px-5 text-2xl font-bold">
          {" "}
          <span className="bg-gradient-to-tr from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            No
          </span>{" "}
          Hidden Fees
        </h3>
      </section>
      <Sec2 />
    </main>
  );
};

export default Pricing;
