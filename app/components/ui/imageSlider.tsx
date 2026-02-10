"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideImage {
  id: number;
  before: string;
  after: string;
  category: string;
}

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slides: SlideImage[] = [
    {
      id: 1,
      before: "📦",
      after: "✨",
      category: "Electronics"
    },
    {
      id: 2,
      before: "👜",
      after: "💎",
      category: "Fashion"
    },
    {
      id: 3,
      before: "⌚",
      after: "🌟",
      category: "Accessories"
    },
    {
      id: 4,
      before: "📱",
      after: "💫",
      category: "Mobile"
    },
    {
      id: 5,
      before: "🎧",
      after: "🎵",
      category: "Audio"
    }
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  const currentImageData = slides[currentSlide];

  return (
    <div className="w-full bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-2xl border border-primary/20 overflow-hidden">
      <div className="relative h-96 md:h-[500px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Slide Container */}
        <div className="w-full h-full flex items-center justify-center">
          {/* Before Image */}
          <div className="flex-1 flex flex-col items-center justify-center h-full bg-gradient-to-br from-blue-50 to-blue-100 relative">
            <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Before
            </div>
            <div className="text-8xl mb-4 animate-bounce">{currentImageData.before}</div>
            <p className="text-gray-600 text-sm font-medium">Original Product</p>
          </div>

          {/* Divider */}
          <div className="w-1 h-3/4 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50"></div>

          {/* After Image */}
          <div className="flex-1 flex flex-col items-center justify-center h-full bg-gradient-to-br from-purple-50 to-purple-100 relative">
            <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              After
            </div>
            <div className="text-8xl mb-4 animate-pulse">{currentImageData.after}</div>
            <p className="text-gray-600 text-sm font-medium">AI Enhanced</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-lg transition-all hover:scale-110 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-lg transition-all hover:scale-110 z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Category Label */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-semibold shadow-lg">
          {currentImageData.category}
        </div>
      </div>

      {/* Slide Indicators and Info */}
      <div className="bg-white p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Slide Counter and Description */}
          <div className="mb-6 text-center">
            <p className="text-gray-600 mb-2">
              Slide <span className="font-bold text-primary">{currentSlide + 1}</span> of{" "}
              <span className="font-bold">{slides.length}</span>
            </p>
            <p className="text-gray-700 font-semibold text-lg">
              Transform your {currentImageData.category.toLowerCase()} with AI-powered enhancements
            </p>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mb-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all rounded-full ${
                  index === currentSlide
                    ? "bg-gradient-to-r from-primary to-secondary w-8 h-3"
                    : "bg-gray-300 w-3 h-3 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-primary/5 rounded-lg">
              <p className="text-sm font-semibold text-primary">Original</p>
              <p className="text-xs text-gray-600">Your product photo</p>
            </div>
            <div className="p-3 bg-secondary/5 rounded-lg flex items-center justify-center">
              <p className="text-2xl">→</p>
            </div>
            <div className="p-3 bg-accent/5 rounded-lg">
              <p className="text-sm font-semibold text-accent">Enhanced</p>
              <p className="text-xs text-gray-600">Studio-quality result</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
