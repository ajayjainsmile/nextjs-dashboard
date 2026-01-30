"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function loginAction(formData: FormData) {
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  if (!email || !password) {
    return { error: "Please fill in all fields" };
  }

  // 🔐 TODO: Replace with real DB/Auth check
  const isValidUser = true;

  if (!isValidUser) {
    return { error: "Invalid credentials" };
  }

  // ✅ Set session cookie (simple example)
  (await cookies()).set("session", JSON.stringify({ email }), {
    httpOnly: true,
    path: "/",
  });

  // ✅ Server-side redirect
  redirect("/dashboard");
}
