import { importSPKI, jwtVerify } from "jose";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { NextRequest, NextResponse } from "next/server";

import { encodeNotificationURL } from "./utils/helperFunctions";

const returnEarly = (req: NextRequest) => {
  try {
    const redirectUrl = new URL(
      encodeNotificationURL(
        "/sign-in",
        "error",
        "Please login to access your profile",
      ),
      req.nextUrl.origin,
    );
    return NextResponse.redirect(redirectUrl);
  } catch (err) {
    throw new Error(
      `Error redirecting form middleware client with error message. Error: ${err}`,
    );
  }
};

const verifyJWT = async (tokenCookie: RequestCookie) => {
  const KEY = process.env.NEXT_PUBLIC_JWT_PUBLIC_KEY || "undefined";

  if (!KEY) {
    throw new Error("JWT KEY missing from env. Please add it immediately");
  }

  let JWT_PUBLIC;
  try {
    JWT_PUBLIC = await importSPKI(KEY, "RS256");
  } catch (err) {
    console.log(err);
    throw new Error(
      "JWT public key failed to generate. Please add it immediately",
    );
  }

  try {
    const user = await jwtVerify(tokenCookie.value, JWT_PUBLIC, {
      algorithms: ["RS256"],
    });
    console.log(user);
    return true;
  } catch (err) {
    console.log(`Failed to verify the JWT token. Error: ${err}`);
    return false;
  }
};

export const middleware = async (req: NextRequest) => {
  const tokenCookie = req.cookies.get("auth-token");
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/profile")) {
    if (!tokenCookie) {
      return returnEarly(req);
    }
    const isVerified = await verifyJWT(tokenCookie);

    if (isVerified) {
      return NextResponse.next();
    }
    return returnEarly(req);
  }

  if (pathname.startsWith("/sign-up") || pathname.startsWith("/sign-in")) {
    if (!tokenCookie) {
      return NextResponse.next();
    }
    const isVerified = await verifyJWT(tokenCookie);

    if (isVerified) {
      const redirectUrl = new URL(
        encodeNotificationURL("/profile", "success", "Welcome Back!"),
        req.nextUrl.origin,
      );
      return NextResponse.redirect(redirectUrl);
    }
    const redirectUrl = new URL(
      encodeNotificationURL("/sign-in", "error", "Please login again"),
      req.nextUrl.origin,
    );
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/profile", "/", "/sign-in", "/sign-up"],
  runtime: "nodejs",
};
