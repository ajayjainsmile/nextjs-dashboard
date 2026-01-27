import UploadForm from "@/components/UploadForm";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">AI Product Generator</h1>
      <UploadForm />
    </div>
  );
}
