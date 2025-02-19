import { importPKCS8, SignJWT } from "jose";
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

export const generate_RSA_JWT_Token = async (user: User): Promise<string> => {
  // Validate user please and throw error if its messed up
  const userToEncode = {
    username: user.username,
    id: user.id,
    email: user.email,
    phoneNumber: user.phoneNumber,
  };

  const JWT_PRIVATE = process.env.NEXT_PUBLIC_JWT_PRIVATE_KEY || "undefined";

  if (JWT_PRIVATE === "undefined") {
    throw new Error(
      "JWT_PRIVATE is undefined. Either missing from .env or .pem file",
    );
  }

  const privateKey = await importPKCS8(JWT_PRIVATE, "RS256");

  try {
    return await new SignJWT({ ...userToEncode, ranId: uuidv4() })
      .setProtectedHeader({ alg: "RS256" })
      .setExpirationTime("2d")
      .sign(privateKey);
  } catch (err) {
    throw new Error(
      `There was an issue with tokenization. Make sure you are passing in proper RSA key pairs to the jwt.sign method. Must read from .pem file not env. ${err}`,
    );
  }
};
