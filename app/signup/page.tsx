import { redirect } from "next/navigation";
import Header from "@/app/components/ui/Header";
import { getUserFromSession } from "@/app/lib/auth.server"; // your auth util
import SignUpForm from "./SignUpForm";

export default async function SignupPage() {
  const user = await getUserFromSession();

  // ✅ Already logged in → redirect to dashboard
  if (user) {
    redirect("/dashboard");
  }
  return (
        <>
            <Header user={user} />
            <SignUpForm />
        </>
  )
}
