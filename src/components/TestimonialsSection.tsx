"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Users, Award, Heart, TrendingUp } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={cn(
          "w-4 h-4",
          i < rating
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-300 text-gray-300"
        )}
      />
    ));
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  const trustStats = [
    {
      icon: Users,
      value: "500+",
      label: "Satisfied Families",
      color: "text-blue-600"
    },
    {
      icon: Award,
      value: "98%",
      label: "Acceptance Rate",
      color: "text-green-600"
    },
    {
      icon: Heart,
      value: "4.9/5",
      label: "Average Rating",
      color: "text-red-500"
    },
    {
      icon: TrendingUp,
      value: "15+",
      label: "Years of Excellence",
      color: "text-purple-600"
    }
  ];

  return (
    <section
      id="testimonials"
      className={cn(
        "section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden",
        className
      )}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-gray-900 mb-6">
            What They Say About Us
          </h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            Discover why parents and students choose our school as the ideal place 
            to grow, learn and develop.
          </p>
        </div>

        {/* Trust Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {trustStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-100 to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2 border border-gray-200 hover:border-primary-200 cursor-pointer"
              >
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110",
                  stat.color.replace('text-', 'bg-').replace('600', '100').replace('500', '100')
                )}>
                  <IconComponent className={cn("w-6 h-6", stat.color)} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-full" />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-primary-50 active:scale-95 z-10 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-primary-600 transition-colors duration-300" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-primary-50 active:scale-95 z-10 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-primary-600 transition-colors duration-300" />
            </button>

            {/* Testimonial Content */}
            <div className="text-center relative z-10">
              {/* Quote */}
              <div className="mb-8">
                <div className="text-6xl text-blue-200 mb-4 font-serif">&ldquo;</div>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                  {currentTestimonial.content}
                </p>
              </div>

              {/* Rating */}
              <div className="flex justify-center items-center gap-1 mb-6">
                {renderStars(currentTestimonial.rating || 5)}
              </div>

              {/* Author Info */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center mb-4 border border-primary-800">
                  <span className="text-white font-bold text-xl">
                    {currentTestimonial.name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {currentTestimonial.name}
                </h4>
                <p className="text-gray-600">{currentTestimonial.role}</p>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group",
                index === currentIndex && "ring-2 ring-blue-500 shadow-2xl"
              )}
              onClick={() => goToSlide(index)}
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonial.rating || 5)}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-4 line-clamp-4 group-hover:text-gray-900 transition-colors">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center flex-shrink-0 border border-primary-800">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;