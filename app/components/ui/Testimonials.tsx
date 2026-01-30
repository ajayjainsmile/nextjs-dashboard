import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section
      className="py-20 md:py-32 px-6"
      style={{
        background: "linear-gradient(135deg, #f5f3ff, #fdf2f8)", // light purple → light pink
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
          Loved by Creators & Businesses
        </h2>

        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-16">
          See how StudioAI is transforming product photography
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "We cut our product photography costs by 80% and now launch 3x faster. StudioAI is a game-changer.",
              author: "Sarah Chen",
              role: "Founder, Fashion E-commerce",
              stars: 5,
            },
            {
              quote:
                "The AI avatar feature took our lifestyle photography to the next level. Conversions increased by 34%.",
              author: "Marcus Johnson",
              role: "Social Media Manager",
              stars: 5,
            },
            {
              quote:
                "My clients were skeptical about AI-generated images until they saw the quality. Now it's my secret weapon.",
              author: "Emma Davis",
              role: "Creative Agency Owner",
              stars: 5,
            },
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-8 transition-all hover:shadow-lg"
              style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb", // gray-200
              }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5"
                    style={{
                      fill: "#f59e0b",   // amber-500
                      color: "#f59e0b",
                    }}
                  />
                ))}
              </div>

              <p
                className="mb-6 leading-relaxed italic"
                style={{ color: "#374151" }} // gray-700
              >
                "{testimonial.quote}"
              </p>

              <div>
                <p className="font-bold" style={{ color: "#111827" }}>
                  {testimonial.author}
                </p>
                <p className="text-sm" style={{ color: "#4b5563" }}>
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
