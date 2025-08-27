'use client';

import React from 'react';
import Image from 'next/image';
import { Globe, Users, Award, BookOpen, Heart, Target } from 'lucide-react';
import { SCHOOL_INFO, SCHOOL_IMAGES } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface AboutSectionProps {
  className?: string;
}

const values = [
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'We cultivate international mindedness and cultural awareness, preparing students to thrive in our interconnected world.'
  },
  {
    icon: Award,
    title: 'Academic Excellence',
    description: 'Our rigorous curriculum and world-class faculty ensure the highest standards of educational achievement.'
  },
  {
    icon: Users,
    title: 'Inclusive Community',
    description: 'We celebrate diversity and create an environment where every student feels valued and supported.'
  },
  {
    icon: BookOpen,
    title: 'Lifelong Learning',
    description: 'We inspire curiosity and critical thinking, fostering a passion for continuous growth and discovery.'
  },
  {
    icon: Heart,
    title: 'Character Development',
    description: 'We nurture integrity, empathy, and leadership qualities that shape responsible global citizens.'
  },
  {
    icon: Target,
    title: 'Future Ready',
    description: 'We equip students with 21st-century skills and competencies for success in higher education and beyond.'
  }
];

export default function AboutSection({ className }: AboutSectionProps) {
  return (
    <section
      id="about"
      className={cn(
        'py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          {/* Logo */}
          <div className="mb-8">
            <div className="relative w-64 h-20 mx-auto">
              <Image
                src="/images/logo-full.png"
                alt="The Best School - Complete Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            About The Best School
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Empowering Global Minds
            <span className="block text-primary-600">
              Through Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Since {SCHOOL_INFO.foundedYear}, we have been dedicated to providing world-class international education 
            that prepares students for success in an increasingly connected world.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-3xl shadow-soft p-8 lg:p-12 mb-16 lg:mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {SCHOOL_INFO.mission}. We believe that education should transcend 
                borders and cultures, creating opportunities for students to develop 
                into confident, compassionate, and capable global citizens.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment extends beyond academic achievement to encompass 
                personal growth, cultural understanding, and the development of 
                skills essential for success in the 21st century.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={SCHOOL_IMAGES.about}
                  alt="Students at The Best School"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  fill
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-blue/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-green/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape the 
              educational experience we provide to our students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.title}
                  className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Excellence in Numbers
            </h3>
            <p className="text-primary-100 text-lg">
              Our achievements reflect our commitment to educational excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">
                {SCHOOL_INFO.studentsCount}
              </div>
              <div className="text-primary-200">
                Students Enrolled
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">
                {SCHOOL_INFO.teachersCount}
              </div>
              <div className="text-primary-200">
                Expert Educators
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">
                {SCHOOL_INFO.nationalitiesCount}
              </div>
              <div className="text-primary-200">
                Nationalities
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">
                100%
              </div>
              <div className="text-primary-200">
                University Acceptance
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}