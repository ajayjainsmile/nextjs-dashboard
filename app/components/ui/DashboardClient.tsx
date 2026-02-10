"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Trash2,
  FolderOpen,
  Grid,
  List,
  Search,
} from "lucide-react";
import HeaderInner from "@/app/components/ui/HeaderInner";
import Stats from "@/app/components/ui/Stats";

interface Image {
  id: string;
  url: string;
  name: string;
  style: string;
  created: string;
  collection: string;
}

export default function DashboardClient({ user }: { user: any }) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const images: Image[] = [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      name: "Premium Watch - Studio",
      style: "studio",
      created: "2 days ago",
      collection: "Electronics",
    },
    {
      id: "2",
      url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      name: "Diamond Ring - Luxury",
      style: "luxury",
      created: "3 days ago",
      collection: "Jewelry",
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500",
      name: "Sunglasses - Lifestyle",
      style: "lifestyle",
      created: "5 days ago",
      collection: "Fashion",
    },
  ];

  const collections = [
    { name: "All", count: 12 },
    { name: "Electronics", count: 3 },
    { name: "Jewelry", count: 2 },
    { name: "Fashion", count: 4 },
    { name: "Lifestyle", count: 3 },
  ];

  const filteredImages = images.filter((img) => {
    const matchesSearch = img.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || img.collection === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <HeaderInner user={user} />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome back! 👋
          </h1>
          <p className="text-gray-600">
            Here are your created product images
          </p>
        </div>
        {/* Stats */}
         <Stats  />
        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search images..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-3 rounded-lg ${
                  viewMode === "grid"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-3 rounded-lg ${
                  viewMode === "list"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto">
            {collections.map((c) => (
              <button
                key={c.name}
                onClick={() =>
                  setSelectedFilter(c.name === "All" ? "all" : c.name)
                }
                className={`px-4 py-2 rounded-full font-medium ${
                  (c.name === "All" && selectedFilter === "all") ||
                  selectedFilter === c.name
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {c.name} ({c.count})
              </button>
            ))}
          </div>
        </div>

        {/* Images */}
        {filteredImages.length > 0 ? (
          viewMode === "grid" ? (
            <div className="grid md:grid-cols-3 gap-6">
              {filteredImages.map((img) => (
                <div
                  key={img.id}
                  className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition"
                >
                  <div className="aspect-square bg-gray-100">
                    <img
                      src={img.url}
                      alt={img.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-gray-900 truncate">
                      {img.name}
                    </p>
                    <div className="flex justify-between mt-2 text-sm">
                      <span className="text-gray-600">
                        {img.created}
                      </span>
                      <span className="px-2 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold capitalize">
                        {img.style}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {filteredImages.map((img) => (
                <div
                  key={img.id}
                  className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-4"
                >
                  <img
                    src={img.url}
                    alt={img.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">
                      {img.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {img.collection} • {img.created}
                    </p>
                  </div>
                  <Trash2 className="w-5 h-5 text-red-600" />
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="text-center py-12">
            <FolderOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No images found
            </h3>
            <Link
              href="/create"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white bg-purple-600 hover:bg-purple-700"
            >
              <Plus className="w-5 h-5" />
              Create Your First Image
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
