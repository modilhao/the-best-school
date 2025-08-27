'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { NAVIGATION_ITEMS, SCHOOL_INFO } from '@/lib/constants';
import { scrollToSection, cn } from '@/lib/utils';
import type { NavItem } from '@/types';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      scrollToSection(href);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-gray-100'
          : 'bg-transparent',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#hero')}
              className="flex items-center space-x-3 group"
            >
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 transition-transform group-hover:scale-105">
                <Image
                  src="/images/logo-icon.png"
                  alt="The Best School Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block text-center">
                <h1 className="text-lg lg:text-xl font-bold text-white">
                  {SCHOOL_INFO.name}
                </h1>
                <p className="text-xs text-gray-300 -mt-1">
                  Excellence in Education
                </p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item: NavItem) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('#admissions')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-200 hover:shadow-medium hover:scale-105"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden transition-all duration-300 overflow-hidden',
          isMobileMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0'
        )}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100">
          <nav className="px-4 py-6 space-y-4">
            {NAVIGATION_ITEMS.map((item: NavItem) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={() => {
                  scrollToSection('#admissions');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200"
              >
                Apply Now
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}