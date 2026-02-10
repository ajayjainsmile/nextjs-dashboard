"use client";
        

        
import Link from "next/link";
import { Eye, Shield, Lock } from "lucide-react";

export default function ChangePassword() {

  return (
      <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    Change Password
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="password"
                      placeholder="Current password"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg"
                    />
                    <input
                      type="password"
                      placeholder="New password"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg"
                    />
                    <input
                      type="password"
                      placeholder="Confirm new password"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg"
                    />
                    <button className="w-full py-3 rounded-lg font-bold text-white bg-purple-600 hover:bg-purple-700">
                      Update Password
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Two-Factor Authentication
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Extra security for your account
                  </p>
                  <button className="py-3 px-6 rounded-lg font-bold text-white bg-purple-600 hover:bg-purple-700">
                    Enable 2FA
                  </button>
                </div>

                <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Active Sessions
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between bg-gray-50 p-4 rounded-lg">
                      <div>
                        <p className="font-semibold">
                          Chrome on macOS
                        </p>
                        <p className="text-sm text-gray-600">
                          Last active: 2 hours ago
                        </p>
                      </div>
                      <button className="text-red-600">
                        Sign out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
  );
}
