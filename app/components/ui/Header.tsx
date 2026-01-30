"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
type HeaderProps = {
  user: string | null;
};

export default function Header({ user }: HeaderProps) {

  return (
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

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-black transition">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-black transition">
            How it works
          </a>
          <a href="#pricing" className="hover:text-black transition">
            Pricing
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {!user ? (
            <>
              <Link
                href="/login"
                className="inline-flex px-6 py-2.5 rounded-lg font-semibold text-purple-700 hover:bg-blue-50"
              >
                Login
              </Link>

              <Link href="/signup">
                <button
                  className="px-4 py-2 rounded-xl text-sm font-semibold text-white shadow-md transition"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))",
                  }}
                >
                  Create now
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>

              <form action="/api/auth/logout" method="post">
                <Button type="submit">Logout</Button>
              </form>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
