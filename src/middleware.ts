import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await request.cookies.get("token")?.value;
  // if (!token && request.url.includes("/dashboard")) {
  //   return NextResponse.redirect(new URL("/auth/login", request.url));
  // }
  return;
}
