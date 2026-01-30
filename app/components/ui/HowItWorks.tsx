import { Sparkles, Wand2, Upload } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Step 1 */}
          <div className="text-center">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #ec4899)",
              }}
            >
              <Upload className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              1. Upload Your Image
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Simply upload a photo of your product. Works with any angle or lighting condition.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{
                background: "linear-gradient(135deg, #ec4899, #f59e0b)",
              }}
            >
              <Wand2 className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              2. Choose Your Style
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Select from preset styles, backgrounds, lighting, or create custom scenes to match your brand.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #7c3aed)",
              }}
            >
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              3. Generate in Seconds
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Watch as our AI transforms your image into studio-grade visuals instantly. Download and use immediately.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
