"use client";

import Link from "next/link";
import { Plus, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";

type HeaderProps = {
  user: string | null;
};

export default function HeaderInner({ user }: HeaderProps) {
  const pathname = usePathname();

  const isDashboard = pathname.startsWith("/dashboard");
  const isAccount = pathname.startsWith("/dashboard/account");

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
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

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Toggle Account / Dashboard */}
          {isAccount ? (
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Dashboard
            </Link>
          ) : isDashboard ? (
            <Link
              href="/dashboard/account"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Account
            </Link>
          ) : null}

          {/* Create Button */}
          <Link
            href="/dashboard/create"
            className="px-6 py-2.5 rounded-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 transition inline-flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Create Now
          </Link>
        </div>
      </div>
    </header>
  );
}
