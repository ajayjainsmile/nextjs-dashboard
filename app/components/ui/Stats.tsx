"use client";


export default function Stats() {
 const stats = [
    { label: "Total Images", value: "12", icon: "🖼️" },
    { label: "Collections", value: "5", icon: "📁" },
    { label: "This Month", value: "8", icon: "📊" },
    { label: "Storage Used", value: "2.4 GB", icon: "💾" },
  ];

  return (
      <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition"
            >
              <p className="text-3xl mb-2">{stat.icon}</p>
              <p className="text-sm text-gray-600 mb-1">
                {stat.label}
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
  );
}
