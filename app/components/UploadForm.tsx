"use client";
import { useState } from "react";

export default function UploadForm() {
  const [file, setFile] = useState<any>();
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    setLoading(true);
    const base64 = await toBase64(file);

    await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({ image: base64 })
    });

    setLoading(false);
    alert("Image Generated");
  }

  return (
    <div className="mt-4">
      <input type="file" onChange={e => setFile(e.target.files?.[0])} />
      <button
        onClick={handleGenerate}
        className="bg-black text-white px-4 py-2 ml-2"
      >
        {loading ? "Generating..." : "Generate"}
      </button>
    </div>
  );
}

function toBase64(file:any) {
  return new Promise((res) => {
    const reader = new FileReader();
    reader.onload = () => res(reader.result);
    reader.readAsDataURL(file);
  });
}