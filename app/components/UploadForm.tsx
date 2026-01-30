"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


import {
  Sparkles,
  Upload,
  Wand2,
  Download,
  Share2,
} from "lucide-react";
import { Button } from "./ui/Button";

interface GeneratedImage {
  id: string;
  url: string;
  style: string;
  timestamp: number;
}

type HeaderProps = {
  user: string | null;
};


export default function CreateNow(user: HeaderProps) {
  
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState("studio");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [step, setStep] = useState<"upload" | "style" | "results">("upload");

  const styles = [
    { id: "studio", name: "Studio", icon: "✨", description: "Professional studio lighting" },
    { id: "minimal", name: "Minimal", icon: "◻", description: "Clean white background" },
    { id: "lifestyle", name: "Lifestyle", icon: "🏠", description: "Natural lifestyle setting" },
    { id: "bold", name: "Bold", icon: "⚡", description: "Vibrant and eye-catching" },
    { id: "luxury", name: "Luxury", icon: "👑", description: "Premium dark backdrop" },
    { id: "neon", name: "Neon", icon: "🌈", description: "Modern neon aesthetic" },
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setUploadedImage(event.target?.result as string);
      setStep("style");
    };
    reader.readAsDataURL(file);
  };

  const handleGenerate = async () => {
    if (!uploadedImage) return;

    setIsGenerating(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const now = Date.now();
    const newImages: GeneratedImage[] = [
      {
        id: `${now}-1`,
        url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
        style: selectedStyle,
        timestamp: now,
      },
      {
        id: `${now}-2`,
        url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
        style: selectedStyle,
        timestamp: now,
      },
      {
        id: `${now}-3`,
        url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800",
        style: selectedStyle,
        timestamp: now,
      },
    ];

    setGeneratedImages((prev) => [...prev, ...newImages]);
    setIsGenerating(false);
    setStep("results");
  };

  const clearUpload = () => {
    setUploadedImage(null);
    setStep("upload");
  };

  const startOver = () => {
    setUploadedImage(null);
    setGeneratedImages([]);
    setStep("upload");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/80 border-b head-border">
            <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <Sparkles
                  className="w-7 h-7"
                  style={{
                    color: "hsl(var(--primary))",
                    opacity: 0.9,
                  }}
                />
                <span
                  className="text-xl font-extrabold tracking-tight"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  StudioAI
                </span>
              </Link>
              {/* Actions */}
              <div className="flex items-center gap-3">
                  <span className="hidden sm:inline text-sm text-gray-600 font-medium">
                    {generatedImages.length} images created
                  </span>
                    <Link href="/dashboard">
                      <Button variant="outline">Dashboard</Button>
                    </Link>
      
                    <form action="/api/auth/logout" method="post">
                      <Button type="submit">Logout</Button>
                    </form>
              </div>
            </div>
          </header>
      <div className="pt-20 pb-12">
        {/* Upload */}
        {step === "upload" && (
          <div className="max-w-4xl mx-auto px-6 py-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Create Studio-Grade Visuals</h1>
            <p className="text-gray-600 mb-10">
              Upload your product image and let AI transform it
            </p>

            <label className="block border-2 border-dashed border-blue-300 rounded-2xl p-12 cursor-pointer hover:border-blue-400 bg-blue-50">
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              <Upload className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <p className="text-xl font-bold">Drop your image here</p>
              <p className="text-gray-600">or click to browse</p>
            </label>
          </div>
        )}

        {/* Style */}
        {step === "style" && uploadedImage && (
          <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
            <div className="relative aspect-square rounded-xl overflow-hidden border">
              <Image src={uploadedImage} alt="Uploaded" fill className="object-cover" />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Choose Your Style</h2>

              <div className="space-y-3 mb-6">
                {styles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={`w-full p-4 text-left rounded-lg border ${
                      selectedStyle === style.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <div className="flex gap-3">
                      <span className="text-2xl">{style.icon}</span>
                      <div>
                        <p className="font-bold">{style.name}</p>
                        <p className="text-sm text-gray-600">{style.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold disabled:opacity-60"
              >
                {isGenerating ? "Generating..." : "Generate Photos"}
              </button>

              <button
                onClick={clearUpload}
                className="w-full mt-3 py-3 bg-gray-100 rounded-lg"
              >
                Change Image
              </button>
            </div>
          </div>
        )}

        {/* Results */}
        {step === "results" && (
          <div className="max-w-6xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold mb-6">Your Generated Photos</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {generatedImages.map((img) => (
                <div key={img.id} className="relative aspect-square rounded-xl overflow-hidden border group">
                  <Image src={img.url} alt="Generated" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3">
                    <button className="p-3 bg-white rounded-lg">
                      <Download className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-white rounded-lg">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={handleGenerate}
                className="py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold"
              >
                Generate More
              </button>
              <button
                onClick={startOver}
                className="py-4 bg-gray-100 rounded-lg font-bold"
              >
                Upload New Product
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}