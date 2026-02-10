"use client";

import { Bell} from "lucide-react";

export default function Notifications() {
 
  return (
        <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Notification Preferences
                </h3>

                {[
                  "Email notifications",
                  "Generation complete",
                  "Weekly summary",
                  "Marketing emails",
                ].map((name) => (
                  <div
                    key={name}
                    className="flex justify-between items-center border-2 border-gray-200 p-4 rounded-lg mb-3"
                  >
                    <span className="font-medium">
                      {name}
                    </span>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-5 h-5"
                    />
                  </div>
                ))}

                <button className="w-full mt-6 py-3 rounded-lg font-bold text-white bg-purple-600 hover:bg-purple-700">
                  Save Preferences
                </button>
              </div>
  );
}
