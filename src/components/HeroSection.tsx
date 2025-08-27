'use client';

import { ArrowRight, Award } from 'lucide-react';
import Image from 'next/image';
import { SCHOOL_INFO, SCHOOL_IMAGES } from '@/lib/constants';
import { scrollToSection, cn } from '@/lib/utils';

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
  const handleCTAClick = () => {
    scrollToSection('#admissions');
  };

  return (
    <section
      id="hero"
      className={cn(
        'relative min-h-screen flex items-center justify-center overflow-hidden',
        className
      )}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-900/50 to-primary-900/70 z-10" />
        <Image
          src={SCHOOL_IMAGES.hero}
          alt="The Best School Campus"
          className="w-full h-full object-cover"
          fill
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto container-padding text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8 animate-fade-in">
            <Award className="w-4 h-4 mr-2" />
            Admissions Open for 2026
          </div>

          {/* Main Headline */}
          <h1 className="heading-primary text-white mb-6 animate-slide-up">
            Excellence in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent-blue">
              International Education
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-body text-xl sm:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto animate-slide-up">
            {SCHOOL_INFO.mission}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up">
            <button
              onClick={handleCTAClick}
              className="group btn-primary text-lg py-4 hover:shadow-large flex items-center focus-ring"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToSection('#about')}
              className="group bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 border border-gray-300 hover:border-gray-400 flex items-center focus-ring hover:scale-105"
            >
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {SCHOOL_INFO.studentsCount}
              </div>
              <div className="text-gray-200 font-medium">
                International Students
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {SCHOOL_INFO.nationalitiesCount}
              </div>
              <div className="text-gray-200 font-medium">
                Nationalities
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {SCHOOL_INFO.teachersCount}
              </div>
              <div className="text-gray-200 font-medium">
                Expert Teachers
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-400/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent-blue/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-accent-green/20 rounded-full blur-xl animate-pulse" />
    </section>
  );
}