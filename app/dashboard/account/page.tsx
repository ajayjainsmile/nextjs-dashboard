import { redirect } from "next/navigation";
import { getUserFromSession } from "@/app/lib/auth.server";
import AccountClient from "@/app/components/ui/AccountClient";

export default async function AccountPage() {
  const user = await getUserFromSession();

  if (!user) {
    redirect("/login");
  }

  return <AccountClient user={user} />;
}