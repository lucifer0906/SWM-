'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface GlobeProps {
  className?: string;
}

export const Globe = ({ className = '' }: GlobeProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let rotation = 0;

    const draw = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Set canvas dimensions
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) * 0.8;

      // Draw globe
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = '#EA580C';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw latitude lines
      for (let i = 1; i < 8; i++) {
        const y = (i / 8) * radius * 2;
        ctx.beginPath();
        ctx.ellipse(
          centerX,
          centerY,
          radius * Math.cos(Math.asin((y - radius) / radius)),
          radius * 0.1,
          0,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = 'rgba(234, 88, 12, 0.3)';
        ctx.stroke();
      }

      // Draw longitude lines
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2 + rotation;
        ctx.beginPath();
        ctx.moveTo(
          centerX + radius * Math.cos(angle),
          centerY + radius * Math.sin(angle)
        );
        ctx.lineTo(
          centerX - radius * Math.cos(angle),
          centerY - radius * Math.sin(angle)
        );
        ctx.strokeStyle = 'rgba(234, 88, 12, 0.3)';
        ctx.stroke();
      }

      // Rotate
      rotation += 0.002;

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
}; 