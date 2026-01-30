import UploadForm from "@/app/components/UploadForm";
import { getUserFromSession } from "@/app/lib/auth.server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const user = await getUserFromSession();
    if (!user) {
      redirect("/login");
    }
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">AI Product Generator</h1>
        <UploadForm user={user} />
      </div>
    );
}
