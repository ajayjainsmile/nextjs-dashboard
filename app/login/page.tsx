import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";
import Header from "@/app/components/ui/Header";
import { getUserFromSession } from "@/app/lib/auth.server"; // your auth util

export default async function LoginPage() {
  const user = await getUserFromSession();

  // ✅ Already logged in → redirect to dashboard
  if (user) {
    redirect("/dashboard");
  }
  return (
        <>
            <Header user={user} />
            <LoginForm />
        </>
  )
}
