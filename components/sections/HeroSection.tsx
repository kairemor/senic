"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  data: {
    slides: {
      headline: string;
      subheading: string;
    }[];
    backgroundImage: string;
    cta: string;
  };

  scrollY: number;
}

export default function HeroSection({ data, scrollY }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % data.slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [data.slides.length]);

  // Navigation functions
  interface Slide {
    headline: string;
    subheading: string;
  }

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % data.slides.length);
  }, [data.slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? data.slides.length - 1 : prevSlide - 1
    );
  }, [data.slides.length]);

  const getSlideHeadline = (slide: Slide): string => {
    return slide.headline;
  };

  interface Slide {
    headline: string;
    subheading: string;
  }

  const getSlideSubheading = (slide: Slide): string => {
    return slide.subheading;
  };

  // Get CTA text based on language
  const getCtaText = () => {
    return data.cta;
  };

  // Parallax effect for background
  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.4}px)`, // Parallax effect
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-black">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${data.backgroundImage})`, // Use a placeholder image
          ...parallaxStyle,
          opacity: 0.7,
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />

      {/* Social Sharing Sidebar will be rendered in the parent component */}

      {/* Slide Content */}
      <div className="relative container h-full flex flex-col justify-center items-center mx-auto px-4 text-center z-10">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-wide">
            {getSlideHeadline(data.slides[currentSlide])}
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {getSlideSubheading(data.slides[currentSlide])}
          </p>

          <Button className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 rounded-md text-lg transition-all duration-300 transform hover:scale-105">
            {getCtaText()}
          </Button>
        </motion.div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3 z-10">
        {data.slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-primary scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation - Only visible on desktop */}
      <div className="hidden md:block">
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-primary/80 hover:bg-primary text-white p-3 rounded-full z-10 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-primary/80 hover:bg-primary text-white p-3 rounded-full z-10 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
