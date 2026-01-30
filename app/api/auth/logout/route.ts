import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const cookieStore = cookies(); // ✅ NO await

    (await cookieStore).delete("session"); // must match login cookie name

      return NextResponse.redirect(new URL("/", request.url));
      
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "Logout failed" },
      { status: 500 }
    );
  }
}
