import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { password } = await request.json();

    // Compare the provided password with the environment variable.
    // This ensures the password check happens only on the server.
    if (password === process.env.ADMIN_PASSWORD) {
      // For demonstration, we'll use a simple token.
      // In production, consider using a signed JWT or a secure session mechanism.
      const token = "authenticated";

      const response = NextResponse.json({ message: "Login successful" });
      response.cookies.set("adminToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24, // valid for one day
        path: "/",
      });
      return response;
    } else {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
