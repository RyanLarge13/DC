import React from "react";
import Image from "next/image";
import Logo from "@/public/assets/logo.svg";
import WebSvg from "@/public/assets/WebSvg.svg";
import { IoIosSpeedometer } from "react-icons/io";
import { FaMinus, FaThumbsUp } from "react-icons/fa";
import { FaMoneyBill1Wave, FaPlus } from "react-icons/fa6";

const About = () => {
  const Sec2 = () => {
    return (
      <section className="flex min-h-screen flex-col items-center justify-center px-10 py-20 text-center md:px-40 lg:px-80">
        <p>About Us</p>
        <h2 className="my-10 px-5 text-4xl font-bold">Our Company Overview</h2>
        <p>
          Our mission is to make sure everyone has a financially realistic and
          time efficient solution to getting their tech products into a
          production environment as quickly as possible with a high satisfaction
          rate. We also take on companies looking for help and the extra push
          towards completing their business goals. To learn more about what we
          specialize in and what you gain from us click on one of the sections
          below
        </p>
        <div className="mt-10">
          <button className="m-2 rounded-sm bg-gradient-to-tr from-cyan-500 to-fuchsia-500 px-10 py-3 text-white">
            Company
          </button>
          <button className="m-2 rounded-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 px-10 py-3 text-white">
            Our Services
          </button>
          <button className="m-2 rounded-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 px-10 py-3 text-white">
            Our Team
          </button>
        </div>
        <hr className="outline-t my-10 w-full outline-slate-900" />
        <p>
          The meaning of good software is the our standard here at Dev Commerce.
          We have a very specific structure and guidance system when in the
          development and even production / deployment process. Taking each step
          with care and diligence you will be guaranteed a good finalized system
          by the end in a timely manner
        </p>
        <button className="ml-5 mt-10 rounded-sm px-10 py-3 text-white outline outline-offset-[-4px] outline-orange-500">
          Learn More
        </button>
        <Image
          src={WebSvg}
          alt="web-svg"
          className="mt-20 w-full object-contain"
        />
      </section>
    );
  };

  const Sec3 = () => {
    return (
      <section className="relative bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-10 py-20 text-center md:px-40 lg:px-80">
        <p>Features & Benefits</p>
        <h2 className="my-10 px-5 text-4xl font-bold">
          What You Will Get Out of Dev Commerce
        </h2>
        <button className="mt-5 rounded-sm px-10 py-3 text-white outline outline-offset-[-4px] outline-orange-500">
          Browse Services
        </button>
        <div className="mt-10 grid grid-cols-1 place-items-center gap-y-5">
          <div className="flex w-full flex-col items-center justify-between rounded-md bg-black p-5 text-center shadow-lg shadow-slate-950">
            <h3 className="mb-5 self-center text-3xl font-bold">
              <IoIosSpeedometer />
            </h3>
            <p>Fast & Efficient Development</p>
          </div>
          <div className="flex w-full flex-col items-center justify-between rounded-md bg-black p-5 text-center shadow-lg shadow-slate-950">
            <h3 className="mb-5 self-center text-3xl font-bold">
              <FaThumbsUp />
            </h3>
            <p>High Quality Software</p>
          </div>
          <div className="flex w-full flex-col items-center justify-between rounded-md bg-black p-5 text-center shadow-lg shadow-slate-950">
            <h3 className="mb-5 self-center text-3xl font-bold">
              <FaMoneyBill1Wave />
            </h3>
            <p>Financial Freedom</p>
          </div>
        </div>
      </section>
    );
  };

  const Sec4 = () => {
    return (
      <section className="flex min-h-screen flex-col items-center justify-center px-10 py-20 md:px-40 lg:px-80">
        <p>FAQ</p>
        <h2 className="my-10 px-5 text-center text-4xl font-bold">
          Frequently Asked Questions
        </h2>
        <div>
          <div className="my-5 w-full rounded-md border-l-2 border-l-orange-500 bg-black p-5 shadow-lg shadow-slate-950">
            <div className="flex items-center justify-between gap-x-5">
              <h3 className="font-bold text-orange-500">
                "How do you determine pricing?""
              </h3>
              <FaMinus />
            </div>
            <p className="ml-1 mt-3 text-xs">
              Our pricing system is simple and fair. Depending on your software
              needs eg mobile app, video game etc... We start with a base price.
              The price for the application only then goes up based on further
              discussion and features needed to be implemented and only charged
              as each step is complete
            </p>
          </div>
          <div className="my-5 w-full rounded-md border-l-2 border-l-orange-500 bg-black p-5 shadow-lg shadow-slate-950">
            <div className="flex items-center justify-between gap-x-5">
              <h3 className="font-bold text-orange-500">
                "How do you determine pricing?""
              </h3>
              <FaPlus />
            </div>
            {/* <p className="ml-1 mt-3 text-xs">
              Our pricing system is simple and fair. Depending on your software
              needs eg mobile app, video game etc... We start with a base price.
              The price for the application only then goes up based on further
              discussion and features needed to be implemented and only charged
              as each step is complete
            </p> */}
          </div>
          <div className="my52 w-full rounded-md border-l-2 border-l-orange-500 bg-black p-5 shadow-lg shadow-slate-950">
            <div className="flex items-center justify-between gap-x-5">
              <h3 className="font-bold text-orange-500">
                "How do you determine pricing?""
              </h3>
              <FaPlus />
            </div>
            {/* <p className="ml-1 mt-3 text-xs">
              Our pricing system is simple and fair. Depending on your software
              needs eg mobile app, video game etc... We start with a base price.
              The price for the application only then goes up based on further
              discussion and features needed to be implemented and only charged
              as each step is complete
            </p> */}
          </div>
        </div>
      </section>
    );
  };

  return (
    <main>
      <section className="relative px-10 py-20 text-center md:px-40 lg:px-80">
        <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-fuchsia-500 to-cyan-500"></div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="my-10 px-5 text-4xl font-bold">
            Who Are We And What Do We Do?
          </h2>
          <p>
            Dev Commerce is a small Software business built from the ground up.
            What makes this company so special is the heart and dedication put
            into its creation. We saw the vision of a world where building
            software was easily accessible at the finger tips of any individual.
            Here it is financially sound, quality safe, and time efficient and
            available to anyone ready to put their footprint in the world of
            tech
          </p>
          <div>
            <button className="ml-5 mt-10 rounded-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 px-10 py-3 text-white">
              Services
            </button>
            <button className="ml-5 mt-10 rounded-sm px-10 py-3 text-white outline outline-offset-[-4px] outline-orange-500">
              Contact Us
            </button>
          </div>
        </div>
        <Image
          src={Logo}
          alt="logo"
          className="absolute inset-0 z-[-1] h-full w-full object-contain opacity-20"
        />
      </section>
      <Sec2 />
      <Sec3 />
      <Sec4 />
    </main>
  );
};

export default About;
