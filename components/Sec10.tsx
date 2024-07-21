import React from "react";
import MessageMe from "../public/assets/message-me.svg";
import Image from "next/image";

const Sec10 = () => {
  return (
    <section className="flex flex-col items-center justify-between bg-gradient-to-tr from-fuchsia-500 to-cyan-500 py-20 md:px-40 lg:px-80 xl:flex-row">
      <Image
        src={MessageMe}
        alt="message logo"
        width={300}
        height={150}
        className="object-contain"
      />
      <div className="mt-20 flex w-min flex-col items-center justify-center px-10 lg:px-0 xl:mt-0 xl:items-start">
        <h2 className="mb-5 text-4xl font-bold">Contact Us</h2>
        <form>
          <input
            name="email"
            id="email"
            value=""
            placeholder="yourname@example.com"
            className="rounded-l-md bg-transparent p-3 text-center shadow-lg placeholder:text-white xl:text-left"
          />
          <button
            type="submit"
            className="mt-5 w-full rounded-r-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 px-5 py-3 text-white shadow-lg xl:mt-0 xl:w-min"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Sec10;
