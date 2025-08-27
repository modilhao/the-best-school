"use client";

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, User, Mail, Phone, Calendar, GraduationCap, MessageSquare } from 'lucide-react';
import { FORMSPREE_CONFIG, ACADEMIC_PROGRAMS } from '@/lib/constants';
import { validateEnrollmentForm } from '@/lib/utils';
import { cn } from '@/lib/utils';
import type { EnrollmentFormData, FormState } from '@/types';

interface EnrollmentFormProps {
  className?: string;
}

const EnrollmentForm: React.FC<EnrollmentFormProps> = ({ className }) => {
  const [formData, setFormData] = useState<EnrollmentFormData>({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    studentAge: '',
    program: '',
    message: ''
  });

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const [errors, setErrors] = useState<Partial<EnrollmentFormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof EnrollmentFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateEnrollmentForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setFormState({ isSubmitting: true, isSubmitted: false, error: null });
    setErrors({});

    try {
      const response = await fetch(FORMSPREE_CONFIG.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Enrollment - ${formData.studentName}`,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setFormState({ isSubmitting: false, isSubmitted: true, error: null });
        setFormData({
          studentName: '',
          parentName: '',
          email: '',
          phone: '',
          studentAge: '',
          program: '',
          message: ''
        });
      } else {
        throw new Error('Error submitting form');
      }
    } catch {
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Error submitting form. Please try again.'
      });
    }
  };

  const inputClasses = "w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white hover:border-gray-400 hover:shadow-sm focus:shadow-md transform focus:scale-[1.02]";
  const labelClasses = "block text-sm font-semibold text-gray-700 mb-2";
  const errorClasses = "text-red-500 text-sm mt-1";

  if (formState.isSubmitted) {
    return (
      <section
        id="enrollment"
        className={cn(
          "py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden",
          className
        )}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-b from-gray-100 to-gray-50 rounded-3xl shadow-2xl p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Enrollment Submitted Successfully!
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Thank you for your interest! Our team will contact you soon to continue the enrollment process.
              </p>
              <button
                onClick={() => setFormState({ isSubmitting: false, isSubmitted: false, error: null })}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
              >
                Submit New Enrollment
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="enrollment"
      className={cn(
        "py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden",
        className
      )}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Apply for Enrollment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards your child&apos;s future. Fill out the form below 
            and our team will contact you to schedule a visit.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-b from-gray-100 to-gray-50 rounded-3xl shadow-2xl p-8 md:p-12">
            {formState.error && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-red-700">{formState.error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Student Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="studentName" className={labelClasses}>
                    <User className="w-4 h-4 inline mr-2" />
                    Student Name *
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    className={cn(
                      inputClasses,
                      errors.studentName && "border-red-500 focus:ring-red-500"
                    )}
                    placeholder="Enter the student's full name"
                    required
                  />
                  {errors.studentName && (
                    <p className={errorClasses}>{errors.studentName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="studentAge" className={labelClasses}>
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Student Age *
                  </label>
                  <input
                    type="number"
                    id="studentAge"
                    name="studentAge"
                    value={formData.studentAge}
                    onChange={handleInputChange}
                    className={cn(
                      inputClasses,
                      errors.studentAge && "border-red-500 focus:ring-red-500"
                    )}
                    placeholder="Age in years"
                    min="3"
                    max="18"
                    required
                  />
                  {errors.studentAge && (
                    <p className={errorClasses}>{errors.studentAge}</p>
                  )}
                </div>
              </div>

              {/* Parent Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="parentName" className={labelClasses}>
                    <User className="w-4 h-4 inline mr-2" />
                    Parent/Guardian Name *
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    className={cn(
                      inputClasses,
                      errors.parentName && "border-red-500 focus:ring-red-500"
                    )}
                    placeholder="Enter the parent/guardian's full name"
                    required
                  />
                  {errors.parentName && (
                    <p className={errorClasses}>{errors.parentName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className={labelClasses}>
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={cn(
                      inputClasses,
                      errors.phone && "border-red-500 focus:ring-red-500"
                    )}
                    placeholder="(11) 99999-9999"
                    required
                  />
                  {errors.phone && (
                    <p className={errorClasses}>{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    <Mail className="w-4 h-4 inline mr-2" />
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={cn(
                      inputClasses,
                      errors.email && "border-red-500 focus:ring-red-500"
                    )}
                    placeholder="your@email.com"
                    required
                  />
                  {errors.email && (
                    <p className={errorClasses}>{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="program" className={labelClasses}>
                    <GraduationCap className="w-4 h-4 inline mr-2" />
                    Program of Interest *
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className={cn(
                      inputClasses,
                      errors.program && "border-red-500 focus:ring-red-500"
                    )}
                    required
                  >
                    <option value="">Select a program</option>
                    {ACADEMIC_PROGRAMS.map((program) => (
                      <option key={program.id} value={program.title}>
                        {program.title} ({program.ageRange})
                      </option>
                    ))}
                  </select>
                  {errors.program && (
                    <p className={errorClasses}>{errors.program}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelClasses}>
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className={cn(
                    inputClasses,
                    "resize-none",
                    errors.message && "border-red-500 focus:ring-red-500"
                  )}
                  placeholder="Tell us more about your child&apos;s needs or ask specific questions..."
                />
                {errors.message && (
                  <p className={errorClasses}>{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={formState.isSubmitting}
                  className={cn(
                    "group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden border border-gray-300",
                    formState.isSubmitting && "animate-pulse"
                  )}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center gap-3">
                    {formState.isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
                        Submit Enrollment
                      </>
                    )}
                  </span>
                </button>
              </div>

              {/* Privacy Notice */}
              <div className="text-center pt-4">
                <p className="text-sm text-gray-500">
                  By submitting this form, you agree to our privacy policy. 
                  Your data will be used for educational purposes only.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentForm;