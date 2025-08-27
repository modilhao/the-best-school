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
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8 animate-fade-in">
            <Award className="w-4 h-4 mr-2" />
            Admissions Open for 2026
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
            Excellence in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent-blue">
              International Education
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            {SCHOOL_INFO.mission}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up">
            <button
              onClick={handleCTAClick}
              className="group bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-large hover:scale-105 flex items-center"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToSection('#about')}
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 border border-white/30 hover:border-white/50 flex items-center"
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
              <div className="text-gray-300 font-medium">
                International Students
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {SCHOOL_INFO.nationalitiesCount}
              </div>
              <div className="text-gray-300 font-medium">
                Nationalities
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {SCHOOL_INFO.teachersCount}
              </div>
              <div className="text-gray-300 font-medium">
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