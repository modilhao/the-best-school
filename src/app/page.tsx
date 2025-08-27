import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import EnrollmentForm from '@/components/EnrollmentForm';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="educationalOrganization" />
      <StructuredData type="website" />
      <StructuredData type="organization" />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <TestimonialsSection />
        <EnrollmentForm />
      </main>
      <Footer />
    </div>
  );
}
