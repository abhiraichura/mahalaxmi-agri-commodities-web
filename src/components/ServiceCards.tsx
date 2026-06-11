// src/components/ServiceCards.tsx
import React from 'react';
import { Button } from './Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export const ServiceCards: React.FC = () => {
  const card1Ref = useInViewAnimation('0.1s');
  const card2Ref = useInViewAnimation('0.2s');

  return (
    <section className="w-full py-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-5xl mx-auto md:justify-end">
        
        <div ref={card1Ref} className="opacity-0 bg-brand-dark rounded-[40px] px-10 md:pr-24 pt-12 pb-10 shadow-premium-inset flex flex-col justify-between h-[420px]">
          <div>
            <h3 className="text-[32px] font-bold text-white mb-4 tracking-tight">Commodity Sourcing</h3>
            <p className="text-brand-light/80 font-medium text-lg leading-relaxed">
              Direct procurement of premium grade agriculture products.
            </p>
          </div>
          <div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-brand-pink tracking-tighter">Global</span>
              <p className="text-brand-light/60 text-sm mt-1 uppercase tracking-[0.2em] font-semibold">Network</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="primary">View Commodities</Button>
            </div>
          </div>
        </div>

        <div ref={card2Ref} className="opacity-0 bg-white rounded-[40px] px-10 md:pr-24 pt-12 pb-10 shadow-premium-dark flex flex-col justify-between h-[420px]">
          <div>
            <h3 className="text-[32px] font-bold text-brand-darker mb-4 tracking-tight">Market Advisory</h3>
            <p className="text-brand-muted font-medium text-lg leading-relaxed">
              Real-time analytics and rigorous risk management for global buyers.
            </p>
          </div>
          <div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-brand-dark tracking-tighter">24/7</span>
              <p className="text-brand-muted text-sm mt-1 uppercase tracking-[0.2em] font-semibold">Live Intelligence</p>
            </div>
            <Button variant="tertiary">Get Insights</Button>
          </div>
        </div>

      </div>
    </section>
  );
};
