'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
}

export const TextReveal = ({ text, className = '' }: TextRevealProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className={className}
    >
      {text}
    </motion.div>
  );
}; 