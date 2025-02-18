import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

import { User } from "@prisma/client";

export const encodeNotificationURL = (
  route: string,
  type: string,
  text: string,
): string => {
  if (!route || !type || !text) {
    throw new Error(
      "You must pass in a route, type and text property through encodeNotificationUrl",
    );
  }
  const urlStr = `${route}/?${type}=${encodeURIComponent(text)}`;
  return urlStr;
};

export const generate_RSA_JWT_Token = (user: User): string => {
  // Validate user please and throw error if its messed up
  const userToEncode = {
    username: user.username,
    id: user.id,
    email: user.email,
    phoneNumber: user.phoneNumber,
  };

  const JWT_SECRET = process.env.JWT_PRIVATE || "undefined";

  if (JWT_SECRET === "undefined") {
    redirect(
      encodeNotificationURL(
        "sign-in",
        "error",
        "Server Error. Please contact support immediately",
      ),
    );
  }

  try {
    const token = jwt.sign({ ...userToEncode, ranId: uuidv4() }, JWT_SECRET, {
      algorithm: "RS256",
      expiresIn: "2d",
    });
    return token;
  } catch (err) {
    throw new Error(
      "There was an issue with tokenization. Make sure you are passing in proper RSA key pairs to the jwt.sign method",
    );
  }
};
