import { NextResponse, type NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;
  const isProfilePage = req.nextUrl.pathname.startsWith("/dashboard");

  if (isProfilePage && !isAuthenticated) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }
}
