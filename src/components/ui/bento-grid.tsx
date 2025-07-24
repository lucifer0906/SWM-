'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

interface BentoGridItemProps {
  title: string;
  description: string;
  header: ReactNode;
  icon?: string;
  className?: string;
}

export const BentoGrid = ({ children, className = '' }: BentoGridProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  title,
  description,
  header,
  icon,
  className = '',
}: BentoGridItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx(
        'group relative overflow-hidden rounded-xl border bg-card p-4 transition-shadow',
        'shadow-lg dark:shadow-none',
        'hover:shadow-2xl',
        className
      )}
    >
      {header}
      <div className="mt-4">
        <div className="flex items-center gap-2">
          {icon && <span className="text-xl">{icon}</span>}
          <h3 className="font-semibold text-foreground">{title}</h3>
        </div>
        <p className="mt-2 text-muted-foreground line-clamp-3">{description}</p>
      </div>
    </motion.div>
  );
}; 