// src/components/BottomNav.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export const BottomNav: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white rounded-full p-2 px-8 flex items-center gap-6 shadow-premium-dark border border-gray-100">
        <span className="text-3xl font-bold text-brand-dark select-none tracking-tighter">M</span>
        <Link to="/contact">
          <Button variant="primary" className="!py-3 !px-6 !text-sm">
            Contact Desk
          </Button>
        </Link>
      </div>
    </div>
  );
};
