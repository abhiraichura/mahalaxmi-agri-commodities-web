// src/pages/Products.tsx
import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const commodities = [
  {
    title: "01. Premium Wheat",
    desc: "High-protein grades sourced directly from elite international growers ensuring maximum yield efficiency.",
    img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "02. Raw Sugar",
    desc: "Bulk export capabilities with rigorous quality assurance protocols spanning processing to port.",
    img: "https://images.unsplash.com/photo-1581423851559-0096e2365313?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "03. Oilseeds & Pulses",
    desc: "Comprehensive supply chain solutions tailored for specialized high-demand commodities.",
    img: "https://images.unsplash.com/photo-1621460246538-89c02111d4eb?q=80&w=1200&auto=format&fit=crop"
  }
];

const ShowcaseItem = ({ item }: { item: typeof commodities[0] }) => {
  const ref = useInViewAnimation('0.1s');
  return (
    <div ref={ref} className="opacity-0 flex flex-col gap-8 w-full">
      <div className="ml-0 md:ml-12 lg:ml-28">
        <h3 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3 tracking-tighter">{item.title}</h3>
        <p className="text-base md:text-lg text-brand-muted font-medium max-w-xl leading-relaxed">{item.desc}</p>
      </div>
      <img 
        src={item.img} 
        alt={item.title} 
        className="w-full h-[400px] md:h-[600px] object-cover rounded-[32px] shadow-xl"
      />
    </div>
  );
};

export const Products: React.FC = () => {
  const headerRef = useInViewAnimation('0.1s');

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24 flex flex-col gap-16 md:gap-24">
      <div ref={headerRef} className="opacity-0 max-w-3xl">
        <h1 className="text-[40px] md:text-[56px] font-bold text-brand-darker tracking-tight mb-6">
          Our Commodities
        </h1>
        <p className="text-lg md:text-xl text-brand-muted font-medium leading-relaxed">
          We source and supply the highest grade agricultural products, ensuring robust quality control and seamless global delivery.
        </p>
      </div>

      <div className="flex flex-col gap-24">
        {commodities.map((item, i) => (
          <ShowcaseItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
};
