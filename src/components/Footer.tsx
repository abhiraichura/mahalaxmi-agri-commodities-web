// src/components/Footer.tsx
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-[1200px] mx-auto py-16 px-6 border-t border-gray-100 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        
        <div>
          <h4 className="text-3xl font-bold text-brand-dark mb-6 tracking-tight uppercase">Mahalaxmi</h4>
          <Link to="/contact">
            <Button variant="primary">Start a Trade</Button>
          </Link>
        </div>

        <div className="flex items-start gap-12 md:gap-24">
          <ArrowUpRight className="w-10 h-10 text-brand-pink hidden sm:block" />
          
          <div className="flex flex-col gap-5">
            <Link to="/products" className="text-lg font-semibold text-brand-dark hover:text-brand-pink transition-colors">Commodities</Link>
            <Link to="/about" className="text-lg font-semibold text-brand-dark hover:text-brand-pink transition-colors">About Us</Link>
            <Link to="/contact" className="text-lg font-semibold text-brand-dark hover:text-brand-pink transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col gap-5">
            <a href="#" target="_blank" className="text-lg font-semibold text-brand-dark hover:text-brand-pink transition-colors">LinkedIn</a>
            <a href="#" target="_blank" className="text-lg font-semibold text-brand-dark hover:text-brand-pink transition-colors">Twitter (X)</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
