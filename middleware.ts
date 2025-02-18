import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

import { encodeNotificationURL } from "./utils/helperFunctions";

export const middleware = (req: NextRequest) => {
  const tokenCookie = req.cookies.get("auth-token");

  const returnEarly = () => {
    const redirectUrl = new URL(
      encodeNotificationURL(
        "sign-in",
        "error",
        "Please login to access your profile",
      ),
      req.nextUrl.origin,
    );
    return NextResponse.redirect(redirectUrl);
  };

  if (!tokenCookie) {
    return returnEarly();
  } else {
    const JWT_PUBLIC = process.env.JWT_PUBLIC || "undefined";

    if (JWT_PUBLIC === "undefined") {
      throw new Error(
        "JWT public key missing from env. Please add it immediately",
      );
    }

    try {
      jwt.verify(tokenCookie.value, JWT_PUBLIC, {
        algorithms: ["RS256"],
      });
      return NextResponse.next();
    } catch (err) {
      return returnEarly();
    }
  }
};

export const config = {
  matcher: ["/profile"],
};
