// app/lib/auth.server.ts
import { cookies } from "next/headers";

export async function getUserFromSession() {
  const session = (await cookies()).get("session")?.value;
  if (!session) return null;

  try {
    return JSON.parse(session);
  } catch {
    return null;
  }
}
