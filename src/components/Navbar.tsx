// src/components/Navbar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const location = useLocation();
  
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Commodities', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Mahalaxmi" className="h-10 object-contain" onError={(e) => { e.currentTarget.style.display='none'; }} />
          <span className="text-xl font-bold text-brand-dark tracking-tighter uppercase hidden sm:block">Mahalaxmi</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                location.pathname === link.path ? 'text-brand-pink' : 'text-brand-dark hover:text-brand-pink'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link to="/contact">
          <Button variant="primary" className="!py-2 !px-5 !text-sm hidden sm:flex">
            Client Portal
          </Button>
        </Link>
      </div>
    </nav>
  );
};
