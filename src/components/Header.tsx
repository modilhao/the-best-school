'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/99 backdrop-blur-xl shadow-2xl border-b border-gray-300'
          : 'bg-black/30 backdrop-blur-md',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#hero')}
              className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105"
            >
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 transition-all duration-300 group-hover:rotate-12">
                <Image
                  src="/images/logo-icon.png"
                  alt="The Best School Logo"
                  fill
                  className="object-contain drop-shadow-lg"
                  priority
                />
              </div>
              {/* Texto do logo só aparece quando não está scrolled */}
              <div className={cn(
                "text-center transition-all duration-500 overflow-hidden",
                isScrolled ? "w-0 opacity-0" : "w-auto opacity-100"
              )}>
                <h1 className={cn(
                  "text-lg lg:text-xl font-bold transition-colors duration-300",
                  isScrolled ? "text-gray-900" : "text-white drop-shadow-lg"
                )}>
                  {SCHOOL_INFO.name}
                </h1>
                <p className={cn(
                  "text-xs -mt-1 transition-colors duration-300",
                  isScrolled ? "text-gray-600" : "text-gray-100 drop-shadow-md"
                )}>
                  Excellence in Education
                </p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAVIGATION_ITEMS.map((item: NavItem) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  'relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 group overflow-hidden',
                  isScrolled 
                    ? 'text-gray-900 hover:text-primary-700 hover:bg-primary-50 hover:shadow-lg border border-transparent hover:border-primary-200' 
                    : 'text-white hover:text-blue-100 hover:bg-white/20 hover:backdrop-blur-md drop-shadow-lg border border-transparent hover:border-white/30'
                )}
              >
                <span className="relative z-10">{item.label}</span>
                {/* Hover effect background */}
                <div className={cn(
                  "absolute inset-0 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100",
                  isScrolled 
                    ? "bg-gradient-to-r from-primary-50 to-primary-100 shadow-inner" 
                    : "bg-gradient-to-r from-white/15 to-white/25 backdrop-blur-md shadow-inner"
                )} />
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('#admissions')}
              className={cn(
                'group relative px-8 py-3 rounded-2xl font-bold text-sm transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden border-2',
                isScrolled
                  ? 'bg-primary-700 hover:bg-primary-800 text-white shadow-lg border-primary-800'
                  : 'bg-white text-primary-700 hover:bg-gray-50 shadow-lg backdrop-blur-sm border-white'
              )}
            >
              <span className="relative z-10 flex items-center">
                Apply Now
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              {/* Animated background */}
              <div className={cn(
                "absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100",
                isScrolled
                  ? "bg-gradient-to-r from-primary-800 to-primary-900"
                  : "bg-gradient-to-r from-gray-50 to-white"
              )} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'group relative p-3 rounded-xl transition-all duration-300 hover:scale-110',
                isScrolled
                  ? 'text-gray-800 hover:text-primary-700 hover:bg-primary-50 shadow-md hover:shadow-lg'
                  : 'text-white hover:text-blue-200 hover:bg-white/20 backdrop-blur-sm drop-shadow-lg'
              )}
              aria-label="Toggle mobile menu"
            >
              <div className="relative z-10">
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90" />
                ) : (
                  <Menu className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                )}
              </div>
              {/* Background effect */}
              <div className={cn(
                "absolute inset-0 rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100",
                isScrolled
                  ? "bg-gradient-to-br from-primary-50 to-primary-100"
                  : "bg-gradient-to-br from-white/10 to-white/20 backdrop-blur-sm"
              )} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden transition-all duration-300 overflow-hidden',
          isMobileMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0'
        )}
      >
        <div className="bg-white/98 backdrop-blur-xl border-t border-gray-200 shadow-2xl animate-slide-down">
          <nav className="px-6 py-8 space-y-2">
            {NAVIGATION_ITEMS.map((item: NavItem, index) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="group block w-full text-left px-6 py-4 text-gray-800 hover:text-primary-700 hover:bg-primary-50 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02] relative overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
            <div className="pt-6 border-t border-gray-200 mt-6">
              <button
                onClick={() => {
                  scrollToSection('#admissions');
                  setIsMobileMenuOpen(false);
                }}
                className="group w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:shadow-xl hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-primary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}