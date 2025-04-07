import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className = '' }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Fond décoratif */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#7F6EFA]/5 to-transparent">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #7F6EFA 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.1
        }} />
      </div>
      
      {/* Contenu */}
      <div className={`relative container mx-auto px-4 py-20 ${className}`}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-gray-600">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
} 