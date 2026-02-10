import Header from "@/app/components/ui/Header";
import Link from "next/link";
import { Users, Rocket, Heart, Globe } from "lucide-react";

export default function About() {
  const team = [
    { name: "Sarah Chen", role: "CEO & Co-founder", image: "SC", bio: "AI researcher with 10+ years in computer vision" },
    { name: "Michael Rodriguez", role: "CTO & Co-founder", image: "MR", bio: "Full-stack engineer passionate about AI automation" },
    { name: "Emma Thompson", role: "Head of Design", image: "ET", bio: "Design leader focused on user experience" },
    { name: "David Kim", role: "Head of Marketing", image: "DK", bio: "Growth expert with e-commerce background" }
  ];

  const values = [
    { icon: Rocket, title: "Innovation", description: "We constantly push the boundaries of what's possible with AI technology" },
    { icon: Heart, title: "Customer First", description: "Your success is our success. We build features our users actually need" },
    { icon: Globe, title: "Accessibility", description: "Making professional product photography accessible to everyone" },
    { icon: Users, title: "Community", description: "We believe in building together with our users and partners" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header user={null} />

      {/* Hero Section */}
      <section
        className="pt-32 pb-20 px-6"
        style={{ background: "linear-gradient(135deg, #e0f2fe, #e0e7ff)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">StudioAI</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Democratizing professional product photography through AI technology
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              StudioAI was founded in 2023 to empower businesses to create professional-quality product photography without high costs.
            </p>
            <p className="text-lg text-gray-600">
              We leverage cutting-edge AI to make studio-grade imagery accessible to everyone.
            </p>
          </div>

          <div
            className="rounded-2xl p-8 h-64 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #dbeafe, #ede9fe)" }}
          >
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">3M+</div>
              <p className="text-gray-600">Images Generated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div
                  className="w-full h-40 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #6366f1, #ec4899)", color: "white" }}
                >
                  <span className="text-4xl font-bold text-white">{member.image}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-20 px-6"
        style={{ background: "linear-gradient(135deg, #6366f1, #ec4899)", color: "white" }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center text-white">
          <div><div className="text-5xl font-bold mb-2">2023</div><p className="opacity-80">Founded</p></div>
          <div><div className="text-5xl font-bold mb-2">50K+</div><p className="opacity-80">Active Users</p></div>
          <div><div className="text-5xl font-bold mb-2">120+</div><p className="opacity-80">Countries</p></div>
          <div><div className="text-5xl font-bold mb-2">4.9★</div><p className="opacity-80">Average Rating</p></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Join Our Journey</h2>
          <p className="text-xl text-gray-600 mb-8">
            Become part of the StudioAI community and create stunning product photos today
          </p>

          <Link
            href="/dashboard"
            className="inline-block px-8 py-4 rounded-lg font-semibold text-white"
            style={{ background: "linear-gradient(90deg, #2563eb, #7c3aed)" }}
          >
            Start Creating
          </Link>
        </div>
      </section>
    </div>
  );
}
