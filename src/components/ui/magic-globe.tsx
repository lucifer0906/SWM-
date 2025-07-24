'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface GlobeProps {
  className?: string;
}

export const MagicGlobe = ({ className = '' }: GlobeProps) => {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!globeRef.current) return;

    const globe = globeRef.current;
    let animationFrameId: number | null = null;
    let isAnimating = true;

    const updateDimensions = () => {
      if (!globe) return;

      const width = globe.offsetWidth;
      const height = globe.offsetHeight;
      const radius = Math.min(width, height) * 0.4;
      const center = { x: width / 2, y: height / 2 };
      
      // Remove existing points
      while (globe.firstChild) {
        globe.removeChild(globe.firstChild);
      }

      // Create points on the globe surface
      const points = [];
      for (let i = 0; i < 200; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        points.push({ x, y, z });
      }

      // Create point elements
      points.forEach((point) => {
        const dot = document.createElement('div');
        dot.className = 'absolute w-1 h-1 rounded-full bg-accent/50';
        globe.appendChild(dot);
      });

      let rotation = 0;

      const animate = () => {
        if (!isAnimating || !globe) return;

        rotation += 0.002;
        const children = Array.from(globe.children) as HTMLDivElement[];
        
        points.forEach((point, i) => {
          const dot = children[i];
          if (!dot) return;

          const rotatedX = point.x * Math.cos(rotation) - point.z * Math.sin(rotation);
          const rotatedZ = point.x * Math.sin(rotation) + point.z * Math.cos(rotation);
          const scale = (rotatedZ + radius) / (2 * radius);
          
          dot.style.transform = `translate(${center.x + rotatedX}px, ${center.y + point.y}px) scale(${scale})`;
          dot.style.opacity = scale.toString();
        });

        animationFrameId = requestAnimationFrame(animate);
      };

      animate();
    };

    // Initial setup
    updateDimensions();

    // Handle window resize
    const resizeObserver = new ResizeObserver(() => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      updateDimensions();
    });
    resizeObserver.observe(globe);

    return () => {
      isAnimating = false;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      resizeObserver.disconnect();
      while (globe.firstChild) {
        globe.removeChild(globe.firstChild);
      }
    };
  }, []);

  return (
    <motion.div
      ref={globeRef}
      className={`relative min-h-[400px] ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-radial from-accent/20 to-transparent opacity-50" />
    </motion.div>
  );
}; 