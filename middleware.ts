// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // Protect /profile routes
  if (!token && request.nextUrl.pathname.startsWith("/profile")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*"],
};
