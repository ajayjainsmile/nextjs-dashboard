"use client";

import { useState } from "react";
import {
  User,
  Shield,
  Bell,
  LogOut,
  ChevronRight,
} from "lucide-react";

import HeaderInner from "@/app/components/ui/HeaderInner";
import ChangePassword from "@/app/components/ui/ChangePassword";
import Notification from "@/app/components/ui/Notifications";

type Props = {
  user: {
    name: string;
    email: string;
  };
};

export default function AccountClient({ user }: Props) {
  const [activeTab, setActiveTab] = useState<
    "profile" | "security" | "notifications"
  >("profile");

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    company: "",
    bio: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise((r) => setTimeout(r, 500));
    setIsSaving(false);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderInner user={user} />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2">
          Account Settings
        </h1>
        <p className="text-gray-600 mb-8">
          Manage your profile, security, and preferences
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div>
            <nav className="space-y-2">
              {[
                { key: "profile", label: "Profile", icon: User },
                { key: "security", label: "Security", icon: Shield },
                { key: "notifications", label: "Notifications", icon: Bell },
              ].map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.key;

                return (
                  <button
                    key={item.key}
                    onClick={() =>
                      setActiveTab(item.key as any)
                    }
                    className={`w-full px-4 py-3 rounded-lg flex items-center justify-between ${
                      isActive
                        ? "bg-purple-100 text-purple-700"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-5 h-5" />
                      {item.label}
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                );
              })}

              <hr className="my-4" />

              <form action="/api/auth/logout" method="post">
                <button className="w-full px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 flex items-center gap-2">
                  <LogOut className="w-5 h-5" />
                  Sign Out
                </button>
              </form>
            </nav>
          </div>

          {/* Main */}
          <div className="md:col-span-3">
            {/* PROFILE */}
            {activeTab === "profile" && (
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
                {isEditing ? (
                  <div className="space-y-4">
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 p-3 rounded"
                      placeholder="Full Name"
                    />
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 p-3 rounded"
                      placeholder="Email"
                    />
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 p-3 rounded"
                      placeholder="Bio"
                    />

                    <div className="flex gap-3">
                      <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="flex-1 bg-purple-600 text-white py-3 rounded"
                      >
                        {isSaving ? "Saving..." : "Save"}
                      </button>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="flex-1 bg-gray-100 py-3 rounded"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p><b>Name:</b> {formData.name}</p>
                    <p><b>Email:</b> {formData.email}</p>

                    <button
                      onClick={() => setIsEditing(true)}
                      className="mt-4 bg-purple-600 text-white px-4 py-2 rounded"
                    >
                      Edit Profile
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* SECURITY */}
            {activeTab === "security" && <ChangePassword />}

            {/* NOTIFICATIONS */}
            {activeTab === "notifications" && <Notification />}
          </div>
        </div>
      </div>
    </div>
  );
}
