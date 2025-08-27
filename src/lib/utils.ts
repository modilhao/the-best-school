import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Função para combinar classes CSS com Tailwind
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Função para validar email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Função para validar formulário de inscrição
export function validateEnrollmentForm(data: {
  studentName: string;
  parentName: string;
  email: string;
  phone: string;
  studentAge: string;
  program: string;
  message?: string;
}) {
  const errors: Record<string, string> = {};

  if (!data.studentName.trim()) {
    errors.studentName = 'Student name is required';
  } else if (data.studentName.trim().length < 2) {
    errors.studentName = 'Student name must be at least 2 characters';
  }

  if (!data.parentName.trim()) {
    errors.parentName = 'Parent/Guardian name is required';
  } else if (data.parentName.trim().length < 2) {
    errors.parentName = 'Parent/Guardian name must be at least 2 characters';
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (data.phone.trim().length < 10) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!data.studentAge.trim()) {
    errors.studentAge = 'Student age is required';
  } else {
    const age = parseInt(data.studentAge);
    if (isNaN(age) || age < 3 || age > 18) {
      errors.studentAge = 'Student age must be between 3 and 18 years';
    }
  }

  if (!data.program.trim()) {
    errors.program = 'Program selection is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

// Função para scroll suave para seções
export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId.replace('#', ''));
  if (element) {
    const headerHeight = 80; // Altura do header fixo
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

// Função para formatar texto com quebras de linha
export function formatTextWithBreaks(text: string): string {
  return text.replace(/\n/g, '<br />');
}

// Função para delay em animações
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Função para detectar se está em dispositivo móvel
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
}

// Função para gerar ID único
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

// Função para capitalizar primeira letra
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Função para truncar texto
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
}

// Função para debounce
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}