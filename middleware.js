// import { NextResponse } from "next/server";
//
// export function middleware(req) {
//   const { pathname } = req.nextUrl;
//   console.log("Called");
//
//   // Only apply middleware for /admin routes
//   if (pathname.startsWith("/admin")) {
//     // Get the authentication token from cookies
//     const token = req.cookies.get("adminToken")?.value;
//
//     // If the request is for the login page (exactly "/admin")
//     if (pathname === "/admin") {
//       // Optionally, if already authenticated, redirect to dashboard:
//       if (token === "authenticated") {
//         const url = req.nextUrl.clone();
//         url.pathname = "/admin/dashboard";
//         return NextResponse.redirect(url);
//       }
//       // Otherwise, allow access to the login page.
//       return NextResponse.next();
//     }
//
//     // For any other /admin subroutes, check if authenticated.
//     if (!token || token !== "authenticated") {
//       const url = req.nextUrl.clone();
//       url.pathname = "/admin"; // Redirect to the login page at /admin
//       return NextResponse.redirect(url);
//     }
//   }
//
//   return NextResponse.next();
// }
//
// // This config tells Next.js to apply the middleware on all /admin routes.
// export const config = {
//   matcher: ["/:path*"],
// };

import { NextResponse } from "next/server";

export function middleware(req) {
  throw new Error("Middleware triggered for debugging");
}

export const config = {
  matcher: ["/admin/:path*"],
};
