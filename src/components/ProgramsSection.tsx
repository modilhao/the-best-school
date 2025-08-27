'use client';

import React from 'react';
import Image from 'next/image';
import { BookOpen, Users, GraduationCap, ArrowRight, CheckCircle } from 'lucide-react';
import { ACADEMIC_PROGRAMS, SCHOOL_IMAGES } from '@/lib/constants';
import { scrollToSection, cn } from '@/lib/utils';
import type { AcademicProgram } from '@/types';

interface ProgramsSectionProps {
  className?: string;
}

const iconMap = {
  BookOpen,
  Users,
  GraduationCap
};

export default function ProgramsSection({ className }: ProgramsSectionProps) {
  return (
    <section
      id="programs"
      className={cn(
        'section-padding bg-white',
        className
      )}
    >
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Academic Programs
          </div>
          <h2 className="heading-secondary text-gray-900 mb-6">
            World-Class Education
            <span className="block text-primary-600">
              For Every Stage
            </span>
          </h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            Our comprehensive academic programs are designed to challenge and inspire students 
            at every level, preparing them for success in top universities worldwide.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {ACADEMIC_PROGRAMS.map((program: AcademicProgram, index) => {
            const IconComponent = iconMap[program.icon as keyof typeof iconMap] || BookOpen;
            
            return (
              <div
                key={program.id}
                className="group bg-gradient-to-b from-gray-50 to-white rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-3 border border-gray-100 hover:border-primary-200 hover:bg-gradient-to-b hover:from-primary-50 hover:to-white cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Program Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md group-hover:shadow-lg border border-gray-300">
                  <IconComponent className="w-8 h-8 text-black group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Age Range Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4 group-hover:bg-primary-200 group-hover:scale-105 transition-all duration-300">
                  {program.ageRange}
                </div>

                {/* Program Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {program.title}
                </h3>

                {/* Program Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {program.description}
                </p>

                {/* Program Highlights */}
                <div className="space-y-3 mb-8">
                  {program.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => scrollToSection('#admissions')}
                  className="group/btn w-full bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-medium flex items-center justify-center hover:scale-105 active:scale-95 relative overflow-hidden border border-gray-300"
                >
                  <span className="relative z-10 flex items-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1 group-hover/btn:scale-110" />
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                Why Choose Our Programs?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent-green mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">International Curriculum</h4>
                    <p className="text-gray-200 text-sm">
                      Cambridge and IB programs recognized by top universities globally
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent-green mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Expert Faculty</h4>
                    <p className="text-gray-200 text-sm">
                      Highly qualified teachers with international experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent-green mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Small Class Sizes</h4>
                    <p className="text-gray-200 text-sm">
                      Personalized attention with maximum 20 students per class
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent-green mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">University Guidance</h4>
                    <p className="text-gray-200 text-sm">
                      Comprehensive support for university applications worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={SCHOOL_IMAGES.campus}
                  alt="The Best School Campus Facilities"
                  className="w-full h-full object-cover"
                  fill
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-blue/30 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-green/30 rounded-full blur-xl" />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Academic Journey?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of international learners and discover your potential 
            in our world-class academic programs.
          </p>
          <button
            onClick={() => scrollToSection('#admissions')}
            className="group bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-large hover:scale-105 inline-flex items-center border border-gray-300"
          >
            Apply for 2026
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}