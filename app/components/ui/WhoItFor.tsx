export default function WhoItFor() {
  return (
    <section className="py-20 md:py-32 px-6" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Who It's For
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "E-commerce Brands & D2C Founders",
              description:
                "Launch faster with professional product photography without the overhead. Scale your catalog instantly.",
            },
            {
              title: "Agencies & Freelancers",
              description:
                "Offer premium product visualization to your clients. Increase margins with automated solutions.",
            },
            {
              title: "Social Media Creators",
              description:
                "Generate engaging product content for TikTok, Instagram, and Pinterest in minutes. Stay consistent with fresh visuals.",
            },
            {
              title: "Product Photographers & Small Businesses",
              description:
                "Enhance your services and expand your capacity. Complement your work with AI-powered variations.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl p-8 transition-all hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #f9fafb, #ffffff)",
                border: "1px solid #e5e7eb", // gray-200
              }}
            >
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
