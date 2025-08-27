// Tipos para o formulário de inscrição
export interface EnrollmentFormData {
  studentName: string;
  parentName: string;
  email: string;
  phone: string;
  studentAge: string;
  program: string;
  message?: string;
}

// Tipos para depoimentos
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
  rating?: number;
}

// Tipos para programas acadêmicos
export interface AcademicProgram {
  id: string;
  title: string;
  description: string;
  ageRange: string;
  highlights: string[];
  icon: string;
}

// Tipos para navegação
export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

// Tipos para informações de contato
export interface ContactInfo {
  address: string;
  email: string;
  phone: string;
  socialMedia: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

// Tipos para seções da página
export interface PageSection {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
}

// Props comuns para componentes
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Tipos para formulário - estados
export interface FormState {
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}

// Tipos para animações
export interface AnimationProps {
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}