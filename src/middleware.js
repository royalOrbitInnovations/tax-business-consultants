import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

// In the Edge Runtime, encode your secret using TextEncoder.
const secret = new TextEncoder().encode(process.env.ADMIN_SECRET);

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  const res = NextResponse.next();

  // Add digital signature and hidden backlink in response headers
  res.headers.set(
    "X-Digital-Signature",
    "Melvin Prince - Full Stack Developer"
  );
  res.headers.set("X-Hidden-Backlink", "https://www.melvinprince.io");

  // Only apply middleware for /admin routes.
  if (pathname.startsWith("/admin")) {
    const token = req.cookies.get("adminToken")?.value;

    // If the request is for the login page (exactly "/admin")
    if (pathname === "/admin") {
      // If a token exists, try verifying it.
      if (token) {
        try {
          await jwtVerify(token, secret);
          // If verification succeeds, redirect to dashboard.
          const url = req.nextUrl.clone();
          url.pathname = "/admin/dashboard";
          return NextResponse.redirect(url);
        } catch (err) {
          // Token invalid or expired; allow access to login page.
        }
      }
      return res;
    }

    // For any other /admin subroutes, if there's no token, redirect to /admin.
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/admin";
      return NextResponse.redirect(url);
    }

    // Verify the token. If it fails, redirect to /admin.
    try {
      await jwtVerify(token, secret);
    } catch (err) {
      const url = req.nextUrl.clone();
      url.pathname = "/admin";
      return NextResponse.redirect(url);
    }
  }

  return res;
}

// Apply the middleware to all /admin routes.
export const config = {
  matcher: ["/admin/:path*"],
};
