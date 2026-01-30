import { Sparkles, Video, Image, Award, Users, Wand2 } from "lucide-react";

export default function Featutes() {
  return (
    <section id="features" className="py-20 md:py-32 px-6 bg-gray-50 bg-gradient-to-br">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
          Powerful Features Built for You
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Everything you need to transform product images into marketing gold
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="rounded-2xl bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 border border-indigo-500/20 p-8">
            <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-6">
              <Wand2 className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Virtual Studio AI</h3>
            <p className="text-gray-600 leading-relaxed">
              Automatic professional lighting and background styling.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 p-8">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-6">
              <Image className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Multiple Angles</h3>
            <p className="text-gray-600 leading-relaxed">
              One upload generates multiple angles and formats.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/20 p-8">
            <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center mb-6">
              <Award className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Unlimited Outputs</h3>
            <p className="text-gray-600 leading-relaxed">
              Create unlimited variations.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 border border-indigo-500/20 p-8">
            <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-6">
              <Video className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Animation & Videos</h3>
            <p className="text-gray-600 leading-relaxed">
              Create short video loops and animations.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 p-8">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">AI Avatars</h3>
            <p className="text-gray-600 leading-relaxed">
              Showcase products with AI-generated avatars.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/20 p-8">
            <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Creative Presets</h3>
            <p className="text-gray-600 leading-relaxed">
              Choose from professional scene styling.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}