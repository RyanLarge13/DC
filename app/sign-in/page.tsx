import React from "react";
import Logo from "@/public/assets/logo.svg";
import CheckMark from "@/public/assets/check-mark.svg";
import Image from "next/image";

const SignIn = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between px-5 py-20 text-center lg:flex-row lg:justify-between lg:px-20 xl:px-40">
      <div className="ml-10 flex-1 py-20">
        <div className="flex flex-col items-start justify-start md:flex-row md:items-center md:justify-center md:gap-x-3">
          <p className="mb-5 text-4xl font-bold">Sign In To </p>
          <Image src={Logo} alt="logo" className="w-50 aspect-square" />
        </div>
        <p className="mr-0 mt-5 max-w-[400px] text-left lg:mr-40">
          Find the right solution to your tech dream. Are you looking for a new
          website, mobile app or game to come to life? Then you are in the right
          place. Simply start by creating a free new account and enjoy the perks
        </p>
        <ul className="mt-10 flex flex-col items-start justify-start gap-y-3">
          <li className="flex items-center justify-start gap-x-3">
            <Image src={CheckMark} alt="check" className="aspect-square w-8" />
            <p>Free Portfolio Page</p>
          </li>
          <li className="flex items-center justify-start gap-x-3">
            <Image src={CheckMark} alt="check" className="aspect-square w-8" />
            <p>Discounts and Promotions</p>
          </li>
          <li className="flex items-center justify-start gap-x-3 text-left">
            <Image src={CheckMark} alt="check" className="aspect-square w-8" />
            <p>Integrated Project Management</p>
          </li>
        </ul>
      </div>
      <div className="relative min-h-[75vh] flex-1">
        <div className="absolute inset-0 z-[-1] rounded-lg bg-slate-800 shadow-lg"></div>
        <div className="absolute inset-0 z-[-1] hidden translate-x-10 translate-y-10 rounded-lg bg-slate-900 shadow-inner md:block"></div>
        <form className="rounded-lg bg-slate-900 p-5 pl-10 pt-20 lg:ml-40 lg:mr-20 lg:mt-20">
          <p className="mb-3 text-left text-2xl font-semibold">Sign In</p>
          <p className="my-3 text-left">
            Welcome to DC! Sign In or Sign Up to create an account and access
            all of the amazing perks that come with software
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-y-5">
            <input
              type="text"
              placeholder="Username"
              className="w-full rounded-md bg-slate-700 px-4 py-2 text-lg outline-none duration-500 focus:shadow-md focus:shadow-slate-700 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full rounded-md bg-slate-700 px-4 py-2 text-lg outline-none duration-500 focus:shadow-md focus:shadow-slate-700 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Password"
              className="w-full rounded-md bg-slate-700 px-4 py-2 text-lg outline-none duration-500 focus:shadow-md focus:shadow-slate-700 focus:outline-none"
            />
            <div className="flex items-center justify-start gap-x-3 self-start text-left">
              <input
                type="checkbox"
                id="keep-loggedin"
                className="custom-checkbox"
              />
              <label htmlFor="keep-loggedin" className="text-sm">
                Keep Me Logged In
              </label>
            </div>
            <button
              type="submit"
              className="w-full rounded-sm bg-gradient-to-tr from-orange-500 to-purple-500 px-5 py-2"
            >
              Let's Go!
            </button>
          </div>
          <div className="mt-5">
            <p>or</p>
            <a href="/sign-up" className="mt-5 block text-sm">
              <span className="font-semibold text-purple-500">
                Need An Account?
              </span>{" "}
              Create One
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
