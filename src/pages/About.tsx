// src/pages/About.tsx
import React, { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const images = [
  "https://images.unsplash.com/photo-1592982537447-6f296cb1638e?q=80&w=600&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=600&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1586771107445-d3af9e174465?q=80&w=600&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=600&auto=format&fit=crop", 
];

export const About: React.FC = () => {
  const headerRef = useInViewAnimation('0.1s');
  const iconRef = useInViewAnimation('0.2s');
  const quoteRef = useInViewAnimation('0.3s');
  const parallaxRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrolled = window.scrollY;
      const rate = scrolled * 0.15;
      parallaxRef.current.style.transform = `translateY(${Math.min(rate, 150)}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full flex flex-col items-center overflow-hidden pb-24">
      
      <div ref={headerRef} className="opacity-0 max-w-[800px] text-center px-6 pt-16 md:pt-24 pb-16">
        <h1 className="text-[40px] md:text-[56px] font-bold text-brand-darker tracking-tight mb-6">
          Built on trust. <br/> Scaled by excellence.
        </h1>
        <p className="text-lg text-brand-muted font-medium leading-relaxed max-w-2xl mx-auto">
          We combine decades of local roots with expansive global reach, providing a unified network to handle the complexities of agriculture commodity trading.
        </p>
      </div>

      <section className="w-full mb-24 overflow-hidden relative">
        <div className="flex w-[200%] animate-marquee-mobile md:animate-marquee hover:[animation-play-state:paused]">
          {[...images, ...images, ...images].map((src, idx) => (
            <div key={idx} className="flex-shrink-0 w-[50vw] md:w-[25vw] mx-3">
              <img 
                src={src} 
                alt="Agriculture Infrastructure" 
                className="h-[240px] md:h-[400px] w-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 max-w-3xl mx-auto flex flex-col items-center text-center">
        <div ref={iconRef} className="opacity-0 mb-8">
          <Quote className="w-10 h-10 text-brand-pink" />
        </div>
        
        <h3 ref={quoteRef} className="opacity-0 text-[32px] md:text-[44px] leading-[1.1] text-brand-darker tracking-tight font-bold mb-12">
          "We built this brokerage to bring absolute transparency to an opaque global supply chain."
        </h3>
        
        <div className="w-full max-w-md relative overflow-hidden rounded-[32px] shadow-2xl h-[400px]">
          <img 
            ref={parallaxRef}
            src="https://images.unsplash.com/photo-1595805210986-1d137b01b63d?q=80&w=800&auto=format&fit=crop" 
            alt="Agricultural landscape" 
            className="absolute inset-0 w-full h-[130%] object-cover -top-[15%]"
          />
        </div>
      </section>
    </div>
  );
};
