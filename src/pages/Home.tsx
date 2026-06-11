// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export const Home: React.FC = () => {
  const taglineRef = useInViewAnimation('0.1s');
  const headingRef = useInViewAnimation('0.2s');
  const descRef = useInViewAnimation('0.3s');
  const btnsRef = useInViewAnimation('0.4s');
  const card1Ref = useInViewAnimation('0.1s');
  const card2Ref = useInViewAnimation('0.2s');

  return (
    <div className="flex flex-col w-full">
      <section className="mx-auto max-w-[600px] px-6 pt-16 md:pt-32 pb-24 text-center flex flex-col items-center">
        <div ref={taglineRef} className="opacity-0 font-mono text-xs md:text-sm text-brand-muted mb-6 uppercase tracking-[0.2em] font-semibold">
          Global Reach. Local Roots.
        </div>
        
        <h1 ref={headingRef} className="opacity-0 text-[40px] md:text-[56px] lg:text-[64px] leading-[1.05] text-brand-darker font-bold tracking-tight mb-8">
          Securing the future of <br /> global commodities.
        </h1>
        
        <div ref={descRef} className="opacity-0 flex flex-col gap-6 text-base md:text-lg text-brand-dark leading-relaxed font-medium max-w-[480px]">
          <p>
            Premier agriculture commodity brokerage bringing absolute transparency and efficiency to the global supply chain.
          </p>
        </div>
        
        <div ref={btnsRef} className="opacity-0 flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <Link to="/products">
            <Button variant="primary">View Commodities</Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary">Speak to a Broker</Button>
          </Link>
        </div>
      </section>

      <section className="w-full py-20 px-6 bg-gray-50/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
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
              <Link to="/products">
                <Button variant="primary">Explore</Button>
              </Link>
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
              <Link to="/contact">
                <Button variant="tertiary">Get Insights</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
