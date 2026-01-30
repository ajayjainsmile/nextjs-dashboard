import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import User from "@/app/models/User";
import { verifyPassword } from "@/app/lib/password";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  await connectDB();

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    );
  }

  const ok = await verifyPassword(password, user.passwordHash);
  if (!ok) {
    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    );
  }

  const sessionData = {
    id: user._id.toString(),
    email: user.email,
    name: user.name,
  };

  const res = NextResponse.json({ success: true });

  res.cookies.set("session", JSON.stringify(sessionData), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
    sameSite: "lax",
  });

  return res;
}
