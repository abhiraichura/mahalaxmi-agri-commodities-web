// src/components/CopyrightBar.tsx
import React from 'react';

export const CopyrightBar: React.FC = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-6 py-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-sm text-brand-muted font-bold tracking-wide uppercase mb-24">
      <p>© {new Date().getFullYear()} Mahalaxmi Agri Commodities Limited.</p>
      <p className="mt-2 sm:mt-0">Rajkot, Gujarat, India</p>
    </div>
  );
};
