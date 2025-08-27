"use client";

import React from 'react';
import { SCHOOL_INFO, CONTACT_INFO } from '@/lib/constants';

interface StructuredDataProps {
  type?: 'organization' | 'website' | 'educationalOrganization';
}

const StructuredData: React.FC<StructuredDataProps> = ({ type = 'educationalOrganization' }) => {
  const getStructuredData = () => {
    const baseUrl = 'https://thebestschool.com.br';
    
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": SCHOOL_INFO.name,
          "alternateName": "The Best School",
          "url": baseUrl,
          "logo": `${baseUrl}/logo.png`,
          "description": "Escola particular de excelência oferecendo educação infantil, ensino fundamental e médio com metodologia inovadora.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": CONTACT_INFO.address.split(',')[0],
            "addressLocality": "São Paulo",
            "addressRegion": "SP",
            "postalCode": "01234-567",
            "addressCountry": "BR"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": CONTACT_INFO.phone,
            "contactType": "customer service",
            "email": CONTACT_INFO.email,
            "availableLanguage": "Portuguese"
          },
          "sameAs": [
            "https://facebook.com/thebestschool",
            "https://instagram.com/thebestschool",
            "https://linkedin.com/company/thebestschool",
            "https://youtube.com/@thebestschool"
          ]
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": SCHOOL_INFO.name,
          "url": baseUrl,
          "description": "Site oficial da The Best School - Educação de excelência com metodologia inovadora.",
          "publisher": {
            "@type": "Organization",
            "name": SCHOOL_INFO.name
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        };

      case 'educationalOrganization':
      default:
        return {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": SCHOOL_INFO.name,
          "alternateName": "The Best School",
          "url": baseUrl,
          "logo": `${baseUrl}/logo.png`,
          "image": `${baseUrl}/og-image.jpg`,
          "description": "Escola particular de excelência oferecendo educação infantil, ensino fundamental e médio com metodologia inovadora e ambiente acolhedor.",
          "foundingDate": "2010",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": CONTACT_INFO.address.split(',')[0],
            "addressLocality": "São Paulo",
            "addressRegion": "SP",
            "postalCode": "01234-567",
            "addressCountry": "BR"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": CONTACT_INFO.phone,
            "contactType": "admissions",
            "email": CONTACT_INFO.email,
            "availableLanguage": "Portuguese",
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "07:00",
              "closes": "18:00"
            }
          },
          "sameAs": [
            "https://facebook.com/thebestschool",
            "https://instagram.com/thebestschool",
            "https://linkedin.com/company/thebestschool",
            "https://youtube.com/@thebestschool"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Programas Educacionais",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Course",
                  "name": "Educação Infantil",
                  "description": "Programa completo para desenvolvimento integral de crianças de 2 a 5 anos.",
                  "provider": {
                    "@type": "EducationalOrganization",
                    "name": SCHOOL_INFO.name
                  }
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Course",
                  "name": "Ensino Fundamental",
                  "description": "Ensino fundamental completo com metodologia inovadora e tecnologia educacional.",
                  "provider": {
                    "@type": "EducationalOrganization",
                    "name": SCHOOL_INFO.name
                  }
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Course",
                  "name": "Ensino Médio",
                  "description": "Preparação completa para vestibulares e formação cidadã integral.",
                  "provider": {
                    "@type": "EducationalOrganization",
                    "name": SCHOOL_INFO.name
                  }
                }
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1"
          }
        };
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2)
      }}
    />
  );
};

export default StructuredData;