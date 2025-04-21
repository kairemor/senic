"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Testimonial, TestimonialSection } from "@/lib/data";

interface TestimonialsSectionProps {
  data: TestimonialSection;
}

export default function Testimonials({ data }: TestimonialsSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const [isTouchStart, setIsTouchStart] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);

  // Get content based on language
  const getTitle = () => data.title;
  const getSubtitle = () => data.subtitle;
  const getTestimonialContent = (testimonial: Testimonial) =>
    testimonial.content;
  const getTestimonialPosition = (testimonial: Testimonial) =>
    testimonial.position;

  // Intersection observer for animation triggers
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Autoplay functionality
  useEffect(() => {
    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    };

    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };

    startAutoplay();

    // Pause autoplay when mouse enters the slider
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("mouseenter", stopAutoplay);
      slider.addEventListener("mouseleave", startAutoplay);
    }

    return () => {
      stopAutoplay();
      if (slider) {
        slider.removeEventListener("mouseenter", stopAutoplay);
        slider.removeEventListener("mouseleave", startAutoplay);
      }
    };
  }, [data.testimonials.length]);

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % data.testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? data.testimonials.length - 1 : prevSlide - 1
    );
  };

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsTouchStart(true);
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isTouchStart) return;

    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX - touchEndX;

    // Determine swipe direction if swipe is significant enough
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left, go to next slide
        nextSlide();
      } else {
        // Swipe right, go to previous slide
        prevSlide();
      }

      setIsTouchStart(false);
    }
  };

  const handleTouchEnd = () => {
    setIsTouchStart(false);
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const testimonialVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div ref={sectionRef} className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          {/* Section Header */}
          <motion.div variants={headerVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {getTitle()}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">{getSubtitle()}</p>
          </motion.div>

          {/* Testimonials Carousel */}
          <div
            ref={sliderRef}
            className="relative max-w-4xl mx-auto"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="overflow-hidden">
              <motion.div
                key={currentSlide}
                initial="hidden"
                animate="visible"
                variants={testimonialVariants}
                className="bg-gray-50 rounded-xl p-8 md:p-10 shadow-sm"
              >
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                  {/* Client Photo */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-primary/20">
                      <Image
                        src="/api/placeholder/100/100" // Placeholder image
                        alt={data.testimonials[currentSlide].name}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1">
                    {/* Rating Stars */}
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < data.testimonials[currentSlide].rating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-gray-700 text-lg italic mb-4">
                      {getTestimonialContent(data.testimonials[currentSlide])}
                    </blockquote>

                    {/* Client Info */}
                    <div>
                      <h4 className="font-bold text-gray-800">
                        {data.testimonials[currentSlide].name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {getTestimonialPosition(
                          data.testimonials[currentSlide]
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <Button
                onClick={prevSlide}
                className="bg-primary hover:bg-primary/90 text-white p-2 rounded-full"
                size="icon"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex items-center space-x-2">
                {data.testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "bg-primary scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                onClick={nextSlide}
                className="bg-primary hover:bg-primary/90 text-white p-2 rounded-full"
                size="icon"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
