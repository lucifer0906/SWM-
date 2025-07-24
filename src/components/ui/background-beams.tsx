'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const BackgroundBeams = () => {
  const beamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!beamRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!beamRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = beamRef.current.getBoundingClientRect();
      if (!rect) return;
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;

      beamRef.current.style.setProperty('--mouse-x', `${x}`);
      beamRef.current.style.setProperty('--mouse-y', `${y}`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        ref={beamRef}
        className="absolute inset-0 bg-gradient-to-r from-accent to-accent-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 0.5 }}
        style={{
          maskImage: `radial-gradient(
            circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%),
            rgba(0, 0, 0, 1) 10%,
            rgba(0, 0, 0, 0.5) 25%,
            transparent 50%
          )`,
          WebkitMaskImage: `radial-gradient(
            circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%),
            rgba(0, 0, 0, 1) 10%,
            rgba(0, 0, 0, 0.5) 25%,
            transparent 50%
          )`,
        }}
      />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(0deg,transparent,rgba(0,0,0,0.6))]" />
    </div>
  );
}; 