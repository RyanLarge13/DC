import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import { z } from "zod";

import PasswordInput from "@/components/PasswordInput";
import SubmitBtn from "@/components/SubmitBtn";
import CheckMark from "@/public/assets/check-mark.svg";
import Logo from "@/public/assets/logo.svg";
import {
  encodeNotificationURL,
  generate_RSA_JWT_Token,
} from "@/utils/helperFunctions";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const signInValidationSchema = z.object({
  username: z.string().min(4).max(30).nonempty().trim(),
  email: z.string().email().toLowerCase().nonempty().trim(),
  password: z.string().min(8).max(1000).nonempty().trim(),
});

// const generateJWT = (user: User): string => {
//   const userToEncode = {
//     username: user.username,
//     id: user.id,
//     email: user.email,
//     phoneNumber: user.phoneNumber,
//   };

//   const JWT_SECRET = process.env.JWT_PRIVATE || "undefined";

//   if (JWT_SECRET === "undefined") {
//     redirect(
//       encodeNotificationURL(
//         "sign-in",
//         "error",
//         "Server Error. Please contact support immediately",
//       ),
//     );
//   }

//   try {
//     const token = jwt.sign({ ...userToEncode, ranId: uuidv4() }, JWT_SECRET, {
//       algorithm: "RS256",
//       expiresIn: "2d",
//     });
//     return token;
//   } catch (err) {
//     throw new Error(
//       "There was an issue with tokenization. Make sure you are passing in proper RSA key pairs to the jwt.sign method",
//     );
//   }
// };

const validateSignIn = async (
  password: string,
  userPassword: string,
): Promise<void> => {
  if (!userPassword) {
    throw new Error(
      "The user from DB did not contain a password when in Sign Up",
    );
  }

  const passwordMatch = await bcrypt.compare(password, userPassword);

  if (!passwordMatch) {
    redirect(
      encodeNotificationURL(
        "sign-in",
        "error",
        "Your password was incorrect. Please try to login again",
      ),
    );
  }
};

const SignIn = () => {
  const signIn = async (formData: FormData) => {
    "use server";
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const isDataValid = signInValidationSchema.safeParse({
      username,
      email,
      password,
    });

    if (!isDataValid.success) {
      const issue = isDataValid.error.issues[0];
      redirect(
        encodeNotificationURL(
          "sign-in",
          "error",
          `${issue.path}: ${issue.message}`,
        ),
      );
    }

    const userExists = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!userExists) {
      redirect(
        encodeNotificationURL(
          "sign-in",
          "error",
          "Please create an account first before trying to sign in",
        ),
      );
    }

    validateSignIn(password, userExists?.password);

    // const token = generateJWT(userExists);

    const token = generate_RSA_JWT_Token(userExists);

    const securityType = process.env.MODE || "production";

    try {
      cookies().set("auth-token", token, {
        httpOnly: true,
        secure: securityType === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 2 * 24 * 60 * 60,
      });
    } catch (err) {
      throw new Error(`Error adding auth token to http cookies. Error: ${err}`);
    }

    redirect("/profile");
  };

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
        <form
          className="rounded-lg bg-slate-900 p-5 pl-10 pt-20 lg:ml-40 lg:mr-20 lg:mt-20"
          action={signIn}
        >
          <p className="mb-3 text-left text-2xl font-semibold">Sign In</p>
          <p className="my-3 text-left">
            Welcome to DC! Sign In or Sign Up to create an account and access
            all of the amazing perks that come with software
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-y-5">
            <input
              type="username"
              autoFocus={true}
              placeholder="Username"
              name="username"
              id="username"
              className="w-full rounded-md bg-slate-700 px-4 py-2 text-lg outline-none duration-500 focus:shadow-md focus:shadow-slate-700 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              className="w-full rounded-md bg-slate-700 px-4 py-2 text-lg outline-none duration-500 focus:shadow-md focus:shadow-slate-700 focus:outline-none"
            />
            <PasswordInput />
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
            <SubmitBtn text="Let's Go!" styles="" />
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
