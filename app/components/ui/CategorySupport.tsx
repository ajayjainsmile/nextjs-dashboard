import { Sparkles, Video, Image, Award, Users, Wand2 } from "lucide-react";

export default function CategorySupport() {

  return (
 <section className="py-20 md:py-32 px-6 bg-gradient-to-br from-primary/5 to-secondary/5 background-purple-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
            Perfect for Any Product Category
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-16">
            StudioAI works seamlessly with all product types
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Apparel & Fashion",
              "Jewelry & Accessories",
              "Footwear",
              "Cosmetics & Beauty",
              "Home Decor & Lifestyle",
              "Electronics & Gadgets",
            ].map((category) => (
              <div
                key={category}
                className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <p className="font-semibold text-gray-900 text-lg">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}