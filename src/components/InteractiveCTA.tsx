// src/components/InteractiveCTA.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Button';

export const InteractiveCTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

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
    <section className="w-full py-16 px-6 overflow-hidden">
      <div 
        ref={containerRef}
        className="relative max-w-7xl mx-auto bg-brand-light py-48 md:py-64 rounded-[40px] shadow-premium-dark flex flex-col items-center justify-center text-center overflow-hidden"
      >
        {isHovering && (
          <div 
            className="absolute pointer-events-none w-48 h-48 bg-brand-pink/15 rounded-full blur-3xl transition-transform duration-100 ease-out z-0 hidden md:block"
            style={{
              transform: `translate(${cursorPos.x - 96}px, ${cursorPos.y - 96}px)`
            }}
          />
        )}

        <h2 className="relative z-10 text-[56px] md:text-[72px] lg:text-[88px] font-bold text-brand-darker tracking-tighter mb-12">
          Trade with confidence.
        </h2>
        
        <div className="relative z-10">
          <Button variant="primary" className="!px-10 !py-4 text-lg">
            Contact Trading Desk
          </Button>
        </div>
      </div>
    </section>
  );
};
