import { jwtVerify } from "jose";
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

const verifyJWT = (tokenCookie: RequestCookie) => {
  // const JWT_PUBLIC = process.env.NEXT_PUBLIC_JWT_PUBLIC_KEY || "undefined";
  const JWT_PUBLIC = new TextEncoder().encode("public.pem");

  if (!JWT_PUBLIC) {
    throw new Error(
      "JWT public key missing from env. Please add it immediately",
    );
  }

  try {
    jwtVerify(tokenCookie.value, JWT_PUBLIC, {
      algorithms: ["RS256"],
    });
    return true;
  } catch (err) {
    console.log(`Failed to verify the JWT token. Error: ${err}`);
    return false;
  }
};

export const middleware = (req: NextRequest) => {
  const tokenCookie = req.cookies.get("auth-token");
  const pathname = req.nextUrl.pathname;

  console.log("Middleware is called");

  if (pathname.startsWith("/profile")) {
    if (!tokenCookie) {
      return returnEarly(req);
    }
    const isVerified = verifyJWT(tokenCookie);

    if (isVerified) {
      return NextResponse.next();
    }
    return returnEarly(req);
  }

  if (pathname.startsWith("/sign-up") || pathname.startsWith("/sign-in")) {
    console.log("Pathname startwith /sign up or in");
    if (!tokenCookie) {
      return NextResponse.next();
    }
    const isVerified = verifyJWT(tokenCookie);

    if (isVerified) {
      const redirectUrl = new URL(
        encodeNotificationURL("/profile", "success", "Welcome Back!"),
        req.nextUrl.origin,
      );
      return NextResponse.redirect(redirectUrl);
    }
    return NextResponse.next();
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/profile", "/", "/sign-in", "/sign-up"],
  runtime: "nodejs",
};
