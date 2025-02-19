import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

import { encodeNotificationURL } from "./utils/helperFunctions";

export const middleware = (req: NextRequest) => {
  const tokenCookie = req.cookies.get("auth-token");

  const returnEarly = () => {
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

  if (!tokenCookie) {
    console.log("No token in the cookies found");
    return returnEarly();
  } else {
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
      return NextResponse.next();
    } catch (err) {
      console.log(`Failed to verify the JWT token. Error: ${err}`);
      return returnEarly();
    }
  }
};

export const config = {
  matcher: ["/profile"],
  runtime: "nodejs",
};
