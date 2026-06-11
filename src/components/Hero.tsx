// src/components/Hero.tsx
import React from 'react';
import { Button } from './Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export const Hero: React.FC = () => {
  const logoRef = useInViewAnimation('0.1s');
  const taglineRef = useInViewAnimation('0.2s');
  const headingRef = useInViewAnimation('0.3s');
  const descRef = useInViewAnimation('0.4s');
  const btnsRef = useInViewAnimation('0.5s');

  return (
    <section className="mx-auto max-w-[440px] px-6 pt-12 md:pt-16 text-center flex flex-col items-center">
      <div ref={logoRef} className="mb-4 opacity-0 flex flex-col items-center justify-center">
        <img src="/logo.png" alt="Mahalaxmi Agri Commodities" className="h-16 md:h-20 object-contain mb-2" onError={(e) => { e.currentTarget.style.display='none'; }} />
        <h1 className="text-[28px] md:text-[32px] font-bold text-brand-dark tracking-tighter uppercase">
          Mahalaxmi
        </h1>
      </div>
      
      <div ref={taglineRef} className="opacity-0 font-mono text-xs md:text-sm text-brand-muted mb-4 uppercase tracking-[0.2em] font-semibold">
        Global Reach. Local Roots.
      </div>
      
      <h2 ref={headingRef} className="opacity-0 text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05] text-brand-darker font-bold tracking-tight mb-6">
        Securing the future of <br /> global commodities.
      </h2>
      
      <div ref={descRef} className="opacity-0 flex flex-col gap-6 text-sm md:text-base text-brand-dark leading-relaxed font-medium">
        <p>
          We are a premier agriculture commodity brokerage committed to bringing absolute transparency and efficiency to the global supply chain.
        </p>
        <p>
          Our operation is highly specialized. We provide direct procurement, market intelligence, and uncompromised risk management for bulk buyers and sellers worldwide.
        </p>
      </div>
      
      <div ref={btnsRef} className="opacity-0 flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mt-8">
        <Button variant="primary">Live Market Rates</Button>
        <Button variant="secondary">Speak to a Broker</Button>
      </div>
    </section>
  );
};
