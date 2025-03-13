import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { password } = await request.json();

    // Validate password using your environment variable.
    if (password === process.env.ADMIN_PASSWORD) {
      // Create a signed JWT token.
      // Ensure you have an environment variable (e.g. ADMIN_SECRET) for signing.
      const token = jwt.sign({ role: "admin" }, process.env.ADMIN_SECRET, {
        expiresIn: "1d",
      });

      const response = NextResponse.json({
        success: true,
        message: "Login successful",
        redirect: "/admin/dashboard",
      });
      response.cookies.set("adminToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24, // valid for one day
        path: "/",
      });
      return response;
    } else {
      return NextResponse.json(
        { success: false, error: "Invalid password" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
