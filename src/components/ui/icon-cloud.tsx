'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface IconCloudProps {
  icons: string[];
  className?: string;
}

export const IconCloud = ({ icons, className = '' }: IconCloudProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const items = container.children;
    const radius = Math.min(container.offsetWidth, container.offsetHeight) * 0.3;

    Array.from(items).forEach((item, index) => {
      const angle = (index / items.length) * Math.PI * 2;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      (item as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
    });
  }, [icons]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {icons.map((icon, index) => (
        <motion.div
          key={icon}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-card rounded-full shadow-lg border border-border"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
}; 