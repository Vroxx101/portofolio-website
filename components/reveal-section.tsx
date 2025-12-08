'use client';

import { useRef, useEffect, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  y?: number;
  x?: number;
  opacity?: number;
  blur?: number;
  duration?: number;
  staggerChildren?: boolean;
  childrenSelector?: string;
  id?: string; // Add id prop for identifying sections
  animationType?: 'fade' | 'slide' | 'scale' | 'custom'; // Different animation types
}

const RevealSection = ({
  children,
  className = '',
  y = 40,
  x = 0,
  opacity = 0,
  blur = 10,
  duration = 1,
  staggerChildren = false,
  childrenSelector = '',
  id,
  animationType = 'slide',
}: RevealSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only initialize GSAP when element exists and in browser environment
    if (typeof window !== 'undefined' && sectionRef.current) {
      const element = sectionRef.current;

      // Create the GSAP timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top 75%', // Animation starts when 75% of the section is visible
          toggleActions: 'play none none reverse',
          once: false, // Allow animation to reverse when scrolling back
          // Add these for better performance
          fastScrollEnd: true,
        },
      });

      // Prepare animation properties based on animation type
      let fromProps: gsap.TweenVars = {
        opacity: opacity,
        y: y,
        filter: `blur(${blur}px)`,
      };

      let toProps: gsap.TweenVars = {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: duration,
        ease: 'power3.out',
      };

      // Customize animation based on type
      switch(animationType) {
        case 'fade':
          fromProps = { opacity: 0, filter: `blur(${blur}px)` };
          toProps = { opacity: 1, filter: 'blur(0px)', duration: duration, ease: 'power3.out' };
          break;
        case 'scale':
          fromProps = { opacity: opacity, scale: 0.8, filter: `blur(${blur}px)` };
          toProps = { opacity: 1, scale: 1, filter: 'blur(0px)', duration: duration, ease: 'power3.out' };
          break;
        case 'slide':
          fromProps = { opacity: opacity, y: y, x: x, filter: `blur(${blur}px)` };
          toProps = { opacity: 1, y: 0, x: 0, filter: 'blur(0px)', duration: duration, ease: 'power3.out' };
          break;
        case 'custom':
          // Use default properties but allow for custom implementation
          fromProps = { opacity: opacity, y: y, filter: `blur(${blur}px)` };
          toProps = { opacity: 1, y: 0, filter: 'blur(0px)', duration: duration, ease: 'power3.out' };
          break;
      }

      // Add animations to the timeline
      if (staggerChildren && childrenSelector) {
        tl.fromTo(
          element.querySelectorAll(childrenSelector),
          fromProps,
          {
            ...toProps,
            stagger: 0.15, // Increased stagger for more dynamic effect
          }
        );
      } else {
        tl.fromTo(
          element,
          fromProps,
          toProps
        );
      }

      // Cleanup function
      return () => {
        if (tl) {
          tl.kill();
        }
        // Use a more specific cleanup approach
        ScrollTrigger?.getAll().forEach(trigger => {
          if (trigger.trigger === element) {
            trigger.kill();
          }
        });
      };
    }
  }, [y, x, opacity, blur, duration, staggerChildren, childrenSelector, animationType]);

  return (
    <div ref={sectionRef} className={className} id={id}>
      {children}
    </div>
  );
};

export default RevealSection;