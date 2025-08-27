import { NavItem, Testimonial, AcademicProgram, ContactInfo } from '@/types';

// Main Navigation
export const NAVIGATION_ITEMS: NavItem[] = [
  { label: 'About Us', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
];

// School Images
export const SCHOOL_IMAGES = {
  hero: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20international%20school%20building%20with%20students%20walking%20in%20courtyard%2C%20bright%20sunny%20day%2C%20contemporary%20architecture%2C%20green%20campus%2C%20welcoming%20atmosphere&image_size=landscape_16_9',
  about: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=diverse%20group%20of%20international%20students%20studying%20together%20in%20modern%20classroom%2C%20collaborative%20learning%2C%20bright%20natural%20lighting%2C%20educational%20environment&image_size=landscape_4_3',
  elementary: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=young%20elementary%20students%20engaged%20in%20STEAM%20learning%20activities%2C%20colorful%20classroom%2C%20hands-on%20experiments%2C%20creative%20learning%20environment&image_size=square_hd',
  middleSchool: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=middle%20school%20students%20working%20on%20group%20project%2C%20international%20baccalaureate%20classroom%2C%20collaborative%20learning%2C%20modern%20educational%20setting&image_size=square_hd',
  highSchool: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=high%20school%20students%20in%20science%20laboratory%2C%20IB%20diploma%20program%2C%20advanced%20research%20equipment%2C%20academic%20excellence&image_size=square_hd',
  campus: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20international%20school%20campus%20with%20modern%20facilities%2C%20sports%20fields%2C%20library%2C%20green%20spaces%2C%20Warsaw%20Poland&image_size=landscape_4_3'
};

// School Information
export const SCHOOL_INFO = {
  name: 'The Best School',
  tagline: 'Excellence in Education for International Students',
  mission: 'Empowering global minds through world-class education in the heart of Poland',
  foundedYear: 2020,
  studentsCount: '500+',
  teachersCount: '50+',
  nationalitiesCount: '25+',
};

// Academic Programs
export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: 'elementary',
    title: 'Elementary Program',
    description: 'Building strong foundations for young learners with international curriculum and multilingual approach.',
    ageRange: '6-11 years',
    highlights: [
      'Cambridge Primary Curriculum',
      'Multilingual Education (English, Polish)',
      'STEAM Learning Approach',
      'Cultural Integration Programs'
    ],
    icon: 'BookOpen'
  },
  {
    id: 'middle-school',
    title: 'Middle School Program',
    description: 'Developing critical thinking and global citizenship through comprehensive academic excellence.',
    ageRange: '12-14 years',
    highlights: [
      'International Baccalaureate MYP',
      'Advanced Language Programs',
      'Leadership Development',
      'Global Perspectives Studies'
    ],
    icon: 'Users'
  },
  {
    id: 'high-school',
    title: 'High School Program',
    description: 'Preparing students for top universities worldwide with rigorous academic standards.',
    ageRange: '15-18 years',
    highlights: [
      'IB Diploma Programme',
      'University Preparation',
      'Research Projects',
      'International Exchanges'
    ],
    icon: 'GraduationCap'
  }
];

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Parent from UK',
    content: 'The Best School has exceeded our expectations. My daughter Emma has thrived in the international environment and her academic progress has been remarkable.',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Student from Singapore',
    content: 'The teachers here truly care about each student\'s success. The IB program prepared me perfectly for university admission to Oxford.',
    rating: 5
  },
  {
    id: '3',
    name: 'Anna Rodriguez',
    role: 'Parent from Spain',
    content: 'Moving to Poland was a big decision for our family. The Best School made the transition smooth and our son loves the multicultural environment.',
    rating: 5
  },
  {
    id: '4',
    name: 'David Thompson',
    role: 'Parent from Canada',
    content: 'The quality of education and the individual attention each student receives is outstanding. We couldn\'t be happier with our choice.',
    rating: 5
  }
];

// Contact Information
export const CONTACT_INFO: ContactInfo = {
  address: 'ul. Akademicka 15, 00-001 Warsaw, Poland',
  email: 'admissions@thebestschool.edu.pl',
  phone: '+48 22 123 4567',
  socialMedia: {
    facebook: 'https://facebook.com/thebestschool',
    instagram: 'https://instagram.com/thebestschool',
    linkedin: 'https://linkedin.com/company/thebestschool'
  }
};

// Formspree Configuration
export const FORMSPREE_CONFIG = {
  endpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '',
  successMessage: 'Thank you for your interest! We will contact you soon.',
  errorMessage: 'Something went wrong. Please try again or contact us directly.'
};

// SEO Configuration
export const SEO_CONFIG = {
  title: 'The Best School - International Education in Poland',
  description: 'Excellence in education for international students in Poland. Cambridge curriculum, IB programs, and multicultural environment. Admissions open for 2026.',
  keywords: 'international school Poland, Cambridge curriculum, IB program, international education Warsaw, English school Poland',
  ogImage: '/images/og-image.jpg',
  twitterHandle: '@thebestschool'
};