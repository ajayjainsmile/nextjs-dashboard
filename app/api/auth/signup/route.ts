import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import  User  from "@/app/models/User";
import { hashPassword}  from "@/app/lib/password";

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password required" },
        { status: 400 }
      );
    }

    await connectDB();

    // Check duplicate
    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    const passwordHash = await hashPassword(password);

    const user = await User.create({
      email,
      passwordHash,
      name,
      credits: 5,
      role: "user",
      isVerified: false,      
    });

    // 🎯 Auto-login after signup (optional but UX friendly)
    const sessionData = {
      id: user._id.toString(),
      email: user.email,
      name: user.name,
      credits: user.credits,
      role: user.role,
      isVerified: user.isVerified,
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
  } catch (err) {
    console.error("Signup error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
