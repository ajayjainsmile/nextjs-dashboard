export default function Package() {
  return (
    <section
      id="pricing"
      className="py-20 md:py-32 px-6"
      style={{ background: "#f9fafb" }} // gray-50
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Simple, Transparent Pricing
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          One-time purchase. Unlimited creations. Forever.
        </p>

        <div
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
          style={{ border: "2px solid #7c3aed" }} // purple-600
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            StudioAI Pro
          </h3>
          <p className="text-gray-600 mb-8">
            Everything you need to create unlimited product visuals
          </p>

          <div className="mb-12">
            <span
              className="text-6xl font-bold"
              style={{ color: "#7c3aed" }} // purple-600
            >
              $199
            </span>
            <span className="text-gray-600 text-lg ml-2">
              One-time
            </span>
          </div>

          <ul className="space-y-4 mb-12 text-left">
            {[
              "Unlimited product image generations",
              "Virtual Studio AI with auto-lighting",
              "Multiple angles & format outputs",
              "Custom backgrounds & brand logos",
              "Animation & short video creation",
              "AI avatar integration",
              "Creative presets & scene library",
              "Lifetime updates & support",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-700">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(124,58,237,0.15)" }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: "#7c3aed" }}
                  ></span>
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* Gradient Button - PURE CSS */}
          <button
            className="w-full px-8 py-4 rounded-lg font-bold text-lg text-white transition-all transform hover:-translate-y-1"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #ec4899)",
              boxShadow: "0 10px 30px rgba(124,58,237,0.3)",
            }}
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}
