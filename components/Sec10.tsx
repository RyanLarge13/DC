import React from "react";
import MessageMe from "../public/assets/message-me.svg";
import Image from "next/image";

const Sec10 = () => {
  return (
    <section className="flex flex-col items-center justify-between bg-gradient-to-tr from-fuchsia-500 to-cyan-500 py-20 md:flex-row md:px-40 lg:px-80">
      <Image
        src={MessageMe}
        alt="message logo"
        width={300}
        height={150}
        className="object-contain"
      />
      <div className="mt-20 flex flex-col items-start justify-center px-10 md:mt-0 md:px-0">
        <h2 className="mb-5 text-center text-4xl font-bold">Contact Us</h2>
        <form>
          <input
            name="email"
            id="email"
            value=""
            placeholder="yourname@example.com"
            className="rounded-l-md bg-transparent p-3 shadow-lg placeholder:text-white"
          />
          <button
            type="submit"
            className="to-cyan-500px-5 mt-5 w-full rounded-r-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 px-10 py-3 text-white shadow-lg md:mt-0 md:w-min"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Sec10;
