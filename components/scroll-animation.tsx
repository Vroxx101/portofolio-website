'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  y?: [number, number]; // Animation range for y-axis transform
  opacity?: [number, number]; // Animation range for opacity
  scale?: [number, number]; // Animation range for scale
  rotate?: [number, number]; // Animation range for rotate
  delay?: number; // Delay in seconds
  duration?: number; // Duration in seconds
  triggerOffset?: number; // Offset to trigger animation
}

const ScrollAnimation = ({
  children,
  className = '',
  y = [50, 0],
  opacity = [0, 1],
  scale = [0.9, 1],
  rotate = [0, 0],
  delay = 0,
  duration = 0.6,
  triggerOffset = 100
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], y);
  const elementOpacity = useTransform(scrollYProgress, [0, 1], opacity);
  const elementScale = useTransform(scrollYProgress, [0, 1], scale);
  const elementRotate = useTransform(scrollYProgress, [0, 1], rotate);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        opacity: elementOpacity,
        y: translateY,
        scale: elementScale,
        rotate: elementRotate,
      }}
      transition={{
        delay,
        duration,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;