import bcrypt from "bcryptjs";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import { z } from "zod";

import PasswordInput from "@/components/PasswordInput";
import SubmitBtn from "@/components/SubmitBtn";
import CheckMark from "@/public/assets/check-mark.svg";
import Logo from "@/public/assets/logo.svg";
import { encodeNotificationURL } from "@/utils/helperFunctions";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

const signUpValidationSchema = z.object({
  username: z.string().min(4).max(30).nonempty().trim(),
  email: z.string().email().toLowerCase().nonempty().trim(),
  phoneNumber: z.string().nonempty().min(10).max(14).trim(),
  password: z.string().min(8).max(1000).nonempty().trim(),
});

const addUser = async (user: {
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
}): Promise<User> => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);

  const newUser = await prisma.user.create({
    data: { ...user, password: hashedPassword },
  });

  if (!newUser) {
    return redirect(
      encodeNotificationURL(
        "sign-up",
        "error",
        "We could not create your account at this time. Please contact the developer immediately",
      ),
    );
  }

  return newUser;
};

const SignUp = () => {
  const signUp = async (formData: FormData): Promise<void> => {
    "use server";

    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("tel") as string;
    const password = formData.get("password") as string;

    const isDataValid = signUpValidationSchema.safeParse({
      username,
      email,
      phoneNumber,
      password,
    });

    if (!isDataValid.success) {
      const issue = isDataValid.error.issues[0];
      return redirect(
        encodeNotificationURL(
          "sign-up",
          "error",
          `${issue.path}: ${issue.message}`,
        ),
      );
    }

    await addUser({ username, email, phoneNumber, password });
    // await sendWelcomeEmail();

    return redirect(
      encodeNotificationURL(
        "sign-in",
        "success",
        "You can now sign in with the same credentials you signed up with. Congratulations on building an account with DC!!!",
      ),
    );
  };

  return (
    <section className="flex min-h-screen flex-col items-center justify-between px-5 py-20 text-center lg:flex-row lg:justify-between lg:px-20 xl:px-40">
      <div className="ml-10 flex-1 py-20">
        <div className="flex flex-col items-start justify-start md:flex-row md:items-center md:justify-center md:gap-x-3">
          <p className="mb-5 text-4xl font-bold">Sign Up With </p>
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
        <form
          className="rounded-lg bg-slate-900 p-5 pl-10 pt-20 lg:ml-40 lg:mr-20 lg:mt-20"
          action={signUp}
        >
          <p className="mb-3 text-left text-2xl font-semibold">Sign Up</p>
          <p className="my-3 text-left">
            Welcome to DC! Sign In or Sign Up to create an account and access
            all of the amazing perks that come with software
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-y-5">
            <input
              type="username"
              id="username"
              name="username"
              required
              autoFocus={true}
              placeholder="Username"
              className="w-full rounded-md bg-slate-700 px-4 py-2 text-lg outline-none duration-500 focus:shadow-md focus:shadow-slate-700 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              required
              className="w-full rounded-md bg-slate-700 px-4 py-2 text-lg outline-none duration-500 focus:shadow-md focus:shadow-slate-700 focus:outline-none"
            />
            <input
              type="tel"
              id="tel"
              name="tel"
              placeholder="Phone 7029811370"
              required
              className="w-full rounded-md bg-slate-700 px-4 py-2 text-lg outline-none duration-500 focus:shadow-md focus:shadow-slate-700 focus:outline-none"
            />
            <PasswordInput />
            <SubmitBtn text="Let's Go!" styles="" />
          </div>
          <div className="mt-5">
            <p>or</p>
            <a href="/sign-in" className="mt-5 block text-sm">
              <span className="font-semibold text-purple-500">
                Already Have An Account?
              </span>{" "}
              Sign In
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
