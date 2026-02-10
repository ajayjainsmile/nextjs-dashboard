"use client";

import Header from "../components/ui/Header";
import { useState } from "react";
import { Calendar, User, ArrowRight, Search } from "lucide-react";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "How AI is Revolutionizing Product Photography",
      excerpt:
        "Discover how artificial intelligence is transforming the way businesses capture and showcase their products.",
      content:
        "AI-powered product photography is no longer a luxury—it's becoming essential for e-commerce success.",
      author: "Sarah Chen",
      date: "January 15, 2024",
      category: "AI & Technology",
      image: "AI",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "7 Tips to Improve Your Product Photography Game",
      excerpt:
        "Expert tips and tricks to get the most out of your product photos without expensive equipment.",
      content:
        "Professional-looking product photos don't always require professional equipment.",
      author: "Emma Thompson",
      date: "January 12, 2024",
      category: "Tips & Tricks",
      image: "TIP",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "Case Study: E-commerce Boost with AI Photography",
      excerpt:
        "See how a fashion startup increased conversions by 45% using AI-generated product photos.",
      content:
        "In this case study, we examine how one fashion startup leveraged StudioAI.",
      author: "David Kim",
      date: "January 10, 2024",
      category: "Case Studies",
      image: "CS",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "The Future of Visual Commerce",
      excerpt:
        "Exploring trends and predictions for how visual content will shape online retail in 2024.",
      content:
        "As e-commerce continues to evolve, visual content plays a crucial role.",
      author: "Michael Rodriguez",
      date: "January 8, 2024",
      category: "Industry Trends",
      image: "FUT",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Maximizing Your ROI with Product Photography",
      excerpt:
        "Calculate and optimize the return on investment from your product photography efforts.",
      content:
        "Understanding the ROI of product photography is crucial for budget allocation.",
      author: "Sarah Chen",
      date: "January 5, 2024",
      category: "Business",
      image: "ROI",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "Behind the Scenes: How StudioAI Works",
      excerpt:
        "Technical deep-dive into the AI algorithms powering StudioAI's image generation.",
      content:
        "Ever wondered how StudioAI generates such realistic product photos?",
      author: "Michael Rodriguez",
      date: "January 1, 2024",
      category: "AI & Technology",
      image: "BTS",
      readTime: "8 min read",
    },
  ];

  const categories = [
    "all",
    "AI & Technology",
    "Tips & Tricks",
    "Case Studies",
    "Industry Trends",
    "Business",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ minHeight: "100vh", background: "#ffffff" }}>
      <Header user={null} />

      {/* Hero */}
      <section
        style={{
          padding: "120px 24px 80px",
          background:
            "linear-gradient(135deg, #e0f2ff 0%, #eef2ff 100%)",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: 800, marginBottom: 16 }}>
          StudioAI{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #6366f1, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Blog
          </span>
        </h1>
        <p style={{ fontSize: "18px", color: "#555" }}>
          Latest insights, tips, and stories about AI-powered product photography
        </p>
      </section>

      {/* Search */}
      <section style={{ padding: "40px 24px", borderBottom: "1px solid #eee" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ position: "relative", marginBottom: 20 }}>
            <Search
              style={{
                position: "absolute",
                left: 12,
                top: 12,
                color: "#999",
              }}
            />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              style={{
                width: "100%",
                padding: "12px 12px 12px 40px",
                borderRadius: 8,
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: "8px 14px",
                  borderRadius: 999,
                  border: "none",
                  cursor: "pointer",
                  background:
                    selectedCategory === cat
                      ? "linear-gradient(90deg,#6366f1,#8b5cf6)"
                      : "#f1f1f1",
                  color: selectedCategory === cat ? "#fff" : "#333",
                  fontWeight: 600,
                }}
              >
                {cat === "all" ? "All Posts" : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section style={{ padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
            gap: 24,
          }}
        >
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              style={{
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                background: "#fff",
              }}
            >
              <div
                style={{
                  height: 160,
                  background:
                    "linear-gradient(135deg,#e0e7ff,#ede9fe)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 40,
                  fontWeight: 800,
                  color: "#6366f1",
                }}
              >
                {post.image}
              </div>
              <div style={{ padding: 20 }}>
                <div style={{ fontSize: 12, color: "#6366f1", fontWeight: 700 }}>
                  {post.category} • {post.readTime}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, margin: "10px 0" }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: 14, color: "#555" }}>
                  {post.excerpt}
                </p>
                <div
                  style={{
                    marginTop: 16,
                    fontSize: 13,
                    color: "#777",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{post.date}</span>
                  <span style={{ color: "#6366f1", fontWeight: 700 }}>
                    Read →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
