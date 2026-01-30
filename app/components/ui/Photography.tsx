import { ArrowRight } from "lucide-react";

export default function Photography() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div
        className="max-w-3xl mx-auto rounded-3xl p-12 md:p-16 text-center"
        style={{
          background: "linear-gradient(135deg, #6366f1, #ec4899)", // indigo → pink
          color: "#ffffff",
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Product Photography?
        </h2>

        <p
          className="text-xl mb-8"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          Join hundreds of creators and businesses already using StudioAI. Get studio-grade visuals in seconds.
        </p>

        <button
          className="px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1"
          style={{
            background: "#ffffff",
            color: "#6366f1",
            boxShadow: "0 10px 30px rgba(255,255,255,0.25)",
          }}
        >
          Create Now <ArrowRight className="w-5 h-5 ml-2 inline" />
        </button>
      </div>
    </section>
  );
}
