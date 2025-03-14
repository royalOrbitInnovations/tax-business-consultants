import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Validate email and password using your environment variables.
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      // Create a signed JWT token using your ADMIN_SECRET.
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
        { success: false, error: "Invalid credentials" },
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
