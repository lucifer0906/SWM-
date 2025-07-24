'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SparklesTextProps {
  text: string;
  className?: string;
}

export const SparklesText = ({ text, className = '' }: SparklesTextProps) => {
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles((current) => {
        const newSparkle = {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
        };
        return [...current.slice(-2), newSparkle];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative inline-block ${className}`}>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute w-1 h-1 bg-yellow-300 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{ duration: 1 }}
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
        />
      ))}
      <span className="relative z-10">{text}</span>
    </div>
  );
}; 