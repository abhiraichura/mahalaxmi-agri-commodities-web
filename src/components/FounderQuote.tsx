// src/components/FounderQuote.tsx
import React, { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export const FounderQuote: React.FC = () => {
  const iconRef = useInViewAnimation('0.1s');
  const quoteRef = useInViewAnimation('0.2s');
  const authorRef = useInViewAnimation('0.3s');
  const parallaxRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrolled = window.scrollY;
      const rate = scrolled * 0.15;
      parallaxRef.current.style.transform = `translateY(${Math.min(rate, 200)}px)`;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 px-6 max-w-3xl mx-auto flex flex-col items-center text-center">
      <div ref={iconRef} className="opacity-0 mb-8">
        <Quote className="w-10 h-10 text-brand-pink" />
      </div>
      
      <h3 ref={quoteRef} className="opacity-0 text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] text-brand-darker tracking-tight font-bold mb-8">
        "We built this brokerage to bring absolute transparency to an opaque global supply chain."
      </h3>
      
      <p ref={authorRef} className="opacity-0 uppercase tracking-widest text-sm text-brand-muted font-bold mb-16">
        — Mahalaxmi Leadership
      </p>

      <div className="w-full max-w-sm relative overflow-hidden rounded-3xl shadow-2xl h-[450px]">
        <img 
          ref={parallaxRef}
          src="https://images.unsplash.com/photo-1595805210986-1d137b01b63d?q=80&w=800&auto=format&fit=crop" 
          alt="Agricultural landscape" 
          className="absolute inset-0 w-full h-[130%] object-cover -top-[15%]"
        />
      </div>
    </section>
  );
};
