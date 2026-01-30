import { Zap, TrendingUp, Package } from "lucide-react";

export default function SellerRating() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Why Choose StudioAI?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-lg bg-purple-100 flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Lightning Fast
            </h3>
            <p className="text-gray-600 leading-relaxed">
              AI-driven product photography that generates studio-quality images
              in minutes, not days.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-pink-300 hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-lg bg-pink-100 flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Cost Savings
            </h3>
            <p className="text-gray-600 leading-relaxed">
              One-time purchase with lifetime access. No monthly subscriptions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-amber-300 hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-lg bg-amber-100 flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Works Everywhere
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Access from phones, desktops, or tablets. Create from anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}