import { Sparkles, ArrowRight, Image } from "lucide-react";

export default function HeroHome() {
  return (
    <section className="pt-32 pb-28 px-6 md:pt-48 from-lightHero  via-purple-50">
      <div className="max-w-7xl mx-auto text-center">

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-semibold text-purple-700">
            AI-Powered Product Photography
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
          Studio-Grade Product Photos in{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Seconds
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
        Create stunning product visuals without photographers, expensive equipment, or editing skills.
         Get professional-quality images instantly at a fraction of the cost.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 rounded-lg font-bold text-lg text-white
            bg-gradient-to-r from-purple-600 to-pink-500
            hover:shadow-xl transition hover:-translate-y-1">
            Create Now <ArrowRight className="w-5 h-5 ml-2 inline" />
          </button>

          <button className="px-8 py-4 rounded-lg font-bold text-lg text-purple-600
            border-2 border-purple-600 hover:bg-purple-50 transition">
            See Demo
          </button>
        </div>

        {/* Image / Upload Section */}
        <div className="mt-20 rounded-2xl border via-purple-100
          h-96 md:h-[500px] flex items-center justify-center shadow-sm">

          <div className="text-center">
            <Image className="w-24 h-24 mx-auto text-purple-300 mb-4" />
            <p className="text-gray-400 text-lg">
              Product showcase — your images transform here
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
