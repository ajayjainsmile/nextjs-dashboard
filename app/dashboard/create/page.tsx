import HeaderInner from "@/app/components/ui/HeaderInner";
import UploadForm from "@/app/components/UploadForm";
import { getUserFromSession } from "@/app/lib/auth.server";
import { redirect } from "next/navigation";



export default async function CreateNow() {
    const user = await getUserFromSession();
    if (!user) {
      redirect("/login");
    }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <HeaderInner user={user} />
      <UploadForm user={null} />
    </div>
  );
}
