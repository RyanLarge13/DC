import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  const token = req.cookies.get("auth-token");

  if (!token) {
    console.log("Fuckery fuckeroo no token bitch");
    //  return NextResponse.redirect(new URL("/login", res.url));
  } else {
    console.log("token");
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/profile"],
};
