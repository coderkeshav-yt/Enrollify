
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  centered?: boolean; // Keeping for backward compatibility
}

const SectionHeading = ({ title, subtitle, alignment, centered = false }: SectionHeadingProps) => {
  // If alignment is provided, use it; otherwise, fall back to centered prop
  const getTextAlignment = () => {
    if (alignment) {
      return alignment === 'center' ? 'text-center' : 
             alignment === 'right' ? 'text-right' : 'text-left';
    }
    return centered ? 'text-center' : '';
  };

  const textAlignment = getTextAlignment();

  return (
    <div className={`mb-10 ${textAlignment} ${textAlignment === 'text-center' ? 'mx-auto max-w-3xl' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
