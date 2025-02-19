import fs from "fs";
import { SignJWT } from "jose";
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

const importPKCS8 = async (pemKey: string) => {
  return await crypto.subtle.importKey(
    "pkcs8",
    decodePEM(pemKey),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    true,
    ["sign"],
  );
};

const decodePEM = (pem: string) => {
  const base64 = pem
    .replace(/-----BEGIN PRIVATE KEY-----/, "")
    .replace(/-----END PRIVATE KEY-----/, "")
    .replace(/\n/g, "");
  const binary = atob(base64);
  return new Uint8Array([...binary].map((char) => char.charCodeAt(0)));
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
    redirect(
      encodeNotificationURL(
        "sign-in",
        "error",
        "Server Error. Please contact support immediately",
      ),
    );
  }

  const privateKey = await importPKCS8(JWT_PRIVATE);

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
