'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface AnimatedButtonProps {
  children: ReactNode;
  href: string;
  variant?: 'default' | 'outline';
  size?: 'default' | 'lg';
  className?: string;
}

export const AnimatedButton = ({
  children,
  href,
  variant = 'default',
  size = 'default',
  className = '',
}: AnimatedButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent';
  
  const variants = {
    default: 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-md',
    outline: 'border-2 border-accent text-accent hover:bg-accent/10 bg-background',
  };

  const sizes = {
    default: 'px-6 py-2 text-sm',
    lg: 'px-8 py-3 text-base',
  };

  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={clsx(baseStyles, variants[variant], sizes[size], className)}
      >
        {children}
      </motion.div>
    </Link>
  );
}; 