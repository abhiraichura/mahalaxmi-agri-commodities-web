// src/components/Marquee.tsx
import React from 'react';

const images = [
  "https://images.unsplash.com/photo-1592982537447-6f296cb1638e?q=80&w=600&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=600&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1586771107445-d3af9e174465?q=80&w=600&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=600&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1530836369250-ef71a3a5e48c?q=80&w=600&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=600&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1592982537447-6f296cb1638e?q=80&w=600&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=600&auto=format&fit=crop", 
];

export const Marquee: React.FC = () => {
  return (
    <section className="w-full mt-16 md:mt-24 mb-16 overflow-hidden relative">
      <div className="flex w-[200%] animate-marquee-mobile md:animate-marquee hover:[animation-play-state:paused]">
        {[...images, ...images].map((src, idx) => (
          <div key={idx} className="flex-shrink-0 w-[40vw] md:w-[25vw] mx-3">
            <img 
              src={src} 
              alt="Agriculture Infrastructure" 
              className="h-[280px] md:h-[500px] w-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
