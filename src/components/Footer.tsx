"use client";

import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin, Heart, ExternalLink } from 'lucide-react';
import { SCHOOL_INFO, CONTACT_INFO } from '@/lib/constants';
import { scrollToSection, cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/thebestschool',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/thebestschool',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@thebestschool',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/thebestschool',
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Enrollment', href: '#enrollment' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Use', href: '/terms' },
    { name: 'Code of Conduct', href: '/conduct' },
    { name: 'Regulations', href: '/regulations' }
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      scrollToSection(href.substring(1));
    }
  };

  return (
    <footer className={cn("bg-gray-900 text-white relative overflow-hidden section-padding", className)}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 48 }, (_, i) => (
              <div
                key={i}
                className="bg-white rounded-full w-2 h-2 opacity-20"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animation: 'pulse 3s infinite'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* School Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <div className="mb-4">
                  <div className="relative w-48 h-16 mb-3">
                    <Image
                      src="/images/logo-full.png"
                      alt="The Best School - Complete Logo"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {SCHOOL_INFO.mission}
                </p>
              </div>
              
              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4 text-lg">Follow Us</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                        aria-label={`Follow on ${social.name}`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-6 text-lg">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-400 leading-relaxed">
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-sm">
                      <strong>Mon - Fri:</strong> 7am to 6pm<br />
                      <strong>Saturday:</strong> 8am to 12pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-6 text-lg">Newsletter</h4>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
Receive news, events and educational tips directly in your email.
              </p>
              
              <form className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors duration-200 font-semibold flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm flex items-center gap-1">
                © {currentYear} {SCHOOL_INFO.name}. All rights reserved.
                <Heart className="w-4 h-4 text-red-500 ml-1" />
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="text-gray-600 hidden md:inline">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="text-center">
              <p className="text-gray-500 text-xs leading-relaxed">
                Developed with cutting-edge technology to provide the best educational experience. 
                <br className="hidden md:inline" />
                Committed to academic excellence and the integral development of our students.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 hover:scale-110"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;