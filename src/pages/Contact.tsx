// src/pages/Contact.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../components/Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const formRef = useInViewAnimation('0.2s');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setCursorPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', () => setIsHovering(true));
      container.addEventListener('mouseleave', () => setIsHovering(false));
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', () => setIsHovering(true));
        container.removeEventListener('mouseleave', () => setIsHovering(false));
      }
    };
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-20">
      <div 
        ref={containerRef}
        className="relative w-full bg-brand-light py-32 md:py-48 rounded-[40px] shadow-premium-dark flex flex-col items-center justify-center text-center overflow-hidden mb-20"
      >
        {isHovering && (
          <div 
            className="absolute pointer-events-none w-48 h-48 bg-brand-pink/15 rounded-full blur-3xl transition-transform duration-100 ease-out z-0 hidden md:block"
            style={{
              transform: `translate(${cursorPos.x - 96}px, ${cursorPos.y - 96}px)`
            }}
          />
        )}

        <h1 className="relative z-10 text-[48px] md:text-[72px] font-bold text-brand-darker tracking-tighter mb-6">
          Trade with confidence.
        </h1>
        <p className="relative z-10 text-brand-muted text-lg font-medium max-w-xl mx-auto mb-10 px-4">
          Get in touch with our expert trading desk for live market rates, procurement inquiries, or advisory services.
        </p>
        <div className="relative z-10">
          <a href="mailto:info@mahalaxmiagri.com">
            <Button variant="primary" className="!px-10 !py-4 text-lg">
              Email Trading Desk
            </Button>
          </a>
        </div>
      </div>

      <div ref={formRef} className="opacity-0 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 max-w-4xl mx-auto">
        <div>
          <h3 className="text-2xl font-bold text-brand-dark mb-4 tracking-tight">Global Headquarters</h3>
          <p className="text-brand-muted leading-relaxed font-medium mb-10">
            Mahalaxmi Agri Commodities Limited<br />
            Rajkot, Gujarat<br />
            India
          </p>
          <h3 className="text-2xl font-bold text-brand-dark mb-4 tracking-tight">Direct Lines</h3>
          <p className="text-brand-muted leading-relaxed font-medium">
            Trading Desk: +91 (XXX) XXX-XXXX<br />
            Support: support@mahalaxmiagri.com
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-brand-dark mb-6 tracking-tight">Send an Inquiry</h3>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Full Name" className="w-full px-5 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-brand-pink font-medium text-brand-dark placeholder:text-gray-400" />
            <input type="email" placeholder="Email Address" className="w-full px-5 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-brand-pink font-medium text-brand-dark placeholder:text-gray-400" />
            <textarea placeholder="How can we help?" rows={4} className="w-full px-5 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-brand-pink font-medium text-brand-dark placeholder:text-gray-400 resize-none"></textarea>
            <Button variant="primary" className="w-full mt-2">Submit Inquiry</Button>
          </form>
        </div>
      </div>
    </div>
  );
};
